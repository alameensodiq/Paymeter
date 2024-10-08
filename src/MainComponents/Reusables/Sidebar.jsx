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
  const [show, setShow] = useState(false);
  const router = useLocation();
  return (
    <div className="bg-white flex flex-col border-r border pt-3 h-[100vh]">
      <div className="flex flex-row pt-[65px] justify-center">
        <span className="text-route-color font-bold text-[10px] lg:text-[30px] md:text-[20px]">
          Paymeter
        </span>
      </div>
      {sessionStorage.getItem("roleName") !== "ADMIN" ? (
        <div className="flex flex-col py-10 gap-4 px-4">
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
        </div>
      ) : (
        <div className="flex flex-col py-10 gap-4 px-4">
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
              <DashboardColor
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
              router.pathname === "/institutions"
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            {router.pathname === "/institutions" || isHovered3 ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/institutions" || isHovered3 ? (
              <InvestmentsColor
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
              <LoanColor
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
              <DataColor
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
          <Link
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
          </Link>
          <Link
            to="/payment"
            className={`flex flex-row h-[33px] ${
              router.pathname === "/discos" ||
              router.pathname.startsWith("/discos/")
                ? "bg-route-bg gap-2 rounded-custom-router"
                : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
            }`}
            onMouseEnter={() => setIsHovered12(true)}
            onMouseLeave={() => setIsHovered12(false)}
          >
            {router.pathname === "/payment" ||
            isHovered4 ||
            router.pathname.startsWith("/payment") ? (
              <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
            ) : (
              <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
            )}
            {router.pathname === "/payment" ||
            isHovered4 ||
            router.pathname.startsWith("/payment/") ? (
              <LoanColor
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
              <TransfersColor
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
