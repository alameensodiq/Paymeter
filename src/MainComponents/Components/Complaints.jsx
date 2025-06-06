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
import { GetPay } from "../Store/Apis/GetPay";
import { TogglePay } from "../Store/Apis/TogglePay";
import empty from "../../assets/empty.png";
import { Loader } from "./Loader";
import { Notifications } from "../Store/Apis/Notifications";
import { Approve } from "../Store/Apis/Approve";
import { Complain } from "../Store/Apis/Complain";
import { ComplainApprove } from "../Store/Apis/ComplainApprove";

const Complaints = ({ title }) => {
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [step, setStep] = useState(0);
  const datePickerRef = useRef(null);
  const [reload, setReload] = useState(false);
  const [reloadreal, setReloadreal] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [searcher, setSearcher] = useState("");
  const [loading, setloading] = useState(false);
  const [status, setStatus] = useState("RESOLVED");
  const [iduser, setIduser] = useState("");
  //   const [action, setAction] = useState("disable");
  //   const [notificationsId, setnotificationsId] = useState(null);
  const [role, setRole] = useState("APIPARTNER");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { complainapprove, authenticatingcomplainapprove } = useSelector(
    (state) => state?.complainapprove
  );
  console.log(complainapprove);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(Complain({ status }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }
    // if (reloadreal && complainapprove?.status) {
    //   console.log(reloadreal);
    //   console.log(complainapprove?.status);
    //   //   dispatch(Banks({ startDate, searcher, currentPage }));
    //   // dispatch(Complain({ status }));
    //   setStep(44);
    //   // setReload(false);
    // }
    if (reload && reloadreal) {
      dispatch(Complain({ status }));
      setReload(false);
      setReloadreal(false);
    }
    // if (reload) {
    //   //   dispatch(Banks({ startDate, searcher, currentPage }));
    //   dispatch(Complain({ status }));
    //   setReload(false);
    // }
    //eslint-disable-next-line
  }, [reload, status, reloadreal]);

  const { complain, authenticatingcomplain } = useSelector(
    (state) => state?.complain
  );
  console.log(complain);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, [3000]);
  }, [complain?.data]);

  const next = complain?.data?.meta?.next;
  const previous = complain?.data?.meta?.prev;
  const totalPosts = complain?.data?.meta?.totalCount;
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

  const Pays = (notificationsId) => {
    setStep(43);
    setIduser(notificationsId);
    // dispatch(ComplainApprove({ userId: notificationsId }));
    // setReload(true);
  };

  const sendComplain = () => {
    dispatch(ComplainApprove({ userId: iduser }));
    setReloadreal(true);
  };

  console.log(reloadreal);

  const Downloading = () => {
    // const data = banks?.data?.data || [];
    // const headers = data.length > 0 ? Object.keys(data[0]) : [];
    // const objValues = data.map(item => Object.values(item).join(','));
    // const csvContent = [headers.join(','), ...objValues].join('\n');
    // const blob = new Blob([csvContent], { type: 'text/csv' });
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'Bank.csv';
    // document.body.appendChild(a); // Required for Firefox
    // a.click();
    // document.body.removeChild(a); // Clean up
    // URL.revokeObjectURL(url);
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
        <AppUserModal
          sendComplain={sendComplain}
          setStep={setStep}
          step={step}
          setReload={setReload}
          reloadreal={reloadreal}
          setReloadreal={setReloadreal}
          complainapprove={complainapprove?.status}
        />
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Complaints
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
                onClick={() => setStep(14)}
                className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[13%] rounded-custom text-white font-semibold text-[11px]"
              >
                Add Payment Method
              </button> */}
              {/* <button
                onClick={() => Downloading()}
                className="px-2 flex flex-row gap-1 items-center bg-route-color w-[12%] rounded-custom text-white font-semibold text-[11px]"
              >
                Download Report <Download />
              </button> */}
            </div>
            <hr className="" />
            <div className="flex flex-row justify-between gap-4 px-3">
              <div className="flex flex-col">
                <div className="flex flex-row gap-6 justify-center text-[14px] items-center text-route-noncolor pt-[10px] font-medium">
                  <span
                    onClick={() => {
                      setStatus("RESOLVED");
                      setCurrentPage(0);
                    }}
                    className={`${
                      status === "RESOLVED"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    RESOLVED
                  </span>
                  <span
                    onClick={() => {
                      setStatus("PENDING");
                      setCurrentPage(0);
                    }}
                    className={`${
                      status === "PENDING"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    PENDING
                  </span>
                  {/* <span
                    onClick={() => setStatus("rejected")}
                    className={`${
                      status === "rejected"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Rejected
                  </span> */}
                </div>
                <div className="gap-2">
                  {status === "RESOLVED" && (
                    <div className="w-[70px] h-[2px] bg-route-color" />
                  )}
                  {status === "PENDING" && (
                    <div className="w-[75px] h-[2px] bg-route-color ml-[56%]" />
                  )}
                  {/* {status === "rejected" && (
                    <div className="w-[80px] h-[2px] bg-route-color ml-[69%]" />
                  )} */}
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
              </div>
            </div>
            {loading ? (
              <>
                {complain?.data?.meta?.totalCount >= 1 &&
                  status === "RESOLVED" && (
                    <Tables
                      complain
                      currentPage={currentPage}
                      set
                      data={complain?.data?.data}
                    />
                  )}{" "}
                {(complain?.data?.data?.length === 0 ||
                  complain?.error === "") &&
                  status === "RESOLVED" && (
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
                {complain?.data?.meta?.totalCount >= 1 &&
                  status === "PENDING" && (
                    <Tables
                      complainpending
                      Pay={Pays}
                      set
                      data={complain?.data?.data}
                      currentPage={currentPage}
                    />
                  )}{" "}
                {(complain?.data?.data?.length === 0 ||
                  complain?.error === "") &&
                  status === "PENDING" && (
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
                {complain?.data?.meta?.totalCount >= 1 &&
                  status === "RESOLVED" && (
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
                {complain?.data?.meta?.totalCount >= 1 &&
                  status === "PENDING" && (
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

export default Complaints;
