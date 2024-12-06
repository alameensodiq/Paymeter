import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./MainComponents/Login";
import Dashboard from "./MainComponents/Components/Dashboard";
import Customers from "./MainComponents/Components/Customers";
import Investments from "./MainComponents/Components/Investments";
import Transfers from "./MainComponents/Components/Transfers";
import Loans from "./MainComponents/Components/Loans";
import Audit from "./MainComponents/Components/Audit";
import Report from "./MainComponents/Components/Report";
import Electricity from "./MainComponents/Components/Electricity";
import Cable from "./MainComponents/Components/Cable";
import Data from "./MainComponents/Components/Data";
import Airtime from "./MainComponents/Components/Airtime";
import CustomerInfo from "./MainComponents/Components/CustomerInfo";
import Agents from "./MainComponents/Components/Agents";
import ApiPartner from "./MainComponents/Components/ApiPartner";
import Setting from "./MainComponents/Components/Setting";
import PaymentShift from "./MainComponents/Components/Payment-Shift";
import Payment from "./MainComponents/Components/Payment";
import Notification from "./MainComponents/Components/Notification";
import Funding from "./MainComponents/Components/Funding";
import EarningPartner from "./MainComponents/Components/EraningPartner";
import Complaints from "./MainComponents/Components/Complaints";
import UserDetails from "./MainComponents/Components/UserDetails";
import Meter from "./MainComponents/Components/Meter";
import DistrictManager from "./MainComponents/Components/DistrictManager";
import { IdleTimerProvider, useIdleTimerContext } from "react-idle-timer";
import { LogOutAuthentication } from "./MainComponents/Reusables/LogOutAuthentication";
import Users from "./MainComponents/Components/Users";
import DistrictDetails from "./MainComponents/Components/DistrictDetails";
import CustomerCare from "./MainComponents/Components/CustomerCare";
import DiscoTransactions from "./MainComponents/Components/DiscoTransactions";
import RealUserDetails from "./MainComponents/Components/RealUserDetails";
import AgentDetails from "./MainComponents/Components/AgentDetails";
import BankAccounts from "./MainComponents/Components/BankAccounts";
import CustomerTransfer from "./MainComponents/Components/CustomerTransfer";
import EarningDashboard from "./MainComponents/Components/EarningDashboard";
import EarningTransfer from "./MainComponents/Components/EarningTransfer";
import ManagerDashboard from "./MainComponents/Components/ManagerDashboard";
import DiscoDashboard from "./MainComponents/Components/DiscoDashboard";
import ManagerAgents from "./MainComponents/Components/ManagerAgents";
import UserSetting from "./MainComponents/Components/UserSetting";
import WithdrawalsRequest from "./MainComponents/Components/WithdrawalsRequest";
import AgentTransfer from "./MainComponents/Components/AgentTransfer";
import AgentMeter from "./MainComponents/Components/AgentMeter";
import AgentDashboard from "./MainComponents/Components/AgentDashboard";
import AgentSetting from "./MainComponents/Components/AgentSetting";
import MeterVirtual from "./MainComponents/Components/MeterVirtual";
import SystemCare from "./MainComponents/Components/SystemCare";
import Accountant from "./MainComponents/Components/Accountant";

