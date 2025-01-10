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
import { Fundings } from "../Store/Apis/Funding";
import { FundingApproval } from "../Store/Apis/FundingApproval";
import { FundType } from "../Store/Apis/Fundtype";

const Funding = ({ title }) => {
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
  const [paymentMethodIds, setpaymentMethodIds] = useState("");
  const [actions, setActions] = useState("");
  const [real, setReal] = useState("");
  const [status, setStatus] = useState("SUCCESSFUL");

  //   const [action, setAction] = useState("disable");
  //   const [paymentMethodId, setPaymentMethodId] = useState(null);
  const [role, setRole] = useState("APIPARTNER");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { fundtype, authenticatingfundtype } = useSelector(
    (state) => state?.fundtype
  );
  console.log(fundtype);
  console.log(authenticatingfundtype);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(FundType({ status, currentPage }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }
    if (reload && status && currentPage) {
      //   dispatch(Banks({ startDate, searcher, currentPage }));
      dispatch(FundType(status, currentPage));
      setReload(false);
    }
    if (fundtype && !fundtype) {
      setReload(true);
    }

    //eslint-disable-next-line
  }, [reload, fundtype?.status, status, currentPage]);

  const { funding, authenticatingfunding } = useSelector(
    (state) => state?.funding
  );
  console.log(funding);

  // useEffect(() => {
  //   if (authenticatingfundtype && status) {
  //     setTimeout(() => {
  //       setloading(true);
  //     }, [3000]);
  //   }
  // }, [authenticatingfundtype, status]);

  // useEffect(() => {
  //   dispatch(FundType(status));
  //   setTimeout(() => {
  //     setloading(true);
  //   }, [3000]);
  // }, [status]);

  const next = fundtype?.data?.meta?.next;
  const previous = fundtype?.data?.meta?.prev;
  const totalPosts = fundtype?.data?.meta?.totalCount;

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

  const Pays = (transactionId) => {
    setStep(76);
    setpaymentMethodIds(transactionId);
    // dispatch(FundingApproval({ transactionId, userPhoneNumber, amount }));
  };

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
          paymentMethodIds={paymentMethodIds}
          setpaymentMethodIds={setpaymentMethodIds}
          setActions={setActions}
          status={status}
          actions={actions}
          setReal={setReal}
          real={real}
          setStep={setStep}
          step={step}
          setReload={setReload}
        />
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Funding Request
            </span>
            <div className="relative flex flex-row w-[50%]">
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
            </div>
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
            <div className="flex flex-row justify-end px-8 gap-2">
              <Filter />
              <span className="text-route-noncolor text-[12px]">Filters</span>
            </div>
            <div className="flex flex-row justify-between gap-4 px-3">
              <div className="flex flex-col">
                <div className="flex flex-row gap-6 justify-center text-[14px] items-center text-route-noncolor pt-[10px] font-medium">
                  <span
                    onClick={() => {
                      setStatus("SUCCESSFUL");
                      setCurrentPage(0);
                      setActivater(1);
                      // setdecliner(false);
                    }}
                    className={`${
                      status === "SUCCESSFUL"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Successful
                  </span>
                  <span
                    onClick={() => {
                      setStatus("PENDING");
                      setCurrentPage(0);
                      setActivater(1);
                      // setdecliner(true);
                    }}
                    className={`${
                      status === "PENDING"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Pending
                  </span>
                  <span
                    onClick={() => {
                      setStatus("DECLINED");
                      setCurrentPage(0);
                      setActivater(1);
                      // setdecliner(false);
                    }}
                    className={`${
                      status === "DECLINED"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Declined
                  </span>
                  <span
                    onClick={() => {
                      setStatus("PROCESSED");
                      setCurrentPage(0);
                      setActivater(1);
                      // setdecliner(false);
                    }}
                    className={`${
                      status === "PROCESSED"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Processed
                  </span>
                </div>
                <div className="gap-2">
                  {status === "SUCCESSFUL" && (
                    <div className="w-[70px] h-[2px] bg-route-color" />
                  )}
                  {status === "PENDING" && (
                    <div className="w-[75px] h-[2px] bg-route-color ml-[28%]" />
                  )}
                  {status === "DECLINED" && (
                    <div className="w-[80px] h-[2px] bg-route-color ml-[52%]" />
                  )}
                  {status === "PROCESSED" && (
                    <div className="w-[80px] h-[2px] bg-route-color ml-[79%]" />
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
              </div>
            </div>
            {!authenticatingfundtype ? (
              <>
                {fundtype?.data?.meta?.totalCount >= 1 &&
                  status === "SUCCESSFUL" && (
                    <Tables
                      funding
                      Pay={Pays}
                      currentPage={currentPage}
                      set
                      data={fundtype?.data?.data}
                    />
                  )}
                {!fundtype?.data?.meta?.totalCount &&
                  status === "SUCCESSFUL" && (
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
                {fundtype?.data?.meta?.totalCount >= 1 &&
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
                {fundtype?.data?.meta?.totalCount >= 1 &&
                  status === "DECLINED" && (
                    <Tables
                      funding
                      Pay={Pays}
                      currentPage={currentPage}
                      set
                      data={fundtype?.data?.data}
                    />
                  )}
                {!fundtype?.data?.meta?.totalCount && status === "DECLINED" && (
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
                {fundtype?.data?.meta?.totalCount >= 1 &&
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
                {fundtype?.data?.meta?.totalCount >= 1 &&
                  status === "PROCESSED" && (
                    <Tables
                      funding
                      Pay={Pays}
                      currentPage={currentPage}
                      set
                      data={fundtype?.data?.data}
                    />
                  )}
                {!fundtype?.data?.meta?.totalCount &&
                  status === "PROCESSED" && (
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
                {fundtype?.data?.meta?.totalCount >= 1 &&
                  status === "PROCESSED" && (
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
                {fundtype?.data?.meta?.totalCount >= 1 &&
                  status === "PENDING" && (
                    <Tables
                      fundingpending
                      Pay={Pays}
                      currentPage={currentPage}
                      set
                      data={fundtype?.data?.data}
                    />
                  )}
                {!fundtype?.data?.meta?.totalCount && status === "PENDING" && (
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
                {fundtype?.data?.meta?.totalCount >= 1 &&
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

export default Funding;
