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
import { Forgot } from "../Store/Apis/ForgotPassword";
import { GetSettings } from "../Store/Apis/GetSettings";
import { Loader } from "./Loader";

const Setting = ({ title }) => {
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
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(GetSettings());
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }
    if (reload) {
      dispatch(GetSettings());
      //   dispatch(Banks({ startDate, searcher, currentPage }));
      setReload(false);
    }

    //eslint-disable-next-line
  }, [reload, searcher, currentPage, startDate]);

  const { getsettings, authenticatinggetsettings } = useSelector(
    (state) => state?.getsettings
  );
  console.log(getsettings);

  //   const { banks, authenticatingbanks } = useSelector((state) => state?.banks);
  //   console.log(banks);

  const next = getsettings?.data?.meta?.next;
  const previous = getsettings?.data?.meta?.prev;
  const totalPosts = getsettings?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  useEffect(() => {
    // setTimeout(() => {
    setloading(true);
    // }, [2000]);
  }, [getsettings?.data]);

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  const SendForgot = () => {
    dispatch(Forgot());
  };

  return (
    <div className="flex flex-row">
      <AppUserModal setStep={setStep} step={step} setReload={setReload} />
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={title} />
        </div>
        <AppUserModal setStep={setStep} step={step} setReload={setReload} />
        <div className="w-[100%] py-9 px-5 flex flex-row gap-10">
          <button
            onClick={() => SendForgot()}
            className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[20%] rounded-custom text-white font-semibold text-[11px] justify-center"
          >
            Forgot Password
          </button>
          <button
            onClick={() => setStep(7)}
            className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[20%] rounded-custom text-white font-semibold text-[11px] justify-center"
          >
            Change Password
          </button>
          <button
            onClick={() => setStep(12)}
            className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[20%] rounded-custom text-white font-semibold text-[11px] justify-center"
          >
            Create Commission
          </button>
        </div>
        {loading ? (
          <>
            <Tables setting data={getsettings?.data?.data} setStep={setStep} />
            {getsettings?.data?.meta?.totalCount >= 1 && (
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
  );
};

export default Setting;
