import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import Tables from "../Reusables/Table";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { Discometer } from "../Store/Apis/Discometer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { ReactComponent as Goback } from "./../../assets/goback.svg";
import AppUserModal from "../../Modal/AppUserModal";
import empty from "../../assets/empty.png";
import { Loader } from "./Loader";

const CustomerInfo = ({ title }) => {
  const [whitecrust, setWhitecrust] = useState(true);
  const [other, setOther] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [reload, setReload] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searcher, setSearcher] = useState("");
  const [loading, setloading] = useState(false);
  let id = window?.location?.pathname.split("/")[2];
  console.log(id);

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

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(Discometer({ id, searcher, currentPage }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }
    if (reload) {
      dispatch(Discometer());
      setReload(false);
    }

    //eslint-disable-next-line
  }, [reload, searcher, currentPage]);

  const { discometer, authenticatingdiscometer } = useSelector(
    (state) => state?.discometer
  );
  console.log(discometer);

  useEffect(() => {
    // setTimeout(() => {
    setloading(true);
    // }, [2000]);
  }, [discometer?.data]);

  const Downloading = () => {
    const data = discometer?.data?.data || [];
    const headers = data.length > 0 ? Object.keys(data[0]) : [];
    const objValues = data.map((item) => Object.values(item).join(","));
    const csvContent = [headers.join(","), ...objValues].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Perdisco.csv";
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
      <AppUserModal setStep={setStep} step={step} setReload={setReload} />
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={title} />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row h-[40px] justify-between">
            <div className="flex flex-col text-center">
              {/* <div className="flex flex-row text-center pr-[40px]"> */}
              <div>
                <Goback
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(-1)}
                />
              </div>
              <span className="text-route-name text-[20px] font-semibold">
                {discometer?.data?.data[0]?.disco?.name}
              </span>
              {/* </div> */}
            </div>
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
              <div className="flex h-[45px] w-[40%] flex-row justify-end gap-3 px-3">
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
                <button
                  onClick={() => setStep(11)}
                  className="px-2 flex  flex-row gap-1 items-center bg-route-color w-[80%] rounded-custom text-white font-semibold text-[11px]"
                >
                  Commission
                </button>
                <button className="px-2 flex  flex-row gap-1 items-center bg-route-color w-[100%] rounded-custom text-white font-semibold text-[11px]">
                  Add New Meter
                </button>
                <button
                  onClick={() => Downloading()}
                  className="px-2 flex  flex-row gap-1 items-center bg-route-color w-[100%] rounded-custom text-white font-semibold text-[10px]"
                >
                  Download Report <Download />
                </button>
              </div>
            </div>
            {loading ? (
              <>
                {discometer?.data?.data?.length >= 1 ? (
                  <Tables meter data={discometer?.data?.data} />
                ) : discometer?.data?.data?.length === 0 ? (
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

export default CustomerInfo;
