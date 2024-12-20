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

const WithdrawalsRequest = ({ title }) => {
  const [whitecrust, setWhitecrust] = useState(true);
  const [other, setOther] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setloading] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [downloading, setDownload] = useState([]);
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
      dispatch(Withdrawal({ searcher, currentPage }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }

    //eslint-disable-next-line
  }, [searcher, currentPage]);

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
            </div>
            {loading ? (
              <>
                {withdrawal?.data?.data?.length >= 1 && (
                  <Tables
                    setDownload={setDownload}
                    setStep={setStep}
                    withdraw
                    currentPage={currentPage}
                    data={withdrawal?.data?.data}
                  />
                )}{" "}
                {!withdrawal?.status && (
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
                {withdrawal?.data?.data?.length >= 1 && (
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
