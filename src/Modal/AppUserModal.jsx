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
  setReal
}) => {
  const dispatch = useDispatch();
  const [hide, sethide] = useState(false);
  const [uploadfile, setupload] = useState("");
  const [update, setUpdate] = useState("");
  const [bustate, setBusstate] = useState(false);
  const [bustate2, setBusstate2] = useState(false);
  const [bustate3, setBusstate3] = useState(false);
  const [bustate4, setBusstate4] = useState(false);
  const [bustate5, setBusstate5] = useState(false);
  const [bustate6, setBusstate6] = useState(false);
  const [bustate7, setBusstate7] = useState(false);
  const [bustate8, setBusstate8] = useState(false);
  const [bustate9, setBusstate9] = useState(false);
  const [itemers, setItemer] = useState("");
  const [itemersdisco, setItemerdisco] = useState("");
  const [itemersinst, setItemersinst] = useState("");
  const [partner, setPartner] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    password_confirmation: ""
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

  const [userglobal, setUserGlobal] = useState({
    discoName: "",
    userId: "",
    commissionDetails: {
      commissionType: "",
      fee: null,
      capFee: null
    }
  });

  const [regbus, setRegbus] = useState({
    name: "",
    code: "",
    ussd: "",
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
    nin: ""
  });
  const [pay, setPay] = useState({
    name: ""
  });
  const [disc, setDisc] = useState({
    name: "",
    shortName: "",
    commissionsDTO: {
      commissionType: "",
      fee: null,
      capFee: null
    },
    earningPartnerId: "",
    email: "",
    logoUrl: "",
    phone: null
  });

  const [password, setPassword] = useState("");

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
    createpay?.status,
    createsettings?.status,
    usercom?.status,
    earningpartner?.status,
    togglepay?.status,
    fundingapproval?.status
  ]);

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setRegbus({
      ...regbus,
      [name]: value
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

  const ChangePay = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setPay({
      ...regbus,
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

  const ChangePartnerNumber = (e) => {
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

  const ChangeDiscNumber = (e) => {
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

    setDisc((prevDisc) => ({
      ...prevDisc,
      [name]: sanitizedValue
    }));
  };

  const ChangeEarningNumber = (e) => {
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

    setEarnings((prevDisc) => ({
      ...earnings,
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
    const { code, name, ussd, logoUrl, bankCommission } = regbus;
    dispatch(
      CreateBank({
        code,
        name,
        ussd,
        logoUrl,
        bankCommission
      })
    );
    setBusstate(true);
  };

  const SendDetailsDisco = () => {
    const {
      name,
      shortName,
      earningPartnerDto,
      commissionsDTO,
      email,
      logoUrl,
      phone
    } = disc;
    dispatch(
      CreatedDisco({
        name,
        shortName,
        commissionsDTO,
        earningPartnerDto,
        email,
        logoUrl,
        phone
      })
    );
    setBusstate2(true);
  };

  const SendEarningPartner = () => {
    const { email, name, address, phone, nin } = earnings;
    dispatch(
      CreateEarnings({
        email,
        name,
        address,
        phone,
        nin
      })
    );
    setBusstate7(true);
  };

  const SendPassword = () => {
    dispatch(
      ChangePasswords({
        password
      })
    );
    setBusstate3(true);
  };

  const SendPay = () => {
    dispatch(
      CreatePay({
        name: pay?.name
      })
    );
    setBusstate5(true);
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

  const handleCloseModal4 = () => {
    setStep(0);
    setRegbus({
      name: "",
      code: "",
      ussd: "",
      logoUrl: "",
      bankCommission: {
        bankCommissionType: "",
        bankFixedCommissionFee: "",
        bankFeeTax: "",
        fee: ""
      }
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
    setPartner({
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      password_confirmation: ""
    });
    setItemer("");
    setDisc({
      name: "",
      shortName: "",
      commissionsDTO: {
        commissionType: "",
        fee: null,
        capFee: null
      },
      earningPartnerId: "",
      email: "",
      logoUrl: ""
    });
    setPay({
      name: ""
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
    setBusstate(false);
    setBusstate2(false);
    setBusstate3(false);
    setBusstate4(false);
    setBusstate5(false);
    setBusstate6(false);
    setReload(true);
    setPassword("");
    if (userIds) {
      setUserIds("");
    }
    if (paymentMethodIds) {
      setpaymentMethodIds("");
    }
    if (actions) {
      setActions("");
    }
    if (real) {
      setReal("");
    }
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
  }, [userIds]);

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
    setRegbus((prev) => ({
      ...prev,
      bankCommission:
        itemersinst === "Fixed"
          ? {
              bankCommissionType: "FIXED",
              bankFixedCommissionFee: "",
              bankFeeTax: "",
              fee: ""
            }
          : {
              bankCommissionType: "PERCENTAGE",
              bankFixedCommissionFee: "",
              bankFeeTax: "",
              fee: ""
            }
    }));
  }, [itemers, itemersdisco, itemersinst]);

  const ChangeSettings = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setSettingsGlobal({
      ...settingglobal,
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

  const ChangeSettingsType = (e) => {
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
    setSettingsGlobal((prev) => ({
      ...prev,
      commissions: {
        ...prev.commissions,
        [name]: sanitizedValue
      }
    }));
  };

  const ChangeSettingsTypeUser = (e) => {
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
    setUserGlobal((prev) => ({
      ...prev,
      commissionDetails: {
        ...prev.commissionDetails,
        [name]: sanitizedValue
      }
    }));
  };

  const ChangeSettingsTypeUserDisco = (e) => {
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
    setDisc((prev) => ({
      ...prev,
      commissionsDTO: {
        ...prev.commissionsDTO,
        [name]: sanitizedValue
      }
    }));
  };

  const ChangeSettingsTypeUserInst = (e) => {
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
    setRegbus((prev) => ({
      ...prev,
      bankCommission: {
        ...prev.bankCommission,
        [name]: sanitizedValue
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
        setRegbus((prevDisc) => ({
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
        <ModalInputText
          label="Code"
          onChange={(e) => Change(e)}
          name="code"
          value={regbus?.code}
          placeholder={`${`Enter Bank Code`}`}
        />
        <ModalInputText
          label="USSD"
          onChange={(e) => Change(e)}
          name="ussd"
          value={regbus?.ussd}
          placeholder={`${`Enter Bank Ussd`}`}
        />
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
              label="Take photo"
              photo
            />
          </>
        )}
        {itemersinst === "Fixed" ? (
          <>
            <ModalInputText
              label="Bank Fixed Commission"
              onChange={(e) => ChangeSettingsTypeUserInst(e)}
              name="bankFixedCommissionFee"
              value={regbus?.bankCommission?.bankFixedCommissionFee}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <ModalInputText
              label="Bank Fee Tax"
              onChange={(e) => ChangeSettingsTypeUserInst(e)}
              name="bankFeeTax"
              value={regbus?.bankCommission?.bankFeeTax}
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
              label="Bank Percentage Commission"
              onChange={(e) => ChangeSettingsTypeUserInst(e)}
              name="bankFixedCommissionFee"
              value={regbus?.bankCommission?.bankFixedCommissionFee}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <ModalInputText
              label="Bank Fee Tax"
              onChange={(e) => ChangeSettingsTypeUserInst(e)}
              name="bankFeeTax"
              value={regbus?.bankCommission?.bankFeeTax}
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
            const { code, name, ussd, logoUrl, bankCommission } = regbus;
            console.log({ code, name, ussd, logoUrl, bankCommission });

            // Check for missing values
            const isFeeMissing =
              bankCommission?.bankFixedCommissionFee === null;
            const isCapFeeMissing = bankCommission?.fee === null;

            if (
              name &&
              ussd &&
              logoUrl &&
              code &&
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
              label="Take photo"
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
            value={disc?.commissionsDTO?.fee}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemersdisco === "Percentage" ? (
          <>
            <ModalInputText
              label="Percentage Commission"
              onChange={(e) => ChangeSettingsTypeUserDisco(e)}
              name="fee"
              value={disc?.commissionsDTO?.fee}
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
          options={["Disco List", "EKEDC", "IKJEDC"]}
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
          options={["Disco List", "EKEDC", "IKJEDC"]}
        />
        <ModalInputSelect
          label="User Type"
          name="userType"
          value={settingglobal?.userType}
          onChange={(e) => ChangeSettings(e)}
          options={["User Types List", "AGENT", "APIPARTNER"]}
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
            }
            setStep(15);
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
        <LargeSignInButton
          onClick={() => {
            const { email, name, address, phone, nin } = earnings;
            console.log({ email, name, address, phone, nin });

            if (name && phone && email && nin && address) {
              // setStep(19);
              SendEarningPartner();
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
    </div>
  );
};

export default AppUserModal;
