import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import Tables from "../Reusables/Table";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Transactions } from "../Store/Apis/Transactions";
import toast from "react-hot-toast";
import Pagination from "../Reusables/Pagination";
import empty from "../../assets/empty.png";
import { Loader } from "./Loader";
import { DiscTransactions } from "../Store/Apis/DiscTransactions";
import { DownloadDiscoTrans } from "../Store/Apis/DownloadDiscoTrans";

const DiscoTransactions = ({ title }) => {
  const [whitecrust, setWhitecrust] = useState(true);
  const [other, setOther] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setloading] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const White = () => {
    setWhitecrust(true);
    setOther(false);
  };

  const Othering = () => {
    setWhitecrust(false);
    setOther(true);
  };

  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const datePickerRef = useRef(null);
  const datePickerRefs = useRef(null);

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  const dateChange = (date) => {
    console.log(date);
    setStartDate(date);
  };

  const PickDater = () => {
    datePickerRefs.current.setOpen(true);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(DiscTransactions({ startDate, searcher, currentPage }));
      dispatch(DownloadDiscoTrans({ startDate, searcher, endDate }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }

    //eslint-disable-next-line
  }, [startDate, searcher, currentPage, endDate]);

  const { disctransactions, authenticatingdisctransactions } = useSelector(
    (state) => state?.disctransactions
  );
  console.log(disctransactions);

  const { downloaddiscotrans, authenticatingdownloaddiscotrans } = useSelector(
    (state) => state?.downloaddiscotrans
  );
  console.log(downloaddiscotrans);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, [3000]);
  }, [disctransactions]);

  const next = disctransactions?.data?.meta?.next;
  const previous = disctransactions?.data?.meta?.prev;
  const totalPosts = disctransactions?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  // const Downloading = () => {
  //   const data = disctransactions?.data?.data || [];
  //   const headers = data.length > 0 ? Object.keys(data[0]) : [];
  //   const objValues = data.map((item) => Object.values(item).join(","));
  //   const csvContent = [headers.join(","), ...objValues].join("\n");
  //   const blob = new Blob([csvContent], { type: "text/csv" });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "Institution.csv";
  //   document.body.appendChild(a); // Required for Firefox
  //   a.click();
  //   document.body.removeChild(a); // Clean up
  //   URL.revokeObjectURL(url);
  // };

  const Downloading = () => {
    // Get the data to be exported
    console.log(downloaddiscotrans);
    const data = downloaddiscotrans || [];

    if (data.length === 0) return; // Exit if no data

    // Get the keys (fields) from the first item in the data array
    const firstItem = data[0];
    const allFields = Object.keys(firstItem); // All available fields in the first item

    // Specify the fields you want to include in the CSV, based on the table columns
    const selectedFields = [
      "Transaction ID",
      "Updated Date", // Date
      "Reference", // Reference
      "User Type", // User Type
      "Customer Name", // Customer Name
      "Phone Number", // Customer Number (phone)
      "Account Number", // Account Number
      "Meter Number", // Meter Number
      "Transaction Amount", // Transaction Amount
      "Disco Name", // Disco Name
      "Disco Commission Type", // Disco Commission Type
      "Disco System Commission Fee", // Disco System Commission Fee
      "Disco Commission Fee Value",
      "Disco System Commission Cap Fee",
      "Disco Amount",
      "SMS Delivery Status" // SMS Delivery Status
    ];

    // Filter selectedFields to ensure they exist in the first item (data)
    const validFields = selectedFields.filter((field) =>
      allFields.includes(field)
    );

    // Create the header row using validFields
    const headers = validFields;

    // Map over the data and create rows based on valid fields
    const rows = data.map((item) =>
      headers.map((header) => {
        // Handle specific fields with custom logic
        if (header === "listtoken") {
          return item?.dispense?.listtoken?.[0] || "N/A"; // Assuming listtoken is an array
        }
        if (header === "phone") {
          return item?.phone || "N/A"; // Handle missing phone
        }
        if (header === "transactionAmount") {
          return `₦${item?.transactionAmount || "0"}`; // Format as currency
        }
        if (header === "managerCommissionType") {
          return item?.managerCommissionType || "not applicable";
        }
        if (header === "districtManagerFee") {
          // Check if commission type is percentage and adjust accordingly
          return item?.managerCommissionType === "PERCENTAGE" &&
            item?.managerCommissionPercentageTypeFeeValue
            ? `${item?.managerCommissionPercentageTypeFeeValue || 0}%`
            : `₦${item?.districtManagerFee || 0}`;
        }
        if (header === "discoSystemCommissionType") {
          return item?.discoSystemCommissionType || "not applicable";
        }
        if (header === "discoSystemCommissionFee") {
          return item?.discoSystemCommissionFee
            ? `₦${item?.discoSystemCommissionFee}`
            : "not applicable";
        }
        return item?.[header] || "N/A"; // Fallback to "N/A" if the value is missing
      })
    );

    // Create the CSV content by joining headers and rows
    const csvContent = [
      headers.join(","), // Join headers with commas
      ...rows.map((row) => row.join(",")) // Join each row's values with commas
    ].join("\n"); // Join all rows with new lines

    // Create the Blob and download link
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    // Set the filename and trigger the download
    a.href = url;
    a.download = "Earning_Transactions.csv"; // Set the filename for download

    // Append the link to the body and trigger the click event
    document.body.appendChild(a);
    a.click();

    // Clean up the link element and object URL
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={title} />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Disco Transactions
            </span>
            <div className="relative flex flex-row w-[50%]">
              <div className="absolute top-3 left-4">
                <Search />
              </div>
              <input
                className="border-input-color border-[1px] rounded-tl-custom rounded-bl-custom w-[85%] outline-none pl-[60px] text-[13px]"
                placeholder="Search by name, customerID, account number, transaction reference"
                value={searcher}
                onChange={(e) => setSearcher(e.target.value)}
              />
              <button className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]">
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-col border-input-color border-[1px] rounded-custom py-4 gap-6">
            <div className="flex flex-row justify-end gap-4 px-3">
              {/* <div className="flex flex-col">
                <div className="flex flex-row gap-4 text-[14px] items-center text-route-noncolor font-medium">
                  <span
                    onClick={() => White()}
                    className={`${
                      whitecrust
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    To Paymeter Account
                  </span>
                  <span
                    onClick={() => Othering()}
                    className={`${
                      other
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    To Other banks
                  </span>
                </div>
                <div className="gap-4">
                  {whitecrust && (
                    <div className="w-[150px] h-[2px] bg-route-color" />
                  )}
                  {other && (
                    <div className="w-[100px] h-[2px] bg-route-color ml-[62%]" />
                  )}
                </div>
              </div> */}
              <div className="flex flex-row justify-end gap-4 px-3">
                <div className="position:relative w-[120px] h-[35px] rounded-custom px-[5px] flex flex-row border items-center">
                  <DatePicker
                    className="text-[8px] outline-none"
                    selected={startDate}
                    onChange={(date) => dateChange(date)}
                    ref={datePickerRefs}
                    showTimeSelect={false}
                    dateFormat="MMM d yyyy" // Use format tokens to represent "Oct 13 2023"
                    placeholderText="13 Oct 2023"
                    popperPlacement="bottom-start"
                  />
                  <Calendar
                    className="text-[10px]"
                    onClick={() => PickDater()}
                  />
                </div>
                <div className="position:relative w-[120px] h-[35px] rounded-custom px-[5px] flex flex-row border items-center">
                  <DatePicker
                    className="text-[8px] outline-none"
                    selected={endDate}
                    onChange={(date) => dateChanger(date)}
                    ref={datePickerRef}
                    showTimeSelect={false}
                    dateFormat="MMM d yyyy" // Use format tokens to represent "Oct 13 2023"
                    placeholderText="13 Oct 2023"
                    popperPlacement="bottom-start"
                  />
                  <Calendar
                    className="text-[10px]"
                    onClick={() => PickDate()}
                  />
                </div>
                {/* <input
                  type="date"
                  className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                />
                <input
                  type="date"
                  className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                /> */}
                <button
                  onClick={() => Downloading()}
                  className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[100%] rounded-custom text-white font-semibold text-[11px]"
                >
                  Download Report <Download />
                </button>
              </div>
            </div>
            {loading ? (
              <>
                {disctransactions?.data?.data?.length >= 1 && (
                  <Tables
                    discotransactions
                    data={disctransactions?.data?.data}
                  />
                )}{" "}
                {disctransactions?.data?.data?.length === 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img src={empty} alt="empty" />
                  </div>
                )}
                {disctransactions?.data?.data?.length >= 1 && (
                  <Pagination
                    set={activater}
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts}
                    paginate={paginate}
                    previous={previous}
                    next={next}
                  />
                )}
              </>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoTransactions;
