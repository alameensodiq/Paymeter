import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./Reducers/Login";
import { BanksSlice } from "./Reducers/Banks";
import { DiscosSlice } from "./Reducers/Discos";
import { TransactionSlice } from "./Reducers/Transactions";
import { CreateBankSlice } from "./Reducers/CreateBank";
import { CreatesDiscSlice } from "./Reducers/CreatedDisc";
import { DiscometerSlice } from "./Reducers/Discometer";
import { DashboardSlice } from "./Reducers/Dashboard";
import { PaymentSlice } from "./Reducers/Payments";
import { ShiftSlice } from "./Reducers/Shift";
import { ForgotSlice } from "./Reducers/ForgotPassword";
import { ChangePasswordsSlice } from "./Reducers/ChangePassword";
import { ApiAgentRoleSlice } from "./Reducers/ApiagentRole";
import { CreatePartnerSlice } from "./Reducers/CreatePartner";
import { GetPaySlice } from "./Reducers/GetPay";
import { CreatePaySlice } from "./Reducers/CreatePay";
import { TogglePaySlice } from "./Reducers/TogglePay";
import { NotificationsSlice } from "./Reducers/Notifications";
import { ApproveSlice } from "./Reducers/Approve";
import { FundingSlice } from "./Reducers/Funding";
import { FundingApprovalSlice } from "./Reducers/FundingApproval";
import { GetSettingsSlice } from "./Reducers/GetSettings";
import { CreateSettingsSlice } from "./Reducers/CreateSettings";
import { UserComSlice } from "./Reducers/UserCom";
import { CreateEarningsSlice } from "./Reducers/CreateEarnings";
import { ComplainSlice } from "./Reducers/Complain";
import { ComplainApproveSlice } from "./Reducers/ComplainApprove";
import { UserDataSlice } from "./Reducers/UserData";

export default configureStore({
  reducer: {
    login: LoginSlice?.reducer,
    banks: BanksSlice?.reducer,
    discos: DiscosSlice?.reducer,
    transactions: TransactionSlice?.reducer,
    createdbank: CreateBankSlice?.reducer,
    createdisc: CreatesDiscSlice?.reducer,
    discometer: DiscometerSlice?.reducer,
    dashboard: DashboardSlice?.reducer,
    payment: PaymentSlice?.reducer,
    shift: ShiftSlice?.reducer,
    forgot: ForgotSlice?.reducer,
    changepassword: ChangePasswordsSlice?.reducer,
    apiagentrole: ApiAgentRoleSlice?.reducer,
    createpartner: CreatePartnerSlice?.reducer,
    paymentmethod: GetPaySlice.reducer,
    createpay: CreatePaySlice?.reducer,
    togglepay: TogglePaySlice?.reducer,
    notifications: NotificationsSlice?.reducer,
    approve: ApproveSlice?.reducer,
    funding: FundingSlice?.reducer,
    fundingapproval: FundingApprovalSlice?.reducer,
    getsettings: GetSettingsSlice?.reducer,
    createsettings: CreateSettingsSlice?.reducer,
    usercom: UserComSlice?.reducer,
    earningpartner: CreateEarningsSlice?.reducer,
    complain: ComplainSlice?.reducer,
    complainapprove: ComplainApproveSlice?.reducer,
    userdata: UserDataSlice?.reducer
  }
});
