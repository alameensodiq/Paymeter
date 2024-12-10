import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import { ReactComponent as Increase } from "../../assets/increase.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as TotalTransfer } from "../../assets/totaltransfer.svg";
import { ReactComponent as TotalInvestment } from "../../assets/totalinvestments.svg";
import { ReactComponent as TotalBill } from "../../assets/totalbill.svg";
import empty from "../../assets/empty.png";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Sign } from "../../assets/sign.svg";
import { ReactComponent as Filtering } from "../../assets/filtering.svg";
import { ReactComponent as Ellipses } from "../../assets/ellipses.svg";
import MixedLineBarChart from "../Reusables/MixedLineBarChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Donuts from "../Reusables/Donuts";
import DoubleLineChart from "../Reusables/DoubleLineChart";
import Tables from "../Reusables/Table";
import DoubleBarChart from "../Reusables/DoubleBarChart";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Dashboards } from "../Store/Apis/Dashboard";
import { ReactComponent as Goback } from "./../../assets/goback.svg";
import { UserData } from "../Store/Apis/UserData";
import { Loader } from "./Loader";
import Pagination from "../Reusables/Pagination";
import { UserWallet } from "../Store/Apis/UserWallet";
import { GetCommission } from "../Store/Apis/GetCommission";
import AppUserModal from "../../Modal/AppUserModal";
import { UserTransaction } from "../Store/Apis/UserTransaction";
import { UserMeters } from "../Store/Apis/UserMeters";

