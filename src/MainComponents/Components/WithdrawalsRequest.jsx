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
import { DownloadAdminTrans } from "../Store/Apis/DownloadAdminTrans";
import { Withdrawal } from "../Store/Apis/Withdrawal";
import { Step } from "@mui/material";

const WithdrawalsRequest = ({ title }) => {
  const [whitecrust, setWhitecrust] = useState(true);
  const [other, setOther] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [withdrawaction, setwithdrawaction] = useState("");
  const [loading, setloading] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [status, setStatus] = useState("SUCCESSFUL");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [downloading, setDownload] = useState([]);
  const [reload, setReload] = useState(false);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const White = () => {
    setStatus("SUCCESSFUL");
    // setOther(false);
  };

  const Othering = () => {
    setStatus("PENDING");
    // setOther(true);
  };

  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const datePickerRef = useRef(null);
  const datePickerRefs = useRef(null);

  const dateChange = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const dateChanger = (date) => {
    console.log(date);
    setStartDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  const PickDater = () => {
    datePickerRefs.current.setOpen(true);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(Withdrawal({ searcher, currentPage, status }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }
    if (reload && step) {
      //   dispatch(Banks({ startDate, searcher, currentPage }));
      dispatch(Withdrawal({ searcher, currentPage, status }));
      setReload(false);
      setStatus("SUCCESSFUL");
      setCurrentPage(0);
    }

    //eslint-disable-next-line
  }, [searcher, currentPage, status, step]);

  const { withdrawal, authenticatingwithdrawal } = useSelector(
    (state) => state?.withdrawal
  );
  console.log(withdrawal);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, [3000]);
  }, [withdrawal]);

  const next = withdrawal?.data?.meta?.next;
  const previous = withdrawal?.data?.meta?.prev;
  const totalPosts = withdrawal?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  return (
    <div className="flex flex-row">
      <AppUserModal
        // setaction={setaction}
        // action={actions}
        // userIds={userIds}
        // setuserIding={setuserIding}
        // userIding={userIding}
        // setUserIds={setUserIds}
        setwithdrawaction={setwithdrawaction}
        withdrawaction={withdrawaction}
        setStep={setStep}
        step={step}
        setReload={setReload}
      />
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
              Withdrawals
            </span>
            {/* <div className="relative flex flex-row w-[50%]">
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
            </div> */}
          </div>
          <div className="flex flex-col border-input-color border-[1px] rounded-custom py-4 gap-6">
            <div className="flex flex-row justify-start gap-4 px-3">
              <div className="flex flex-col">
                <div className="flex flex-row gap-4 text-[14px] items-center text-route-noncolor font-medium">
                  <span
                    onClick={() => White()}
                    className={`${
                      status === "SUCCESSFUL"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Successful
                  </span>
                  <span
                    onClick={() => Othering()}
                    className={`${
                      status === "PENDING"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    PENDING
                  </span>
                  <span
                    onClick={() => setStatus("FAILED")}
                    className={`${
                      status === "FAILED"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    FAILED
                  </span>
                  <span
                    onClick={() => setStatus("DECLINED")}
                    className={`${
                      status === "DECLINED"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    DECLINED
                  </span>
                </div>
                <div className="gap-4">
                  {status === "SUCCESSFUL" && (
                    <div className="w-[80px] h-[2px] bg-route-color" />
                  )}
                  {status === "PENDING" && (
                    <div className="w-[80px] h-[2px] bg-route-color ml-[28%]" />
                  )}
                  {status === "FAILED" && (
                    <div className="w-[80px] h-[2px] bg-route-color ml-[52%]" />
                  )}
                  {status === "DECLINED" && (
                    <div className="w-[80px] h-[2px] bg-route-color ml-[77%]" />
                  )}
                </div>
              </div>
            </div>
            {!authenticatingwithdrawal ? (
              <>
                {withdrawal?.data?.data?.length >= 1 &&
                  status === "SUCCESSFUL" && (
                    <Tables
                      setDownload={setDownload}
                      setStep={setStep}
                      withdraw
                      currentPage={currentPage}
                      data={withdrawal?.data?.data}
                    />
                  )}{" "}
                {withdrawal?.data?.data?.length >= 1 &&
                  status === "PENDING" && (
                    <Tables
                      setDownload={setDownload}
                      setStep={setStep}
                      withdrawpending
                      setwithdrawaction={setwithdrawaction}
                      currentPage={currentPage}
                      data={withdrawal?.data?.data}
                    />
                  )}{" "}
                {withdrawal?.data?.data?.length >= 1 && status === "FAILED" && (
                  <Tables
                    setDownload={setDownload}
                    setStep={setStep}
                    withdraw
                    currentPage={currentPage}
                    data={withdrawal?.data?.data}
                  />
                )}{" "}
                {withdrawal?.data?.data?.length >= 1 &&
                  status === "DECLINED" && (
                    <Tables
                      setDownload={setDownload}
                      setStep={setStep}
                      withdraw
                      currentPage={currentPage}
                      data={withdrawal?.data?.data}
                    />
                  )}{" "}
                {withdrawal?.data?.data?.length >= 1 &&
                  status === "SUCCESSFUL" && (
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
                {!withdrawal?.data?.data && status === "SUCCESSFUL" && (
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
                {!withdrawal?.data?.data && status === "PENDING" && (
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
                {withdrawal?.data?.data?.length >= 1 &&
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
                {!withdrawal?.data?.data && status === "FAILED" && (
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
                {withdrawal?.data?.data?.length >= 1 && status === "FAILED" && (
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
                {!withdrawal?.data?.data && status === "DECLINED" && (
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
                {withdrawal?.data?.data?.length >= 1 &&
                  status === "DECLINED" && (
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

export default WithdrawalsRequest;