function App() {
  const token = sessionStorage.getItem("token");
  const idleTimerRef = useIdleTimerContext();
  const onIdle = () => {
    LogOutAuthentication();
  };
  return (
    <IdleTimerProvider
      ref={idleTimerRef}
      timeout={5 * 60 * 1000}
      onIdle={onIdle}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/payment-shift"
          element={<PaymentShift title={"Payment and Shift"} />}
        />
        {token && (
          <>
            <Route
              path="/dashboard"
              element={<Dashboard title={"Dashboard"} />}
            />
            <Route
              path="/disco-dashboard"
              element={<DiscoDashboard title={"Dashboard"} />}
            />
            <Route
              path="/earning-dashboard"
              element={<EarningDashboard title={"Dashboard"} />}
            />
            <Route
              path="/agent-dashboard"
              element={<AgentDashboard title={"Dashboard"} />}
            />
            <Route
              path="/manager-dashboard"
              element={<ManagerDashboard title={"Dashboard"} />}
            />
            <Route path="/customers" element={<Customers />} />
            <Route path="/withdrawals" element={<WithdrawalsRequest />} />
            <Route
              path="/discos/:id"
              element={<CustomerInfo title={"Meter under Discos"} />}
            />
            <Route
              path="/institutions"
              element={<Investments title={"Institutions"} />}
            />
            <Route
              path="/transactions"
              element={<Transfers title={"Transactions"} />}
            />
            <Route
              path="/customer-transactions"
              element={<CustomerTransfer title={"Transactions"} />}
            />

            <Route
              path="/earning-transactions"
              element={<EarningTransfer title={"Transactions"} />}
            />

            <Route
              path="/agent-transactions"
              element={<AgentTransfer title={"Transactions"} />}
            />

            <Route
              path="/manager-transactions"
              element={<ManagerAgents title={"Agents"} />}
            />

            <Route path="/agents" element={<Agents title={"Agents"} />} />
            <Route
              path="/agents/:id"
              element={<AgentDetails title={"Agent Details"} />}
            />
            <Route
              path="/earning/:id"
              element={<UserDetails title={"Earning Partner Details"} />}
            />
            <Route
              path="/customer/:id"
              element={<RealUserDetails title={"Customer Service Details"} />}
            />
            <Route
              path="/user/:id"
              element={<RealUserDetails title={"User Details"} />}
            />
            <Route
              path="/institutions/:id"
              element={<BankAccounts title={"Bank Accounts"} />}
            />
            <Route
              path="/manager/:id"
              element={<DistrictDetails title={"District Manager Details"} />}
            />
            <Route
              path="/meter/:id"
              element={<Meter title={"Meter Details"} />}
            />
            <Route
              path="/virtualmeter/:id"
              element={<MeterVirtual title={"Meter Details"} />}
            />
            <Route
              path="/agentmeters"
              element={<AgentMeter title={"Meters"} />}
            />
            <Route
              path="/api/:id"
              element={<UserDetails title={"API Partner Details"} />}
            />
            <Route
              path="/earning"
              element={<EarningPartner title={"Earning Partner"} />}
            />
            <Route path="/user" element={<Users title={"Users"} />} />
            <Route
              path="/manager"
              element={<DistrictManager title={"District Manager"} />}
            />
            <Route
              path="/complaint"
              element={<Complaints title={"Complaints"} />}
            />
            <Route
              path="/disotransactions"
              element={<DiscoTransactions title={"Transactions"} />}
            />

            <Route path="/api" element={<ApiPartner title={"API-Partner"} />} />
            <Route path="/discos" element={<Loans title={"Discos"} />} />
            <Route path="/funding" element={<Funding title={"Funding"} />} />
            <Route path="/payment" element={<Payment title={"Payment"} />} />
            <Route path="/setting" element={<Setting title={"Settings"} />} />
            <Route
              path="/usersetting"
              element={<UserSetting title={"Settings"} />}
            />
            <Route
              path="/agentsetting"
              element={<AgentSetting title={"Settings"} />}
            />
            <Route
              path="/notification"
              element={<Notification title={"Agents"} />}
            />
            <Route
              path="/customer"
              element={<CustomerCare title={"Customer Care"} />}
            />
            <Route
              path="/systemcare"
              element={<SystemCare title={"System Care"} />}
            />
            <Route
              path="/accountant"
              element={<Accountant title={"Accountant"} />}
            />
          </>
        )}
        {/* <Route path='/audit' element={<Audit/>} />
      <Route path='/airtime' element={<Airtime/>} />
      <Route path='/data' element={<Data/>} />
      <Route path='/cable' element={<Cable/>} />
      <Route path='/electricity' element={<Electricity/>} />
      <Route path='/report' element={<Report/>} /> */}
      </Routes>
    </IdleTimerProvider>
  );
}

export default App;
