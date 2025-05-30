import React, { useState } from "react";
import { ReactComponent as Crust } from "./../../assets/crustlogoside.svg";
import { ReactComponent as Dashboard } from "./../../assets/Dashboard.svg";
import { ReactComponent as DashboardColor } from "./../../assets/DashboardColor.svg";
import { ReactComponent as Cable } from "./../../assets/Cable.svg";
import { ReactComponent as CableColor } from "./../../assets/CableColor.svg";
import { ReactComponent as Data } from "./../../assets/Data.svg";
import { ReactComponent as DataColor } from "./../../assets/DataColor.svg";
import { ReactComponent as Settings } from "./../../assets/Report.svg";
import { ReactComponent as SettingsColor } from "./../../assets/ReportColor.svg";
import { ReactComponent as Transfers } from "./../../assets/Transfers.svg";
import { ReactComponent as TransfersColor } from "./../../assets/TransfersColor.svg";
import { ReactComponent as Investments } from "./../../assets/Investments.svg";
import { ReactComponent as InvestmentsColor } from "./../../assets/InvestmentsColor.svg";
import { ReactComponent as Loan } from "./../../assets/Loan.svg";
import { ReactComponent as LoanColor } from "./../../assets/Loan.svg";
import { ReactComponent as Payment } from "./../../assets/Electricity.svg";
import { ReactComponent as PaymentColor } from "./../../assets/ElectricityColor.svg";
import { ReactComponent as Logout } from "./../../assets/logout.svg";
import { ReactComponent as Bill } from "./../../assets/Biller.svg";

