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

const Dashboard = ({ title }) => {
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const datePickerRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(Dashboards());
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }

    //eslint-disable-next-line
  }, []);

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  const { dashboard, authenticatingdashboard } = useSelector(
    (state) => state?.dashboard
  );
  console.log(dashboard);
  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={title} />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-7">
          <div className="flex flex-row justify-start">
            <select className="border rounded-custom p-1 text-[10px] w-[10%] h-[30px] outline-none">
              <option>Hope bank</option>
              <option>GT bank</option>
              <option>Sterling bank</option>
            </select>
          </div>
          <div className="flex lg:flex-row flex-col md:flex-col gap-3">
            <div
              className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded-custom"
              style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
            >
              <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                <span className="text-card-title text-[14px]">
                  Total Customers
                </span>
                <span className="text-color-user text-[20px] font-bold">
                  {dashboard?.data?.totalCustomers}
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
              className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
              style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
            >
              <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                <span className="text-card-title text-[14px]">
                  Total Transfers
                </span>
                <span className="text-color-user text-[20px] font-bold">
                  {dashboard?.data?.totalTransfers}
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
                  Total Agents
                </span>
                <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                  {/* ₦1 */}
                  ---
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
              className="flex flex-row lg:w-[20%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
              style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
            >
              <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                <span className="text-card-title text-[14px]">
                  Total Api-Partner
                </span>
                <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                  ----
                  {/* {dashboard?.data?.totalRevenue?.monthly?.NGN} */}
                </span>
                <div className="flex flex-row gap-1 text-[10px]">
                  <span>
                    <Increase />
                  </span>
                  <span className="text-card-user">6.5%</span>
                  <span className="text-[9px]">average monthly revenue</span>
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
                  Total Revenue
                </span>
                <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                  {dashboard?.data?.totalRevenue?.yearly?.NGN}
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
          <div className="flex lg:flex-row md:flex-col flex-col gap-3">
            <div
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
            </div>
            <div
              className="flex flex-col lg:w-[25%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
              style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
            >
              <div className="flex flex-row justify-center">
                <span className="text-second-card-text">Monthly Revenue</span>
              </div>
              <MixedLineBarChart color={"#05B2FA"} background={"#c3e2f0"} />
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
              </div>
            </div>
            <div
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
            </div>
            <div
              className="flex flex-col lg:w-[25%] md:w-[100%] sm:w-[100%] h-[320px] py-4 bg-white border rounded-custom gap-2"
              style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
            >
              <div className="flex flex-row px-4 gap-4 items-center justify-end">
                <span className="text-[14px]">Disco-Customer</span>
                <div className="position:relative w-[120px] h-[30px] rounded-custom px-[5px] flex flex-row border items-center">
                  {/* <input className='input' type='date' /> */}
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
                </div>
              </div>
              <Donuts />
              <div className="flex flex-col gap-3 px-[15px]">
                <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-20 md:gap-20 sm:gap-6">
                  <div className="flex flex-row gap-1 items-center text-[12px]">
                    <span className="w-[15px] h-[15px] rounded-circle bg-details-color"></span>
                    <span className="text-compare-second-card">IBADAN</span>
                    <span className="text-circle-color">3000</span>
                  </div>
                  <div className="flex flex-row gap-1 items-center text-[12px]">
                    <span className="w-[15px] h-[15px] rounded-circle bg-cable-bg"></span>
                    <span className="text-compare-second-card">IKEJA</span>
                    <span className="text-circle-color">1000</span>
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-row sm:flex-row lg:gap-20 md:gap-20 sm:gap-6">
                  <div className="flex flex-row gap-1 items-center text-[12px]">
                    <span className="w-[15px] h-[15px] rounded-circle bg-data-bg"></span>
                    <span className="text-compare-second-card">EKO</span>
                    <span className="text-circle-color">555</span>
                  </div>
                  <div className="flex flex-row gap-1 items-center text-[12px]">
                    <span className="w-[15px] h-[15px] rounded-circle bg-elect-bg"></span>
                    <span className="text-compare-second-card">ABUJA</span>
                    <span className="text-circle-color">987</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  {dashboard?.data?.totalMonthlyRevenue[0]?.disco && (
                    <>
                      <span className="w-[10px] h-[10px] rounded-circle bg-[#E9EDF5]"></span>
                      {dashboard?.data?.totalMonthlyRevenue[0]?.disco}
                    </>
                  )}
                  {dashboard?.data?.totalMonthlyRevenue[1]?.disco && (
                    <>
                      <span className="w-[10px] h-[10px] rounded-circle bg-[#9932CC]"></span>
                      {dashboard?.data?.totalMonthlyRevenue[1]?.disco}
                    </>
                  )}
                  {dashboard?.data?.totalMonthlyRevenue[2]?.disco && (
                    <>
                      <span className="w-[10px] h-[10px] rounded-circle bg-[#c29bd6]"></span>
                      {dashboard?.data?.totalMonthlyRevenue[2]?.disco}
                    </>
                  )}
                  {dashboard?.data?.totalMonthlyRevenue[3]?.disco && (
                    <>
                      <span className="w-[10px] h-[10px] rounded-circle bg-[#d81694]"></span>
                      {dashboard?.data?.totalMonthlyRevenue[3]?.disco}
                    </>
                  )}
                  {dashboard?.data?.totalMonthlyRevenue[4]?.disco && (
                    <>
                      <span className="w-[10px] h-[10px] rounded-circle bg-button-bg"></span>
                      {dashboard?.data?.totalMonthlyRevenue[4]?.disco}
                    </>
                  )}
                  {/* <span className="w-[10px] h-[10px] rounded-circle bg-discos"></span> IBEDC */}
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <span className="text-[14px]">Previous Month</span>
                  <div className="position:relative w-[120px] h-[30px] rounded-custom px-[4px] flex flex-row border items-center">
                    {/* <input className='input' type='date' /> */}
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
                  </div>
                  <Ellipses />
                </div>
              </div>
              <DoubleLineChart data={dashboard?.data?.totalMonthlyCount} />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center">
              <span className="text-circle-color font-bold">
                Monthly Revenue Per Discos Overview
              </span>
              <Sign />
            </div>
            <div className="flex flex-col border rounded-custom gap-2 pt-3">
              <div className="flex flex-row px-4 gap-4 items-center justify-between">
                <div className="flex flex-row gap-4 items-center">
                  {dashboard?.data?.totalMonthlyRevenue[0]?.disco && (
                    <>
                      <span className="w-[10px] h-[10px] rounded-circle bg-[#E9EDF5]"></span>
                      {dashboard?.data?.totalMonthlyRevenue[0]?.disco}
                    </>
                  )}
                  {dashboard?.data?.totalMonthlyRevenue[1]?.disco && (
                    <>
                      <span className="w-[10px] h-[10px] rounded-circle bg-[#9932CC]"></span>
                      {dashboard?.data?.totalMonthlyRevenue[1]?.disco}
                    </>
                  )}
                  {dashboard?.data?.totalMonthlyRevenue[2]?.disco && (
                    <>
                      <span className="w-[10px] h-[10px] rounded-circle bg-[#c29bd6]"></span>
                      {dashboard?.data?.totalMonthlyRevenue[2]?.disco}
                    </>
                  )}
                  {dashboard?.data?.totalMonthlyRevenue[3]?.disco && (
                    <>
                      <span className="w-[10px] h-[10px] rounded-circle bg-[#d81694]"></span>
                      {dashboard?.data?.totalMonthlyRevenue[3]?.disco}
                    </>
                  )}
                  {dashboard?.data?.totalMonthlyRevenue[4]?.disco && (
                    <>
                      <span className="w-[10px] h-[10px] rounded-circle bg-button-bg"></span>
                      {dashboard?.data?.totalMonthlyRevenue[4]?.disco}
                    </>
                  )}
                  {/* <span className="w-[10px] h-[10px] rounded-circle bg-discos"></span> IBEDC */}
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <span className="text-[14px]">Previous Month</span>
                  <div className="position:relative w-[120px] h-[30px] rounded-custom px-[4px] flex flex-row border items-center">
                    {/* <input className='input' type='date' /> */}
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
                  </div>
                  <Ellipses />
                </div>
              </div>
              <DoubleBarChart data={dashboard?.data?.totalMonthlyRevenue} />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center">
              <span className="text-circle-color font-bold">
                Recent Transactions
              </span>
            </div>
            <div className="flex flex-col border rounded-custom gap-6 py-6">
              <div className="flex flex-row px-4 gap-4 items-center justify-end">
                <Filtering />
                <span className="text-[14px]">Filters</span>
              </div>
              <Tables overview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
