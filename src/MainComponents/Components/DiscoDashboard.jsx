import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import { ReactComponent as Increase } from "../../assets/increase.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as TotalTransfer } from "../../assets/totaltransfer.svg";
import { ReactComponent as TotalInvestment } from "../../assets/totalinvestments.svg";
import { ReactComponent as TotalBill } from "../../assets/totalbill.svg";
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
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Dashboards } from "../Store/Apis/Dashboard";
import { DashboardDaily } from "../Store/Apis/DashboardDaily";
import { DashboardYearly } from "../Store/Apis/DashboardYearly";
import { DashboardDiscoMonthlys } from "../Store/Apis/DashboardDiscoMonthly";
import { Transactions } from "../Store/Apis/Transactions";
import { DashboardSummary } from "../Store/Apis/DashboardSummary";
import { DashboardDailyMonthly } from "../Store/Apis/DasboardDailyMonthly";
import { ListofMeter } from "../Store/Apis/ListofMeter";
import empty from "../../assets/empty.png";
import DoubleBarChartReal from "../Reusables/DoubleBarChartReal";
import { TotalSales } from "../Store/Apis/TotalSales";
import AppUserModal from "../../Modal/AppUserModal";
import { Notifications } from "../Store/Apis/Notifications";
import { EarningDash } from "../Store/Apis/EarningDash";
import { EarningCard } from "../Store/Apis/EaningCard";
import { DiscTransactions } from "../Store/Apis/DiscTransactions";
import { DiscoCard } from "../Store/Apis/DiscoCard";

