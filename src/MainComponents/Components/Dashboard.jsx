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
import { Loader } from "./Loader";
import { DashboardLastweek } from "../Store/Apis/DashboardLastweek";

const Dashboard = ({ title }) => {
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
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(Dashboards());
      dispatch(DashboardDaily());
      dispatch(DashboardYearly());
      dispatch(DashboardSummary());
      dispatch(DashboardLastweek());
      dispatch(DashboardDailyMonthly());
      dispatch(TotalSales());
      dispatch(ListofMeter());
      dispatch(Transactions({ startDate, searcher, currentPage, endDate }));
      dispatch(Notifications({ status: "accepted" }));
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

  const { totalsales, authenticatingtotalsales } = useSelector(
    (state) => state?.totalsales
  );
  console.log(totalsales);

  const { transactions, authenticatingtransactions } = useSelector(
    (state) => state?.transactions
  );
  console.log(transactions);

  const { listofmeter, authenticatinglistofmeter } = useSelector(
    (state) => state?.listofmeter
  );
  console.log(listofmeter);

  const { dashboarddailymonthly, authenticatingdashboarddailymonthly } =
    useSelector((state) => state?.dashboarddailymonthly);
  console.log(dashboarddailymonthly);

  const { dashboard, authenticatingdashboard } = useSelector(
    (state) => state?.dashboard
  );
  console.log(dashboard);

  const { dashboarddaily, authenticatingdashboarddaily } = useSelector(
    (state) => state?.dashboarddaily
  );
  console.log(dashboarddaily);

  const { dashboardyearly, authenticatingdashboardyearly } = useSelector(
    (state) => state?.dashboardyearly
  );
  console.log(dashboardyearly);

  const { dashboardsummary, authenticatingdashboardsummary } = useSelector(
    (state) => state?.dashboardsummary
  );
  console.log(dashboardsummary);

  const { notifications, authenticatingnotifications } = useSelector(
    (state) => state?.notifications
  );
  console.log(notifications);

  const { dashboardlastweek, authenticatingdashboardlastweek } = useSelector(
    (state) => state?.dashboardlastweek
  );
  console.log(dashboardlastweek);

  const [revenueData, setRevenueData] = useState([]);
  const [revenueData2, setRevenueData2] = useState([]);

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfNextMonth = new Date(year, month + 1, 1);
  const lastDayOfCurrentMonth = new Date(firstDayOfNextMonth - 1);
  const totalDaysInCurrentMonth = lastDayOfCurrentMonth.getDate();

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const timeDifference = currentDate.getTime() - startOfMonth;
  const daysSinceStartOfMonth = Math.max(
    Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1,
    1 // Ensure it's at least 1 to prevent division by zero
  );

  console.log(daysSinceStartOfMonth);

  useEffect(() => {
    if (dashboardyearly?.data?.monthlyRevenues) {
      setRevenueData(dashboardyearly?.data.monthlyRevenues);
    }
    if (dashboardsummary?.data?.monthlyRevenues) {
      setRevenueData2(dashboardsummary?.data.monthlyRevenues);
    }
  }, [
    dashboardyearly?.data?.monthlyRevenues,
    dashboardsummary?.data?.monthlyRevenues
  ]);

  // Function to update revenue for the current month
  const updateRevenueForCurrentMonth = () => {
    const currentMonthIndex = new Date().getMonth(); // 0 for January, 11 for December

    setRevenueData((prevData) =>
      prevData.map((item, index) => {
        if (index === currentMonthIndex) {
          return { ...item, revenue: item.revenue + 0 };
        }
        return item;
      })
    );
  };

  const updateRevenueForCurrentMonth2 = () => {
    const currentMonthIndex = new Date().getMonth(); // 0 for January, 11 for December

    setRevenueData2((prevData) =>
      prevData.map((item, index) => {
        if (index === currentMonthIndex) {
          return {
            ...item,
            totalTransactionCount: item.totalTransactionCount + 0
          };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    if (revenueData.length > 0) {
      updateRevenueForCurrentMonth();
    }
    if (revenueData2.length > 0) {
      updateRevenueForCurrentMonth2();
    }
  }, [revenueData.length, revenueData2.length]);

  const currentMonthRevenue = revenueData[new Date().getMonth()]?.revenue;
  console.log(currentMonthRevenue);
  const currentMonthRevenue2 =
    revenueData2[new Date().getMonth()]?.totalTransactionCount;
  console.log(currentMonthRevenue2);

  const formatNumberWithCommas = (number) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const discoNames = Array.from(
    new Set(
      dashboardsummary?.data?.monthlyRevenues.flatMap(
        (monthData) =>
          monthData?.discoData?.map((disco) => disco.discoName) || []
      )
    )
  );

  console.log(discoNames);

  useEffect(() => {
    if (transactions?.data) {
      setTimeout(() => {
        setloading(true);
      }, [2000]);
    }
  }, [transactions?.data]);

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
        {loading ? (
          <div className="w-[100%] pt-2 pb-9 px-5 flex flex-col gap-4">
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
                  className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[185px]  bg-white border rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                    <span className="text-card-title text-[14px]">
                      Today Sales
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(16px, 2vw, 20px)", // Adjusts font size based on viewport width
                        whiteSpace: "nowrap", // Prevents wrapping of text
                        // Hides overflow if text exceeds the container
                        textOverflow: "ellipsis" // Adds ellipsis if the text overflows
                      }}
                      className="text-color-user text-[20px] font-bold"
                    >
                      ₦
                      {formatNumberWithCommas(
                        dashboarddailymonthly?.data?.dailyRevenue
                      )}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span className="text-black text-[12px]">
                        Transaction Count:{" "}
                        {formatNumberWithCommas(
                          dashboarddailymonthly?.data?.dailyTransactionCount
                        )}
                      </span>
                      {/* <span className="text-card-user">8.5%</span>
                <span className="text-[9px]">Up yesterday</span> */}
                    </div>
                  </div>
                  <div>
                    <TotalInvestment />
                  </div>
                </div>
                <div
                  className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[185px]  bg-white border rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                    <span className="text-card-title text-[14px]">
                      This Week Sales
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(16px, 2vw, 20px)", // Adjusts font size based on viewport width
                        whiteSpace: "nowrap", // Prevents wrapping of text
                        // Hides overflow if text exceeds the container
                        textOverflow: "ellipsis" // Adds ellipsis if the text overflows
                      }}
                      className="text-color-user text-[20px] font-bold"
                    >
                      ₦
                      {formatNumberWithCommas(
                        dashboarddailymonthly?.data?.weeklyRevenue
                      )}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span className="text-black text-[12px]">
                        Transaction Count:
                        {formatNumberWithCommas(
                          dashboarddailymonthly?.data?.weeklyTransactionCount
                        )}
                      </span>
                      {/* <span className="text-card-user">6.5%</span>
                <span></span> */}
                    </div>
                  </div>
                  <div>
                    <TotalInvestment />
                    {/* <TotalTransfer /> */}
                  </div>
                </div>
                <div
                  className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[185px]  bg-white border rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                    <span className="text-card-title text-[14px]">
                      This Month Sales
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(16px, 2vw, 20px)", // Adjusts font size based on viewport width
                        whiteSpace: "nowrap", // Prevents wrapping of text
                        // Hides overflow if text exceeds the container
                        textOverflow: "ellipsis" // Adds ellipsis if the text overflows
                      }}
                      className="text-color-user text-[20px] font-bold flex flex-wrap"
                    >
                      {/* ₦1 */}₦ {formatNumberWithCommas(currentMonthRevenue)}
                      {/* {dashboard?.data?.totalApiPartners} */}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span className="text-black text-[12px]">
                        Transaction Count:{" "}
                        {formatNumberWithCommas(currentMonthRevenue2)}
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
                  className="flex flex-col lg:w-[20%] md:w-[100%] sm:w-[100%] h-[185px]  bg-white border rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="flex flex-row">
                    <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                      <span className="text-card-title text-[14px]">
                        Av. Daily Sales by Curr. Month
                      </span>
                      <span
                        style={{
                          fontSize: "clamp(16px, 2vw, 20px)", // Adjusts font size based on viewport width
                          whiteSpace: "nowrap", // Prevents wrapping of text
                          // Hides overflow if text exceeds the container
                          textOverflow: "ellipsis" // Adds ellipsis if the text overflows
                        }}
                        className="text-color-user text-[20px] font-bold flex flex-wrap"
                      >
                        {/* ₦1 */}₦{" "}
                        {formatNumberWithCommas(
                          (currentMonthRevenue / daysSinceStartOfMonth).toFixed(
                            2
                          )
                        )}
                        {/* {dashboard?.data?.totalApiPartners} */}
                      </span>
                    </div>
                    <div>
                      <TotalInvestment />
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 text-[10px] px-4">
                    <span className="text-black text-[10px]">
                      Cal: (Current Month Rev. / Month till Date(Days))
                    </span>
                    {/* <span className="text-card-user">6.5%</span>
                <span className="text-[9px]">average daily revenue</span> */}
                  </div>
                </div>
                <div
                  className="flex flex-col lg:w-[20%] md:w-[100%] sm:w-[100%] h-[185px]  bg-white border rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="flex flex-row">
                    <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                      <span className="text-card-title text-[14px]">
                        Current Month Extrapolated Sales
                      </span>
                      <span
                        style={{
                          fontSize: "clamp(16px, 2vw, 20px)", // Adjusts font size based on viewport width
                          whiteSpace: "nowrap", // Prevents wrapping of text
                          // Hides overflow if text exceeds the container
                          textOverflow: "ellipsis" // Adds ellipsis if the text overflows
                        }}
                        className="text-color-user text-[20px] font-bold flex flex-wrap"
                      >
                        {/* ₦1 */}₦{" "}
                        {formatNumberWithCommas(
                          (
                            (
                              currentMonthRevenue / daysSinceStartOfMonth
                            ).toFixed(2) * totalDaysInCurrentMonth
                          ).toFixed(0)
                        )}
                        {/* {dashboard?.data?.totalApiPartners} */}
                      </span>
                    </div>
                    <div>
                      <TotalInvestment />
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 text-[10px] px-4">
                    <span className="text-black text-[10px]">
                      Cal: (Current Month Rev. / Month till Date(Days)) * No. of
                      days in Current Month
                    </span>
                    {/* <span className="text-card-user">6.5%</span>
                <span className="text-[9px]">average daily revenue</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex lg:flex-row flex-col md:flex-col gap-3">
                <div
                  className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[185px]  bg-white border rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                    <span className="text-card-title text-[14px]">
                      Yesterday Sales
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(16px, 2vw, 20px)", // Adjusts font size based on viewport width
                        whiteSpace: "nowrap", // Prevents wrapping of text
                        // Hides overflow if text exceeds the container
                        textOverflow: "ellipsis" // Adds ellipsis if the text overflows
                      }}
                      className="text-color-user text-[20px] font-bold"
                    >
                      ₦
                      {formatNumberWithCommas(
                        dashboardlastweek?.data?.yesterdayRevenue
                      )}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span className="text-black text-[12px]">
                        Transaction Count:{" "}
                        {formatNumberWithCommas(
                          dashboardlastweek?.data?.yesterdayTransactionCount
                        )}
                      </span>
                      {/* <span className="text-card-user">8.5%</span>
                <span className="text-[9px]">Up yesterday</span> */}
                    </div>
                  </div>
                  <div>
                    <TotalInvestment />
                  </div>
                </div>
                <div
                  className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[185px]  bg-white border rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                    <span className="text-card-title text-[14px]">
                      Last Week Sales
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(16px, 2vw, 20px)", // Adjusts font size based on viewport width
                        whiteSpace: "nowrap", // Prevents wrapping of text
                        // Hides overflow if text exceeds the container
                        textOverflow: "ellipsis" // Adds ellipsis if the text overflows
                      }}
                      className="text-color-user text-[20px] font-bold"
                    >
                      ₦
                      {formatNumberWithCommas(
                        dashboardlastweek?.data?.lastWeekRevenue
                      )}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span className="text-black text-[12px]">
                        Transaction Count:{" "}
                        {formatNumberWithCommas(
                          dashboardlastweek?.data?.lastWeekTransactionCount
                        )}
                      </span>
                      {/* <span className="text-card-user">8.5%</span>
                <span className="text-[9px]">Up yesterday</span> */}
                    </div>
                  </div>
                  <div>
                    <TotalInvestment />
                  </div>
                </div>
                <div
                  className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[185px]  bg-white border rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                    <span className="text-card-title text-[14px]">
                      Last Month Sales
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(16px, 2vw, 20px)", // Adjusts font size based on viewport width
                        whiteSpace: "nowrap", // Prevents wrapping of text
                        // Hides overflow if text exceeds the container
                        textOverflow: "ellipsis" // Adds ellipsis if the text overflows
                      }}
                      className="text-color-user text-[20px] font-bold flex flex-wrap"
                    >
                      {/* ₦1 */}₦{" "}
                      {formatNumberWithCommas(
                        dashboardlastweek?.data?.lastMonthRevenue
                      )}
                      {/* {dashboard?.data?.totalApiPartners} */}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span className="text-black text-[12px]">
                        Transaction Count:{" "}
                        {formatNumberWithCommas(
                          dashboardlastweek?.data?.lastMonthTransactionCount
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
                  className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[185px]  bg-white border  rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                    <span className="text-card-title text-[14px]">
                      This Year Sales
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(16px, 2vw, 20px)", // Adjusts font size based on viewport width
                        whiteSpace: "nowrap", // Prevents wrapping of text
                        // Hides overflow if text exceeds the container
                        textOverflow: "ellipsis" // Adds ellipsis if the text overflows
                      }}
                      className="text-color-user text-[20px] font-bold flex flex-wrap"
                    >
                      ₦
                      {formatNumberWithCommas(
                        dashboardyearly?.data?.totalRevenue
                      )}
                    </span>
                    <div className="flex flex-col gap-1 text-[10px]">
                      <span className="text-black text-[12px]">
                        Transaction Count:{" "}
                        {formatNumberWithCommas(
                          dashboardsummary?.data?.totalTransactionCount
                        )}
                      </span>
                      <span className="text-[11px] flex flex-row">
                        Last Year Sales:
                        <span className="font-bold text-[11px]">
                          ₦
                          {formatNumberWithCommas(
                            dashboardlastweek?.data?.lastYearRevenue
                          )}{" "}
                        </span>
                      </span>
                      <span className="text-black text-[12px]">
                        Last year Count:{" "}
                        <span className="font-bold">
                          {formatNumberWithCommas(
                            dashboardlastweek?.data?.lastYearTransactionCount
                          )}
                        </span>
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
                  className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[185px]  bg-white border  rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                    <span className="text-card-title text-[14px]">
                      Total Sales
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(16px, 2vw, 20px)", // Adjusts font size based on viewport width
                        whiteSpace: "nowrap", // Prevents wrapping of text
                        // Hides overflow if text exceeds the container
                        textOverflow: "ellipsis" // Adds ellipsis if the text overflows
                      }}
                      className="text-color-user text-[20px] font-bold flex flex-wrap"
                    >
                      ₦{formatNumberWithCommas(totalsales?.data?.totalSales)}
                    </span>
                    <div className="flex flex-row gap-1 text-[10px]">
                      <span className="text-black text-[12px]">
                        Transaction Count:{" "}
                        {formatNumberWithCommas(
                          totalsales?.data?.transactionCount
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

            {sessionStorage.getItem("roleName") === "ADMIN" && (
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center mb-1">
                  <span className="text-circle-color font-bold">
                    User Roles
                  </span>
                </div>
                <div className="flex lg:flex-row flex-col md:flex-col gap-3">
                  <div
                    className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded-custom"
                    style={{
                      boxShadow: "7.5px 7.5px 67.5px 0px #0000000D",
                      cursor: "pointer"
                    }}
                    onClick={() => navigate("/user")}
                  >
                    <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                      <span className="text-card-title text-[14px]">
                        Total Users
                      </span>
                      <span className="text-color-user text-[20px] font-bold">
                        {formatNumberWithCommas(
                          dashboard?.data?.totalUsersRole
                        )}
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
                    style={{
                      boxShadow: "7.5px 7.5px 67.5px 0px #0000000D",
                      cursor: "pointer"
                    }}
                    onClick={() => navigate("/notification")}
                  >
                    <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                      <span className="text-card-title text-[14px]">
                        Total Agents
                      </span>
                      <span className="text-color-user text-[20px] font-bold">
                        {formatNumberWithCommas(dashboard?.data?.totalAgents)}
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
                      <User />
                      {/* <TotalBill /> */}
                      {/* <TotalTransfer /> */}
                    </div>
                  </div>
                  <div
                    className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded-custom"
                    style={{
                      boxShadow: "7.5px 7.5px 67.5px 0px #0000000D",
                      cursor: "pointer"
                    }}
                    onClick={() => navigate("/api")}
                  >
                    <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                      <span className="text-card-title text-[14px]">
                        Total API-Partners
                      </span>
                      <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                        {/* ₦1 */}
                        {formatNumberWithCommas(
                          dashboard?.data?.totalApiPartners
                        )}
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
                      <User />
                    </div>
                  </div>
                  <div
                    className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                    style={{
                      boxShadow: "7.5px 7.5px 67.5px 0px #0000000D",
                      cursor: "pointer"
                    }}
                    onClick={() => navigate("/earning")}
                  >
                    <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                      <span className="text-card-title text-[14px]">
                        Total Earning Partner
                      </span>
                      <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                        {formatNumberWithCommas(
                          dashboard?.data?.totalEarningPartners
                        )}
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
                      <User />
                    </div>
                  </div>
                  <div
                    className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                    style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                  >
                    <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                      <span className="text-card-title text-[14px]">
                        Total Admin
                      </span>
                      <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                        {/* {dashboardyearly?.data?.totalRevenue} */} 1
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
                      <User />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {sessionStorage.getItem("roleName") === "ADMIN" && (
              <div className="flex flex-row justify-end items-center">
                <button
                  onClick={() => setStep(72)}
                  className="px-2 h-[35px]  flex flex-row gap-1 items-center bg-route-color lg:w-[20%] md:w-[20%] sm:w-[20%] w-[60%] rounded-custom text-white font-semibold text-[11px] justify-center"
                >
                  Onboarding Issues
                </button>
              </div>
            )}
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
                {transactions?.data?.data && (
                  <>
                    <Tables
                      setDownload={setDownload}
                      setStep={setStep}
                      transfers
                      currentPage={currentPage}
                      data={transactions?.data?.data?.slice(0, 10)}
                    />
                    <div className="flex flex-row w-[100%] justify-end pr-4">
                      <span
                        onClick={() => navigate("/transactions")}
                        className="text-black text-[14px] cursor-pointer"
                      >
                        View all
                      </span>
                    </div>
                  </>
                )}
                {!transactions?.status && (
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
            {sessionStorage.getItem("roleName") === "ADMIN" && (
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center mb-2">
                  <span className="text-circle-color font-bold">
                    Monthly Revenue Per Discos Overview
                  </span>
                  <Sign />
                </div>
                <div className="flex lg:flex-row md:flex-col flex-col gap-3">
                  {/* <div
            className="flex flex-col lg:w-[25%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
            style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
          >
            <div className="flex flex-row justify-center">
              <span className="text-second-card-text">
                USSD Usage Per Month
              </span>
            </div>
            <MixedLineBarChart background={"#c7cbed"} color={"#344BFD"} />
            <div className="flex flex-row justify-center gap-2">
              <span className="text-second-card-text text-[16px]">44%</span>
              <div className="flex flex-col text-compare-second-card text-[10px]">
                <span>Your performance is 44%</span>
                <span>better compare to last month</span>
              </div>
            </div>
            <div className="flex -flex-row justify-center">
              <button className="bg-details-bg w-[180px] text-[12px] h-[40px] text-details-color rounded-custom">
                Details
              </button>
            </div>
          </div> */}
                  <div
                    className="flex flex-col lg:w-[75%] md:w-[100%] sm:w-[100%] h-[420px] py-4 bg-white border rounded-custom gap-2"
                    style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                  >
                    {/* <div className="flex flex-col border rounded-custom gap-2 pt-3"> */}
                    <div className="flex flex-row px-4 gap-4 items-center justify-between">
                      <div className="flex flex-row gap-4 items-center">
                        {discoNames[0] && (
                          <>
                            <span className="w-[10px] h-[10px] rounded-circle bg-[#E9EDF5]"></span>
                            {discoNames[0]}
                          </>
                        )}
                        {discoNames[1] && (
                          <>
                            <span className="w-[10px] h-[10px] rounded-circle bg-[#9932CC]"></span>
                            {discoNames[1]}
                          </>
                        )}
                        {discoNames[2] && (
                          <>
                            <span className="w-[10px] h-[10px] rounded-circle bg-[#c29bd6]"></span>
                            {discoNames[2]}
                          </>
                        )}
                        {discoNames[3] && (
                          <>
                            <span className="w-[10px] h-[10px] rounded-circle bg-[#d81694]"></span>
                            {discoNames[3]}
                          </>
                        )}
                        {discoNames[4] && (
                          <>
                            <span className="w-[10px] h-[10px] rounded-circle bg-[#1E90FF]"></span>
                            {discoNames[4]}
                          </>
                        )}
                        {/* <span className="w-[10px] h-[10px] rounded-circle bg-discos"></span> IBEDC */}
                      </div>
                      {/* <div className="flex flex-row gap-4 items-center">
                <span className="text-[14px]">Previous Month</span>
                <div className="position:relative w-[120px] h-[30px] rounded-custom px-[4px] flex flex-row border items-center">
                  <DatePicker
                    className="text-[8px] outline-none"
                    selected={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
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
                <Ellipses />
              </div> */}
                    </div>
                    <DoubleBarChart
                      data={
                        dashboardsummary?.data?.monthlyRevenues
                          ? dashboardsummary?.data?.monthlyRevenues
                          : []
                      }
                    />
                    {/* </div> */}
                    {/* <div className="flex flex-row justify-center">
              <span className="text-second-card-text">Monthly Revenue</span>
            </div>
            <MixedLineBarChart
              color={"#05B2FA"}
              background={"#c3e2f0"}
              data={dashboardyearly?.data?.monthlyRevenues}
            />
            <div className="flex flex-row justify-center gap-2">
              <span className="text-second-card-text text-[16px]">44%</span>
              <div className="flex flex-col text-compare-second-card text-[10px]">
                <span>Your performance is 44%</span>
                <span>better compare to last month</span>
              </div>
            </div>
            <div className="flex -flex-row justify-center">
              <button className="bg-details-colortwo w-[180px] text-[12px] h-[40px] text-details-bgtwo rounded-custom">
                Details
              </button>
            </div> */}
                  </div>
                  {/* <div
            className="flex flex-col lg:w-[25%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
            style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
          >
            <div className="flex flex-row justify-center">
              <span className="text-second-card-text">Daily Revenue</span>
            </div>
            <MixedLineBarChart
              color={"rgba(255, 160, 81, 1)"}
              background={"rgba(255, 160, 81, 0.2)"}
              daily
            />
            <div className="flex flex-row justify-center gap-2">
              <span className="text-second-card-text text-[16px]">44%</span>
              <div className="flex flex-col text-compare-second-card text-[10px]">
                <span>Your performance is 44%</span>
                <span>better compare to last month</span>
              </div>
            </div>
            <div className="flex -flex-row justify-center">
              <button className="bg-details-loanbg w-[180px] text-[12px] h-[40px] text-details-loancolor rounded-custom">
                Details
              </button>
            </div>
          </div> */}
                  <div
                    className="flex flex-col lg:w-[25%] md:w-[100%] sm:w-[100%] h-[420px] py-4 bg-white border rounded-custom gap-2"
                    style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                  >
                    <div className="flex flex-row px-4 gap-4 items-center justify-center">
                      <span className="text-[14px]">Disco-Meter</span>
                      {/* <div className="position:relative w-[120px] h-[30px] rounded-custom px-[5px] flex flex-row border items-center"> */}
                    </div>
                    {listofmeter?.data ? (
                      <Donuts data={listofmeter?.data} />
                    ) : (
                      ""
                    )}
                    <div className="flex flex-col gap-3 px-[15px]">
                      {listofmeter?.data &&
                      listofmeter.data.length > 0 &&
                      listofmeter.data[0]?.discoName ? (
                        <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-20 md:gap-20 sm:gap-6">
                          <div className="flex flex-row gap-1 items-center text-[12px]">
                            <span className="w-[15px] h-[15px] rounded-circle bg-details-color"></span>
                            <span className="text-compare-second-card">
                              {listofmeter.data[0].discoName}
                            </span>
                            <span className="text-circle-color">
                              {listofmeter.data[0]?.totalMeters ?? 0}{" "}
                              {/* Default to 0 if undefined */}
                            </span>
                          </div>
                        </div>
                      ) : null}

                      {listofmeter?.data &&
                      listofmeter.data.length > 1 &&
                      listofmeter.data[1]?.discoName ? (
                        <div className="flex flex-row gap-1 items-center text-[12px]">
                          <span className="w-[15px] h-[15px] rounded-circle bg-cable-bg"></span>
                          <span className="text-compare-second-card">
                            {listofmeter.data[1].discoName}
                          </span>
                          <span className="text-circle-color">
                            {listofmeter.data[1]?.totalMeters ?? 0}{" "}
                            {/* Default to 0 if undefined */}
                          </span>
                        </div>
                      ) : null}

                      <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-20 md:gap-20 sm:gap-6">
                        {listofmeter?.data &&
                        listofmeter.data.length > 2 &&
                        listofmeter.data[2]?.discoName ? (
                          <div className="flex flex-row gap-1 items-center text-[12px]">
                            <span className="w-[15px] h-[15px] rounded-circle bg-data-bg"></span>
                            <span className="text-compare-second-card">
                              {listofmeter.data[2].discoName}
                            </span>
                            <span className="text-circle-color">
                              {listofmeter.data[2]?.totalMeters ?? 0}{" "}
                              {/* Default to 0 if undefined */}
                            </span>
                          </div>
                        ) : null}

                        {listofmeter?.data &&
                        listofmeter.data.length > 3 &&
                        listofmeter.data[3]?.discoName ? (
                          <div className="flex flex-row gap-1 items-center text-[12px]">
                            <span className="w-[15px] h-[15px] rounded-circle bg-elect-bg"></span>
                            <span className="text-compare-second-card">
                              {listofmeter.data[3].discoName}
                            </span>
                            <span className="text-circle-color">
                              {listofmeter.data[3]?.totalMeters ?? 0}{" "}
                              {/* Default to 0 if undefined */}
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {sessionStorage.getItem("roleName") === "ADMIN" && (
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-circle-color font-bold">
                    Monthly Transaction Count Per Disco Overview
                  </span>
                  <Sign />
                </div>
                <div className="flex flex-col border rounded-custom gap-2 pt-3">
                  <div className="flex flex-row px-4 gap-4 items-center justify-between">
                    <div className="flex flex-row gap-4 items-center">
                      {discoNames[0] && (
                        <>
                          <span className="w-[10px] h-[10px] rounded-circle bg-[#E9EDF5]"></span>
                          {discoNames[0]}
                        </>
                      )}
                      {discoNames[1] && (
                        <>
                          <span className="w-[10px] h-[10px] rounded-circle bg-[#9932CC]"></span>
                          {discoNames[1]}
                        </>
                      )}
                      {discoNames[2] && (
                        <>
                          <span className="w-[10px] h-[10px] rounded-circle bg-[#c29bd6]"></span>
                          {discoNames[2]}
                        </>
                      )}
                      {discoNames[3] && (
                        <>
                          <span className="w-[10px] h-[10px] rounded-circle bg-[#d81694]"></span>
                          {discoNames[3]}
                        </>
                      )}
                      {discoNames[4] && (
                        <>
                          <span className="w-[10px] h-[10px] rounded-circle bg-[#1E90FF]"></span>
                          {discoNames[4]}
                        </>
                      )}
                      {/* <span className="w-[10px] h-[10px] rounded-circle bg-discos"></span> IBEDC */}
                    </div>
                    {/* <div className="flex flex-row gap-4 items-center">
                <span className="text-[14px]">Previous Month</span>
                <div className="position:relative w-[120px] h-[30px] rounded-custom px-[4px] flex flex-row border items-center">
                  <DatePicker
                    className="text-[8px] outline-none"
                    selected={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
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
                <Ellipses />
              </div> */}
                  </div>
                  <DoubleBarChartReal
                    data={dashboardsummary?.data?.monthlyRevenues}
                  />
                  {/* <DoubleLineChart data={dashboardsummary?.data?.monthlyRevenues} /> */}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
