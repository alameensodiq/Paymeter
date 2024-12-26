import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import Tables from "../Reusables/Table";
import { ReactComponent as Filter } from "./../../assets/Filter.svg";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Banks } from "../Store/Apis/Banks";
import { useDispatch, useSelector } from "react-redux";
import AppUserModal from "../../Modal/AppUserModal";
import Pagination from "../Reusables/Pagination";
import { ApiAgentRole } from "../Store/Apis/ApiAgentRoles";
import empty from "../../assets/empty.png";
import { Loader } from "./Loader";
import { Customers } from "../Store/Apis/Customers";
import { Allmeter } from "../Store/Apis/Allmeter";
import { AllmeterDownload } from "../Store/Apis/AllMeterDownload";

const AllMeters = ({ title }) => {
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [step, setStep] = useState(0);
  const datePickerRef = useRef(null);
  const [reload, setReload] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [searcher, setSearcher] = useState("");
  const [loading, setloading] = useState(false);
  const [role, setRole] = useState("EARNINGPARTNER");
  const [userIds, setUserIds] = useState("");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [userIding, setuserIding] = useState("");
  const [actions, setaction] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(Allmeter({ searcher, currentPage }));
      dispatch(AllmeterDownload({ searcher, currentPage }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }
    if (reload && sessionStorage.getItem("token")) {
      dispatch(Allmeter({ searcher, currentPage }));
      dispatch(AllmeterDownload({ searcher, currentPage }));
      setReload(false);
    }

    //eslint-disable-next-line
  }, [reload, role, searcher, currentPage]);

  const { allmetre, authenticatingallmetre } = useSelector(
    (state) => state?.allmetre
  );
  console.log(allmetre);

  const { allmeterdownload, authenticatingallmeterdownload } = useSelector(
    (state) => state?.allmeterdownload
  );
  console.log(allmeterdownload);

  useEffect(() => {
    if (allmetre?.data?.data && allmeterdownload) {
      setTimeout(() => {
        setloading(true);
      }, [3000]);
    }
  }, [allmetre?.data?.data, allmeterdownload]);

  const next = allmetre?.data?.meta?.next;
  const previous = allmetre?.data?.meta?.prev;
  const totalPosts = allmetre?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };
  const Downloading = () => {
    // Get the data to be exported
    console.log(allmeterdownload);
    const data = allmeterdownload || [];
    if (data.length === 0) {
      toast.error("You can't download an empty file"); // Display the error toast
      return; // Exit the function early if the data is empty
    }

    // Get the keys (fields) from the first item in the data array
    const firstItem = data[0];
    const allFields = Object.keys(firstItem); // All available fields in the first item

    // Specify the fields you want to include in the CSV, based on the table columns
    const selectedFields = [
      "ID",
      "Name", // Previously "Account Name"
      "Meter Number", // Previously "Customer Reference"
      "Type",
      "Address",
      "Bank",
      "virtualAccountNumber",
      "Disco",
      "Created At",
      "Phone Number"
    ];

    // Create the header row, ensuring renamed headers
    const headers = selectedFields;

    // Map over the data and create rows based on selected fields
    const rows = data.map((item) =>
      headers.map((header) => {
        // Handle specific fields with renamed headers
        if (header === "ID") {
          return item?.ID || "N/A";
        }
        if (header === "Name") {
          return item?.["Account Name"] || "N/A"; // Value from "Account Name"
        }
        if (header === "Meter Number") {
          return item?.["Customer Reference"] || "N/A"; // Value from "Customer Reference"
        }
        if (header === "Type") {
          return item?.Type || "not applicable";
        }
        if (header === "Address") {
          return item?.Address || "not applicable";
        }
        if (header === "Bank") {
          return item?.Bank || "not applicable";
        }
        if (header === "virtualAccountNumber") {
          return item?.virtualAccountNumber || "not applicable";
        }
        if (header === "Disco") {
          return item?.Disco || "not applicable";
        }
        if (header === "Created At") {
          return item?.["Created At"] || "not applicable";
        }
        if (header === "Phone Number") {
          return item?.["Phone Number"] || "not applicable";
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
    a.download = "Meters.csv"; // Set the filename for download

    // Append the link to the body and trigger the click event
    document.body.appendChild(a);
    a.click();

    // Clean up the link element and object URL
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // const Downloading = () => {
  //   const data = allmetre?.data?.data || [];
  //   const headers = data.length > 0 ? Object.keys(data[0]) : [];
  //   const objValues = data.map((item) => Object.values(item).join(","));
  //   const csvContent = [headers.join(","), ...objValues].join("\n");
  //   const blob = new Blob([csvContent], { type: "text/csv" });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "Bank.csv";
  //   document.body.appendChild(a); // Required for Firefox
  //   a.click();
  //   document.body.removeChild(a); // Clean up
  //   URL.revokeObjectURL(url);
  // };
  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={title} />
        </div>
        <AppUserModal
          setaction={setaction}
          action={actions}
          setuserIding={setuserIding}
          userIding={userIding}
          userIds={userIds}
          setUserIds={setUserIds}
          setStep={setStep}
          step={step}
          setReload={setReload}
        />
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Meters
            </span>
            {/* <div className="relative flex flex-row w-[50%]">
              <div className="absolute top-3 left-4">
                <Search />
              </div>
              <input
                className="border-input-color border-[1px] rounded-tl-custom rounded-bl-custom w-[85%] outline-none pl-[60px] text-[13px]"
                placeholder="Search by name,type"
                value={searcher}
                onChange={(e) => setSearcher(e.target.value)}
              />
              <button className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]">
                Search
              </button>
            </div> */}
          </div>
          <div className="flex flex-col border-input-color border-[1px] rounded-custom py-4 gap-6">
            <div className="flex flex-row justify-end gap-4 px-3">
              {/* <input
                  type='date'
                  className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                />
                <input
                  type='date'
                  className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                /> */}
              {/* <div className="position:relative w-[120px] h-[35px] rounded-custom px-[5px] flex flex-row border items-center">
      
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
                <Calendar className="text-[10px]" onClick={() => PickDate()} />
              </div> */}
              {/* <button
                onClick={() => setStep(18)}
                className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[13%] rounded-custom text-white font-semibold text-[11px]"
              >
                Add EarningPartner
              </button> */}
              <button
                onClick={() => Downloading()}
                className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[12%] rounded-custom text-white font-semibold text-[11px]"
              >
                Download Report <Download />
              </button>
            </div>
            <hr className="" />
            <div className="flex flex-row justify-end px-8 gap-2">
              <Filter />
              <span className="text-route-noncolor text-[12px]">Filters</span>
            </div>
            {loading ? (
              <>
                {allmetre?.data?.meta?.totalCount >= 1 ? (
                  <Tables
                    allmetering
                    setaction={setaction}
                    setuserIding={setuserIding}
                    data={allmetre?.data?.data}
                    setUserIds={setUserIds}
                    currentPage={currentPage}
                    setStep={setStep}
                  />
                ) : (
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
                )}{" "}
                {/* {(apiagentrole?.error || !apiagentrole?.data?.content) && (
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
                )} */}
                {allmetre?.data?.meta?.totalCount >= 1 && (
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

export default AllMeters;
