import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import { ReactComponent as Increase } from "../../assets/increase.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as TotalTransfer } from "../../assets/totaltransfer.svg";
import { ReactComponent as TotalInvestment } from "../../assets/totalinvestments.svg";
import { ReactComponent as TotalBill } from "../../assets/totalbill.svg";
import empty from "../../assets/empty.png";
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
import { EarningTrans } from "../Store/Apis/EarningTrans";
import { AgentTrans } from "../Store/Apis/AgentTrans";
import { Agentsdetailsrevenue } from "../Store/Apis/Agentsdetailsrevenue";
import { AgentManager } from "../Store/Apis/AgentManager";

const ManagerAgentView = ({ title }) => {
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
  const [searcher, setSearcher] = useState("");
  let id = window?.location?.pathname.split("/")[2];
  console.log(id);

  const { agentsdetailsrevenue, authenticatingagentsdetailsrevenue } =
    useSelector((state) => state?.agentsdetailsrevenue);
  console.log(agentsdetailsrevenue);

  const { getcommission, authenticatinggetcommission } = useSelector(
    (state) => state?.getcommission
  );
  console.log(getcommission);
  const { userwallet, authenticatinguserwallet } = useSelector(
    (state) => state?.userwallet
  );
  console.log(userwallet);

  const { agentmanager, authenticatingagentmanager } = useSelector(
    (state) => state?.agentmanager
  );
  console.log(agentmanager);

  const [showCommission, setShowCommission] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("token") && id) {
      //   dispatch(Agentsdetailsrevenue({ id }));
      dispatch(AgentManager({ id, searcher, currentPage }));
      // dispatch(UserWallet({ id }));
      // dispatch(GetCommission({ id }));
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }
    if (reload && sessionStorage.getItem("token") && id) {
      //   dispatch(Agentsdetailsrevenue({ id }));
      dispatch(AgentManager({ id, searcher, currentPage }));
      // dispatch(UserWallet({ id }));
      // dispatch(GetCommission({ id }));
    }

    //eslint-disable-next-line
  }, [agentmanager?.status, reload, searcher, currentPage]);

  const isEarningRoute = location.pathname.startsWith("/user/");
  const isEarningRoute2 = location.pathname.startsWith("/agents/");

  const next = agentmanager?.data?.transactions?.meta?.next;
  const previous = agentmanager?.data?.transactions?.meta?.prev;
  const totalPosts = agentmanager?.data?.transactions?.meta?.totalCount;

  const next2 = getcommission?.data?.meta?.next;
  const previous2 = getcommission?.data?.meta?.prev;
  const totalPosts2 = getcommission?.data?.meta?.totalCount;

  const next3 = userwallet?.data?.meta?.next;
  const previous3 = userwallet?.data?.meta?.prev;
  const totalPosts3 = userwallet?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, [3000]);
  }, [agentsdetailsrevenue?.data, agentmanager?.data]);

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  const formatNumberWithCommas = (number) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
            naming={naming}
            setDownload={setDownload}
            downloading={downloading}
            setNaming={setNaming}
            setStep={setStep}
            step={step}
            setReload={setReload}
          />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-7">
          <div className="flex flex-row justify-start">
            <div>
              <Goback
                style={{ cursor: "pointer" }}
                onClick={() => navigate(-1)}
              />
            </div>
          </div>
          <>
            {/* <div className="flex lg:flex-row flex-col md:flex-col gap-3">
              <div
                className="flex flex-row lg:w-[50%] md:w-[100%] sm:w-[100%] h-[150px]  bg-white border rounded rounded-custom"
                style={{ boxShadow: "7.5px 7.5px 67.5px 0px #0000000D" }}
              >
                <div className="w-[77%] flex flex-col gap-2 mt-10 pl-5">
                  <span className="text-card-title text-[14px]">
                    Total Revenue
                  </span>
                  <span className="text-color-user text-[20px] font-bold flex flex-wrap">
                    {formatNumberWithCommas(
                      agentsdetailsrevenue?.data?.totalRevenue
                    )}
                  </span>
                </div>
                <div>
                  <TotalInvestment />
                </div>
              </div>
            </div> */}
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
              </div>
            </div>
            {loading ? (
              <>
                {agentmanager?.data?.transactions?.meta?.totalCount >= 1 &&
                  status === "accepted" && (
                    <Tables
                      setDownload={setDownload}
                      overviewtransaction
                      data={agentmanager?.data?.transactions?.data}
                    />
                  )}
                {(!agentmanager?.status ||
                  agentmanager?.data?.transactions?.data?.length === 0) &&
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
                {agentmanager?.data?.transactions?.meta?.totalCount >= 1 &&
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

export default ManagerAgentView;
