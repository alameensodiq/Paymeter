import React, { useEffect, useRef, useState } from "react";
import AppModal from "./AppModal";
import ModalInputText from "../bits/ModalInputText";
import { LargeSignInButton } from "../bits/LargeSignInButton";
// import { ReactComponent as Success } from "../assets/successful.svg";
import toast from "react-hot-toast";
// import { CreateBusinessRepCorporate } from "../Store/Apis/CreateBusinessRepCorporate";
import { useDispatch, useSelector } from "react-redux";
import { CreateBank } from "../MainComponents/Store/Apis/CreateBank";
import { CreatedDisco } from "../MainComponents/Store/Apis/CreatedDisco";
import { ChangePasswords } from "../MainComponents/Store/Apis/Change";
import { CreatePartner } from "../MainComponents/Store/Apis/CreatePartner";
import ModalInputSelect from "../bits/ModalInputSelect";
import ModalInputSelectTwo from "../bits/ModalInputSelectTwo";
import { CreatePay } from "../MainComponents/Store/Apis/CreatePay";
import { CreateSettings } from "../MainComponents/Store/Apis/CreateSettings";
import { UserCom } from "../MainComponents/Store/Apis/UserCom";
import { CreateEarnings } from "../MainComponents/Store/Apis/CreateEarnings";
import { TogglePay } from "../MainComponents/Store/Apis/TogglePay";
import { FundingApproval } from "../MainComponents/Store/Apis/FundingApproval";
import { Approve } from "../MainComponents/Store/Apis/Approve";
import { ApiAgentRole } from "../MainComponents/Store/Apis/ApiAgentRoles";
import EarningPartnerSelect from "../bits/EarningPartnerSelect";
import { DashboardDiscoMonthlys } from "../MainComponents/Store/Apis/DashboardDiscoMonthly";
import { EditSettings } from "../MainComponents/Store/Apis/EditSettings";
import { UserComEdit } from "../MainComponents/Store/Apis/UserComEdit";
import { Discos } from "../MainComponents/Store/Apis/Discos";
import { CreateManager } from "../MainComponents/Store/Apis/CreateManager";
import DistrictManagerSelect from "../bits/DistrictManagerSelect";
import { CreateCustomerCare } from "../MainComponents/Store/Apis/CreateCustomerCare";
import { EditDetails } from "../MainComponents/Store/Apis/EditDetails";
import { UserActioning } from "../MainComponents/Store/Apis/UserActioning";
import { EditDisco } from "../MainComponents/Store/Apis/EditDisco";
import watermark from "../assets/newlogo.png";
import eko from "../assets/eko.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Moment from "react-moment";
import { EditBanking } from "../MainComponents/Store/Apis/EditBanking";
import ModalInputSelectID from "../bits/ModalInputSelectID";
import { UserPassword } from "../MainComponents/Store/Apis/UserPassword";
import { EditingEarning } from "../MainComponents/Store/Apis/EditingEarning";
import QRCode from "react-qr-code";

