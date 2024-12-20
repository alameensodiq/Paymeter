import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import { ReactComponent as Filter } from "./../../assets/Filter.svg";
import Tables from "../Reusables/Table";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import { ReactComponent as Goback } from "./../../assets/goback.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Banks } from "../Store/Apis/Banks";
import AppUserModal from "../../Modal/AppUserModal";
import Pagination from "../Reusables/Pagination";
import empty from "../../assets/empty.png";
import { Loader } from "./Loader";
import { metersing } from "../Store/Apis/meters";

const Meter = ({ title }) => {
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [searcher, setSearcher] = useState("");
  const [loading, setloading] = useState(false);
  const [discname, setdiscname] = useState("");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [reload, setReload] = useState(false);

  let id = window?.location?.pathname.split("/")[2];
  console.log(id);

  useEffect(() => {
    if (sessionStorage.getItem("token") && id) {
      dispatch(metersing({ id }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }
    if (reload && id) {
      // dispatch(metersing({ startDate, searcher, currentPage, id }));
      dispatch(metersing({ id }));
      setReload(false);
    }

    //eslint-disable-next-line
  }, [reload, searcher, currentPage, startDate]);

  const { meters, authenticatingmeters } = useSelector(
    (state) => state?.meters
  );
  console.log(meters);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, [3000]);
  }, [meters?.data]);

  const next = meters?.data?.meta?.next;
  const previous = meters?.data?.meta?.prev;
  const totalPosts = meters?.data?.meta?.totalCount;
  const datePickerRef = useRef(null);

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  const Downloading = () => {
    const data = meters?.data?.data || [];
    const headers = data.length > 0 ? Object.keys(data[0]) : [];
    const objValues = data.map((item) => Object.values(item).join(","));
    const csvContent = [headers.join(","), ...objValues].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Disco.csv";
    document.body.appendChild(a); // Required for Firefox
    a.click();
    document.body.removeChild(a); // Clean up
    URL.revokeObjectURL(url);
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
          discname={discname}
          setdiscname={setdiscname}
          setStep={setStep}
          step={step}
          setReload={setReload}
        />
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div>
            <Goback
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/discos")}
            />
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[25px] font-semibold">
              {meters?.data?.data[0]?.customerName}Meter Transactions
            </span>
            {/* <div className="relative flex flex-row w-[50%]">
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
            </div> */}
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
              <button
                onClick={() => Downloading()}
                className="px-2 flex flex-row gap-1 items-center bg-route-color w-[12%] rounded-custom text-white font-semibold text-[11px] h-[40px]"
              >
                Download Report <Download />
              </button>
            </div>
            <hr className="" />
            <div className="flex flex-row justify-end px-8 gap-2">
              <Filter />
              <span className="text-route-noncolor text-[12px]">Filters</span>
            </div>
            {loading ? (
              <>
                {meters?.data?.data?.length >= 1 && (
                  <>
                    <Tables
                      setdiscname={setdiscname}
                      metering
                      setStep={setStep}
                      data={meters?.data?.data}
                      currentPage={currentPage}
                    />
                    <Pagination
                      set={activater}
                      currentPage={currentPage}
                      postsPerPage={postsPerPage}
                      totalPosts={totalPosts}
                      paginate={paginate}
                      previous={previous}
                      next={next}
                    />
                  </>
                )}
                {!meters?.status && (
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
                {/* {meters?.data?.data?.length >= 1 ? (
                  <>
                    <Tables
                      setdiscname={setdiscname}
                      metering
                      setStep={setStep}
                      data={meters?.data?.data}
                    />
                    <Pagination
                      set={activater}
                      currentPage={currentPage}
                      postsPerPage={postsPerPage}
                      totalPosts={totalPosts}
                      paginate={paginate}
                      previous={previous}
                      next={next}
                    />
                  </>
                ) : meters?.data?.data?.length === 0 ? (
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
                ) : (
                  ""
                )} */}
              </>
            ) : (
              <Loader />
            )}
            {/* {meters?.data?.data >= 1 && ( */}
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meter;
