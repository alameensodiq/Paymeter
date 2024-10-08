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
import { ReactComponent as Goback } from "./../../assets/goback.svg";
import { UserData } from "../Store/Apis/UserData";
import { Loader } from "./Loader";

const UserDetails = ({ title }) => {
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const datePickerRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let id = window?.location?.pathname.split("/")[2];
  console.log(id);

  useEffect(() => {
    if (sessionStorage.getItem("token") && id) {
      dispatch(UserData({ id }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }

    //eslint-disable-next-line
  }, []);

  const { userdata, authenticatinguserdata } = useSelector(
    (state) => state?.userdata
  );
  console.log(userdata);

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
          {userdata?.data?.data ? (
            <>
              <div className="flex lg:flex-row flex-col md:flex-col gap-3">
                <div
                  className="flex flex-row lg:w-[25%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded-custom"
                  style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
                >
                  <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                    <span className="text-card-title text-[14px]">
                      Total Customers
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
                      Total Transfers
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
                      {userdata?.data?.data?.wallet?.currency}{" "}
                      {userdata?.data?.data?.wallet?.balance}
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
                  <Tables
                    overview
                    data={userdata?.data?.data?.systemTransactions}
                  />
                </div>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
