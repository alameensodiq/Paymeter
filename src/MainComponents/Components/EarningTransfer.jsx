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
import AppUserModal from "../../Modal/AppUserModal";
import { CustomerTransactions } from "../Store/Apis/CustomerTransactions";
import { EarningDash } from "../Store/Apis/EarningDash";
import CustomTable from "../Reusables/CustomeTable";
import { ReactComponent as Suspend } from "../../assets/Suspend.svg";
import Moment from "react-moment";
import { DownloadEarningTrans } from "../Store/Apis/DownloadEarningTrans";

const EarningTransfer = ({ title }) => {
  const [whitecrust, setWhitecrust] = useState(true);
  const [other, setOther] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setloading] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [downloading, setDownload] = useState([]);
  const [open, setOpen] = useState(false);
  const [indexing, setIndexing] = useState(null);
  const [reload, setReload] = useState(false);
  const [step, setStep] = useState(0);
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

  const { downloadearningtrans, authenticatingdownloadearningtrans } =
    useSelector((state) => state?.downloadearningtrans);
  console.log(downloadearningtrans);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(EarningDash({ startDate, searcher, currentPage, endDate }));
      dispatch(DownloadEarningTrans({ startDate, searcher, endDate }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }

    //eslint-disable-next-line
  }, [startDate, searcher, currentPage, endDate]);

  const { earningdash, authenticatingearningdash } = useSelector(
    (state) => state?.earningdash
  );
  console.log(earningdash);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, [3000]);
  }, [earningdash]);

  const next = earningdash?.data?.meta?.next;
  const previous = earningdash?.data?.meta?.prev;
  const totalPosts = earningdash?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  // const Downloading = () => {
  //   const data = earningdash?.data?.data || [];
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
    console.log(downloadearningtrans);
    const data = downloadearningtrans || [];
    if (data.length === 0) {
      toast.error("You can't download an empty file"); // Display the error toast
      return; // Exit the function early if the data is empty
    }

    if (data.length === 0) return; // Exit if no data

    // Get the keys (fields) from the first item in the data array
    const firstItem = data[0];
    const allFields = Object.keys(firstItem); // All available fields in the first item

    // Specify the fields you want to include in the CSV, based on the table columns
    const selectedFields = [
      "Transaction ID",
      "Created At", // Date
      "Updated Date",
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
      "Earning Fee Value",
      "Earning Partner Cap Fee",
      "Earning Partner Commission Type",
      "Earning Partner Fee",
      "Earning Partner Name",
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

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      width: "20%",
      render: (_, record, index) => index + 1 // Automatically increments the serial number
    },
    {
      title: "DATE",
      dataIndex: "dispense.updatedDate",
      width: "40%",
      render: (date) => (
        <Moment format="ddd MMM DD YYYY HH:mm:ss">{date}</Moment>
      )
    },
    {
      title: "REF.",
      dataIndex: "reference",
      width: "20%"
    },
    {
      title: "USER TYPE",
      dataIndex: "userType",
      width: "20%"
    },
    {
      title: "CUS. NAME",
      dataIndex: "customerName",
      width: "20%"
    },
    {
      title: "CUS. NUMBER",
      dataIndex: "phone",
      width: "20%",
      render: (phone) => phone || "N/A" // Default to "N/A" if no phone number
    },
    {
      title: "DISCO",
      dataIndex: "discoName",
      width: "20%"
    },
    {
      title: "ACC. N0",
      dataIndex: "accountNumber",
      width: "20%"
    },
    {
      title: "METER",
      dataIndex: "meterNo",
      width: "20%"
    },
    {
      title: "TRANX AMOUNT.",
      dataIndex: "transactionAmount",
      width: "20%",
      render: (amount) => `₦${amount}` // Format currency
    },
    {
      title: "DISTRICT COMM. TYPE",
      dataIndex: "managerCommissionType",
      width: "20%",
      render: (type) => type || "not applicable" // Fallback text if empty
    },
    {
      title: "DSTM COMM.",
      dataIndex: "managerCommissionType",
      width: "20%",
      render: (type, record) =>
        type === "PERCENTAGE"
          ? `${record.managerCommissionPercentageTypeFeeValue}%`
          : `₦${record.districtManagerFee ? record.districtManagerFee : 0}`
    },
    {
      title: "DSTM COMM. VALUE",
      dataIndex: "districtManagerFee",
      width: "20%",
      render: (fee) => `₦${fee || 0}`
    },
    {
      title: "DSTM CAP FEE",
      dataIndex: "dispense.systemTransactions.districtManagerFee",
      width: "20%",
      render: (fee) => (fee ? `₦${fee}` : "not applicable")
    },
    {
      title: "DISCO COMM. TYPE",
      dataIndex: "discoSystemCommissionType",
      width: "20%"
    },
    {
      title: "DISCO COMM.",
      dataIndex: "discoSystemCommissionType",
      width: "20%",
      render: (type, record) =>
        type === "PERCENTAGE"
          ? `${record.discoSystemCommissionFeePercentage}%`
          : `₦${record.discoSystemCommissionFee || 0}`
    },
    {
      title: "DISCO AMOUNT",
      dataIndex: "discoSystemCommissionFee",
      width: "20%",
      render: (fee) => `₦${fee || "not applicable"}`
    },
    {
      title: "DISCO COMM. CAP FEE",
      dataIndex: "discoSystemCommissionCapFee",
      width: "20%",
      render: (fee) => `₦${fee || "not applicable"}`
    },
    {
      title: "TOKEN",
      dataIndex: "dispense.listtoken",
      width: "20%",
      render: (token, record) => record.dispense?.listtoken || "N/A" // Assumes listtoken is an array, shows the first element
    },
    {
      title: "TOKEN DS.",
      dataIndex: "smsdeliveryStatus",
      width: "20%",
      render: (status) => status || "N/A" // Fallback to "N/A" if no status
    },
    {
      title: "ACTIONS",
      dataIndex: "edit",
      width: "20%",
      render: (edit, record, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            cursor: "pointer",
            position: "relative"
          }}
          onClick={() => {
            setOpen(!open);
            setIndexing(index);
          }}
        >
          <svg
            style={{ marginLeft: "30px" }}
            width="4"
            height="16"
            viewBox="0 0 4 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
              fill="#868FA0"
            />
            <path
              d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
              fill="#868FA0"
            />
            <path
              d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
              fill="#868FA0"
            />
          </svg>

          {index === indexing && open ? (
            <div className="absolute right-10 top-5 w-36 h-10 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 bg-white">
              <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 15
                  }}
                >
                  <Suspend width={10} />
                  <span
                    className="text-black text-[8px]"
                    onClick={() => {
                      setOpen(!open);
                      setDownload(record);
                      console.log(record);
                      setStep(53);
                    }}
                  >
                    Download Receipt
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={title} />
          <AppUserModal
            // setaction={setaction}
            // action={actions}
            // userIds={userIds}
            // setuserIding={setuserIding}
            // userIding={userIding}
            // setUserIds={setUserIds}
            setDownload={setDownload}
            downloading={downloading}
            setStep={setStep}
            step={step}
            setReload={setReload}
          />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Transactions
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
                <div className="position:relative z-40 w-[120px] h-[35px] rounded-custom px-[5px] flex flex-row border items-center">
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
                <div className="position:relative z-40 w-[120px] h-[35px] rounded-custom px-[5px] flex flex-row border items-center">
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
                {earningdash?.data?.data?.length >= 1 && (
                  <Tables
                    setDownload={setDownload}
                    setStep={setStep}
                    customertransfer
                    // transfers
                    data={earningdash?.data?.data}
                  />
                  // <CustomTable
                  //   noData={false}
                  //   //loading={isPending || isFetching}
                  //   Apidata={earningdash?.data?.data}
                  //   tableColumns={columns}
                  //   currentPage={currentPage}
                  //   setCurrentPage={setCurrentPage}
                  //   approvals={earningdash?.data?.meta?.totalCount}
                  // />
                )}{" "}
                {!earningdash?.status && (
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
                {earningdash?.data?.data?.length >= 1 && (
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

export default EarningTransfer;
