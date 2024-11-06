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
import { District } from "../Store/Apis/District";

const DistrictDetails = ({ title }) => {
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
  const { district, authenticatingdistrict } = useSelector(
    (state) => state?.district
  );
  console.log(district);

  const [showCommission, setShowCommission] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("token") && id) {
      // dispatch(UserData({ id }));
      dispatch(District({ id }));
      // dispatch(GetCommission({ id }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }
    if (reload && sessionStorage.getItem("token") && id) {
      dispatch(District({ id }));
      // dispatch(UserData({ id }));
      // dispatch(UserWallet({ id }));
      // dispatch(GetCommission({ id }));
    }

    //eslint-disable-next-line
  }, [userdata?.status, reload]);

  const isEarningRoute = location.pathname.startsWith("/user/");
  const isEarningRoute2 = location.pathname.startsWith("/earning/");

  const next = userdata?.data?.transactions?.meta?.next;
  const previous = userdata?.data?.transactions?.meta?.prev;
  const totalPosts = userdata?.data?.transactions?.meta?.totalCount;

  const next2 = getcommission?.data?.meta?.next;
  const previous2 = getcommission?.data?.meta?.prev;
  const totalPosts2 = getcommission?.data?.meta?.totalCount;

  const next3 = district?.data?.meta?.next;
  const previous3 = district?.data?.meta?.prev;
  const totalPosts3 = district?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, [3000]);
  }, [userdata?.data, getcommission?.data]);

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
              <div
                className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Today Sales
                  </span>
                  <span className="text-color-user text-[20px] font-bold">
                    ₦0
                    {/* {formatNumberWithCommas(
                    dashboarddailymonthly?.data?.dailyRevenue
                  )} */}
                  </span>
                  <div className="flex flex-row gap-1 text-[10px]">
                    <span>{/* <Increase /> */}</span>
                    {/* <span className="text-card-user">8.5%</span>
                  <span className="text-[9px]">Up yesterday</span> */}
                  </div>
                </div>
                <div>
                  <User />
                </div>
              </div>
              <div
                className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    This Week Sales
                  </span>
                  <span className="text-color-user text-[20px] font-bold">
                    ₦0
                    {/* {formatNumberWithCommas(
                    dashboarddailymonthly?.data?.weeklyRevenue
                  )} */}
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
              <div
                className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    This Month Sales
                  </span>
                  <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                    {/* ₦1 */}₦ 0{/* {dashboard?.data?.totalApiPartners} */}
                  </span>
                  {/* <div className="flex flex-row gap-1 text-[10px]">
                  <span>
                    <Increase />
                  </span>
                  <span className="text-card-user">6.5%</span>
                  <span className="text-[9px]">average daily revenue</span>
                </div> */}
                </div>
                <div>
                  <TotalInvestment />
                </div>
              </div>
              <div
                className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    This Year Sales
                  </span>
                  <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                    ₦0
                  </span>
                  {/* <div className="flex flex-row gap-1 text-[10px]">
                  <span>
                    <Increase />
                  </span>
                  <span className="text-card-user">6.5%</span>
                  <span className="text-[9px]">average monthly revenue</span>
                </div> */}
                </div>
                <div>
                  <TotalInvestment />
                </div>
              </div>
              <div
                className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Total Sales
                  </span>
                  <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                    ₦ ----
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
            <div className="flex lg:flex-row flex-col md:flex-col gap-3">
              <div
                className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Total Agents
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
              </div>
              <div
                className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Total Transaction Count
                  </span>
                  <span className="text-color-user text-[20px] font-bold">
                    ---
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
              <div
                className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Total Wallet Balance
                  </span>
                  <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                    {/* ₦1 */}
                    {district?.data?.wallet ? district?.data?.wallet : 0}{" "}
                    {/* {dashboard?.data?.totalRevenue?.daily?.NGN} */}
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
              </div>
              <div
                className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Total Revenue
                  </span>
                  <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                    ---
                  </span>
                  <div className="flex flex-row gap-1 text-[10px]">
                    <span>
                      <Increase />
                    </span>
                    <span className="text-card-user">6.5%</span>
                    <span className="text-[9px]">average yearly revenue</span>
                  </div>
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
                {/* {!isEarningRoute && !isEarningRoute2 && (
                  <span
                    onClick={() => {
                      setStatus("pending");
                      setCurrentPage(0);
                    }}
                    className={`${
                      status === "pending"
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Commissions
                  </span>
                )} */}
              </div>
              <div className="gap-2">
                {status === "accepted" && (
                  <div className="w-[80px] h-[2px] bg-route-color" />
                )}
                {/* {status === "pending" &&
                  !isEarningRoute &&
                  !isEarningRoute2 && (
                    <div className="w-[90px] h-[2px] bg-route-color lg:ml-[9%] md:ml-[13%] sm:ml-[18%]" />
                  )} */}
              </div>
            </div>
            {loading ? (
              <>
                {district?.data?.transactions?.meta?.totalCount >= 1 &&
                  status === "accepted" && (
                    <Tables
                      setDownload={setDownload}
                      overviewtransaction
                      data={district?.data?.transactions?.data}
                    />
                  )}
                {!isEarningRoute &&
                  !isEarningRoute2 &&
                  getcommission?.data?.length >= 1 &&
                  status === "pending" && (
                    <Tables
                      setStep={setStep}
                      setNaming={setNaming}
                      overviewcommission
                      data={getcommission?.data}
                    />
                  )}
                {(!district?.data?.transactions?.data ||
                  district?.data?.transactions?.data?.length === 0) &&
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
                {getcommission?.data?.length === 0 && status === "pending" && (
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
                {district?.data?.transactions?.meta?.totalCount >= 1 &&
                  status === "accepted" && (
                    <Pagination
                      set={activater}
                      currentPage={currentPage}
                      postsPerPage={postsPerPage}
                      totalPosts={totalPosts3}
                      paginate={paginate}
                      previous={previous3}
                      next={next3}
                    />
                  )}
                {/* {getcommission?.data?.length >= 1 && (
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

export default DistrictDetails;
