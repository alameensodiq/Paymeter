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
import { Payment } from "../Store/Apis/Payment";
import { Shift } from "../Store/Apis/Shift";

const PaymentShift = ({ title }) => {
  const [whitecrust, setWhitecrust] = useState(true);
  const [other, setOther] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [searcher, setSearcher] = useState("");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [startDater, setStartDater] = useState(new Date("2022-01-01"));
  const [endDate, setEndDate] = useState(new Date("2022-01-01"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const White = () => {
    setWhitecrust(true);
    setOther(false);
    setSearcher("");
  };

  const Othering = () => {
    setWhitecrust(false);
    setOther(true);
    setSearcher("");
    setStartDater("");
  };

  // const [endDate, setEndDate] = useState(
  //   new Date(Date.now() + 3600 * 1000 * 24)
  // );
  // const datePickerRef = useRef(null);

  // const dateChanger = (date) => {
  //   console.log(date);
  //   setEndDate(date);
  // };

  // const PickDate = () => {
  //   datePickerRef.current.setOpen(true);
  // };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(
        Payment({
          customerReference: searcher,
          dateFrom: startDater,
          dateTo: endDate
        })
      );
      dispatch(Shift({ date: startDate, currentPage }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }

    //eslint-disable-next-line
  }, [startDate, searcher, currentPage, startDater, endDate]);

  const { payment, authenticatingpayment } = useSelector(
    (state) => state?.payment
  );
  console.log(payment);

  const { shift, authenticatingshift } = useSelector((state) => state?.shift);
  console.log(shift);

  const next = payment?.data?.meta?.next;
  const previous = payment?.data?.meta?.prev;
  const totalPosts = payment?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  const Downloading = () => {
    const data = payment?.data || [];
    const headers = data.length > 0 ? Object.keys(data[0]) : [];
    const objValues = data.map((item) => Object.values(item).join(","));
    const csvContent = [headers.join(","), ...objValues].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Institution.csv";
    document.body.appendChild(a); // Required for Firefox
    a.click();
    document.body.removeChild(a); // Clean up
    URL.revokeObjectURL(url);
  };

  const Downloading2 = () => {
    const data = shift?.data || [];
    const headers = data.length > 0 ? Object.keys(data[0]) : [];
    const objValues = data.map((item) => Object.values(item).join(","));
    const csvContent = [headers.join(","), ...objValues].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Institution.csv";
    document.body.appendChild(a); // Required for Firefox
    a.click();
    document.body.removeChild(a); // Clean up
    URL.revokeObjectURL(url);
  };

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDater(selectedStartDate);
    // Calculate endDate as startDate + 30 days
    const newEndDate = new Date(selectedStartDate);
    newEndDate.setDate(newEndDate.getDate() + 30);
    setEndDate(newEndDate.toISOString().split("T")[0]); // Format as YYYY-MM-DD
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
          {whitecrust ? (
            <>
              <div className="flex flex-row justify-between">
                <span className="text-route-name text-[28px] font-semibold">
                  Meter Transactions
                </span>
                <div className="relative flex flex-row w-[50%]">
                  <div className="absolute top-3 left-4">
                    <Search />
                  </div>
                  <input
                    className="border-input-color border-[1px] rounded-tl-custom rounded-bl-custom w-[85%] outline-none pl-[60px] text-[13px]"
                    placeholder="Search by Customer reference"
                    value={searcher}
                    onChange={(e) => setSearcher(e.target.value)}
                  />
                  <button className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]">
                    Search
                  </button>
                </div>
              </div>
              <div className="flex h-[40px] gap-[10px] flex-row justify-end w-[100%]">
                {/* <div className="absolute top-3 left-4">
                  <Search />
                </div> */}
                <div className="flex flex-col w-[15%] h-[70px]">
                  <span>Start Date</span>
                  <input
                    className="border-input-color border-[1px] rounded-tr-custom rounded-tl-custom rounded-bl-custom rounded-br-custom w-[100%] outline-none pl-[20px] h-[40px] text-[13px]"
                    placeholder="Search by name, customerID, account number, transaction reference"
                    value={startDater}
                    type="date"
                    format="YYYY-MM-DD"
                    onChange={handleStartDateChange}
                  />
                </div>
                <div className="flex flex-col w-[15%] h-[70px]">
                  <span>End Date</span>
                  <input
                    className="border-input-color border-[1px] rounded-tr-custom rounded-tl-custom rounded-bl-custom rounded-br-custom w-[100%] outline-none pl-[20px] h-[40px] text-[13px]"
                    placeholder="Search by name, customerID, account number, transaction reference"
                    value={setEndDate}
                    type="date"
                    format="YYYY-MM-DD"
                    disabled
                    onChange={handleStartDateChange}
                  />
                </div>
                {/* <button className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]">
                  Search
                </button> */}
              </div>
            </>
          ) : other ? (
            <div className="flex flex-row justify-between">
              <span className="text-route-name text-[28px] font-semibold">
                Shift
              </span>
              <div className="relative flex flex-row justify-end w-[40%]">
                {/* <div className="absolute top-3 left-4">
                  <Search />
                </div> */}
                <input
                  className="border-input-color border-[1px] rounded-tr-custom rounded-tl-custom rounded-bl-custom rounded-br-custom w-[35%] outline-none pl-[20px] text-[13px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                  value={startDate}
                  type="date"
                  format="YYYY-MM-DD"
                  onChange={(e) => setStartDate(e.target.value)}
                />
                {/* <button className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]">
                  Search
                </button> */}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-col border-input-color border-[1px] rounded-custom py-4 gap-6">
            <div className="flex flex-row justify-between gap-4 px-3">
              <div className="flex flex-col">
                <div className="flex flex-row gap-4 justify-center text-[14px] items-center text-route-noncolor pt-[10px] font-medium">
                  <span
                    onClick={() => White()}
                    className={`${
                      whitecrust
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Meter Payment
                  </span>
                  <span
                    onClick={() => Othering()}
                    className={`${
                      other
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Shift
                  </span>
                </div>
                <div className="gap-6">
                  {whitecrust && (
                    <div className="w-[105px] h-[2px] bg-route-color" />
                  )}
                  {other && (
                    <div className="w-[60px] h-[2px] bg-route-color ml-[74%]" />
                  )}
                </div>
              </div>
              <div className="flex flex-row justify-end gap-4 px-3">
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
                  <Calendar
                    className="text-[10px]"
                    onClick={() => PickDate()}
                  />
                </div> */}
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
                {whitecrust ? (
                  <button
                    onClick={() => Downloading()}
                    className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[100%] rounded-custom text-white font-semibold text-[11px]"
                  >
                    Download Report <Download />
                  </button>
                ) : other ? (
                  <button
                    onClick={() => Downloading2()}
                    className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[100%] rounded-custom text-white font-semibold text-[11px]"
                  >
                    Download Report <Download />
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            {whitecrust && payment?.data?.length >= 1 ? (
              <>
                <Tables payment data={payment?.data} />
                {/* <Pagination
                  set={activater}
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  totalPosts={totalPosts}
                  paginate={paginate}
                  previous={previous}
                  next={next}
                /> */}
              </>
            ) : other && shift?.data?.length >= 1 ? (
              <>
                <Tables shift data={shift?.data} />
                {/* <Pagination
                  set={activater}
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  totalPosts={totalPosts}
                  paginate={paginate}
                  previous={previous}
                  next={next}
                /> */}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentShift;