const AppUserModal = ({
  setStep,
  step,
  setReload,
  userIds,
  setUserIds,
  paymentMethodIds,
  actions,
  real,
  setpaymentMethodIds,
  setActions,
  setReal,
  userId,
  stat,
  setuserId,
  setstat,
  discname,
  setdiscname,
  settingId,
  setsettingId,
  naming,
  setNaming,
  call,
  role1,
  images,
  setImages,
  sendComplain,
  userIding,
  setuserIding,
  setaction,
  action,
  short,
  setshort,
  setDownload,
  downloading,
  oldname,
  setoldname,
  setReloadreal,
  reloadreal,
  complainapprove
}) => {
  console.log(images);
  const [searcher, setSearcher] = useState("");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const [hide, sethide] = useState(false);
  const [uploadfile, setupload] = useState("");
  const [update, setUpdate] = useState("");
  const [approving, setApproving] = useState("");
  const [bustate, setBusstate] = useState(false);
  const [bustate2, setBusstate2] = useState(false);
  const [bustate3, setBusstate3] = useState(false);
  const [bustate4, setBusstate4] = useState(false);
  const [bustate5, setBusstate5] = useState(false);
  const [bustate6, setBusstate6] = useState(false);
  const [bustate7, setBusstate7] = useState(false);
  const [bustate8, setBusstate8] = useState(false);
  const [bustate9, setBusstate9] = useState(false);
  const [bustate10, setBusstate10] = useState(false);
  const [bustate11, setBusstate11] = useState(false);
  const [bustate12, setBusstate12] = useState(false);
  const [bustate13, setBusstate13] = useState(false);
  const [bustate14, setBusstate14] = useState(false);
  const [bustate15, setBusstate15] = useState(false);
  const [bustate16, setBusstate16] = useState(false);
  const [bustate17, setBusstate17] = useState(false);
  const [bustate18, setBusstate18] = useState(false);
  const [bustate19, setBusstate19] = useState(false);
  const [bustate20, setBusstate20] = useState(false);
  const [bustate21, setBusstate21] = useState(false);
  const [itemers, setItemer] = useState("");
  const [itemersedit, setItemeredit] = useState("");
  const [itemersdisco, setItemerdisco] = useState("");
  const [itemerearning, setitemerearning] = useState("");
  const [itemerearningedit, setitemerearningedit] = useState("");
  const [itemerseditingdisc, setItemereditingdisc] = useState("");
  const [itemersmanager, setItemermanager] = useState("");
  const [itemerseditbank, setItemereditbank] = useState("");
  const [itemersdiscoearning, setItemerdiscoearning] = useState("");
  const [itemersinst, setItemersinst] = useState("");
  const [itemersettings, setItemersettings] = useState("");
  const [itemerseditdisc, setItemerseditdisc] = useState("");
  const [Approved, setApproved] = useState(false);
  const [districthead, setDistricthead] = useState({
    districtManagerId: ""
  });
  const [disabled, setDisabled] = useState(false);
  const [partner, setPartner] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    password_confirmation: ""
  });
  const receiptRef = useRef();

  const [editinguser, seteditinguser] = useState({
    phone: "",
    password: "",
    NIN: "",
    address: "",
    name: ""
  });

  const [settingglobal, setSettingsGlobal] = useState({
    name: "",
    userType: "",
    commissions: {
      commissionType: "",
      fee: null,
      capFee: null
    }
  });

  const [settingglobaledit, setSettingsGlobaledit] = useState({
    name: "",
    userType: "",
    commissions: {
      commissionType: "",
      fee: null,
      capFee: null
    }
  });

  const [userglobal, setUserGlobal] = useState({
    discoName: "",
    userId: "",
    commissionDetails: {
      commissionType: "",
      fee: null,
      capFee: null
    }
  });

  const [userglobaledit, setUserGlobaledit] = useState({
    discoName: "",
    userId: "",
    commissionDetails: {
      commissionType: "",
      fee: null,
      capFee: null
    }
  });

  const [editbank, seteditbank] = useState({
    newBankName: "",
    logoUrl: "",
    commissions: {
      commissionType: "",
      fee: null,
      capFee: null
    }
  });

  const [regbus, setRegbus] = useState({
    name: "",
    // code: "",
    // ussd: "",
    logoUrl: "",
    bankCommission: {
      bankCommissionType: "",
      bankFixedCommissionFee: "",
      bankFeeTax: "",
      fee: ""
    }
  });
  const [earnings, setEarnings] = useState({
    email: "",
    name: "",
    address: "",
    phone: "",
    nin: "",
    password: "",
    commissions: {
      commissionType: "",
      fee: "",
      capFee: ""
    }
  });
  const [editearnings, seteditEarnings] = useState({
    email: "",
    name: "",
    address: "",
    phone: "",
    commissions: {
      commissionType: "",
      fee: "",
      capFee: ""
    }
  });
  const [pay, setPay] = useState({
    name: ""
  });

  const [changepass, setChangepass] = useState({
    oldPassword: "",
    newPassword: ""
  });

  const [disc, setDisc] = useState({
    name: "",
    shortName: "",
    commissionsDTO: {
      commissionType: "",
      fee: null,
      capFee: null
    },
    systemFee: "",
    earningPartnerId: "",
    earningPartnerFee: "",
    email: "",
    logoUrl: "",
    phone: null
  });

  const [editingdisc, seteditingdisc] = useState({
    name: "",
    commissionsDTO: {
      commissionType: "",
      fee: null,
      capFee: null
    },
    systemFee: "",
    earningPartnerId: "",
    earningPartnerFee: "",
    email: "",
    logoUrl: "",
    phone: null
  });

  const [manager, setManager] = useState({
    name: "",
    address: "",
    password: "",
    // commissionsDTO: {
    //   commissionType: "",
    //   fee: null
    // },
    email: "",
    phone: ""
  });

  const [customer, setCustomer] = useState({
    name: "",
    password: "",
    email: "",
    phoneNo: "",
    discoId: ""
  });

  const [editdisc, setEditDisc] = useState({
    commissionType: "",
    fee: null,
    capFee: null
  });

  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(Discos({ startDate, searcher, currentPage }));
  }, []);

  const { discos, authenticatingdiscos } = useSelector(
    (state) => state?.discos
  );
  console.log(discos);

  const discoOptions = [
    "Disco List", // Placeholder option
    ...(discos?.data?.data.map((disco) => disco.shortName) || [])
  ];

  const discoOptions2 = [
    // "Disco List", // Placeholder option
    ...(discos?.data?.data.map((disco) => disco) || [])
  ];

  const { createdbank, authenticatingcreatedbank } = useSelector(
    (state) => state?.createdbank
  );
  console.log(createdbank);

  const { createdisc, authenticatingcreatedisc } = useSelector(
    (state) => state?.createdisc
  );
  console.log(createdisc);

  const { changepassword, authenticatingchangepassword } = useSelector(
    (state) => state?.changepassword
  );
  console.log(changepassword);

  const { createpartner, authenticatingcreatepartner } = useSelector(
    (state) => state?.createpartner
  );
  console.log(createpartner);

  const { createpay, authenticatingcreatepay } = useSelector(
    (state) => state?.createpay
  );
  console.log(createpay);

  const { createsettings, authenticatingcreatesettings } = useSelector(
    (state) => state?.createsettings
  );
  console.log(createpay);

  const { usercom, authenticatingusercom } = useSelector(
    (state) => state?.usercom
  );
  console.log(usercom);

  const { usercomedit, authenticatingusercomedit } = useSelector(
    (state) => state?.usercomedit
  );
  console.log(usercomedit);

  const { earningpartner, authenticatingearningpartner } = useSelector(
    (state) => state?.earningpartner
  );
  console.log(earningpartner);

  const { togglepay, authenticatingtogglepay } = useSelector(
    (state) => state?.togglepay
  );
  console.log(togglepay);

  const { fundingapproval, authenticatingfundingapproval } = useSelector(
    (state) => state?.fundingapproval
  );
  console.log(fundingapproval);

  const { approve, authenticatingapprove } = useSelector(
    (state) => state?.approve
  );
  console.log(approve);

  const { dashboarddiscomonthly, authenticatingdashboarddiscomonthly } =
    useSelector((state) => state?.dashboarddiscomonthly);
  console.log(dashboarddiscomonthly);

  const { editsettings, authenticatingeditsettings } = useSelector(
    (state) => state?.editsettings
  );
  console.log(editsettings);

  const { managers, authenticatingmanagers } = useSelector(
    (state) => state?.managers
  );
  console.log(managers);

  const { createcustomer, authenticatingcreatecustomer } = useSelector(
    (state) => state?.createcustomer
  );
  console.log(createcustomer);

  const { editdetails, authenticatingeditdetails } = useSelector(
    (state) => state?.editdetails
  );
  console.log(editdetails);

  const { actioning, authenticatingactioning } = useSelector(
    (state) => state?.actioning
  );
  console.log(actioning);

  const { editdiscing, authenticatingeditdiscing } = useSelector(
    (state) => state?.editdiscing
  );
  console.log(editdiscing);

  const { editingbank, authenticatingeditingbank } = useSelector(
    (state) => state?.editingbank
  );
  console.log(editingbank);

  const { passwordchange, authenticatingpasswordchange } = useSelector(
    (state) => state?.passwordchange
  );
  console.log(passwordchange);

  const { earningediting, authenticatingearningediting } = useSelector(
    (state) => state?.earningediting
  );
  console.log(passwordchange);

  // passwordchange?.status

  useEffect(() => {
    if (bustate && createdbank?.status) {
      setStep(3);
    }
    if (bustate2 && createdisc?.status) {
      setStep(6);
    }
    if (bustate3 && changepassword?.status) {
      setStep(8);
    }
    if (bustate4 && createpartner?.status) {
      setStep(13);
    }
    if (bustate5 && createpay?.status) {
      setStep(16);
    }
    if (bustate6 && createsettings?.status) {
      setStep(17);
    }
    if (bustate6 && usercom?.status) {
      setStep(17);
    }
    if (bustate7 && earningpartner?.status) {
      setStep(19);
    }
    if (bustate8 && togglepay?.status) {
      setStep(21);
    }
    if (bustate9 && fundingapproval?.status) {
      setStep(23);
    }
    if (bustate10 && approve?.status) {
      setStep(26);
    }
    if (bustate11 && dashboarddiscomonthly?.status) {
      setStep(29);
    }
    if (bustate12 && editsettings?.status) {
      setStep(32);
    }
    if (bustate13 && usercomedit?.status) {
      setStep(34);
    }
    if (bustate14 && managers?.status) {
      setStep(37);
    }
    if (bustate15 && createcustomer?.status) {
      setStep(42);
    }
    if (bustate16 && editdetails?.status) {
      setStep(47);
    }
    if (bustate17 && actioning?.status) {
      setStep(49);
    }
    if (bustate18 && editdiscing?.status) {
      setStep(52);
    }
    if (bustate19 && editingbank?.status) {
      setStep(56);
    }
    if (bustate20 && passwordchange?.status) {
      setStep(58);
    }
    if (bustate21 && earningediting?.status) {
      setStep(60);
    }
    if (reloadreal && complainapprove) {
      setStep(44);
    }

    console.log(update);
  }, [
    update,
    bustate,
    bustate2,
    createdbank?.status,
    createdisc?.status,
    bustate3,
    changepassword?.status,
    createpartner?.status,
    bustate4,
    bustate5,
    bustate6,
    bustate7,
    bustate8,
    bustate9,
    bustate10,
    bustate11,
    bustate12,
    bustate13,
    bustate14,
    bustate15,
    bustate16,
    bustate17,
    bustate18,
    bustate19,
    bustate20,
    bustate21,
    createpay?.status,
    createsettings?.status,
    usercom?.status,
    earningpartner?.status,
    togglepay?.status,
    fundingapproval?.status,
    approve?.status,
    dashboarddiscomonthly?.status,
    editsettings?.status,
    usercomedit?.status,
    managers?.status,
    createcustomer?.status,
    editdetails?.status,
    actioning?.status,
    editdiscing?.status,
    editingbank?.status,
    passwordchange?.status,
    reloadreal,
    complainapprove,
    earningediting?.status
  ]);

  useEffect(() => {
    if (call && !role1) {
      dispatch(ApiAgentRole({ role: "EARNINGPARTNER" }));
    }
    if (role1 && !call) {
      dispatch(ApiAgentRole({ role1 }));
    }
  }, [call, role1]);

  const { apiagentrole, authenticatingapiagentrole } = useSelector(
    (state) => state?.apiagentrole
  );
  console.log(apiagentrole?.data?.data);

  const districtOptions = [
    ...(apiagentrole?.data?.data.map((district) => district.lastName) || [])
  ];

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setRegbus({
      ...regbus,
      [name]: value
    });
  };

  const ChangeDetails = (e) => {
    const { name, value } = e.target;
    console.log(value);
    seteditinguser({
      ...editinguser,
      [name]: value
    });
  };

  const ChangeDetailsNumber = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    const sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }
    seteditinguser({
      ...editinguser,
      [name]: sanitizedValue
    });
  };

  const ChangeAgentDistrict = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setDistricthead({
      [name]: value
    });
  };

  const ChangeEditDisco = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    // Update the state with the sanitized string value
    setEditDisc({
      ...editdisc,
      [name]: sanitizedValue
    });
  };

  const ChangeEarning = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setEarnings({
      ...earnings,
      [name]: value
    });
  };

  const ChangeEarningedit = (e) => {
    const { name, value } = e.target;
    console.log(value);
    seteditEarnings({
      ...editearnings,
      [name]: value
    });
  };

  const ChangePay = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setPay({
      ...pay,
      [name]: value
    });
  };

  const ChangePartner = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setPartner({
      ...partner,
      [name]: value
    });
  };

  const ChangeApproving = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setApproving(e.target.value);
  };

  const ChangePartnerNumber = (e) => {
    const { name, value } = e.target;

    // Remove non-numeric characters and decimal point (but allow one decimal point)
    let sanitizedValue = value.replace(/[^0-9.]/g, "");

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // Limit to 11 characters in total (including digits before and after the decimal point)
    if (sanitizedValue.replace(".", "").length > 11) {
      sanitizedValue = sanitizedValue.slice(0, 11); // This will limit it to 11 digits max
    }

    setPartner({
      ...partner,
      [name]: sanitizedValue
    });
  };

  const ChangeDisc = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setDisc({
      ...disc,
      [name]: value
    });
  };

  const ChangeeditDisc = (e) => {
    const { name, value } = e.target;
    console.log(value);
    seteditingdisc({
      ...editingdisc,
      [name]: value
    });
  };

  console.log(editingdisc);

  const ChangeManager = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setManager({
      ...manager,
      [name]: value
    });
  };

  const ChangeEditbank = (e) => {
    const { name, value } = e.target;
    console.log(value);
    seteditbank({
      ...editbank,
      [name]: value
    });
  };

  const ChangeCustomer = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setCustomer({
      ...customer,
      [name]: value
    });
  };

  const ChangeDiscNumber = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    if (sanitizedValue.replace(".", "").length > 11) {
      sanitizedValue = sanitizedValue.slice(0, 11); // This will limit it to 11 digits max
    }

    setDisc((prevDisc) => ({
      ...prevDisc,
      [name]: sanitizedValue
    }));
  };

  const ChangeeditingDiscNumber = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }
    if (sanitizedValue.replace(".", "").length > 11) {
      sanitizedValue = sanitizedValue.slice(0, 11); // This will limit it to 11 digits max
    }

    seteditingdisc((prevDisc) => ({
      ...prevDisc,
      [name]: sanitizedValue
    }));
  };

  const ChangeCustomerNumber = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    if (sanitizedValue.replace(".", "").length > 11) {
      sanitizedValue = sanitizedValue.slice(0, 11); // This will limit it to 11 digits max
    }

    setCustomer((prevDisc) => ({
      ...prevDisc,
      [name]: sanitizedValue
    }));
  };

  const ChangeManagerNumber = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    if (sanitizedValue.replace(".", "").length > 11) {
      sanitizedValue = sanitizedValue.slice(0, 11); // This will limit it to 11 digits max
    }

    setManager((prevDisc) => ({
      ...prevDisc,
      [name]: sanitizedValue
    }));
  };

  const ChangeEarningNumber = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    if (sanitizedValue.replace(".", "").length > 11) {
      sanitizedValue = sanitizedValue.slice(0, 11); // This will limit it to 11 digits max
    }

    setEarnings((prevDisc) => ({
      ...earnings,
      [name]: sanitizedValue
    }));
  };

  const ChangeEarningNumberedit = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    if (sanitizedValue.replace(".", "").length > 11) {
      sanitizedValue = sanitizedValue.slice(0, 11); // This will limit it to 11 digits max
    }

    seteditEarnings((prevDisc) => ({
      ...editearnings,
      [name]: sanitizedValue
    }));
  };

  const ChangePass = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setPassword(e.target.value);
  };

  const datePickerRef = useRef(null);

  const SendDetailsBank = () => {
    const { name, logoUrl, bankCommission } = regbus;
    dispatch(
      CreateBank({
        // code,
        name,
        // ussd,
        logoUrl,
        bankCommission
      })
    );
    setBusstate(true);
  };

  const sendDetails = () => {
    const { phone, NIN, address, name } = editinguser;
    dispatch(
      EditDetails({
        userId: userIding,
        phone,
        // password,
        NIN,
        address,
        name
      })
    );
    setBusstate16(true);
  };

  const SendDetailsDisco = () => {
    const {
      name,
      shortName,
      earningPartnerId,
      earningPartnerFee,
      commissionsDTO,
      email,
      logoUrl,
      phone,
      systemFee
    } = disc;

    // Check if the email is valid
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    dispatch(
      CreatedDisco({
        name,
        shortName,
        commissionsDTO,
        earningPartnerId,
        earningPartnerFee: parseFloat(earningPartnerFee),
        email,
        systemFee: parseFloat(systemFee),
        logoUrl,
        phone
      })
    );

    setBusstate2(true);
  };

  const SendDetailseditbank = () => {
    const { newBankName, commissions, logoUrl } = editbank;

    dispatch(
      EditBanking({
        bankName: oldname,
        newBankName,
        commissions,
        logoUrl
      })
    );

    setBusstate19(true);
  };

  const SendDetailsManager = () => {
    // const { name, phone, commissionsDTO, email, address } = manager;
    const { name, phone, password, email, address } = manager;

    // Check if the email is valid
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    dispatch(
      CreateManager({
        name,
        address,
        password,
        // commissionsDTO,
        email,
        phone
      })
    );

    setBusstate14(true);
  };

  const SendDetailsCustomer = () => {
    const { name, phoneNo, email, password, discoId } = customer;

    // Check if the email is valid
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    dispatch(
      CreateCustomerCare({
        name,
        password,
        email,
        phoneNo,
        discoId
      })
    );

    setBusstate15(true);
  };

  const SendEditDisco = () => {
    const { commissionType } = editdisc;
    console.log(discname);
    console.log(editdisc);
    dispatch(
      DashboardDiscoMonthlys({
        editdisc,
        discname
      })
    );
    setBusstate11(true);
  };

  const SendEarningPartner = () => {
    const { email, name, address, phone, nin, password, commissions } =
      earnings;
    dispatch(
      CreateEarnings({
        email,
        name,
        address,
        phone,
        nin,
        password,
        commissions
      })
    );
    setBusstate7(true);
  };

  const SendEarningPartneredit = () => {
    const { email, name, address, phone, commissions } = editearnings;
    dispatch(
      EditingEarning({
        email,
        name,
        address,
        phone,
        commissions,
        earningPartnerId: userIding
      })
    );
    setBusstate21(true);
  };

  const SendPassword = () => {
    dispatch(
      ChangePasswords({
        password
      })
    );
    setBusstate3(true);
  };

  const SendChangePassword = () => {
    const { oldPassword, newPassword } = changepass;
    dispatch(
      UserPassword({
        oldPassword,
        newPassword
      })
    );
    setBusstate20(true);
  };

  const SendPay = () => {
    dispatch(
      CreatePay({
        name: pay?.name
      })
    );
    setBusstate5(true);
    setReload(true);
  };

  const SendPartner = () => {
    const { name, email, phone, address, password, password_confirmation } =
      partner;
    dispatch(
      CreatePartner({
        name,
        email,
        phone,
        address,
        password,
        password_confirmation
      })
    );
    setBusstate4(true);
  };

  const SendSettings = () => {
    const { name, userType, commissions } = settingglobal;
    console.log({ name, userType, commissions });
    dispatch(
      CreateSettings({
        name,
        userType,
        commissions
      })
    );
    setBusstate6(true);
  };

  const SendEditSettings = () => {
    const { name, userType, commissions } = settingglobaledit;
    console.log({ name, userType, commissions });
    dispatch(
      EditSettings({
        name,
        userType,
        commissions,
        settingId
      })
    );
    setBusstate12(true);
  };

  const SendUser = () => {
    const { discoName, userId, commissionDetails } = userglobal;
    console.log({ discoName, userId, commissionDetails });
    dispatch(
      UserCom({
        discoName,
        userId,
        commissionDetails
      })
    );
    setBusstate6(true);
  };

  const SendUserEdit = () => {
    const { discoName, userId, commissionDetails } = userglobaledit;
    console.log({ discoName, userId, commissionDetails });
    dispatch(
      UserComEdit({
        discoName,
        userId,
        commissionDetails
      })
    );
    setBusstate13(true);
  };

  const sendDiscoeditDetails = () => {
    const {
      name,
      commissionsDTO,
      earningPartnerId,
      earningPartnerFee,
      email,
      logoUrl,
      phone,
      systemFee
    } = editingdisc;
    dispatch(
      EditDisco({
        name,
        shortName: short,
        commissionsDTO,
        earningPartnerId,
        earningPartnerFee,
        email,
        logoUrl,
        phone,
        systemFee
      })
    );
    setBusstate18(true);
  };

  const sendUserAction = () => {
    dispatch(
      UserActioning({
        userId: userIding,
        action: action
      })
    );
    setBusstate17(true);
  };

  const handleCloseModal4 = () => {
    if (images) {
      setImages("");
      setReload(true);
    }
    setDistricthead({
      districtManagerId: ""
    });
    setBusstate18(false);
    if (short) {
      setshort("");
    }
    setApproving("");
    if (userId) {
      setuserId("");
      setReload(true);
    }
    if (downloading) {
      setDownload([]);
    }
    if (stat) {
      setstat("");
      setReload(true);
    }
    if (oldname) {
      setoldname("");
    }
    setCustomer({
      name: "",
      password: "",
      email: "",
      phoneNo: "",
      discoId: ""
    });
    seteditinguser({
      phone: "",
      password: "",
      NIN: "",
      address: "",
      name: ""
    });
    if (settingId) {
      setsettingId("");
      setReload(true);
    }
    seteditbank({
      newBankName: "",
      logoUrl: "",
      commissions: {
        commissionType: "",
        fee: null,
        capFee: null
      }
    });
    setRegbus({
      name: "",
      // code: "",
      // ussd: "",
      logoUrl: "",
      bankCommission: {
        bankCommissionType: "",
        capFee: "",
        taxFee: "",
        fee: ""
      }
    });
    setManager({
      name: "",
      address: "",
      password: "",
      // commissionsDTO: {
      //   commissionType: "",
      //   fee: null
      // },
      email: "",
      phone: ""
    });
    seteditingdisc({
      name: "",
      commissionsDTO: {
        commissionType: "",
        fee: null,
        capFee: null
      },
      systemFee: "",
      earningPartnerId: "",
      earningPartnerFee: "",
      email: "",
      logoUrl: "",
      phone: null
    });
    setSettingsGlobal({
      name: "",
      userType: "",
      commissions: {
        commissionType: "",
        fee: null,
        capFee: null
      }
    });
    if (userIding) {
      setuserIding("");
      setReload(true);
    }
    setPartner({
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      password_confirmation: ""
    });
    setItemer("");
    setItemersinst("");
    setItemerseditdisc("");
    setItemerdisco("");
    setItemermanager("");
    setDisc({
      name: "",
      shortName: "",
      commissionsDTO: {
        commissionType: "",
        fee: null,
        capFee: null
      },
      systemFee: "",
      earningPartnerId: "",
      earningPartnerFee: "",
      email: "",
      logoUrl: "",
      phone: ""
    });
    setPay({
      name: ""
    });
    setChangepass({
      oldPassword: "",
      newPassword: ""
    });
    setUserGlobal({
      discoName: "",
      userId: "",
      commissionDetails: {
        commissionType: "",
        fee: null,
        capFee: null
      }
    });
    setUserGlobaledit({
      discoName: "",
      userId: "",
      commissionDetails: {
        commissionType: "",
        fee: null,
        capFee: null
      }
    });
    if (reloadreal) {
      setReloadreal(false);
    }
    setBusstate(false);
    setBusstate2(false);
    setBusstate3(false);
    setBusstate4(false);
    setBusstate5(false);
    setBusstate6(false);
    setBusstate8(false);
    setBusstate9(false);
    setBusstate10(false);
    setBusstate11(false);
    setBusstate12(false);
    setBusstate13(false);
    setBusstate14(false);
    setBusstate15(false);
    setBusstate16(false);
    setBusstate17(false);
    setBusstate18(false);
    setBusstate19(false);
    setBusstate20(false);
    setApproved(false);
    setReload(true);
    setPassword("");
    if (action) {
      setaction("");
      setReload(true);
    }
    if (userIds) {
      setUserIds("");
      setReload(true);
    }
    if (paymentMethodIds) {
      setpaymentMethodIds("");
      setReload(true);
    }
    if (actions) {
      setActions("");
      setReload(true);
    }
    if (real) {
      setReal("");
      setReload(true);
    }
    setEarnings({
      email: "",
      name: "",
      address: "",
      phone: "",
      nin: "",
      password: "",
      commissions: {
        commissionType: "",
        fee: "",
        capFee: ""
      }
    });
    seteditEarnings({
      email: "",
      name: "",
      address: "",
      phone: "",
      commissions: {
        commissionType: "",
        fee: "",
        capFee: ""
      }
    });
    if (discname) {
      setdiscname("");
      setReload(true);
    }
    setStep(0);
  };

  const handleSubmit = () => {
    // Destructure partner object
    const { name, email, phone, address, password, password_confirmation } =
      partner;
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !password ||
      !password_confirmation
    ) {
      toast.error("Input all variables");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Add @ to your email input");
      return;
    }
    if (password !== password_confirmation) {
      toast.error("Password and Confirm Password must be the same");
      return;
    }

    // Proceed to next step if all validations pass
    setStep(10);
  };

  useEffect(() => {
    setUserGlobal((prev) => ({
      ...prev,
      userId: userIds
    }));
    setUserGlobaledit((prev) => ({
      ...prev,
      userId: naming?.id
    }));
  }, [userIds, naming]);

  useEffect(() => {
    setSettingsGlobal((prev) => ({
      ...prev,
      commissions:
        itemers === "Fixed"
          ? {
              commissionType: "FIXED",
              fee: null
            }
          : {
              commissionType: "PERCENTAGE",
              fee: null,
              capFee: null
            }
    }));
    setSettingsGlobaledit((prev) => ({
      ...prev,
      commissions:
        itemersettings === "Fixed"
          ? {
              commissionType: "FIXED",
              fee: null
            }
          : {
              commissionType: "PERCENTAGE",
              fee: null,
              capFee: null
            }
    }));
    setEarnings((prev) => ({
      ...prev,
      commissions:
        itemerearning === "Fixed"
          ? {
              commissionType: "FIXED",
              fee: null
            }
          : {
              commissionType: "PERCENTAGE",
              fee: null,
              capFee: null
            }
    }));
    seteditEarnings((prev) => ({
      ...prev,
      commissions:
        itemerearningedit === "Fixed"
          ? {
              commissionType: "FIXED",
              fee: null
            }
          : {
              commissionType: "PERCENTAGE",
              fee: null,
              capFee: null
            }
    }));
    setUserGlobal((prev) => ({
      ...prev,
      commissionDetails:
        itemers === "Fixed"
          ? {
              commissionType: "FIXED",
              fee: null
            }
          : {
              commissionType: "PERCENTAGE",
              fee: null,
              capFee: null
            }
    }));
    setUserGlobaledit((prev) => ({
      ...prev,
      commissionDetails:
        itemersedit === "Fixed"
          ? {
              commissionType: "FIXED",
              fee: null
            }
          : {
              commissionType: "PERCENTAGE",
              fee: null,
              capFee: null
            }
    }));
    setDisc((prev) => ({
      ...prev,
      commissionsDTO:
        itemersdisco === "Fixed"
          ? {
              commissionType: "FIXED",
              fee: null
            }
          : {
              commissionType: "PERCENTAGE",
              fee: null,
              capFee: null
            }
    }));
    seteditingdisc((prev) => ({
      ...prev,
      commissionsDTO:
        itemerseditingdisc === "Fixed"
          ? {
              commissionType: "FIXED",
              fee: null
            }
          : {
              commissionType: "PERCENTAGE",
              fee: null,
              capFee: null
            }
    }));
    setManager((prev) => ({
      ...prev,
      commissionsDTO:
        itemersmanager === "Fixed"
          ? {
              commissionType: "FIXED",
              fee: null
            }
          : {
              commissionType: "PERCENTAGE",
              fee: null,
              capFee: null
            }
    }));
    setRegbus((prev) => ({
      ...prev,
      bankCommission:
        itemersinst === "Fixed"
          ? {
              bankCommissionType: "FIXED",
              capFee: "",
              taxFee: "",
              fee: ""
            }
          : {
              bankCommissionType: "PERCENTAGE",
              capFee: "",
              taxFee: "",
              fee: ""
            }
    }));
    seteditbank((prev) => ({
      ...prev,
      Commissions:
        itemerseditbank === "Fixed"
          ? {
              CommissionType: "FIXED",
              fee: ""
            }
          : {
              CommissionType: "PERCENTAGE",
              capFee: "",
              fee: ""
            }
    }));
    if (itemerseditdisc === "Fixed") {
      setEditDisc({
        commissionType: "FIXED",
        fee: null
      });
    } else {
      setEditDisc({
        commissionType: "PERCENTAGE",
        capFee: null,
        fee: null
      });
    }
  }, [
    itemers,
    itemersdisco,
    itemersinst,
    itemerseditdisc,
    itemerseditingdisc,
    itemersettings,
    itemersedit,
    itemersmanager,
    itemerseditbank,
    itemerearning,
    itemerearningedit
  ]);

  const ChangeSettings = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setSettingsGlobal({
      ...settingglobal,
      [name]: value
    });
  };

  const ChangePassing = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setChangepass({
      ...changepass,
      [name]: value
    });
  };

  const ChangeSettingsEdit = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setSettingsGlobaledit({
      ...settingglobaledit,
      [name]: value
    });
  };

  const ChangeSettingsUser = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUserGlobal({
      ...userglobal,
      [name]: value
    });
  };

  const ChangeSettingsUserEdit = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUserGlobaledit({
      ...userglobaledit,
      [name]: value
    });
  };

  const ChangeSettingsType = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    setSettingsGlobal((prev) => ({
      ...prev,
      commissions: {
        ...prev.commissions,
        [name]: sanitizedValue // Pass the sanitized string value
      }
    }));
  };

  const ChangeSettingsEarningType = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    setEarnings((prev) => ({
      ...prev,
      commissions: {
        ...prev.commissions,
        [name]: sanitizedValue // Pass the sanitized string value
      }
    }));
  };

  const ChangeSettingsEarningTypeedit = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    seteditEarnings((prev) => ({
      ...prev,
      commissions: {
        ...prev.commissions,
        [name]: sanitizedValue // Pass the sanitized string value
      }
    }));
  };

  const ChangeSettingsTypeEdit = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    setSettingsGlobaledit((prev) => ({
      ...prev,
      commissions: {
        ...prev.commissions,
        [name]: sanitizedValue // Pass the sanitized string value
      }
    }));
  };

  const ChangeSettingsTypeUser = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    // Update the state with the sanitized string value
    setUserGlobal((prev) => ({
      ...prev,
      commissionDetails: {
        ...prev.commissionDetails,
        [name]: sanitizedValue // Pass the sanitized string value
      }
    }));
  };

  const ChangeSettingsTypeUseredit = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    setUserGlobaledit((prev) => ({
      ...prev,
      commissionDetails: {
        ...prev.commissionDetails,
        [name]: sanitizedValue // Update with sanitized string value
      }
    }));
  };

  const ChangeSettingsTypeUserDisco = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    setDisc((prevDisc) => ({
      ...prevDisc,
      commissionsDTO: {
        ...prevDisc.commissionsDTO,
        [name]: sanitizedValue // Update with sanitized string value
      }
    }));
  };

  const ChangeSettingsTypeUsereditDisco = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    seteditingdisc((prevDisc) => ({
      ...prevDisc,
      commissionsDTO: {
        ...prevDisc.commissionsDTO,
        [name]: sanitizedValue // Update with sanitized string value
      }
    }));
  };

  const ChangeSettingsTypeUserManager = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    setManager((prevDisc) => ({
      ...prevDisc,
      commissionsDTO: {
        ...prevDisc.commissionsDTO,
        [name]: sanitizedValue // Update with sanitized string value
      }
    }));
  };

  const ChangeSettingsTypeEditbank = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    seteditbank((prevDisc) => ({
      ...prevDisc,
      commissions: {
        ...prevDisc.commissions,
        [name]: sanitizedValue // Update with sanitized string value
      }
    }));
  };

  const ChangeSettingsTypeUserInst = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and one decimal point
    let sanitizedValue = value.replace(/[^0-9.]/g, ""); // Remove non-numeric characters

    // Ensure only one decimal point is allowed
    const decimalCount = (sanitizedValue.match(/\./g) || []).length;

    // If there's more than one decimal point, keep only the first one
    if (decimalCount > 1) {
      const firstDecimalIndex = sanitizedValue.indexOf(".");
      const parts = sanitizedValue.split(".");
      sanitizedValue =
        parts[0] + "." + parts.slice(1).join("").replace(/\./g, "");
    }

    // If the input is empty, set the value to "0"
    if (sanitizedValue === "") {
      sanitizedValue = "0"; // Set to "0" or another default value
    }

    setRegbus((prev) => ({
      ...prev,
      bankCommission: {
        ...prev.bankCommission,
        [name]: sanitizedValue // Update with sanitized string value
      }
    }));
  };

  const sendingsImage = (e) => {
    // Check if the event and files are defined
    if (!e || !e.target || !e.target.files || e.target.files.length === 0) {
      console.error("No file selected");
      return; // Exit if no file is selected
    }

    const accessToken = sessionStorage.getItem("token");
    const folder = e.target.files[0]; // Get the first file

    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "YOUR_API_KEY_HERE");
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const formdata = new FormData();
    formdata.append("file", folder, folder.name); // Append the file with its name

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };

    fetch(`${process.env.REACT_APP_BASE_URL}admin/upload-logo`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // Changed to text to match your original implementation
      })
      .then((result) => {
        const parsedResult = JSON.parse(result); // Parse the JSON response
        console.log(parsedResult);
        setUpdate(parsedResult?.data?.logoUrl); // Update state with file name
        setDisc((prevDisc) => ({
          ...prevDisc,
          logoUrl: parsedResult?.data?.logoUrl
        }));
        seteditingdisc((prevDisc) => ({
          ...prevDisc,
          logoUrl: parsedResult?.data?.logoUrl
        }));
        setRegbus((prevDisc) => ({
          ...prevDisc,
          logoUrl: parsedResult?.data?.logoUrl
        }));
        seteditbank((prevDisc) => ({
          ...prevDisc,
          logoUrl: parsedResult?.data?.logoUrl
        }));
        toast.success("File uploaded");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("File upload failed"); // Simplified error message
      });
  };

  const PickDater = () => {
    // You can integrate with date picker if needed
    console.log("Triggering date picker");
    if (datePickerRef.current) {
      datePickerRef.current.click(); // If needed
    }
  };

  const DownloadReceipt = () => {
    const input = document.getElementById("App");
    console.log(input);
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true
    }).then((canvas) => {
      // const imgWidth = 210;
      const imgWidth = 205;
      // const imgHeight = 200;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("image/jpeg", 1.4);
      const pdf = new jsPDF("p", "mm", "a4", true);
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      pdf.save("Receipt.pdf");
    });
  };

  const formatNumberWithCommas = (number) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handlePrint = () => {
    setTimeout(() => {
      const input = receiptRef.current;
      const printWindow = window.open("", "_blank");

      const styles = [...document.styleSheets]
        .map((styleSheet) => {
          try {
            return Array.from(styleSheet.cssRules)
              .map((rule) => rule.cssText)
              .join("");
          } catch (e) {
            return ""; // Ignore cross-origin stylesheets
          }
        })
        .join("");

      // Correct the line to remove the invalid character
      printWindow.document.write("<html><head><title>Receipt</title>");
      printWindow.document.write(`<style>${styles}</style>`); // Use correct syntax for template literals
      printWindow.document.write("</head><body>");
      printWindow.document.write(input.outerHTML);
      printWindow.document.write("</body></html>");

      printWindow.document.close();
      printWindow.focus(); // Ensure the window is focused

      // Wait for the content to load before printing
      printWindow.onload = function () {
        printWindow.print();
        printWindow.close(); // Optionally close the window after printing
      };
    }, 1000);
  };

  return (
    <div>
      <AppModal
        step={1}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add Bank"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => Change(e)}
          name="name"
          value={regbus?.name}
          placeholder={`${`Enter Bank Name`}`}
        />
        {/* <ModalInputText
          label="Code"
          onChange={(e) => Change(e)}
          name="code"
          value={regbus?.code}
          placeholder={`${`Enter Bank Code`}`}
        /> */}
        {/* <ModalInputText
          label="USSD"
          onChange={(e) => Change(e)}
          name="ussd"
          value={regbus?.ussd}
          placeholder={`${`Enter Bank Ussd`}`}
        /> */}
        <ModalInputSelectTwo
          name="commissionsDTO"
          label="Commission DTO"
          // onChange={(e) => ChangeDisc(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemersinst}
          big
          setItemer={setItemersinst}
        />
        {regbus?.logoUrl !== "" ? (
          <img
            src={regbus?.logoUrl}
            alt="takephoto"
            style={{ width: "492px", height: "105px" }}
          />
        ) : (
          <>
            <input
              type="file"
              id="uploadFile"
              name="avatar"
              onChange={(e) => sendingsImage(e)}
              accept="image/*"
              style={{ display: "none" }}
              className="i-none"
              ref={datePickerRef}
            />
            <ModalInputText
              onClick={() => PickDater()}
              label="Upload Image"
              photo
            />
          </>
        )}
        {itemersinst === "Fixed" ? (
          <>
            <ModalInputText
              label="Bank Cap Fee"
              onChange={(e) => ChangeSettingsTypeUserInst(e)}
              name="capFee"
              value={regbus?.bankCommission?.capFee}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <ModalInputText
              label="Bank Fee Tax"
              onChange={(e) => ChangeSettingsTypeUserInst(e)}
              name="taxFee"
              value={regbus?.bankCommission?.taxFee}
              placeholder={`${`Enter Bank Fee Tax`}`}
            />
            <ModalInputText
              label="Fee"
              onChange={(e) => ChangeSettingsTypeUserInst(e)}
              name="fee"
              value={regbus?.bankCommission?.fee}
              placeholder={`${`Enter Bank Fee`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
          </>
        ) : itemersinst === "Percentage" ? (
          <>
            <ModalInputText
              label="Bank Percentage  Commission"
              onChange={(e) => ChangeSettingsTypeUserInst(e)}
              name="capFee"
              value={regbus?.bankCommission?.capFee}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <ModalInputText
              label="Bank Fee Tax"
              onChange={(e) => ChangeSettingsTypeUserInst(e)}
              name="bankFeeTax"
              value={regbus?.bankCommission?.taxFee}
              placeholder={`${`Enter Bank Fee Tax`}`}
            />
            <ModalInputText
              label="Fee"
              onChange={(e) => ChangeSettingsTypeUserInst(e)}
              name="fee"
              value={regbus?.bankCommission?.fee}
              placeholder={`${`Enter Bank Fee`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
          </>
        ) : (
          ""
        )}
        <LargeSignInButton
          onClick={() => {
            const { name, logoUrl, bankCommission } = regbus;
            console.log({ name, logoUrl, bankCommission });

            // Check for missing values
            const isFeeMissing =
              bankCommission?.bankFixedCommissionFee === null;
            const isCapFeeMissing = bankCommission?.fee === null;

            if (
              name &&
              // ussd &&
              logoUrl &&
              // code &&
              !isFeeMissing &&
              !isCapFeeMissing
            ) {
              setStep(2);
            } else {
              toast.error("Fill all details");
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={2}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to add a Bank, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendDetailsBank()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={3}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new Business Rep</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={4}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add Discos"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangeDisc(e)}
          name="name"
          value={disc?.name}
          placeholder={`${`Enter Disco Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangeDisc(e)}
          name="email"
          value={disc?.email}
          placeholder={`${`Enter Disco Email`}`}
        />
        <EarningPartnerSelect
          name="earningPartnerId"
          label="Choose Earning Partner"
          value={disc?.earningPartnerId}
          onChange={(e) => ChangeDisc(e)}
          earningPartnerId
          options={apiagentrole?.data?.data}
        />
        {disc?.earningPartnerId !== "" && (
          <ModalInputText
            label="Earning Partner Fee Percentage"
            onChange={(e) => ChangeDiscNumber(e)}
            name="earningPartnerFee"
            value={disc?.earningPartnerFee}
            placeholder={`${`Enter Earning Partner Percentage`}`}
          />
        )}
        {/* {disc?.earningPartnerId !== "" && (
          <>
            <ModalInputSelectTwo
              name="commissionsDTO"
              label="Earning Commission"
              // onChange={(e) => ChangeDisc(e)}
              options={["Fixed", "Percentage"]}
              itemer={itemersdiscoearning}
              big
              setItemer={setItemerdiscoearning}
            />

            {itemersdiscoearning === "Fixed" ? (
              <ModalInputText
                label="Fixed Commission"
                // onChange={(e) => ChangeSettingsTypeUser(e)}
                name="fee"
                // value={userglobal?.commissionDetails?.fee}
                placeholder="Enter Fixed Commission"
              />
            ) : itemersdiscoearning === "Percentage" ? (
              <>
                <ModalInputText
                  label="Percentage Commission"
                  // onChange={(e) => ChangeSettingsTypeUser(e)}
                  name="fee"
                  // value={userglobal?.commissionDetails?.fee}
                  placeholder="Enter Percentage Commission"
                />
                <span style={{ color: "red", fontSize: "10px" }}>
                  Note: Percentage must be less than or equal to Disco
                  Percentage with Paymeter
                </span>
                <ModalInputText
                  label="Cap Fee"
                  // onChange={(e) => ChangeSettingsTypeUser(e)}
                  name="capFee"
                  // value={userglobal?.commissionDetails?.capFee}
                  placeholder="Enter Cap Fee"
                />
              </>
            ) : null}
          </>
        )} */}

        {/* <ModalInputSelectTwo
          name="commissionsDTO"
          label="Commission DTO"
          onChange={(e) => ChangeDisc(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemersdisco}
          big
          setItemer={setItemerdisco}
        /> */}
        <ModalInputText
          label="System Fee"
          onChange={(e) => ChangeDiscNumber(e)}
          name="systemFee"
          value={disc?.systemFee}
          placeholder={`${`Enter Disco Name`}`}
        />
        <ModalInputText
          label="Phone"
          onChange={(e) => ChangeDiscNumber(e)}
          name="phone"
          value={disc?.phone}
          placeholder={`${`Enter Disco Phone Number`}`}
        />
        <ModalInputText
          label="Short Name"
          onChange={(e) => ChangeDisc(e)}
          name="shortName"
          value={disc?.shortName}
          placeholder={`${`Enter Disco Short Name`}`}
        />
        {disc?.logoUrl !== "" ? (
          <img
            src={disc?.logoUrl}
            alt="takephoto"
            style={{ width: "492px", height: "105px" }}
          />
        ) : (
          <>
            <input
              type="file"
              id="uploadFile"
              name="avatar"
              onChange={(e) => sendingsImage(e)}
              accept="image/*"
              style={{ display: "none" }}
              className="i-none"
              ref={datePickerRef}
            />
            <ModalInputText
              onClick={() => PickDater()}
              label="Upload Image"
              photo
            />
          </>
        )}
        <ModalInputSelectTwo
          name="commissionsDTO"
          label="Commission DTO"
          onChange={(e) => ChangeDisc(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemersdisco}
          big
          setItemer={setItemerdisco}
        />
        {itemersdisco === "Fixed" ? (
          <ModalInputText
            label="Fixed Commission"
            onChange={(e) => ChangeSettingsTypeUserDisco(e)}
            name="fee"
            value={disc?.commissionsDTO?.fee || ""}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemersdisco === "Percentage" ? (
          <>
            <ModalInputText
              label="Percentage Commission"
              onChange={(e) => ChangeSettingsTypeUserDisco(e)}
              name="fee"
              value={disc?.commissionsDTO?.fee || ""}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
            <ModalInputText
              label="Cap Fee"
              onChange={(e) => ChangeSettingsTypeUserDisco(e)}
              name="capFee"
              value={disc?.commissionsDTO?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
          </>
        ) : (
          ""
        )}
        <LargeSignInButton
          onClick={() => {
            const { shortName, name, commissionsDTO, phone, email } = disc;
            console.log({ name, shortName, commissionsDTO });

            // Check for missing values
            const isFeeMissing = commissionsDTO?.fee === null;
            const isCapFeeMissing = commissionsDTO?.capFee === null;

            if (
              name &&
              shortName &&
              phone &&
              email &&
              (itemers === "Fixed"
                ? !isFeeMissing
                : !isFeeMissing && !isCapFeeMissing)
            ) {
              setStep(5);
            } else {
              toast.error("Fill all details");
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={5}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to add a Disco, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendDetailsDisco()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={6}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new Disco</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={7}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        heading="Change Password"
      >
        <ModalInputText
          label="Password"
          onChange={(e) => ChangePass(e)}
          name="password"
          value={password}
          placeholder={`${`Enter New Password`}`}
        />
        <LargeSignInButton
          onClick={() => SendPassword()}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={8}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Password Changed
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Changed Password</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={9}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add Partner"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangePartner(e)}
          name="name"
          value={partner?.name}
          placeholder={`${`Enter Partner Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangePartner(e)}
          name="email"
          value={partner?.email}
          placeholder={`${`Enter Email Address`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => ChangePartnerNumber(e)}
          name="phone"
          value={partner?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangePartner(e)}
          name="address"
          value={partner?.address}
          placeholder={`${`Enter Address`}`}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangePartner(e)}
          name="password"
          value={partner?.password}
          placeholder={`${`Enter Password`}`}
        />
        <ModalInputText
          label="Confirm Password"
          onChange={(e) => ChangePartner(e)}
          name="password_confirmation"
          value={partner?.password_confirmation}
          placeholder={`${`Confirm Passowrd`}`}
        />
        <LargeSignInButton
          onClick={() => handleSubmit()}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={10}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to add a Partner, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendPartner()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={11}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="COMMISSION"
      >
        {/* <ModalInputSelect
          label="User Type"
          options={["Agent", "Api-Partner"]}
        /> */}
        <ModalInputSelect
          name="discoName"
          label="Disco"
          value={userglobal?.discoName}
          onChange={(e) => ChangeSettingsUser(e)}
          options={discoOptions}
        />

        {/* <ModalInputSelect
          label="User Type"
          name="userType"
          value={userglobal?.userType}
          onChange={(e) => ChangeSettings(e)}
          options={["User Types List", "AGENT", "APIPARTNER"]}
        /> */}
        <ModalInputSelectTwo
          name="commissionType"
          label="Commission Type"
          // onChange={(e) => ChangeSettingsUser(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemers}
          big
          setItemer={setItemer}
        />
        {itemers === "Fixed" ? (
          <ModalInputText
            label="Fixed Commission"
            onChange={(e) => ChangeSettingsTypeUser(e)}
            name="fee"
            value={userglobal?.commissionDetails?.fee}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemers === "Percentage" ? (
          <>
            <ModalInputText
              label="Percentage Commission"
              onChange={(e) => ChangeSettingsTypeUser(e)}
              name="fee"
              value={userglobal?.commissionDetails?.fee}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
            <ModalInputText
              label="Cap Fee"
              onChange={(e) => ChangeSettingsTypeUser(e)}
              name="capFee"
              value={userglobal?.commissionDetails?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
          </>
        ) : (
          ""
        )}
        {/* <ModalInputText
          label="Name"
          onChange={(e) => ChangePartner(e)}
          name="name"
          value={partner?.name}
          placeholder={`${`Enter Partner Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangePartner(e)}
          name="email"
          value={partner?.email}
          placeholder={`${`Enter Email Address`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => ChangePartner(e)}
          name="phone"
          value={partner?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangePartner(e)}
          name="address"
          value={partner?.address}
          placeholder={`${`Enter Address`}`}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangePartner(e)}
          name="password"
          value={partner?.password}
          placeholder={`${`Enter Password`}`}
        />
        <ModalInputText
          label="Confirm Password"
          onChange={(e) => ChangePartner(e)}
          name="password_confirmation"
          value={partner?.password_confirmation}
          placeholder={`${`Confirm Passowrd`}`}
        /> */}
        <LargeSignInButton
          onClick={() => {
            const { discoName, userId, commissionDetails } = userglobal;
            console.log({ discoName, userId, commissionDetails });

            // Check for missing values
            const isFeeMissing = commissionDetails?.fee === null;
            const isCapFeeMissing = commissionDetails?.capFee === null;

            if (
              discoName &&
              userId &&
              (itemers === "Fixed"
                ? !isFeeMissing
                : !isFeeMissing && !isCapFeeMissing)
            ) {
              SendUser();
            } else {
              toast.error("Fill all details");
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={12}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="COMMISSION"
      >
        <ModalInputSelect
          name="name"
          label="Disco"
          value={settingglobal?.name}
          onChange={(e) => ChangeSettings(e)}
          options={discoOptions}
        />
        <ModalInputSelect
          label="User Type"
          name="userType"
          value={settingglobal?.userType}
          onChange={(e) => ChangeSettings(e)}
          options={["User Types List", "AGENT", "APIPARTNER", "USER"]}
        />
        <ModalInputSelectTwo
          name="commissionType"
          label="Commission Type"
          // onChange={(e) => ChangeSettings(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemers}
          big
          setItemer={setItemer}
        />
        {itemers === "Fixed" ? (
          <ModalInputText
            label="Fixed Commission"
            onChange={(e) => ChangeSettingsType(e)}
            name="fee"
            value={settingglobal?.commissions?.fee}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemers === "Percentage" ? (
          <>
            <ModalInputText
              label="Percentage Commission"
              onChange={(e) => ChangeSettingsType(e)}
              name="fee"
              value={settingglobal?.commissions?.fee}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
            <ModalInputText
              label="Cap Fee"
              onChange={(e) => ChangeSettingsType(e)}
              name="capFee"
              value={settingglobal?.commissions?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
          </>
        ) : (
          ""
        )}
        {/* <ModalInputText
          label="Name"
          onChange={(e) => ChangePartner(e)}
          name="name"
          value={partner?.name}
          placeholder={`${`Enter Partner Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangePartner(e)}
          name="email"
          value={partner?.email}
          placeholder={`${`Enter Email Address`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => ChangePartner(e)}
          name="phone"
          value={partner?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangePartner(e)}
          name="address"
          value={partner?.address}
          placeholder={`${`Enter Address`}`}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangePartner(e)}
          name="password"
          value={partner?.password}
          placeholder={`${`Enter Password`}`}
        />
        <ModalInputText
          label="Confirm Password"
          onChange={(e) => ChangePartner(e)}
          name="password_confirmation"
          value={partner?.password_confirmation}
          placeholder={`${`Confirm Passowrd`}`}
        /> */}
        <LargeSignInButton
          onClick={() => {
            const { name, userType, commissions } = settingglobal;
            console.log({ name, userType, commissions });

            // Check for missing values
            const isFeeMissing = commissions?.fee === null;
            const isCapFeeMissing = commissions?.capFee === null;

            if (
              name &&
              userType &&
              (itemers === "Fixed"
                ? !isFeeMissing
                : !isFeeMissing && !isCapFeeMissing)
            ) {
              SendSettings();
            } else {
              toast.error("Fill all details");
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={13}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Api-Partner Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added Api-Partner</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={14}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Payment"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangePay(e)}
          name="name"
          value={pay?.name}
          placeholder={`${`Enter Bank Name`}`}
        />
        <LargeSignInButton
          onClick={() => {
            if (pay?.name === "") {
              toast.error("Input Payment Name");
              return;
            } else {
              setStep(15);
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={15}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to add a Payment Method, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendPay()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={16}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Payment Method Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added Payment-method</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={17}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Commmission Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added Commission</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={18}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add Earning"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangeEarning(e)}
          name="name"
          value={earnings?.name}
          placeholder={`${`Enter Email`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangeEarning(e)}
          name="email"
          value={earnings?.email}
          placeholder={`${`Enter Email`}`}
        />
        <ModalInputText
          label="Phone"
          onChange={(e) => ChangeEarningNumber(e)}
          name="phone"
          value={earnings?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="NIN"
          onChange={(e) => ChangeEarningNumber(e)}
          name="nin"
          value={earnings?.nin}
          placeholder={`${`Enter Nin`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangeEarning(e)}
          name="address"
          value={earnings?.address}
          placeholder={`${`Enter Address`}`}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangeEarning(e)}
          name="password"
          value={earnings?.password}
          placeholder={`${`Enter Passowrd`}`}
        />
        <ModalInputSelectTwo
          name="commissionType"
          label="commission Type"
          // onChange={(e) => ChangeDisc(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemerearning}
          big
          setItemer={setitemerearning}
        />
        {itemerearning === "Fixed" ? (
          <>
            <ModalInputText
              label="Fee"
              onChange={(e) => ChangeSettingsEarningType(e)}
              name="fee"
              value={earnings?.commissions?.fee}
              placeholder={`${`Enter Fee`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
          </>
        ) : itemerearning === "Percentage" ? (
          <>
            <ModalInputText
              label="Fee"
              onChange={(e) => ChangeSettingsEarningType(e)}
              name="fee"
              value={earnings?.commissions?.fee}
              placeholder={`${`Enter Fee`}`}
            />
            <ModalInputText
              label="cap Fee"
              onChange={(e) => ChangeSettingsEarningType(e)}
              name="capFee"
              value={earnings?.commissions?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
          </>
        ) : (
          ""
        )}
        <LargeSignInButton
          onClick={() => {
            const { email, name, address, phone, nin, password, commissions } =
              earnings;
            console.log({
              email,
              name,
              address,
              phone,
              nin,
              password,
              commissions
            });
            console.log(earnings);
            const isFeeMissing = commissions?.fee === null;
            const isCapFeeMissing = commissions?.capFee === null;
            if (
              name &&
              phone &&
              email &&
              nin &&
              address &&
              password &&
              email.includes("@") &&
              (itemersmanager === "FIXED"
                ? !isFeeMissing
                : !isFeeMissing && !isCapFeeMissing)
            ) {
              // setStep(19);
              SendEarningPartner();
            } else {
              toast.error(
                "Fill all details correctly, including a valid email."
              );
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={19}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Earning Partner Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added Partner</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={20}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>
              You are about to Change Payment Method, Are you sure the
            </span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => {
                console.log(paymentMethodIds, actions);
                dispatch(TogglePay({ paymentMethodIds, actions }));
                setBusstate8(true);
              }}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={21}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Payment Method Changed
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Change Payment Method</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={22}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>
              You are about to accept Funding Request, Are you sure the
            </span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => {
                console.log(paymentMethodIds, actions, real);
                dispatch(
                  FundingApproval({
                    transactionId: paymentMethodIds,
                    userPhoneNumber: actions,
                    amount: real
                  })
                );
                setBusstate9(true);
              }}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={23}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Funding Request
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Fund Request</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={24}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>
              You are about to accept Agent Notification, Are you sure the
            </span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Reject"
              large
              onClick={() => setStep(25)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => setStep(38)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={25}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Notification"
      >
        <ModalInputText
          label="Reason for Rejection"
          onChange={(e) => ChangeApproving(e)}
          name="name"
          value={approving}
          placeholder={`${`Enter Your Reason for Rejection`}`}
        />

        <LargeSignInButton
          onClick={() => {
            console.log(paymentMethodIds, actions, real);
            dispatch(
              Approve({
                userId: userId?.user?.id,
                notId: "decline",
                stat,
                items: userId,
                declineMessage: approving
              })
            );
            setBusstate10(true);
            setApproved(false);
          }}
          bigger
          title={authenticatingapprove ? "Submiting....." : "Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={26}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Notification {Approved ? "Approved" : "Declined"}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>Notification Status Changed</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={27}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Edit"
      >
        <ModalInputSelectTwo
          name="commissionType"
          label="commission Type"
          // onChange={(e) => ChangeDisc(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemerseditdisc}
          big
          setItemer={setItemerseditdisc}
        />
        {itemerseditdisc === "Fixed" ? (
          <>
            <ModalInputText
              label="Fee"
              onChange={(e) => ChangeEditDisco(e)}
              name="fee"
              value={editdisc?.fee}
              placeholder={`${`Enter Fee`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
          </>
        ) : itemerseditdisc === "Percentage" ? (
          <>
            <ModalInputText
              label="Fee"
              onChange={(e) => ChangeEditDisco(e)}
              name="fee"
              value={editdisc?.fee}
              placeholder={`${`Enter Fee`}`}
            />
            <ModalInputText
              label="cap Fee"
              onChange={(e) => ChangeEditDisco(e)}
              name="capFee"
              value={editdisc?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
          </>
        ) : (
          ""
        )}
        <LargeSignInButton
          onClick={() => {
            const { commissionType } = editdisc;
            console.log({ commissionType });

            if (commissionType) {
              setStep(28);
            } else {
              toast.error("Fill Commission Type");
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={28}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to edit Commission, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendEditDisco()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={29}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Commission Edited
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Edit Commission</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={30}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="EDIT"
      >
        <ModalInputSelect
          name="name"
          label="Disco"
          value={settingglobaledit?.name}
          onChange={(e) => ChangeSettingsEdit(e)}
          options={discoOptions}
        />
        <ModalInputSelect
          label="User Type"
          name="userType"
          value={settingglobaledit?.userType}
          onChange={(e) => ChangeSettingsEdit(e)}
          options={["User Types List", "APIPARTNER"]}
        />
        <ModalInputSelectTwo
          name="commissionType"
          label="Commission Type"
          // onChange={(e) => ChangeSettings(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemersettings}
          big
          setItemer={setItemersettings}
        />
        {itemersettings === "Fixed" ? (
          <ModalInputText
            label="Fixed Commission"
            onChange={(e) => ChangeSettingsTypeEdit(e)}
            name="fee"
            value={settingglobaledit?.commissions?.fee}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemersettings === "Percentage" ? (
          <>
            <ModalInputText
              label="Percentage Commission"
              onChange={(e) => ChangeSettingsTypeEdit(e)}
              name="fee"
              value={settingglobaledit?.commissions?.fee}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
            <ModalInputText
              label="Cap Fee"
              onChange={(e) => ChangeSettingsTypeEdit(e)}
              name="capFee"
              value={settingglobaledit?.commissions?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
          </>
        ) : (
          ""
        )}
        {/* <ModalInputText
          label="Name"
          onChange={(e) => ChangePartner(e)}
          name="name"
          value={partner?.name}
          placeholder={`${`Enter Partner Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangePartner(e)}
          name="email"
          value={partner?.email}
          placeholder={`${`Enter Email Address`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => ChangePartner(e)}
          name="phone"
          value={partner?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangePartner(e)}
          name="address"
          value={partner?.address}
          placeholder={`${`Enter Address`}`}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangePartner(e)}
          name="password"
          value={partner?.password}
          placeholder={`${`Enter Password`}`}
        />
        <ModalInputText
          label="Confirm Password"
          onChange={(e) => ChangePartner(e)}
          name="password_confirmation"
          value={partner?.password_confirmation}
          placeholder={`${`Confirm Passowrd`}`}
        /> */}
        <LargeSignInButton
          onClick={() => {
            const { name, userType, commissions } = settingglobaledit;
            console.log({ name, userType, commissions });

            // Check for missing values
            const isFeeMissing = commissions?.fee === null;
            const isCapFeeMissing = commissions?.capFee === null;

            if (
              name &&
              userType &&
              (itemers === "Fixed"
                ? !isFeeMissing
                : !isFeeMissing && !isCapFeeMissing)
            ) {
              setStep(31);
            } else {
              toast.error("Fill all details");
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={31}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to edit Commission, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendEditSettings()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={32}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Commission Edited
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Edit Commission</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={33}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Edit"
      >
        {/* <ModalInputSelect
          label="User Type"
          options={["Agent", "Api-Partner"]}
        /> */}
        <ModalInputSelect
          name="discoName"
          label="Disco"
          value={userglobaledit?.discoName}
          onChange={(e) => ChangeSettingsUserEdit(e)}
          options={discoOptions}
        />

        {/* <ModalInputSelect
          label="User Type"
          name="userType"
          value={userglobal?.userType}
          onChange={(e) => ChangeSettings(e)}
          options={["User Types List", "AGENT", "APIPARTNER"]}
        /> */}
        <ModalInputSelectTwo
          name="commissionTypess"
          label="Commission Type"
          // onChange={(e) => ChangeSettingsUser(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemersedit}
          big
          setItemer={setItemeredit}
        />
        {itemersedit === "Fixed" ? (
          <ModalInputText
            label="Fixed Commission"
            onChange={(e) => ChangeSettingsTypeUseredit(e)}
            name="fee"
            value={userglobaledit?.commissionDetails?.fee}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemersedit === "Percentage" ? (
          <>
            <ModalInputText
              label="Percentage Commission"
              onChange={(e) => ChangeSettingsTypeUseredit(e)}
              name="fee"
              value={userglobaledit?.commissionDetails?.fee}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
            <ModalInputText
              label="Cap Fee"
              onChange={(e) => ChangeSettingsTypeUser(e)}
              name="capFee"
              value={userglobaledit?.commissionDetails?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
          </>
        ) : (
          ""
        )}
        {/* <ModalInputText
          label="Name"
          onChange={(e) => ChangePartner(e)}
          name="name"
          value={partner?.name}
          placeholder={`${`Enter Partner Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangePartner(e)}
          name="email"
          value={partner?.email}
          placeholder={`${`Enter Email Address`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => ChangePartner(e)}
          name="phone"
          value={partner?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangePartner(e)}
          name="address"
          value={partner?.address}
          placeholder={`${`Enter Address`}`}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangePartner(e)}
          name="password"
          value={partner?.password}
          placeholder={`${`Enter Password`}`}
        />
        <ModalInputText
          label="Confirm Password"
          onChange={(e) => ChangePartner(e)}
          name="password_confirmation"
          value={partner?.password_confirmation}
          placeholder={`${`Confirm Passowrd`}`}
        /> */}
        <LargeSignInButton
          onClick={() => {
            const { discoName, userId, commissionDetails } = userglobaledit;
            console.log({ discoName, userId, commissionDetails });

            // Check for missing values
            const isFeeMissing = commissionDetails?.fee === null;
            const isCapFeeMissing = commissionDetails?.capFee === null;

            if (
              discoName &&
              userId &&
              (itemers === "Fixed"
                ? !isFeeMissing
                : !isFeeMissing && !isCapFeeMissing)
            ) {
              SendUserEdit();
            } else {
              toast.error("Fill all details");
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={34}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Commmission Edited
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Edit Commission</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={35}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Manager"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangeManager(e)}
          name="name"
          value={manager?.name}
          placeholder={`${`Enter Manager's Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangeManager(e)}
          name="email"
          value={manager?.email}
          placeholder={`${`Enter Manager's Email`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangeManager(e)}
          name="address"
          value={manager?.address}
          placeholder={`${`Enter Manager's Address`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => ChangeManagerNumber(e)}
          name="phone"
          value={manager?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangeManager(e)}
          name="password"
          value={manager?.password}
          placeholder={`${`Enter Password`}`}
        />
        {/* <ModalInputSelectTwo
          name="commissionsDTO"
          label="Commission DTO"
          onChange={(e) => ChangeManager(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemersmanager}
          big
          setItemer={setItemermanager}
        />
        {itemersmanager === "Fixed" ? (
          <ModalInputText
            label="Fixed Commission"
            onChange={(e) => ChangeSettingsTypeUserManager(e)}
            name="fee"
            value={manager?.commissionsDTO?.fee || ""}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemersmanager === "Percentage" ? (
          <>
            <ModalInputText
              label="Percentage Commission"
              onChange={(e) => ChangeSettingsTypeUserManager(e)}
              name="fee"
              value={manager?.commissionsDTO?.fee || ""}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
            <ModalInputText
              label="Cap Fee"
              onChange={(e) => ChangeSettingsTypeUserManager(e)}
              name="capFee"
              value={manager?.commissionsDTO?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
          </>
        ) : (
          ""
        )} */}
        <LargeSignInButton
          onClick={() => {
            const { address, name, password, phone, email } = manager;
            // console.log({ address, name, commissionsDTO, phone, email });
            console.log({ address, name, password, phone, email });

            // Check for missing values
            // const isFeeMissing = commissionsDTO?.fee === null;
            // const isCapFeeMissing = commissionsDTO?.capFee === null;

            if (
              name &&
              address &&
              phone &&
              email &&
              password
              // (itemersmanager === "Fixed"
              //   ? !isFeeMissing
              //   : !isFeeMissing && !isCapFeeMissing)
            ) {
              setStep(36);
            } else {
              toast.error("Fill all details");
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={36}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to add a Manager, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendDetailsManager()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={37}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new Manager</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={38}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        {/* <ModalInputSelect
          name="districtManagerId"
          label="Choose District Manager"
          value={districthead}
          onChange={(e) => ChangeAgentDistrict(e)}
          options={districtOptions}
        /> */}
        <DistrictManagerSelect
          name="districtManagerId"
          label="Choose District Manager"
          value={districthead?.districtManagerId}
          onChange={(e) => ChangeAgentDistrict(e)}
          earningPartnerId
          options={apiagentrole?.data?.data}
        />

        <LargeSignInButton
          onClick={() => {
            console.log(paymentMethodIds, actions, real);
            dispatch(
              Approve({
                userId: userId?.user?.id,
                notId: "approve",
                districtManagerId: districthead?.districtManagerId,
                stat,
                items: userId
              })
            );
            setDisabled(true);
            setApproved(true);
            setBusstate10(true);
            setTimeout(() => {
              setDisabled(false);
            }, 4000);
          }}
          bigger
          title={authenticatingapprove ? "Submiting....." : "Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={39}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div style={{ width: "400px", height: "600px" }}>
          <img
            src={images}
            alt="pictures"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </AppModal>
      <AppModal
        step={40}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Customer"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangeCustomer(e)}
          name="name"
          value={customer?.name}
          placeholder={`${`Enter Manager's Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangeCustomer(e)}
          name="email"
          value={customer?.email}
          placeholder={`${`Enter Manager's Email`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => ChangeCustomerNumber(e)}
          name="phoneNo"
          value={customer?.phoneNo}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputSelectID
          name="discoId"
          label="Disco"
          value={customer?.discoId}
          onChange={(e) => ChangeCustomer(e)}
          options={discoOptions2}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangeCustomer(e)}
          name="password"
          value={customer?.password}
          placeholder={`${`Enter Manager's Password`}`}
        />
        <LargeSignInButton
          onClick={() => {
            const { password, name, phoneNo, email, discoId } = customer;
            console.log({ password, name, phoneNo, email, discoId });
            if (name && password && phoneNo && email.includes("@") && discoId) {
              setStep(41);
            } else {
              toast.error("Please fill in all details correctly.");
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={41}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>
              You are about to add a Customer care rep, Are you sure the
            </span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendDetailsCustomer()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={42}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new Customer rep</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={43}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>
              You are about to resolve this complain, Are you sure you
            </span>
            <span>want to continue?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => sendComplain()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={44}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Complain Resolved
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Resolve the complain</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={45}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Edit Details"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangeDetails(e)}
          name="name"
          value={editinguser?.name}
          placeholder={`${`Enter New Name`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangeDetails(e)}
          name="address"
          value={editinguser?.address}
          placeholder={`${`Enter New Address`}`}
        />
        <ModalInputText
          label="NIN"
          onChange={(e) => ChangeDetails(e)}
          name="NIN"
          value={editinguser?.NIN}
          placeholder={`${`Enter New NIN`}`}
        />
        {/* <ModalInputText
          label="Password"
          onChange={(e) => ChangeDetails(e)}
          name="password"
          value={editinguser?.password}
          placeholder={`${`Enter New Password`}`}
        /> */}
        <ModalInputText
          label="Phone"
          onChange={(e) => ChangeDetailsNumber(e)}
          name="phone"
          value={editinguser?.phone}
          placeholder={`${`Enter New Phone Number`}`}
        />
        <LargeSignInButton
          onClick={() => {
            const { phone, password, NIN, address, name } = editinguser;
            setStep(46);
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={46}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to edit user details, Are you sure you</span>
            <span>want to continue?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => sendDetails()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={47}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Details Edited
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully edited user details</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={48}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>
              You are about to trigger this {action} action, Are you sure you
            </span>
            <span>want to continue?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => sendUserAction()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={49}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Action Successful
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully perform the {action} action</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={50}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Edit Discos"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangeeditDisc(e)}
          name="name"
          value={editingdisc?.name}
          placeholder={`${`Enter Disco Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangeeditDisc(e)}
          name="email"
          value={editingdisc?.email}
          placeholder={`${`Enter Disco Email`}`}
        />
        <EarningPartnerSelect
          name="earningPartnerId"
          label="Choose Earning Partner"
          value={editingdisc?.earningPartnerId}
          onChange={(e) => ChangeeditDisc(e)}
          earningPartnerId
          options={apiagentrole?.data?.data}
        />
        {editingdisc?.earningPartnerId !== "" && (
          <ModalInputText
            label="Earning Partner Fee Percentage"
            onChange={(e) => ChangeeditingDiscNumber(e)}
            name="earningPartnerFee"
            value={editingdisc?.earningPartnerFee}
            placeholder={`${`Enter Earning Partner Percentage`}`}
          />
        )}
        {/* {disc?.earningPartnerId !== "" && (
          <>
            <ModalInputSelectTwo
              name="commissionsDTO"
              label="Earning Commission"
              // onChange={(e) => ChangeDisc(e)}
              options={["Fixed", "Percentage"]}
              itemer={itemersdiscoearning}
              big
              setItemer={setItemerdiscoearning}
            />

            {itemersdiscoearning === "Fixed" ? (
              <ModalInputText
                label="Fixed Commission"
                // onChange={(e) => ChangeSettingsTypeUser(e)}
                name="fee"
                // value={userglobal?.commissionDetails?.fee}
                placeholder="Enter Fixed Commission"
              />
            ) : itemersdiscoearning === "Percentage" ? (
              <>
                <ModalInputText
                  label="Percentage Commission"
                  // onChange={(e) => ChangeSettingsTypeUser(e)}
                  name="fee"
                  // value={userglobal?.commissionDetails?.fee}
                  placeholder="Enter Percentage Commission"
                />
                <span style={{ color: "red", fontSize: "10px" }}>
                  Note: Percentage must be less than or equal to Disco
                  Percentage with Paymeter
                </span>
                <ModalInputText
                  label="Cap Fee"
                  // onChange={(e) => ChangeSettingsTypeUser(e)}
                  name="capFee"
                  // value={userglobal?.commissionDetails?.capFee}
                  placeholder="Enter Cap Fee"
                />
              </>
            ) : null}
          </>
        )} */}

        {/* <ModalInputSelectTwo
          name="commissionsDTO"
          label="Commission DTO"
          onChange={(e) => ChangeDisc(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemersdisco}
          big
          setItemer={setItemerdisco}
        /> */}
        <ModalInputText
          label="System Fee"
          onChange={(e) => ChangeeditingDiscNumber(e)}
          name="systemFee"
          value={editingdisc?.systemFee}
          placeholder={`${`Enter Disco Name`}`}
        />
        <ModalInputText
          label="Phone"
          onChange={(e) => ChangeeditingDiscNumber(e)}
          name="phone"
          value={editingdisc?.phone}
          placeholder={`${`Enter Disco Phone Number`}`}
        />
        {/* <ModalInputText
          label="Short Name"
          onChange={(e) => ChangeDisc(e)}
          name="shortName"
          value={disc?.shortName}
          placeholder={`${`Enter Disco Short Name`}`}
        /> */}
        {editingdisc?.logoUrl !== "" ? (
          <img
            src={editingdisc?.logoUrl}
            alt="takephoto"
            style={{ width: "492px", height: "105px" }}
          />
        ) : (
          <>
            <input
              type="file"
              id="uploadFile"
              name="avatar"
              onChange={(e) => sendingsImage(e)}
              accept="image/*"
              style={{ display: "none" }}
              className="i-none"
              ref={datePickerRef}
            />
            <ModalInputText
              onClick={() => PickDater()}
              label="Upload Image"
              photo
            />
          </>
        )}
        <ModalInputSelectTwo
          name="commissionsDTO"
          label="Commission DTO"
          onChange={(e) => ChangeeditDisc(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemerseditingdisc}
          big
          setItemer={setItemereditingdisc}
        />
        {itemerseditingdisc === "Fixed" ? (
          <ModalInputText
            label="Fixed Commission"
            onChange={(e) => ChangeSettingsTypeUsereditDisco(e)}
            name="fee"
            value={editingdisc?.commissionsDTO?.fee || ""}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemersdisco === "Percentage" ? (
          <>
            <ModalInputText
              label="Percentage Commission"
              onChange={(e) => ChangeSettingsTypeUsereditDisco(e)}
              name="fee"
              value={editingdisc?.commissionsDTO?.fee || ""}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
            <ModalInputText
              label="Cap Fee"
              onChange={(e) => ChangeSettingsTypeUsereditDisco(e)}
              name="capFee"
              value={editingdisc?.commissionsDTO?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
          </>
        ) : (
          ""
        )}
        <LargeSignInButton
          onClick={() => {
            const { name, commissionsDTO, phone, email } = disc;
            console.log({ name, commissionsDTO });

            // Check for missing values
            const isFeeMissing = commissionsDTO?.fee === null;
            const isCapFeeMissing = commissionsDTO?.capFee === null;
            setStep(51);
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={51}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to Edit Disco details, Are you sure you</span>
            <span>want to continue?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => sendDiscoeditDetails()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={52}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Details Edited
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully edited Disco details</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={53}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center"
            // alignItems: "center"
          }}
        >
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              justifyContent: "center",
              // backgroundImage: `url(${watermark})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              paddingBottom: "20px",
              paddingLeft: "10px",
              position: "relative",
              backgroundColor: "rgba(255, 255, 255, 0.5)"
            }}
            id="App"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <span
                style={{ color: "black", fontSize: "20px", fontWeight: 700 }}
              >
                Paymeter
              </span>
              <img
                src={watermark}
                alt="watermark"
                style={{
                  width: "200px",
                  marginLeft: "20px",
                  marginTop: "350px",
                  position: "absolute",
                  opacity: 0.2
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#898585" }}>Account Number:</span>
              <span style={{ fontWeight: 500 }}>
                {downloading?.accountNumber
                  ? downloading?.accountNumber
                  : "N/A"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#898585" }}>Bank Name:</span>
              <span style={{ fontWeight: 500 }}>
                {downloading?.bankName ? downloading?.bankName : "N/A"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#898585" }}>Customer Name:</span>
              <span style={{ fontWeight: 500 }}>
                {downloading?.customerName ? downloading?.customerName : "N/A"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#898585" }}>Disco Name:</span>
              <span style={{ fontWeight: 500 }}>
                {downloading?.discoName ? downloading?.discoName : "N/A"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#898585" }}>Meter Number:</span>
              <span style={{ fontWeight: 500 }}>
                {downloading?.meterNo ? downloading?.meterNo : "N/A"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#898585" }}>Transaction Amount:</span>
              <span style={{ fontWeight: 500 }}>
                ₦
                {formatNumberWithCommas(
                  downloading?.transactionAmount
                    ? downloading?.transactionAmount
                    : "N/A"
                )}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#898585" }}>Service Charge:</span>
              <span style={{ fontWeight: 500 }}>
                ₦
                {formatNumberWithCommas(
                  downloading?.systemCharge ? downloading?.systemCharge : "N/A"
                )}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#898585" }}>Transaction Reference:</span>
              <span style={{ fontWeight: 500 }}>
                {downloading?.reference ? downloading?.reference : "N/A"}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#898585" }}>Transaction Date:</span>
              <span style={{ fontWeight: 500 }}>
                <Moment>
                  {downloading?.dispense?.updatedDate
                    ? downloading?.dispense?.updatedDate
                    : "N/A"}
                </Moment>
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="DownloadReceipt"
              onClick={() => DownloadReceipt()}
              large
              background
              color
            />
          </div> */}
          <div
            style={{
              padding: "3px",
              flexDirection: "column",
              alignContent: "center"
            }}
            id="App"
            ref={receiptRef}
          >
            <div
              style={{
                backgroundColor: "white",
                width: "100%",
                padding: "12px",
                gap: 4
              }}
            >
              <div
                className="flex flex-row justify-center"
                style={{
                  textAlign: "center"
                }}
              >
                <img
                  src={eko}
                  alt="EKO Electricity Distribution Company"
                  style={{ height: "70px" }}
                />
              </div>

              <div
                style={{
                  marginTop: "15px",
                  marginBottom: "8px",
                  textAlign: "center"
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#989898",
                    font: "Lucida Sans Typewriter"
                    // color: AppColors.textColor
                  }}
                >
                  EKO ELECTRICITY DISTRIBUTION COMPANY PLC (
                  {downloading?.discoName})
                </p>
              </div>

              <div style={{ marginBottom: "8px", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#989898",
                    font: "Lucida Sans Typewriter"
                    // color: AppColors.textColor
                  }}
                  className="font-lucida"
                >
                  www.ekedp.com
                </p>
              </div>

              <div style={{ marginBottom: "6px", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#989898",
                    font: "Lucida Sans Typewriter"
                    // color: AppColors.textColor
                  }}
                  className="font-lucida"
                >
                  TEL: (+234) 07001235666
                </p>
              </div>

              <div style={{ marginBottom: "6px", textAlign: "center" }}>
                <hr
                  style={{
                    width: "100%",
                    textDecoration: "dotted",
                    color: "#989898"
                  }}
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#989898",
                    font: "Lucida Sans Typewriter"
                  }}
                  className="font-lucida"
                >
                  BILL PAYMENT RECEIPT ORIGINAL
                </p>
              </div>

              <div style={{ marginBottom: "6px", textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "lucinda",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#989898"
                    // color: AppColors.textColor
                  }}
                  className="font-lucida"
                >
                  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                </p>
              </div>
              <div style={{ marginBottom: "6px", textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "lucinda",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#989898"
                    // color: AppColors.textColor
                  }}
                  className="font-lucida"
                >
                  _ _ _ _ _ _ _
                </p>
              </div>
              <div className="gap-1 flex flex-col">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    Payment Date:-
                  </span>
                  <span
                    style={{
                      fontWeight: 500,
                      color: "#989898"
                    }}
                    className="font-lucida"
                  >
                    <Moment>
                      {downloading?.dispense?.updatedDate
                        ? downloading?.dispense?.updatedDate
                        : "N/A"}
                    </Moment>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    Meter Number:-
                  </span>
                  <span
                    className="font-lucida"
                    style={{
                      fontWeight: 500,
                      color: "#989898"
                    }}
                  >
                    {downloading?.meterNo ? downloading?.meterNo : "N/A"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    Amount:-
                  </span>
                  <span
                    className="font-lucida"
                    style={{
                      fontWeight: 500,
                      color: "#989898"
                    }}
                  >
                    ₦
                    {formatNumberWithCommas(
                      downloading?.transactionAmount
                        ? downloading?.transactionAmount
                        : "N/A"
                    )}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    Customer Name:-
                  </span>
                  <span
                    className="font-lucida"
                    style={{
                      fontWeight: 500,
                      color: "#989898"
                    }}
                  >
                    {downloading?.customerName
                      ? downloading?.customerName
                      : "N/A"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    Address:-
                  </span>
                  <span
                    className="font-lucida"
                    style={{
                      fontWeight: 500,
                      color: "#989898",
                      font: "Lucida Sans Typewriter"
                    }}
                  >
                    {downloading?.address ? downloading?.address : "N/A"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    Bank Name:-
                  </span>
                  <span
                    className="font-lucida"
                    style={{
                      fontWeight: 500,
                      color: "#989898",
                      font: "Lucida Sans Typewriter"
                    }}
                  >
                    {downloading?.bankName ? downloading?.bankName : "N/A"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    Account:-
                  </span>
                  <span
                    className="font-lucida"
                    style={{
                      fontWeight: 500,
                      color: "#989898"
                    }}
                  >
                    {downloading?.accountNumber
                      ? downloading?.accountNumber
                      : "N/A"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    RRN:-
                  </span>
                  <span
                    className="font-lucida"
                    style={{
                      fontWeight: 500,
                      color: "#989898"
                    }}
                  >
                    {downloading?.rrn ? downloading?.rrn : "N/A"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    Request ID:-
                  </span>
                  <span
                    className="font-lucida"
                    style={{
                      fontWeight: 500,
                      color: "#989898"
                    }}
                  >
                    {downloading?.accountNumber
                      ? downloading?.accountNumber
                      : "N/A"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    Payment Mode:-
                  </span>
                  <span
                    style={{
                      fontWeight: 500,
                      color: "#989898"
                    }}
                    className="font-lucida"
                  >
                    Online
                    {/* {downloading?.accountNumber
                    ? downloading?.accountNumber
                    : "N/A"} */}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingInline: 60
                  }}
                >
                  <span className="font-lucida" style={{ color: "#989898" }}>
                    Sercvice Charge:-
                  </span>
                  <span
                    style={{
                      fontWeight: 500,
                      color: "#989898",
                      font: "Lucida Sans Typewriter"
                    }}
                    className="font-lucida"
                  >
                    ₦
                    {formatNumberWithCommas(
                      downloading?.systemCharge
                        ? downloading?.systemCharge
                        : "N/A"
                    )}
                  </span>
                </div>
              </div>
              <div style={{ marginBottom: "6px", textAlign: "center" }}>
                <p
                  className="font-lucida"
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#989898"
                    // color: AppColors.textColor
                  }}
                >
                  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                </p>
              </div>
              <div style={{ marginBottom: "6px", textAlign: "center" }}>
                <p
                  className="font-lucida"
                  style={{
                    fontFamily: "lucinda",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#989898"
                    // color: AppColors.textColor
                  }}
                >
                  _ _ _ _ _ _ _
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[14px] font-lucida">Credit Token</span>
                <span className="text-[14px] font-bold text-[#7A7A7A] font-lucida">
                  {downloading?.dispense?.listtoken[0]
                    ? downloading?.dispense?.listtoken[0]
                    : "N/A"}
                </span>
              </div>
              <div style={{ marginBottom: "6px", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#989898",
                    font: "Lucida Sans Typewriter"
                    // color: AppColors.textColor
                  }}
                >
                  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                </p>
              </div>
              <div style={{ marginBottom: "6px", textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "lucinda",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#989898",
                    font: "Lucida Sans Typewriter"
                    // color: AppColors.textColor
                  }}
                >
                  _ _ _ _ _ _ _
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <img src={watermark} alt="watermark" className="w-[60px]" />
                <span
                  style={{ font: "Lucida Sans Typewriter" }}
                  className="text-[16px] font-bold font-lucida"
                >
                  THANK YOU
                </span>
              </div>
              <div className="flex flex-row justify-center items-center">
                {downloading?.dispense?.listtoken[0] && (
                  <QRCode
                    size={200}
                    bgColor="white"
                    fgColor="black"
                    value={`https://user.paymeterng.com/r/${downloading?.dispense?.listtoken[0]}`}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="DownloadReceipt"
              // onClick={() => DownloadReceipt()}
              onClick={() => handlePrint()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={54}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Edit Bank"
      >
        <ModalInputText
          label="New Name"
          onChange={(e) => ChangeEditbank(e)}
          name="newBankName"
          value={editbank?.newBankName}
          placeholder={`${`Enter Bank New Name`}`}
        />
        {editbank?.logoUrl !== "" ? (
          <img
            src={editbank?.logoUrl}
            alt="takephoto"
            style={{ width: "492px", height: "105px" }}
          />
        ) : (
          <>
            <input
              type="file"
              id="uploadFile"
              name="avatar"
              onChange={(e) => sendingsImage(e)}
              accept="image/*"
              style={{ display: "none" }}
              className="i-none"
              ref={datePickerRef}
            />
            <ModalInputText
              onClick={() => PickDater()}
              label="Upload Image"
              photo
            />
          </>
        )}
        <ModalInputSelectTwo
          name="commissions"
          label="Commission DTO"
          onChange={(e) => ChangeEditbank(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemerseditbank}
          big
          setItemer={setItemereditbank}
        />
        {itemerseditbank === "Fixed" ? (
          <ModalInputText
            label="Fixed Commission"
            onChange={(e) => ChangeSettingsTypeEditbank(e)}
            name="fee"
            value={editbank?.commissions?.fee || ""}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemerseditbank === "Percentage" ? (
          <>
            <ModalInputText
              label="Percentage Commission"
              onChange={(e) => ChangeSettingsTypeEditbank(e)}
              name="fee"
              value={editbank?.commissions?.fee || ""}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
            <ModalInputText
              label="Cap Fee"
              onChange={(e) => ChangeSettingsTypeEditbank(e)}
              name="capFee"
              value={editbank?.commissions?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
          </>
        ) : (
          ""
        )}
        <LargeSignInButton
          onClick={() => {
            const { commissions, newBankName, logoUrl } = editbank;
            console.log({ commissions, newBankName, logoUrl });

            // Check for missing values
            const isFeeMissing = commissions?.fee === null;
            const isCapFeeMissing = commissions?.capFee === null;

            if (
              newBankName &&
              logoUrl &&
              (itemersmanager === "FIXED"
                ? !isFeeMissing
                : !isFeeMissing && !isCapFeeMissing)
            ) {
              setStep(55);
            } else {
              toast.error("Fill all details");
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={55}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to edit bank detail(s), Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendDetailseditbank()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={56}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new Disco</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={57}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        heading="Change Password"
      >
        <ModalInputText
          label="Old Password"
          onChange={(e) => ChangePassing(e)}
          name="oldPassword"
          value={changepass?.oldPassword}
          placeholder={`${`Enter New Password`}`}
        />
        <ModalInputText
          label="New Password"
          onChange={(e) => ChangePassing(e)}
          name="newPassword"
          value={changepass?.newPassword}
          placeholder={`${`Enter New Password`}`}
        />
        <LargeSignInButton
          onClick={() => SendChangePassword()}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={58}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Password Changed
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Changed Password</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={59}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Edit Earning"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangeEarningedit(e)}
          name="name"
          value={editearnings?.name}
          placeholder={`${`Enter Email`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangeEarningedit(e)}
          name="email"
          value={editearnings?.email}
          placeholder={`${`Enter Email`}`}
        />
        <ModalInputText
          label="Phone"
          onChange={(e) => ChangeEarningNumberedit(e)}
          name="phone"
          value={editearnings?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangeEarningedit(e)}
          name="address"
          value={editearnings?.address}
          placeholder={`${`Enter Address`}`}
        />
        {/* <ModalInputText
          label="Password"
          onChange={(e) => ChangeEarning(e)}
          name="password"
          value={editearnings?.password}
          placeholder={`${`Enter Passowrd`}`}
        /> */}
        <ModalInputSelectTwo
          name="commissionType"
          label="commission Type"
          // onChange={(e) => ChangeDisc(e)}
          options={["Fixed", "Percentage"]}
          itemer={itemerearningedit}
          big
          setItemer={setitemerearningedit}
        />
        {itemerearningedit === "Fixed" ? (
          <>
            <ModalInputText
              label="Fee"
              onChange={(e) => ChangeSettingsEarningTypeedit(e)}
              name="fee"
              value={editearnings?.commissions?.fee}
              placeholder={`${`Enter Fee`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
          </>
        ) : itemerearningedit === "Percentage" ? (
          <>
            <ModalInputText
              label="Fee"
              onChange={(e) => ChangeSettingsEarningTypeedit(e)}
              name="fee"
              value={editearnings?.commissions?.fee}
              placeholder={`${`Enter Fee`}`}
            />
            <ModalInputText
              label="cap Fee"
              onChange={(e) => ChangeSettingsEarningTypeedit(e)}
              name="capFee"
              value={editearnings?.commissions?.capFee}
              placeholder={`${`Enter Cap Fee`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
          </>
        ) : (
          ""
        )}
        <LargeSignInButton
          onClick={() => {
            const { email, name, address, phone, commissions } = editearnings;
            console.log({
              email,
              name,
              address,
              phone,
              commissions
            });
            console.log(editearnings);
            const isFeeMissing = commissions?.fee === null;
            const isCapFeeMissing = commissions?.capFee === null;
            if (
              name &&
              phone &&
              email &&
              address &&
              email.includes("@") &&
              (itemersmanager === "FIXED"
                ? !isFeeMissing
                : !isFeeMissing && !isCapFeeMissing)
            ) {
              // setStep(19);
              SendEarningPartneredit();
            } else {
              toast.error(
                "Fill all details correctly, including a valid email."
              );
            }
          }}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={60}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Earning Partner Edited
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Edit Partner</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
    </div>
  );
};

export default AppUserModal;