const RealUserDetails = ({ title }) => {
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const datePickerRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [status, setStatus] = useState("accepted");
  const [loading, setloading] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [naming, setNaming] = useState("");
  const [step, setStep] = useState(0);
  const [reload, setReload] = useState(false);
  const [downloading, setDownload] = useState([]);
  let id = window?.location?.pathname.split("/")[2];
  console.log(id);

  const { userdata, authenticatinguserdata } = useSelector(
    (state) => state?.userdata
  );
  console.log(userdata);

  const { getcommission, authenticatinggetcommission } = useSelector(
    (state) => state?.getcommission
  );
  console.log(getcommission);

  const { usermeters, authenticatingusermeters } = useSelector(
    (state) => state?.usermeters
  );
  console.log(usermeters);

  const { userwallet, authenticatinguserwallet } = useSelector(
    (state) => state?.userwallet
  );
  console.log(userwallet);

  const { usertransaction, authenticatingusertransaction } = useSelector(
    (state) => state?.usertransaction
  );
  console.log(usertransaction);

  const [showCommission, setShowCommission] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("token") && id) {
      //   dispatch(UserData({ id }));
      //   dispatch(UserWallet({ id }));
      dispatch(GetCommission({ id }));
      dispatch(UserTransaction({ id, searcher, currentPage }));
      dispatch(UserMeters({ id }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }
    if (reload && sessionStorage.getItem("token") && id) {
      //   dispatch(UserData({ id }));
      //   dispatch(UserWallet({ id }));
      dispatch(GetCommission({ id }));
      dispatch(UserTransaction({ id, searcher, currentPage }));
      dispatch(UserMeters({ id }));
    }

    //eslint-disable-next-line
  }, [getcommission?.status, reload, searcher, currentPage]);

  const formatNumberWithCommas = (number) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  //   const isEarningRoute = location.pathname.startsWith("/user/");
  //   const isEarningRoute2 = location.pathname.startsWith("/agents/");

  const next = usertransaction?.data?.transactions?.meta?.next;
  const previous = usertransaction?.data?.transactions?.meta?.prev;
  const totalPosts = usertransaction?.data?.transactions?.meta?.totalCount;

  const next2 = usermeters?.data?.meta?.next;
  const previous2 = usermeters?.data?.meta?.prev;
  const totalPosts2 = usermeters?.data?.meta?.totalCount;

  // const next3 = userwallet?.data?.meta?.next;
  // const previous3 = userwallet?.data?.meta?.prev;
  // const totalPosts3 = userwallet?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, [3000]);
  }, [userdata?.data, getcommission?.data, usermeters?.data]);

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={title} />
          <AppUserModal
            setDownload={setDownload}
            downloading={downloading}
            naming={naming}
            setNaming={setNaming}
            setStep={setStep}
            step={step}
            setReload={setReload}
          />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-7">
          <div className="flex flex-row justify-start">
            {/* <select className="border rounded-custom p-1 text-[10px] w-[10%] h-[30px] outline-none">
              <option>Hope bank</option>
              <option>GT bank</option>
              <option>Sterling bank</option>
            </select> */}
            <div>
              <Goback
                style={{ cursor: "pointer" }}
                onClick={() => navigate(-1)}
              />
            </div>
          </div>
          {/* {userdata?.data?.meta?.totalCount >= 1 ? ( */}
          <>
            <div className="flex lg:flex-row flex-col md:flex-col gap-3">
              {/* <div
                className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Today Revenue
                  </span>
                  <span className="text-color-user text-[20px] font-bold">
                    ---
                  </span>
                  <div className="flex flex-row gap-1 text-[10px]">
                    <span>
                      <Increase />
                    </span>
                    <span className="text-card-user">8.5%</span>
                    <span className="text-[9px]">Up yesterday</span>
                  </div>
                </div>
                <div>
                  <User />
                </div>
              </div> */}
              <div
                className="flex flex-row lg:w-[50%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Total Transaction Count
                  </span>
                  <span className="text-color-user text-[20px] font-bold">
                    {formatNumberWithCommas(
                      getcommission?.data?.totalTransactionAmount
                    )}
                  </span>
                  {/* <div className="flex flex-row gap-1 text-[10px]">
                  <span>
                    <Increase />
                  </span>
                  <span className="text-card-user">6.5%</span>
                  <span></span>
                </div> */}
                </div>
                <div>
                  <TotalBill />
                  {/* <TotalTransfer /> */}
                </div>
              </div>
              {/* <div
                className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Total Wallet Balance
                  </span>
                  <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                    {getcommission?.data?.wallet
                      ? getcommission?.data?.wallet
                      : 0}{" "}
                  </span>
                  <div className="flex flex-row gap-1 text-[10px]">
                    <span>
                      <Increase />
                    </span>
                    <span className="text-card-user">6.5%</span>
                    <span className="text-[9px]">average daily revenue</span>
                  </div>
                </div>
                <div>
                  <TotalInvestment />
                </div>
              </div> */}
              <div
                className="flex flex-row lg:w-[50%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Total Revenue
                  </span>
                  <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                    ₦
                    {formatNumberWithCommas(
                      getcommission?.data?.transactionCount
                    )}
                  </span>
                  {/* <div className="flex flex-row gap-1 text-[10px]">
                    <span>
                      <Increase />
                    </span>
                    <span className="text-card-user">6.5%</span>
                    <span className="text-[9px]">average yearly revenue</span>
                  </div> */}
                </div>
                <div>
                  <TotalInvestment />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-6 justify-start text-[14px] items-center text-route-noncolor pt-[10px] font-medium">
                <span
                  onClick={() => {
                    setStatus("accepted");
                    setCurrentPage(0);
                  }}
                  className={`${
                    status === "accepted"
                      ? "text-route-color cursor-pointer"
                      : "text-route-noncolor cursor-pointer"
                  }`}
                >
                  Transactions
                </span>
                <span
                  onClick={() => {
                    setStatus("pending");
                    setCurrentPage(0);
                  }}
                  className={`${
                    status === "pending"
                      ? "text-route-color cursor-pointer relative"
                      : "text-route-noncolor cursor-pointer"
                  }`}
                >
                  Meters
                </span>
              </div>
              <div className="gap-2">
                {status === "accepted" && (
                  <div className="w-[80px] h-[2px] bg-route-color" />
                )}
                {status === "pending" && (
                  <div className="w-[60px] absolute h-[2px] bg-route-color ml-[22%] lg:ml-[7.5%] md:ml-[13%] sm:ml-[18%]" />
                )}
              </div>
            </div>
            {loading ? (
              <>
                {usertransaction?.data?.transactions?.meta?.totalCount >= 1 &&
                  status === "accepted" && (
                    <Tables
                      setDownload={setDownload}
                      setStep={setStep}
                      overviewtransaction
                      data={usertransaction?.data?.transactions?.data}
                    />
                  )}
                {usermeters?.data?.data?.length >= 1 &&
                  status === "pending" && (
                    <Tables
                      setStep={setStep}
                      setNaming={setNaming}
                      agentvirtualmeter
                      data={usermeters?.data?.data}
                    />
                  )}
                {usertransaction?.data?.transactions?.meta?.totalCount === 0 &&
                  status === "accepted" && (
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
                {usermeters?.data?.data?.length === 0 &&
                  status === "pending" && (
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
                {usertransaction?.data?.transactions?.meta?.totalCount >= 1 &&
                  status === "accepted" && (
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
                {/* {usermeters?.data?.length >= 1 && (
                  <Pagination
                    set={activater}
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts2}
                    paginate={paginate}
                    previous={previous2}
                    next={next2}
                  />
                )} */}
              </>
            ) : (
              <Loader />
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default RealUserDetails;