const DiscoDashboard = ({ title }) => {
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const datePickerRef = useRef(null);
  const navigate = useNavigate();
  const [searcher, setSearcher] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [downloading, setDownload] = useState([]);
  const [reload, setReload] = useState(false);
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      // dispatch(Dashboards());
      // dispatch(DashboardDaily());
      // dispatch(DashboardYearly());
      // dispatch(DashboardSummary());
      // dispatch(DashboardDailyMonthly());
      // dispatch(TotalSales());
      // dispatch(ListofMeter());
      dispatch(DiscTransactions({ startDate, searcher, currentPage, endDate }));
      dispatch(DiscoCard());
      // dispatch(Notifications({ status: "accepted" }));
      // dispatch(DashboardDiscoMonthlys({ startDate }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }

    //eslint-disable-next-line
  }, [startDate, , searcher, currentPage, endDate]);

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  // const { totalsales, authenticatingtotalsales } = useSelector(
  //   (state) => state?.totalsales
  // );
  // console.log(totalsales);

  const { disctransactions, authenticatingdisctransactions } = useSelector(
    (state) => state?.disctransactions
  );
  console.log(disctransactions);

  const { discocard, authenticatingdiscocard } = useSelector(
    (state) => state?.discocard
  );
  console.log(discocard);

  // const { listofmeter, authenticatinglistofmeter } = useSelector(
  //   (state) => state?.listofmeter
  // );
  // console.log(listofmeter);

  // const { dashboarddailymonthly, authenticatingdashboarddailymonthly } =
  //   useSelector((state) => state?.dashboarddailymonthly);
  // console.log(dashboarddailymonthly);

  // const { dashboard, authenticatingdashboard } = useSelector(
  //   (state) => state?.dashboard
  // );
  // console.log(dashboard);

  // const { dashboarddaily, authenticatingdashboarddaily } = useSelector(
  //   (state) => state?.dashboarddaily
  // );
  // console.log(dashboarddaily);

  // const { dashboardyearly, authenticatingdashboardyearly } = useSelector(
  //   (state) => state?.dashboardyearly
  // );
  // console.log(dashboardyearly);

  // const { dashboardsummary, authenticatingdashboardsummary } = useSelector(
  //   (state) => state?.dashboardsummary
  // );
  // console.log(dashboardsummary);

  // const { notifications, authenticatingnotifications } = useSelector(
  //   (state) => state?.notifications
  // );
  // console.log(notifications);

  // const [revenueData, setRevenueData] = useState([]);
  // const [revenueData2, setRevenueData2] = useState([]);

  // useEffect(() => {
  //   if (dashboardyearly?.data?.monthlyRevenues) {
  //     setRevenueData(dashboardyearly?.data.monthlyRevenues);
  //   }
  //   if (dashboardsummary?.data?.monthlyRevenues) {
  //     setRevenueData2(dashboardsummary?.data.monthlyRevenues);
  //   }
  // }, [
  //   dashboardyearly?.data?.monthlyRevenues,
  //   dashboardsummary?.data?.monthlyRevenues
  // ]);

  // Function to update revenue for the current month
  // const updateRevenueForCurrentMonth = () => {
  //   const currentMonthIndex = new Date().getMonth(); // 0 for January, 11 for December

  //   setRevenueData((prevData) =>
  //     prevData.map((item, index) => {
  //       if (index === currentMonthIndex) {
  //         return { ...item, revenue: item.revenue + 0 };
  //       }
  //       return item;
  //     })
  //   );
  // };

  // const updateRevenueForCurrentMonth2 = () => {
  //   const currentMonthIndex = new Date().getMonth(); // 0 for January, 11 for December

  //   setRevenueData2((prevData) =>
  //     prevData.map((item, index) => {
  //       if (index === currentMonthIndex) {
  //         return {
  //           ...item,
  //           totalTransactionCount: item.totalTransactionCount + 0
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };

  // useEffect(() => {
  //   if (revenueData.length > 0) {
  //     updateRevenueForCurrentMonth();
  //   }
  //   if (revenueData2.length > 0) {
  //     updateRevenueForCurrentMonth2();
  //   }
  // }, [revenueData.length, revenueData2.length]);

  // const currentMonthRevenue = revenueData[new Date().getMonth()]?.revenue;
  // const currentMonthRevenue2 =
  //   revenueData2[new Date().getMonth()]?.totalTransactionCount;

  // console.log(currentMonthRevenue2);

  const formatNumberWithCommas = (number) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // const { dashboarddiscomonthly, authenticatingdashboarddiscomonthly } =
  //   useSelector((state) => state?.dashboarddiscomonthly);
  // console.log(dashboarddiscomonthly);
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
        <div className="w-[100%] py-9 px-5 flex flex-col gap-7">
          {/* <div className="flex flex-row justify-start">
            <select className="border rounded-custom p-1 text-[10px] w-[10%] h-[30px] outline-none">
              <option>Hope bank</option>
              <option>GT bank</option>
              <option>Sterling bank</option>
            </select>
          </div> */}
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-center mb-1">
              <span className="text-circle-color font-bold">Sales</span>
            </div>
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
                    ₦{formatNumberWithCommas(discocard?.data?.todayRevenue)}
                  </span>
                  <div className="flex flex-row gap-1 text-[10px]">
                    <span className="text-black text-[12px]">
                      Transaction Count:{" "}
                      {formatNumberWithCommas(
                        discocard?.data?.todayTransactionCount
                      )}
                    </span>
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
                    ₦{formatNumberWithCommas(discocard?.data?.weeklyRevenue)}
                  </span>
                  <div className="flex flex-row gap-1 text-[10px]">
                    <span className="text-black text-[12px]">
                      Transaction Count:
                      {formatNumberWithCommas(
                        discocard?.data?.weeklyTransactionCount
                      )}
                    </span>
                    {/* <span className="text-card-user">6.5%</span>
                  <span></span> */}
                  </div>
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
                    {/* ₦1 */}₦{" "}
                    {formatNumberWithCommas(discocard?.data?.monthlyRevenue)}
                    {/* {dashboard?.data?.totalApiPartners} */}
                  </span>
                  <div className="flex flex-row gap-1 text-[10px]">
                    <span className="text-black text-[12px]">
                      Transaction Count:{" "}
                      {formatNumberWithCommas(
                        discocard?.data?.monthlyTransactionCount
                      )}
                    </span>
                    {/* <span className="text-card-user">6.5%</span>
                  <span className="text-[9px]">average daily revenue</span> */}
                  </div>
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
                    ₦{formatNumberWithCommas(discocard?.data?.yearlyRevenue)}
                  </span>
                  <div className="flex flex-row gap-1 text-[10px]">
                    <span className="text-black text-[12px]">
                      Transaction Count:{" "}
                      {formatNumberWithCommas(
                        discocard?.data?.yearlyTransactionCount
                      )}
                    </span>
                    {/* <span className="text-card-user">6.5%</span>
                  <span className="text-[9px]">average monthly revenue</span> */}
                  </div>
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
                    ₦{formatNumberWithCommas(discocard?.data?.yearlyRevenue)}
                  </span>
                  <div className="flex flex-row gap-1 text-[10px]">
                    <span className="text-black text-[12px]">
                      Transaction Count:{" "}
                      {formatNumberWithCommas(
                        discocard?.data?.yearlyTransactionCount
                      )}
                    </span>
                    {/* <span className="text-card-user">6.5%</span>
                  <span className="text-[9px]">average yearly revenue</span> */}
                  </div>
                </div>
                <div>
                  <TotalInvestment />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center">
              <span className="text-circle-color font-bold">
                Recent Transactions
              </span>
            </div>
            <div className="flex flex-col border rounded-custom gap-6 py-6">
              {/* <div className="flex flex-row px-4 gap-4 items-center justify-end">
                <Filtering />
                <span className="text-[14px]">Filters</span>
              </div> */}
              {disctransactions?.data?.data?.length >= 1 && (
                <>
                  <Tables
                    setDownload={setDownload}
                    setStep={setStep}
                    currentPage={currentPage}
                    customertransfer
                    data={disctransactions?.data?.data?.slice(0, 10)}
                  />
                  <div className="flex flex-row w-[100%] justify-end pr-4">
                    <span
                      onClick={() => navigate("/disotransactions")}
                      className="text-black text-[14px] cursor-pointer"
                    >
                      View all
                    </span>
                  </div>
                </>
              )}
              {(!disctransactions?.data?.data ||
                disctransactions?.data?.data?.length === 0) && (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoDashboard;
