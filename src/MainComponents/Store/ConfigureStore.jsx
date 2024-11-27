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
import { GetCommissionSlice } from "./Reducers/GetCommission";
import { UserWalletSlice } from "./Reducers/UserWallet";
import { DashboardDailySlice } from "./Reducers/DashboardDaily";
import { DashboardYearlySlice } from "./Reducers/DashboardYearly";
import { DashboardDiscoMonthlySlice } from "./Reducers/DashboardDiscoMonthly";
import { EditSettingsSlice } from "./Reducers/EditSettings";
import { DashboardSummarySlice } from "./Reducers/DashboardSummary";
import { UserComEditSlice } from "./Reducers/UserComEdit";
import { DashboardDailyMonthlySlice } from "./Reducers/DashboardDailyMonthly";
import { metersSlice } from "./Reducers/meters";
import { ListofMeterSlice } from "./Reducers/Listofmeter";
import { CreateManagerSlice } from "./Reducers/CreateManager";
import { CustomersSlice } from "./Reducers/Customers";
import { CustomerCareSlice } from "./Reducers/CustomerCare";
import { DiscTransactionsSlice } from "./Reducers/DiscTransactions";
import { EditDetailsSlice } from "./Reducers/EditDetails";
import { UserActioningSlice } from "./Reducers/UserActioning";
import { EditDiscoSlice } from "./Reducers/EditDisco";
import { TotalSalesSlice } from "./Reducers/TotalSales";
import { DistrictSlice } from "./Reducers/District";
import { UserTransactionSlice } from "./Reducers/UserTransaction";
import { EarningTransSlice } from "./Reducers/EarningTrans";
import { AgentTransSlice } from "./Reducers/AgentTrans";
import { AgentsdetailsrevenueSlice } from "./Reducers/Agentsdetailsrevenue";
import { EditBankingSlice } from "./Reducers/EditBanking";
import { BankAccountsSlice } from "./Reducers/BankAccounts";
import { BankTransactionSlice } from "./Reducers/BankTransaction";
import { CustomerTransactionSlice } from "./Reducers/CustomerTransactions";
import { EarningDashSlice } from "./Reducers/EarningDash";
import { EarningCardSlice } from "./Reducers/EarningCard";
import { ResendTokenSlice } from "./Reducers/ResendToken";
import { DiscoCardSlice } from "./Reducers/DiscoCard";
import { DistrictAgentsSlice } from "./Reducers/DistrictAgents";
import { AgentManagerSlice } from "./Reducers/AgentManager";
import { UserPasswordSlice } from "./Reducers/UserPassword";
import { EditingEarningSlice } from "./Reducers/EditingEarning";
import { EarningPartCommSlice } from "./Reducers/EarningPartComm";
import { DownloadAdminTransSlice } from "./Reducers/DownloadAdminTrans";
import { DownloadEarningTransSlice } from "./Reducers/DownloadEarningTrans";
import { DownloadDiscoTransSlice } from "./Reducers/DownloadDiscoTrans";
import { RegenerateTokenSlice } from "./Reducers/RegenerateToken";
import { WithdrawalSlice } from "./Reducers/Withdrawal";
import { AgentmeteringSlice } from "./Reducers/Agentmetering";
import { AgentTransactionsSlice } from "./Reducers/AgentTransactions";
import { AgentSummarySlice } from "./Reducers/AgentSummary";
import { AvailableBanksSlice } from "./Reducers/AvailableBanks";
import { SavedBanksSlice } from "./Reducers/SavedBanks";

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
    usercomedit: UserComEditSlice?.reducer,
    earningpartner: CreateEarningsSlice?.reducer,
    complain: ComplainSlice?.reducer,
    complainapprove: ComplainApproveSlice?.reducer,
    userdata: UserDataSlice?.reducer,
    getcommission: GetCommissionSlice?.reducer,
    userwallet: UserWalletSlice?.reducer,
    dashboarddaily: DashboardDailySlice?.reducer,
    dashboardyearly: DashboardYearlySlice?.reducer,
    dashboarddiscomonthly: DashboardDiscoMonthlySlice?.reducer,
    editsettings: EditSettingsSlice?.reducer,
    dashboardsummary: DashboardSummarySlice?.reducer,
    dashboarddailymonthly: DashboardDailyMonthlySlice?.reducer,
    meters: metersSlice?.reducer,
    listofmeter: ListofMeterSlice?.reducer,
    managers: CreateManagerSlice?.reducer,
    customers: CustomersSlice?.reducer,
    createcustomer: CustomerCareSlice?.reducer,
    disctransactions: DiscTransactionsSlice?.reducer,
    editdetails: EditDetailsSlice?.reducer,
    actioning: UserActioningSlice?.reducer,
    editdiscing: EditDiscoSlice?.reducer,
    totalsales: TotalSalesSlice?.reducer,
    district: DistrictSlice?.reducer,
    usertransaction: UserTransactionSlice?.reducer,
    earningtrans: EarningTransSlice?.reducer,
    agenttrans: AgentTransSlice?.reducer,
    agentsdetailsrevenue: AgentsdetailsrevenueSlice?.reducer,
    editingbank: EditBankingSlice?.reducer,
    bankaccounts: BankAccountsSlice?.reducer,
    banktransactions: BankTransactionSlice?.reducer,
    customertransactions: CustomerTransactionSlice?.reducer,
    earningdash: EarningDashSlice?.reducer,
    earningcard: EarningCardSlice?.reducer,
    resendtoken: ResendTokenSlice?.reducer,
    discocard: DiscoCardSlice?.reducer,
    districtagents: DistrictAgentsSlice?.reducer,
    agentmanager: AgentManagerSlice?.reducer,
    passwordchange: UserPasswordSlice?.reducer,
    earningediting: EditingEarningSlice?.reducer,
    earningpartcomm: EarningPartCommSlice?.reducer,
    downloadadmintrans: DownloadAdminTransSlice?.reducer,
    downloadearningtrans: DownloadEarningTransSlice?.reducer,
    downloaddiscotrans: DownloadDiscoTransSlice?.reducer,
    regenerate: RegenerateTokenSlice?.reducer,
    withdrawal: WithdrawalSlice?.reducer,
    agentmeters: AgentmeteringSlice?.reducer,
    agenttransactions: AgentTransactionsSlice?.reducer,
    agentsummary: AgentSummarySlice?.reducer,
    availablebanks: AvailableBanksSlice?.reducer,
    savedbanks: SavedBanksSlice?.reducer
  }
});