import { Link, useLocation } from "react-router-dom";
import { LogOutAuthentication } from "./LogOutAuthentication";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  const [isHovered11, setIsHovered11] = useState(false);
  const [isHovered12, setIsHovered12] = useState(false);
  const [isHovered14, setIsHovered14] = useState(false);
  const [isHovered15, setIsHovered15] = useState(false);
  const [isHovered16, setIsHovered16] = useState(false);
  const [isHovered17, setIsHovered17] = useState(false);
  const [isHovered18, setIsHovered18] = useState(false);
  const [isHovered19, setIsHovered19] = useState(false);
  const [isHovered20, setIsHovered20] = useState(false);
  const [isHovered21, setIsHovered21] = useState(false);
  const [isHovered22, setIsHovered22] = useState(false);
  const [isHovered23, setIsHovered23] = useState(false);
  const [isHovered24, setIsHovered24] = useState(false);
  const [isHovered25, setIsHovered25] = useState(false);
  const [isHovered28, setIsHovered28] = useState(false);
  const [isHovered29, setIsHovered29] = useState(false);
  const [isHovered30, setIsHovered30] = useState(false);
  const [show, setShow] = useState(false);
  const router = useLocation();
  return (
    <div className="bg-white flex flex-col border-r border pt-3 h-[119vh]">
      <div className="flex flex-row pt-[65px] justify-center">
        <span className="text-route-color font-bold text-[10px] lg:text-[30px] md:text-[20px]">
          Paymeter
        </span>
      </div>
      {sessionStorage.getItem("roleName") === "DISCO" ? (
        <div className="flex flex-col py-10 gap-4 px-4">
          <Link
            to="/disco-dashboard"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/disco-dashboard"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {router.pathname === "/disco-dashboard" || isHovered ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/disco-dashboard" || isHovered ? (
              <Dashboard
                className={`${
                  router.pathname === "/disco-dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Dashboard
                className={`${
                  router.pathname === "/disco-dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/disco-dashboard"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Overview
            </p>
          </Link>
          <Link
            to="/complaint"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/complaint"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered15(true)}
            onMouseLeave={() => setIsHovered15(false)}
          >
            {router.pathname === "/complaint" || isHovered15 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/complaint" || isHovered15 ? (
              <Bill
                className={`${
                  router.pathname === "/complaint"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Bill
                className={`${
                  router.pathname === "/complaint"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/complaint"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Complaints
            </p>
          </Link>
          <Link
            to="/disotransactions"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/disotransactions" ||
              router.pathname.startsWith("/disotransactions/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered19(true)}
            onMouseLeave={() => setIsHovered19(false)}
          >
            {router.pathname === "/disotransactions" ||
            isHovered19 ||
            router.pathname.startsWith("/disotransactions/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/disotransactions" ||
            isHovered19 ||
            router.pathname.startsWith("/disotransactions/") ? (
              <Loan
                className={`${
                  router.pathname === "/disotransactions" ||
                  router.pathname.startsWith("/disotransactions/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Loan
                className={`${
                  router.pathname === "/disotransactions" ||
                  router.pathname.startsWith("/disotransactions/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/disotransactions" ||
                router.pathname.startsWith("/disotransactions/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Transactions
            </p>
          </Link>
          <Link
            to="/usersetting"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/usersetting"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
          >
            {router.pathname === "/usersetting" || isHovered8 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/usersetting" || isHovered8 ? (
              <Settings
                className={`${
                  router.pathname === "/usersetting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Settings
                className={`${
                  router.pathname === "/usersetting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/usersetting"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Setting
            </p>
          </Link>
        </div>
      ) : sessionStorage.getItem("roleName") === "CUSTOMERSERVICE" ? (
        <div className="flex flex-col py-10 gap-4 px-4">
          <Link
            to="/customer-transactions"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/customer-transactions"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {router.pathname === "/customer-transactions" || isHovered2 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/customer-transactions" || isHovered2 ? (
              <Transfers
                className={`${
                  router.pathname === "/customer-transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Transfers
                className={`${
                  router.pathname === "/customer-transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/customer-transactions"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Transaction
            </p>
          </Link>
          <Link
            to="/usersetting"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/usersetting"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
          >
            {router.pathname === "/usersetting" || isHovered8 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/usersetting" || isHovered8 ? (
              <Settings
                className={`${
                  router.pathname === "/usersetting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Settings
                className={`${
                  router.pathname === "/usersetting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/usersetting"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Setting
            </p>
          </Link>
        </div>
      ) : sessionStorage.getItem("roleName") === "EARNINGPARTNER" ? (
        <div className="flex flex-col py-10 gap-4 px-4">
          <Link
            to="/earning-dashboard"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/earning-dashboard"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {router.pathname === "/earning-dashboard" || isHovered ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/earning-dashboard" || isHovered ? (
              <Dashboard
                className={`${
                  router.pathname === "/earning-dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Dashboard
                className={`${
                  router.pathname === "/earning-dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/earning-dashboard"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Overview
            </p>
          </Link>
          <Link
            to="/earning-transactions"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/earning-transactions"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {router.pathname === "/earning-transactions" || isHovered2 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/earning-transactions" || isHovered2 ? (
              <Transfers
                className={`${
                  router.pathname === "/earning-transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Transfers
                className={`${
                  router.pathname === "/earning-transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/earning-transactions"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Transaction
            </p>
          </Link>
          <Link
            to="/usersetting"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/usersetting"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
          >
            {router.pathname === "/usersetting" || isHovered8 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/usersetting" || isHovered8 ? (
              <Settings
                className={`${
                  router.pathname === "/usersetting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Settings
                className={`${
                  router.pathname === "/usersetting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/usersetting"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Setting
            </p>
          </Link>
        </div>
      ) : sessionStorage.getItem("roleName") === "DISTRICTMANAGER" ? (
        <div className="flex flex-col py-10 gap-4 px-4">
          <Link
            to="/manager-dashboard"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/manager-dashboard"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {router.pathname === "/manager-dashboard" || isHovered ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/manager-dashboard" || isHovered ? (
              <Dashboard
                className={`${
                  router.pathname === "/manager-dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Dashboard
                className={`${
                  router.pathname === "/manager-dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/manager-dashboard"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Overview
            </p>
          </Link>
          <Link
            to="/manager-transactions"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/manager-transactions"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {router.pathname === "/manager-transactions" || isHovered2 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/manager-transactions" || isHovered2 ? (
              <Transfers
                className={`${
                  router.pathname === "/manager-transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Transfers
                className={`${
                  router.pathname === "/manager-transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/manager-transactions"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Agents
            </p>
          </Link>
          <Link
            to="/usersetting"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/usersetting"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
          >
            {router.pathname === "/usersetting" || isHovered8 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/usersetting" || isHovered8 ? (
              <Settings
                className={`${
                  router.pathname === "/usersetting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Settings
                className={`${
                  router.pathname === "/usersetting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/usersetting"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Setting
            </p>
          </Link>
        </div>
      ) : sessionStorage.getItem("roleName") === "ADMIN" ? (
        <div className="flex flex-col pt-8 pb-10 gap-4 px-4">
          <Link
            to="/dashboard"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/dashboard"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {router.pathname === "/dashboard" || isHovered ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/dashboard" || isHovered ? (
              <Dashboard
                className={`${
                  router.pathname === "/dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Dashboard
                className={`${
                  router.pathname === "/dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/dashboard"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Overview
            </p>
          </Link>
          {/* <Link
          to="/customers"
          className={`flex flex-row h-[33px] ${
            router.pathname === "/customers"
              ? "bg-route-bg gap-2 rounded-custom-router"
              : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
          }`}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          {router.pathname === "/customers" || isHovered1 || router.pathname === "/customers/:id"   ? (
            <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
          ) : (
            <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
          )}
          {router.pathname === "/customers" || isHovered1 || router.pathname === "/customers/:id" ? (
            <CustomersColor
              className={`${
                router.pathname === "/customers"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          ) : (
            <Customers
              className={`${
                router.pathname === "/customers" || router.pathname === "/customers/:id"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          )}

          <p
            className={`${
              router.pathname === "/customers" || router.pathname === "/customers/:id"
                ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
            }`}
          >
            Customers
          </p>
        </Link> */}

          <Link
            to="/institutions"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/institutions" ||
              router.pathname.startsWith("/institutions/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            {router.pathname === "/institutions" ||
            router.pathname.startsWith("/institutions/") ||
            isHovered3 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/institutions" ||
            router.pathname.startsWith("/institutions/") ||
            isHovered3 ? (
              <Investments
                className={`${
                  router.pathname === "/institutions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Investments
                className={`${
                  router.pathname === "/institutions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/institutions"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Institution
            </p>
          </Link>
          <Link
            to="/discos"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/discos" ||
              router.pathname.startsWith("/discos/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            {router.pathname === "/discos" ||
            isHovered4 ||
            router.pathname.startsWith("/discos/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/discos" ||
            isHovered4 ||
            router.pathname.startsWith("/discos/") ? (
              <Loan
                className={`${
                  router.pathname === "/discos" ||
                  router.pathname.startsWith("/discos/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Loan
                className={`${
                  router.pathname === "/discos" ||
                  router.pathname.startsWith("/discos/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/discos" ||
                router.pathname.startsWith("/discos/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Discos
            </p>
          </Link>
          <Link
            to="/notification"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/notification" ||
              router.pathname.startsWith("/agents/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered14(true)}
            onMouseLeave={() => setIsHovered14(false)}
          >
            {router.pathname === "/notification" ||
            router.pathname.startsWith("/agents/") ||
            isHovered14 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/notification" || isHovered14 ? (
              <Bill
                className={`${
                  router.pathname === "/notification" ||
                  router.pathname.startsWith("/agents/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Bill
                className={`${
                  router.pathname === "/notification" ||
                  router.pathname.startsWith("/agents/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/notification" ||
                router.pathname.startsWith("/agents/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Agents
            </p>
          </Link>
          {/* <Link
            to="/agents"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/agents" ||
              router.pathname.startsWith("/agents/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
          >
            {router.pathname === "/agents" ||
            isHovered6 ||
            router.pathname.startsWith("/agents/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/agents" ||
            isHovered6 ||
            router.pathname.startsWith("/agents/") ? (
              <CableColor
                className={`${
                  router.pathname === "/agents" ||
                  router.pathname.startsWith("/agents/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Cable
                className={`${
                  router.pathname === "/agents" ||
                  router.pathname.startsWith("/agents/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/agents" ||
                router.pathname.startsWith("/agents/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Agents
            </p>
          </Link> */}
          <Link
            to="/earning"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/earning" ||
              router.pathname.startsWith("/earning/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered11(true)}
            onMouseLeave={() => setIsHovered11(false)}
          >
            {router.pathname === "/earning" ||
            isHovered11 ||
            router.pathname.startsWith("/earning/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/earning" ||
            isHovered11 ||
            router.pathname.startsWith("/earning/") ? (
              <Cable
                className={`${
                  router.pathname === "/agents" ||
                  router.pathname.startsWith("/agents/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Cable
                className={`${
                  router.pathname === "/earning" ||
                  router.pathname.startsWith("/earning/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/earning" ||
                router.pathname.startsWith("/earning/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              EarningPartner
            </p>
          </Link>
          <Link
            to="/customer"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/customer" ||
              router.pathname.startsWith("/customer/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered18(true)}
            onMouseLeave={() => setIsHovered18(false)}
          >
            {router.pathname === "/customer" ||
            router.pathname.startsWith("/customer/") ||
            isHovered18 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/customer" || isHovered18 ? (
              <Bill
                className={`${
                  router.pathname === "/customer" ||
                  router.pathname.startsWith("/customer/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Bill
                className={`${
                  router.pathname === "/customer" ||
                  router.pathname.startsWith("/customer/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/customer" ||
                router.pathname.startsWith("/customer/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Customer Care
            </p>
          </Link>
          <Link
            to="/systemcare"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/systemcare" ||
              router.pathname.startsWith("/systemcare/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered24(true)}
            onMouseLeave={() => setIsHovered24(false)}
          >
            {router.pathname === "/systemcare" ||
            router.pathname.startsWith("/systemcare/") ||
            isHovered24 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/systemcare" || isHovered24 ? (
              <Bill
                className={`${
                  router.pathname === "/systemcare" ||
                  router.pathname.startsWith("/systemcare/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Bill
                className={`${
                  router.pathname === "/systemcare" ||
                  router.pathname.startsWith("/systemcare/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/systemcare" ||
                router.pathname.startsWith("/systemcare/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              System Care
            </p>
          </Link>
          <Link
            to="/accountant"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/accountant" ||
              router.pathname.startsWith("/accountant/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered25(true)}
            onMouseLeave={() => setIsHovered25(false)}
          >
            {router.pathname === "/accountant" ||
            router.pathname.startsWith("/accountant/") ||
            isHovered25 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/accountant" || isHovered25 ? (
              <Bill
                className={`${
                  router.pathname === "/accountant" ||
                  router.pathname.startsWith("/accountant/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Bill
                className={`${
                  router.pathname === "/accountant" ||
                  router.pathname.startsWith("/accountant/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/accountant" ||
                router.pathname.startsWith("/accountant/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Accountant
            </p>
          </Link>
          <Link
            to="/manager"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/manager" ||
              router.pathname.startsWith("/manager/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered16(true)}
            onMouseLeave={() => setIsHovered16(false)}
          >
            {router.pathname === "/manager" ||
            isHovered16 ||
            router.pathname.startsWith("/manager/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/manager" ||
            isHovered16 ||
            router.pathname.startsWith("/manager/") ? (
              <Cable
                className={`${
                  router.pathname === "/manager" ||
                  router.pathname.startsWith("/manager/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Cable
                className={`${
                  router.pathname === "/manager" ||
                  router.pathname.startsWith("/manager/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/manager" ||
                router.pathname.startsWith("/manager/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              District
            </p>
          </Link>
          <Link
            to="/api"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/api" || router.pathname.startsWith("/api/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered7(true)}
            onMouseLeave={() => setIsHovered7(false)}
          >
            {router.pathname === "/api" ||
            isHovered7 ||
            router.pathname.startsWith("/api/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/api" ||
            isHovered7 ||
            router.pathname.startsWith("/api/") ? (
              <Data
                className={`${
                  router.pathname === "/api" ||
                  router.pathname.startsWith("/api/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Data
                className={`${
                  router.pathname === "/api" ||
                  router.pathname.startsWith("/api/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/api" ||
                router.pathname.startsWith("/api/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              API-Partner
            </p>
          </Link>
          <Link
            to="/user"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/user" ||
              router.pathname.startsWith("/user/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered17(true)}
            onMouseLeave={() => setIsHovered17(false)}
          >
            {router.pathname === "/user" ||
            isHovered17 ||
            router.pathname.startsWith("/user/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/user" ||
            isHovered17 ||
            router.pathname.startsWith("/user/") ? (
              <Data
                className={`${
                  router.pathname === "/user" ||
                  router.pathname.startsWith("/user/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Data
                className={`${
                  router.pathname === "/user" ||
                  router.pathname.startsWith("/user/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/user" ||
                router.pathname.startsWith("/user/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Users
            </p>
          </Link>
          <Link
            to="/all-meters"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/all-meters" ||
              router.pathname.startsWith("/all-meters/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered29(true)}
            onMouseLeave={() => setIsHovered29(false)}
          >
            {router.pathname === "/all-meters" ||
            isHovered29 ||
            router.pathname.startsWith("/all-meters/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/all-meters" ||
            isHovered29 ||
            router.pathname.startsWith("/all-meters/") ? (
              <Data
                className={`${
                  router.pathname === "/all-meters" ||
                  router.pathname.startsWith("/all-meters/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Data
                className={`${
                  router.pathname === "/all-meters" ||
                  router.pathname.startsWith("/all-meters/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/all-meters" ||
                router.pathname.startsWith("/all-meters/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Meters
            </p>
          </Link>
          {/* <Link
            to="/payment-shift"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/payment-shift" ||
              router.pathname.startsWith("/payment-shift")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered9(true)}
            onMouseLeave={() => setIsHovered9(false)}
          >
            {router.pathname === "/payment-shift" ||
            isHovered9 ||
            router.pathname.startsWith("/payment-shift") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/payment-shift" ||
            isHovered9 ||
            router.pathname.startsWith("/payment-shift") ? (
              <PaymentColor
                className={`${
                  router.pathname === "/payment-shift" ||
                  router.pathname.startsWith("/payment-shift")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Payment
                className={`${
                  router.pathname === "/payment-shift" ||
                  router.pathname.startsWith("/payment-shift")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/payment-shift" ||
                router.pathname.startsWith("/payment-shift")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Payment-Shift
            </p>
          </Link> */}
          {/* <Link
            to="/funding"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/funding"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered10(true)}
            onMouseLeave={() => setIsHovered10(false)}
          >
            {router.pathname === "/funding" || isHovered10 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/funding" || isHovered10 ? (
              <SettingsColor
                className={`${
                  router.pathname === "/setting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Settings
                className={`${
                  router.pathname === "/funding"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/funding"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Funding Request
            </p>
          </Link> */}
          {/* <Link
            to="/payment"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/payment" ||
              router.pathname.startsWith("/payment/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered12(true)}
            onMouseLeave={() => setIsHovered12(false)}
          >
            {router.pathname === "/payment" ||
            isHovered12 ||
            router.pathname.startsWith("/payment") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/payment" ||
            isHovered12 ||
            router.pathname.startsWith("/payment/") ? (
              <Loan
                className={`${
                  router.pathname === "/payment" ||
                  router.pathname.startsWith("/payment/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Loan
                className={`${
                  router.pathname === "/payment" ||
                  router.pathname.startsWith("/payment/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/payment" ||
                router.pathname.startsWith("/payment/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Payment Method
            </p>
          </Link> */}
          <Link
            to="/withdrawals"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/withdrawals" ||
              router.pathname.startsWith("/withdrawals/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered20(true)}
            onMouseLeave={() => setIsHovered20(false)}
          >
            {router.pathname === "/withdrawals" ||
            isHovered20 ||
            router.pathname.startsWith("/withdrawals/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/withdrawals" ||
            isHovered20 ||
            router.pathname.startsWith("/withdrawals/") ? (
              <Cable
                className={`${
                  router.pathname === "/withdrawals" ||
                  router.pathname.startsWith("/withdrawals/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Cable
                className={`${
                  router.pathname === "/withdrawals" ||
                  router.pathname.startsWith("/withdrawals/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/withdrawals" ||
                router.pathname.startsWith("/withdrawals/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Withdrawals
            </p>
          </Link>
          <Link
            to="/fund"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/fund" ||
              router.pathname.startsWith("/fund/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered30(true)}
            onMouseLeave={() => setIsHovered30(false)}
          >
            {router.pathname === "/fund" ||
            isHovered30 ||
            router.pathname.startsWith("/fund/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/fund" ||
            isHovered30 ||
            router.pathname.startsWith("/fund/") ? (
              <Cable
                className={`${
                  router.pathname === "/fund" ||
                  router.pathname.startsWith("/fund/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Cable
                className={`${
                  router.pathname === "/fund" ||
                  router.pathname.startsWith("/fund/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/fund" ||
                router.pathname.startsWith("/fund/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Transfer
            </p>
          </Link>
          <Link
            to="/transactions"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/transactions"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {router.pathname === "/transactions" || isHovered2 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/transactions" || isHovered2 ? (
              <Transfers
                className={`${
                  router.pathname === "/transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Transfers
                className={`${
                  router.pathname === "/transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/transactions"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Transaction
            </p>
          </Link>
          <Link
            to="/setting"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/setting"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
          >
            {router.pathname === "/setting" || isHovered8 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/setting" || isHovered8 ? (
              <Settings
                className={`${
                  router.pathname === "/setting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Settings
                className={`${
                  router.pathname === "/setting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/setting"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Setting
            </p>
          </Link>
        </div>
      ) : sessionStorage.getItem("roleName") === "AGENT" ? (
        <div className="flex flex-col py-10 gap-4 px-4">
          <Link
            to="/agent-dashboard"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/agent-dashboard"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered21(true)}
            onMouseLeave={() => setIsHovered21(false)}
          >
            {router.pathname === "/agent-dashboard" || isHovered21 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/agent-dashboard" || isHovered21 ? (
              <Dashboard
                className={`${
                  router.pathname === "/agent-dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Dashboard
                className={`${
                  router.pathname === "/agent-dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/agent-dashboard"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Overview
            </p>
          </Link>
          <Link
            to="/agentmeters"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/agentmeters" ||
              router.pathname.startsWith("/agentmeters/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered23(true)}
            onMouseLeave={() => setIsHovered23(false)}
          >
            {router.pathname === "/agentmeters" ||
            router.pathname.startsWith("/agentmeters/") ||
            isHovered23 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/agentmeters" || isHovered23 ? (
              <Bill
                className={`${
                  router.pathname === "/notification" ||
                  router.pathname.startsWith("/agentmeters/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Bill
                className={`${
                  router.pathname === "/agentmeters" ||
                  router.pathname.startsWith("/agentmeters/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/agentmeters" ||
                router.pathname.startsWith("/agentmeters/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Meters
            </p>
          </Link>
          <Link
            to="/agent-transactions"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/agent-transactions"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered22(true)}
            onMouseLeave={() => setIsHovered22(false)}
          >
            {router.pathname === "/agent-transactions" || isHovered22 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/agent-transactions" || isHovered22 ? (
              <Transfers
                className={`${
                  router.pathname === "/agent-transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Transfers
                className={`${
                  router.pathname === "/agent-transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/agent-transactions"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Transaction
            </p>
          </Link>
          <Link
            to="/agentsetting"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/agentsetting"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered28(true)}
            onMouseLeave={() => setIsHovered28(false)}
          >
            {router.pathname === "/agentsetting" || isHovered28 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/agentsetting" || isHovered28 ? (
              <Settings
                className={`${
                  router.pathname === "/agentsetting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Settings
                className={`${
                  router.pathname === "/agentsetting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/agentsetting"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Setting
            </p>
          </Link>
        </div>
      ) : sessionStorage.getItem("roleName") === "SYSTEMCARE" ? (
        <div className="flex flex-col pt-8 pb-10 gap-4 px-4">
          <Link
            to="/dashboard"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/dashboard"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {router.pathname === "/dashboard" || isHovered ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/dashboard" || isHovered ? (
              <Dashboard
                className={`${
                  router.pathname === "/dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Dashboard
                className={`${
                  router.pathname === "/dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/dashboard"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Overview
            </p>
          </Link>
          {/* <Link
          to="/customers"
          className={`flex flex-row h-[33px] ${
            router.pathname === "/customers"
              ? "bg-route-bg gap-2 rounded-custom-router"
              : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
          }`}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          {router.pathname === "/customers" || isHovered1 || router.pathname === "/customers/:id"   ? (
            <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
          ) : (
            <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
          )}
          {router.pathname === "/customers" || isHovered1 || router.pathname === "/customers/:id" ? (
            <CustomersColor
              className={`${
                router.pathname === "/customers"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          ) : (
            <Customers
              className={`${
                router.pathname === "/customers" || router.pathname === "/customers/:id"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          )}

          <p
            className={`${
              router.pathname === "/customers" || router.pathname === "/customers/:id"
                ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
            }`}
          >
            Customers
          </p>
        </Link> */}

          <Link
            to="/institutions"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/institutions" ||
              router.pathname.startsWith("/institutions/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            {router.pathname === "/institutions" ||
            router.pathname.startsWith("/institutions/") ||
            isHovered3 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/institutions" ||
            router.pathname.startsWith("/institutions/") ||
            isHovered3 ? (
              <Investments
                className={`${
                  router.pathname === "/institutions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Investments
                className={`${
                  router.pathname === "/institutions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/institutions"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Institution
            </p>
          </Link>
          <Link
            to="/discos"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/discos" ||
              router.pathname.startsWith("/discos/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            {router.pathname === "/discos" ||
            isHovered4 ||
            router.pathname.startsWith("/discos/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/discos" ||
            isHovered4 ||
            router.pathname.startsWith("/discos/") ? (
              <Loan
                className={`${
                  router.pathname === "/discos" ||
                  router.pathname.startsWith("/discos/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Loan
                className={`${
                  router.pathname === "/discos" ||
                  router.pathname.startsWith("/discos/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/discos" ||
                router.pathname.startsWith("/discos/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Discos
            </p>
          </Link>
          <Link
            to="/notification"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/notification" ||
              router.pathname.startsWith("/agents/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered14(true)}
            onMouseLeave={() => setIsHovered14(false)}
          >
            {router.pathname === "/notification" ||
            router.pathname.startsWith("/agents/") ||
            isHovered14 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/notification" || isHovered14 ? (
              <Bill
                className={`${
                  router.pathname === "/notification" ||
                  router.pathname.startsWith("/agents/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Bill
                className={`${
                  router.pathname === "/notification" ||
                  router.pathname.startsWith("/agents/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/notification" ||
                router.pathname.startsWith("/agents/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Agents
            </p>
          </Link>
          {/* <Link
            to="/agents"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/agents" ||
              router.pathname.startsWith("/agents/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
          >
            {router.pathname === "/agents" ||
            isHovered6 ||
            router.pathname.startsWith("/agents/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/agents" ||
            isHovered6 ||
            router.pathname.startsWith("/agents/") ? (
              <CableColor
                className={`${
                  router.pathname === "/agents" ||
                  router.pathname.startsWith("/agents/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Cable
                className={`${
                  router.pathname === "/agents" ||
                  router.pathname.startsWith("/agents/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/agents" ||
                router.pathname.startsWith("/agents/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Agents
            </p>
          </Link> */}
          <Link
            to="/earning"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/earning" ||
              router.pathname.startsWith("/earning/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered11(true)}
            onMouseLeave={() => setIsHovered11(false)}
          >
            {router.pathname === "/earning" ||
            isHovered11 ||
            router.pathname.startsWith("/earning/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/earning" ||
            isHovered11 ||
            router.pathname.startsWith("/earning/") ? (
              <Cable
                className={`${
                  router.pathname === "/agents" ||
                  router.pathname.startsWith("/agents/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Cable
                className={`${
                  router.pathname === "/earning" ||
                  router.pathname.startsWith("/earning/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/earning" ||
                router.pathname.startsWith("/earning/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              EarningPartner
            </p>
          </Link>
          <Link
            to="/customer"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/customer" ||
              router.pathname.startsWith("/customer/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered18(true)}
            onMouseLeave={() => setIsHovered18(false)}
          >
            {router.pathname === "/customer" ||
            router.pathname.startsWith("/customer/") ||
            isHovered18 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/customer" || isHovered18 ? (
              <Bill
                className={`${
                  router.pathname === "/customer" ||
                  router.pathname.startsWith("/customer/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Bill
                className={`${
                  router.pathname === "/customer" ||
                  router.pathname.startsWith("/customer/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/customer" ||
                router.pathname.startsWith("/customer/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Customer Care
            </p>
          </Link>
          <Link
            to="/systemcare"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/systemcare" ||
              router.pathname.startsWith("/systemcare/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered24(true)}
            onMouseLeave={() => setIsHovered24(false)}
          >
            {router.pathname === "/systemcare" ||
            router.pathname.startsWith("/systemcare/") ||
            isHovered24 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/systemcare" || isHovered24 ? (
              <Bill
                className={`${
                  router.pathname === "/systemcare" ||
                  router.pathname.startsWith("/systemcare/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Bill
                className={`${
                  router.pathname === "/systemcare" ||
                  router.pathname.startsWith("/systemcare/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/systemcare" ||
                router.pathname.startsWith("/systemcare/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              System Care
            </p>
          </Link>
          <Link
            to="/accountant"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/accountant" ||
              router.pathname.startsWith("/accountant/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered25(true)}
            onMouseLeave={() => setIsHovered25(false)}
          >
            {router.pathname === "/accountant" ||
            router.pathname.startsWith("/accountant/") ||
            isHovered25 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/accountant" || isHovered25 ? (
              <Bill
                className={`${
                  router.pathname === "/accountant" ||
                  router.pathname.startsWith("/accountant/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Bill
                className={`${
                  router.pathname === "/accountant" ||
                  router.pathname.startsWith("/accountant/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/accountant" ||
                router.pathname.startsWith("/accountant/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Accountant
            </p>
          </Link>
          <Link
            to="/manager"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/manager" ||
              router.pathname.startsWith("/manager/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered16(true)}
            onMouseLeave={() => setIsHovered16(false)}
          >
            {router.pathname === "/manager" ||
            isHovered16 ||
            router.pathname.startsWith("/manager/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/manager" ||
            isHovered16 ||
            router.pathname.startsWith("/manager/") ? (
              <Cable
                className={`${
                  router.pathname === "/manager" ||
                  router.pathname.startsWith("/manager/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Cable
                className={`${
                  router.pathname === "/manager" ||
                  router.pathname.startsWith("/manager/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/manager" ||
                router.pathname.startsWith("/manager/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              District
            </p>
          </Link>
          <Link
            to="/api"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/api" || router.pathname.startsWith("/api/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered7(true)}
            onMouseLeave={() => setIsHovered7(false)}
          >
            {router.pathname === "/api" ||
            isHovered7 ||
            router.pathname.startsWith("/api/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/api" ||
            isHovered7 ||
            router.pathname.startsWith("/api/") ? (
              <Data
                className={`${
                  router.pathname === "/api" ||
                  router.pathname.startsWith("/api/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Data
                className={`${
                  router.pathname === "/api" ||
                  router.pathname.startsWith("/api/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/api" ||
                router.pathname.startsWith("/api/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              API-Partner
            </p>
          </Link>
          <Link
            to="/user"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/user" ||
              router.pathname.startsWith("/user/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered17(true)}
            onMouseLeave={() => setIsHovered17(false)}
          >
            {router.pathname === "/user" ||
            isHovered17 ||
            router.pathname.startsWith("/user/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/user" ||
            isHovered17 ||
            router.pathname.startsWith("/user/") ? (
              <Data
                className={`${
                  router.pathname === "/user" ||
                  router.pathname.startsWith("/user/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Data
                className={`${
                  router.pathname === "/user" ||
                  router.pathname.startsWith("/user/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/user" ||
                router.pathname.startsWith("/user/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Users
            </p>
          </Link>
          {/* <Link
            to="/payment-shift"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/payment-shift" ||
              router.pathname.startsWith("/payment-shift")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered9(true)}
            onMouseLeave={() => setIsHovered9(false)}
          >
            {router.pathname === "/payment-shift" ||
            isHovered9 ||
            router.pathname.startsWith("/payment-shift") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/payment-shift" ||
            isHovered9 ||
            router.pathname.startsWith("/payment-shift") ? (
              <PaymentColor
                className={`${
                  router.pathname === "/payment-shift" ||
                  router.pathname.startsWith("/payment-shift")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Payment
                className={`${
                  router.pathname === "/payment-shift" ||
                  router.pathname.startsWith("/payment-shift")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/payment-shift" ||
                router.pathname.startsWith("/payment-shift")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Payment-Shift
            </p>
          </Link> */}
          {/* <Link
            to="/funding"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/funding"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered10(true)}
            onMouseLeave={() => setIsHovered10(false)}
          >
            {router.pathname === "/funding" || isHovered10 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/funding" || isHovered10 ? (
              <SettingsColor
                className={`${
                  router.pathname === "/setting"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Settings
                className={`${
                  router.pathname === "/funding"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/funding"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Funding Request
            </p>
          </Link> */}
          {/* <Link
            to="/payment"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/payment" ||
              router.pathname.startsWith("/payment/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered12(true)}
            onMouseLeave={() => setIsHovered12(false)}
          >
            {router.pathname === "/payment" ||
            isHovered12 ||
            router.pathname.startsWith("/payment") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/payment" ||
            isHovered12 ||
            router.pathname.startsWith("/payment/") ? (
              <Loan
                className={`${
                  router.pathname === "/payment" ||
                  router.pathname.startsWith("/payment/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Loan
                className={`${
                  router.pathname === "/payment" ||
                  router.pathname.startsWith("/payment/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/payment" ||
                router.pathname.startsWith("/payment/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Payment Method
            </p>
          </Link> */}
          <Link
            to="/transactions"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/transactions"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {router.pathname === "/transactions" || isHovered2 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/transactions" || isHovered2 ? (
              <Transfers
                className={`${
                  router.pathname === "/transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Transfers
                className={`${
                  router.pathname === "/transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/transactions"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Transaction
            </p>
          </Link>
        </div>
      ) : sessionStorage.getItem("roleName") === "ACCOUNTANT" ? (
        <div className="flex flex-col pt-8 pb-10 gap-4 px-4">
          <Link
            to="/dashboard"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/dashboard"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {router.pathname === "/dashboard" || isHovered ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/dashboard" || isHovered ? (
              <Dashboard
                className={`${
                  router.pathname === "/dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Dashboard
                className={`${
                  router.pathname === "/dashboard"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/dashboard"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Overview
            </p>
          </Link>
          <Link
            to="/withdrawals"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/withdrawals" ||
              router.pathname.startsWith("/withdrawals/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered20(true)}
            onMouseLeave={() => setIsHovered20(false)}
          >
            {router.pathname === "/withdrawals" ||
            isHovered20 ||
            router.pathname.startsWith("/withdrawals/") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/withdrawals" ||
            isHovered20 ||
            router.pathname.startsWith("/withdrawals/") ? (
              <Cable
                className={`${
                  router.pathname === "/withdrawals" ||
                  router.pathname.startsWith("/withdrawals/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Cable
                className={`${
                  router.pathname === "/withdrawals" ||
                  router.pathname.startsWith("/withdrawals/")
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/withdrawals" ||
                router.pathname.startsWith("/withdrawals/")
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Withdrawals
            </p>
          </Link>
          <Link
            to="/transactions"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/transactions"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {router.pathname === "/transactions" || isHovered2 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/transactions" || isHovered2 ? (
              <Transfers
                className={`${
                  router.pathname === "/transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            ) : (
              <Transfers
                className={`${
                  router.pathname === "/transactions"
                    ? "fill-current text-route-color my-[9px]"
                    : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                }`}
              />
            )}

            <p
              className={`${
                router.pathname === "/transactions"
                  ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                  : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
              }`}
            >
              Transaction
            </p>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div
        onClick={() => LogOutAuthentication()}
        className="px-[20px] flex flex-row justify-between text-[14px] py-[15px] cursor-pointer"
      >
        <div className="real">
          <span className="logbut">Log Out</span>
        </div>
        <div className="buttonlogout">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
