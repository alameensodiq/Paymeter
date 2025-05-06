import React, { useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ThemeProvider, createTheme } from "@mui/material";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import toast from "react-hot-toast";
import { ReactComponent as View } from "../../assets/View.svg";
import { ReactComponent as Suspend } from "../../assets/Suspend.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as Activate } from "../../assets/Activate.svg";
import { ReactComponent as Update } from "../../assets/Update.svg";
import { useDispatch } from "react-redux";
import { ResendToken } from "../Store/Apis/ResendToken";
import { RegenerateToken } from "../Store/Apis/Regenratetoken";
import { Initiate } from "../Store/Apis/Initiate";

const Tables = ({
  customers,
  transfers,
  investments,
  loans,
  audit,
  airtime,
  overview,
  data,
  meter,
  agents,
  apipartners,
  payment,
  shift,
  setting,
  setStep,
  paymentsmethod,
  Pay,
  Payer,
  notification,
  funding,
  setUserIds,
  complain,
  earning,
  pending,
  rejected,
  overviewtransaction,
  overviewcommission,
  setdiscname,
  setsettingId,
  setNaming,
  metering,
  manager,
  users,
  setImages,
  discotransactions,
  complainpending,
  setuserIding,
  setaction,
  setshort,
  customer,
  setDownload,
  setoldname,
  balance,
  bankaccountsdetails,
  customertransfer,
  agenttransfer,
  manageragents,
  withdraw,
  withdrawpending,
  setwithdrawaction,
  statementvirtual,
  meterss,
  setdecliner,
  decliner,
  Payreject,
  agentvirtualmeter,
  virt,
  virtualagenting,
  currentPage,
  allmetering,
  fundingpending,
  handleSort
}) => {
  const navigate = useNavigate();
  const inputRef3 = useRef(null);
  const [open, setOpen] = useState(false);
  const [indexing, setIndexing] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [indexing2, setIndexing2] = useState(null);
  const [open3, setOpen3] = useState(false);
  const [indexing3, setIndexing3] = useState(null);
  const [open4, setOpen4] = useState(false);
  const [indexing4, setIndexing4] = useState(null);
  const [open5, setOpen5] = useState(false);
  const [indexing5, setIndexing5] = useState(null);
  const [open6, setOpen6] = useState(false);
  const [indexing6, setIndexing6] = useState(null);
  const [open7, setOpen7] = useState(false);
  const [indexing7, setIndexing7] = useState(null);
  const [open8, setOpen8] = useState(false);
  const [indexing8, setIndexing8] = useState(null);
  const [open9, setOpen9] = useState(false);
  const [indexing9, setIndexing9] = useState(null);
  const [open10, setOpen10] = useState(false);
  const [indexing10, setIndexing10] = useState(null);
  const [open11, setOpen11] = useState(false);
  const [indexing11, setIndexing11] = useState(null);
  const [open12, setOpen12] = useState(false);
  const [indexing12, setIndexing12] = useState(null);
  const [open13, setOpen13] = useState(false);
  const [indexing13, setIndexing13] = useState(null);
  const [open14, setOpen14] = useState(false);
  const [indexing14, setIndexing14] = useState(null);
  const [open15, setOpen15] = useState(false);
  const [indexing15, setIndexing15] = useState(null);
  const [open16, setOpen16] = useState(false);
  const [indexing16, setIndexing16] = useState(null);
  const dispatch = useDispatch();
  console.log(data);

  const theme = createTheme({
    typography: {
      fontFamily: ["inter"].join(",")
    }
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // fontFamily: `Inter sans-serif`,
      fontWeight: 600,
      fontSize: "10px",
      lineHeight: "13px",
      // fontFamily: "Exo 2, !important",
      /* identical to box height, or 150% */
      alignItems: "center",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      color: "rgba(104, 113, 130, 1)",
      borderBottom: "1px solid #E2E8F0",
      borderTop: "1px solid #E2E8F0",
      backgroundColor: "rgba(249, 250, 251, 1)",
      fontFamily: theme?.typography?.fontFamily
      //   alignItems: 'center',
      //   textTransform: 'uppercase',
      // border: 0,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "10px",
      fontWeight: 400,
      fontFamily: theme?.typography?.fontFamily,
      border: 0,
      color: "rgba(0, 0, 0)",
      // color: "rgba(90, 99, 118, 1)",
      flexWrap: "wrap"
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: "#eef0f2",
      cursor: "pointer",
      borderBottom: "1px solid #E2E8F0",
      fontFamily: theme?.typography?.fontFamily
    },
    "&:nth-of-type(odd)": {
      cursor: "pointer",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #E2E8F0",
      fontFamily: theme?.typography?.fontFamily
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }));

  // const handleCopy3 = (item) => {
  //   const textToCopy = item; // Get the text to copy
  //   if (textToCopy) {
  //     navigator.clipboard
  //       .writeText(textToCopy)
  //       .then(() => {
  //         toast.success("Copied to clipboard!");
  //       })
  //       .catch((err) => {
  //         console.error("Failed to copy address: ", err);
  //         toast.error("Failed to copy address.");
  //       });
  //   }
  // };

  const handleCopy3 = (item) => {
    const textToCopy = item;
    if (!textToCopy) return;

    try {
      // Create a temporary textarea element
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      textarea.style.position = "fixed"; // Avoid scrolling to bottom
      textarea.style.opacity = "0"; // Invisible
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy"); // Legacy copy command
      document.body.removeChild(textarea);

      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Fallback copy failed:", err);
      toast.error("Failed to copy address.");
    }
  };

  const formatNumberWithCommas = (number) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        {customers ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DATE OF BIRTH
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    FULL NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    USERNAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    GENDER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "5%" }}>1</StyledTableCell>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "15%" }}
                  >
                    12/04/1975
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    alameensodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    alameensodiq@yahoo.com
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    07057007046
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Male
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <p
                      className="text-route-color"
                      onClick={() => navigate("/customers/:id")}
                    >
                      View
                    </p>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "5%" }}>2</StyledTableCell>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "15%" }}
                  >
                    12/04/1975
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    alameensodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    alameensodiq@yahoo.com
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    07057007046
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Male
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <p
                      className="text-route-color"
                      onClick={() => navigate("/customers/:id")}
                    >
                      View
                    </p>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "5%" }}>3</StyledTableCell>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "15%" }}
                  >
                    12/04/1975
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    alameensodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    alameensodiq@yahoo.com
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    07057007046
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Male
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <p
                      className="text-route-color"
                      onClick={() => navigate("/customers/:id")}
                    >
                      View
                    </p>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : transfers ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
              sx={{ maxHeight: "60vh" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 700, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "5%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      STATUS
                    </StyledTableCell>

                    <StyledTableCell style={{ width: "10%" }}>
                      REF.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      USER TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      CUS. NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      CUS. PHONE NO.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO
                    </StyledTableCell>

                    <StyledTableCell style={{ width: "10%" }}>
                      METER NO.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      METER TYPE.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK ACCT NO.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      RECEIVED AMOUNT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      SERVICE CHARGE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TRANX AMOUNT.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMM. TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMM. CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK TAX FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM. TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM. CAP FEE
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                    DISTRICT COMM. TYPE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DSTM COMM.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DSTM COMM. VALUE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DSTM CAP FEE
                  </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM. TYPE
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
        DISCO COMMISSION CAP
      </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM. CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      EP COMM. TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      EP COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      EP COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      EP CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      FEE DUE TO SYSTEM
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TOKEN
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TOKEN DS.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      SMS ID
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ACTIONS
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        <Moment format="ddd MMM DD YYYY HH:mm:ss">
                          {item?.dispense?.updatedDate}
                        </Moment>
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.status ? (
                          item?.status === "PENDING" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "80%",
                                height: "20px",
                                background: "#8a8a7d",
                                color: "#e6df19",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#e5e999",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              PENDING
                            </button>
                          ) : item?.status === "SUCCESSFUL" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "90px",
                                height: "20px",
                                background: "#ECFDF3",
                                color: "#027A48",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#027A48",
                                  fontSize: "10px",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              SUCCESSFUL
                            </button>
                          ) : (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "20px",
                                background: "#ed7d6c",
                                color: "#f4270b",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#f4270b",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  fontSize: "10px"
                                }}
                              ></span>{" "}
                              FAILED
                            </button>
                          )
                        ) : (
                          "N/A"
                        )}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.reference}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.userType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.customerName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {/* {item?.customerName ? } */}
                        {item?.phone ? item?.phone : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoName}
                      </StyledTableCell>

                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterNo}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.accountNumber}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.inputAmount
                          ? `₦${formatNumberWithCommas(item?.inputAmount)}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦{formatNumberWithCommas(item?.systemCharge)}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦{formatNumberWithCommas(item?.transactionAmount)}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionType
                          ? item?.bankCommissionType
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionType === "PERCENTAGE" &&
                        item?.bankCommissionFee
                          ? `${item?.bankCommissionFee || 0}%`
                          : item?.bankCommissionType !== "PERCENTAGE" &&
                            item?.bankCommissionFeeValue
                          ? `₦${
                              formatNumberWithCommas(
                                item?.bankCommissionFeeValue
                              ) || 0
                            }`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionFeeValue
                          ? `₦${formatNumberWithCommas(
                              item?.bankCommissionFeeValue
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionFeeCap
                          ? `₦${item?.bankCommissionFeeCap}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦0
                        {/* {item?.bankTaxFee
                      ? `₦${item?.bankTaxFee}`
                      : "not applicable"} */}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionType
                          ? item?.agentCommissionType
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionType === "PERCENTAGE" &&
                        item?.agentCommissionFee
                          ? `${item?.agentCommissionFee}%`
                          : item?.agentCommissionType === "FIXED"
                          ? `₦${formatNumberWithCommas(
                              item?.agentCommissionPercentageTypeFeeValue
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionPercentageTypeFeeValue
                          ? `₦${formatNumberWithCommas(
                              item?.agentCommissionPercentageTypeFeeValue
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionCapFee
                          ? `₦${formatNumberWithCommas(
                              item?.agentCommissionCapFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                      {item?.managerCommissionType
                        ? `${item?.managerCommissionType}`
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.managerCommissionType === "PERCENTAGE" &&
                      item?.managerCommissionPercentageTypeFeeValue
                        ? `${
                            item?.managerCommissionPercentageTypeFeeValue || 0
                          }%`
                        : item?.managerCommissionType !== "PERCENTAGE"
                        ? `₦${
                            formatNumberWithCommas(
                              item?.districtManagerFee
                            ) || 0
                          }`
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.dispense?.systemTransactions?.districtManagerFee
                        ? `₦${formatNumberWithCommas(
                            item?.dispense?.systemTransactions
                              ?.districtManagerFee
                          )}`
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      N/A
                    </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionType}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
          {item?.discoSystemCommissionCapFee
            ? `₦${item?.discoSystemCommissionCapFee}`
            : "not applicable"}
        </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {/* ₦{item?.discoSystemCommissionFee} */}
                        {item?.discoSystemCommissionType === "PERCENTAGE" &&
                        item?.discoAmount
                          ? `${item?.discoAmount}%`
                          : item?.discoSystemCommissionType !== "PERCENTAGE"
                          ? `₦${
                              formatNumberWithCommas(
                                item?.discoSystemCommissionFee
                              ) || 0
                            }`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionFee
                          ? `₦${formatNumberWithCommas(
                              item?.discoSystemCommissionFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionCapFee
                          ? `₦${formatNumberWithCommas(
                              item?.discoSystemCommissionCapFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.earningPartnerCommissionType
                          ? item?.earningPartnerCommissionType
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.earningPartnerCommissionType === "PERCENTAGE"
                          ? `${item?.earningFeeValue}%`
                          : item?.earningPartnerCommissionType === "FIXED"
                          ? `₦${
                              formatNumberWithCommas(item?.earningPartnerFee) ||
                              0
                            }`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.earningPartnerFee
                          ? `₦${formatNumberWithCommas(
                              item?.earningPartnerFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.earningPartnerCapFee
                          ? `₦${formatNumberWithCommas(
                              item?.earningPartnerCapFee
                            )}`
                          : "₦0"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦{formatNumberWithCommas(item?.feeDueToSystem)}
                      </StyledTableCell>
                      <StyledTableCell
                        ref={inputRef3}
                        onClick={() =>
                          handleCopy3(item?.dispense?.listtoken[0])
                        }
                        style={{ width: "10%" }}
                      >
                        {item?.dispense?.listtoken[0] || "N/A"}
                      </StyledTableCell>
                      <StyledTableCell
                        // ref={inputRef3}
                        // onClick={() => handleCopy3(item?.dispense?.listtoken[0])}
                        style={{ width: "10%" }}
                      >
                        {item?.smsdeliveryStatus ? (
                          item?.smsdeliveryStatus === "SENT" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "80%",
                                height: "20px",
                                background: "#8a8a7d",
                                color: "#e6df19",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#e5e999",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              SENT
                            </button>
                          ) : item?.smsdeliveryStatus === "DELIVERED" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "90px",
                                height: "20px",
                                background: "#ECFDF3",
                                color: "#027A48",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#027A48",
                                  fontSize: "10px",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              DELIVERED
                            </button>
                          ) : (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "20px",
                                background: "#ed7d6c",
                                color: "#f4270b",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#f4270b",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  fontSize: "10px"
                                }}
                              ></span>{" "}
                              FAILED
                            </button>
                          )
                        ) : (
                          "N/A"
                        )}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.messageId ? item?.messageId : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell
                        onClick={() => {
                          setOpen(!open);
                          setIndexing(index);
                        }}
                        style={{
                          width: "10%",
                          position: "relative"
                          // justifyContent: "flex-end"
                        }}
                      >
                        {/* <button
            onClick={() => {
              setOpen(!open);
              setIndexing(index);
            }}
            className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
          >
            Action
          </button> */}
                        <svg
                          style={{ marginLeft: "30px" }}
                          onClick={() => {
                            setOpen(!open);
                            setIndexing(index);
                          }}
                          width="4"
                          height="16"
                          viewBox="0 0 4 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                            fill="#868FA0"
                          />
                        </svg>
                        {index === indexing && open ? (
                          <div className="absolute right-10 top-5 w-44 h-30 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-4 bg-white">
                            <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 20
                                }}
                                onClick={() => {
                                  setOpen(!open);
                                  setDownload(item);
                                  console.log(item);
                                  setStep(53);
                                }}
                              >
                                <Suspend width={10} />
                                <span className="text-black text-[12px]">
                                  Download Receipt
                                </span>
                              </div>
                              {!item?.dispense?.listtoken[0] && (
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: 20
                                  }}
                                  onClick={() => {
                                    setOpen(!open);
                                    dispatch(
                                      RegenerateToken({
                                        customerReference: item?.meterNo,
                                        discoShortName: item?.discoName,
                                        phone: item?.phone,
                                        amount: item?.transactionAmount
                                      })
                                    );
                                  }}
                                >
                                  <Activate width={10} />
                                  <span className="text-black text-[12px]">
                                    Regenerate Token
                                  </span>
                                </div>
                              )}

                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 20
                                }}
                                onClick={() => {
                                  setOpen(!open);
                                  // setStep(53);
                                  console.log(item?.dispense?.listtoken[0]);
                                  dispatch(
                                    ResendToken({
                                      // metertoken: item?.dispense?.listtoken[0],
                                      phoneNo: item?.phone,
                                      meterNo: item?.meterNo,
                                      dispenseId: item?.dispense?.id
                                    })
                                  );
                                  // setReload(true)
                                }}
                              >
                                <Edit />
                                <span className="text-black text-[12px]">
                                  Resend Token
                                </span>
                              </div>
                              {item?.status === "PENDING" && (
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: 20
                                  }}
                                  onClick={() => {
                                    setOpen(!open);
                                    // setStep(53);
                                    console.log(item?.dispense?.listtoken[0]);
                                    dispatch(
                                      Initiate({
                                        // metertoken: item?.dispense?.listtoken[0],
                                        id: item?.id
                                      })
                                    );
                                    // setReload(true)
                                  }}
                                >
                                  <Edit />
                                  <span className="text-red-500 text-[12px]">
                                    Initiate Refund
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
      {item?.paymentStatus === "successfull" ? (
        <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
          Successful
        </button>
      ) : (
        <button className="bg-failedbg h-[30px] w-[100%] rounded-full text-failedtext font-semibold text-[9px]">
          Failed
        </button>
      )}
    </StyledTableCell> */}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : investments ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    INSTITUTION NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    INSTITUTION USSD
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    DATE ADDED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    AMOUNT RECEIVED
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ width: "10%", textAlign: "center" }}
                  >
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.ussd}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {/* 12/04/1975 */} ----
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {/* 200,000 */} ----
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        width: "10%",
                        position: "relative"
                      }}
                      onClick={() => {
                        setOpen11(!open11);
                        setIndexing11(index);
                      }}
                    >
                      {/* <button
                        onClick={() => {
                          setOpen(!open);
                          setIndexing(index);
                        }}
                        className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                      >
                        Action
                      </button> */}
                      <svg
                        style={{ marginLeft: "30px" }}
                        onClick={() => {
                          setOpen11(!open11);
                          setIndexing11(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing11 && open11 ? (
                        <div className="absolute right-8 top-1 w-32 h-10 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2">
                          <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 10
                              }}
                            >
                              <Edit width={10} />
                              <span
                                className="text-black"
                                onClick={() => {
                                  setOpen11(!open11);
                                  //  setDownload(item);
                                  //  console.log(item);
                                  setoldname(item?.name);
                                  setStep(54);
                                }}
                              >
                                Edit Bank
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 10
                              }}
                            >
                              <Activate width={10} />
                              <span
                                className="text-black"
                                onClick={() => {
                                  setOpen11(!open11);
                                  //  setDownload(item);
                                  //  console.log(item);
                                  navigate(`/institutions/${item?.name}`);
                                  // setoldname(item?.name);
                                  // setStep(54);
                                }}
                              >
                                Accounts
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : loans ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "20%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    DISCOS NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    SHORT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE ADDED
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ width: "10%", textAlign: "center" }}
                  >
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "20%" }}>
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      ------
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.shortName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      -----
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        width: "10%",
                        position: "relative"
                      }}
                    >
                      {/* <button
                      onClick={() => navigate(`/discos/${item?.id}`)}
                      className="h-[30px] w-[100%] border border-none text-button-bg font-semibold text-[9px]"
                    >
                      View
                    </button> */}
                      <svg
                        style={{ marginLeft: "30px" }}
                        onClick={() => {
                          setOpen9(!open9);
                          setIndexing9(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing9 && open9 ? (
                        <div
                          style={{ overflowY: "scroll" }}
                          className="absolute right-20 top-0 w-36 h-30 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                            >
                              <View />
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "#000000"
                                }}
                                className="text-black"
                                onClick={() => {
                                  navigate(`/discos/${item?.shortName}`);
                                  sessionStorage.setItem(
                                    "discoshort",
                                    item?.shortName
                                  );
                                  setOpen9(!open9);
                                }}
                              >
                                View
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                            >
                              <Edit />
                              <span
                                onClick={() => {
                                  setStep(27);
                                  setdiscname(item?.shortName);
                                  setOpen9(!open9);
                                }}
                                className="text-black text-[9px]"
                              >
                                Edit Commission
                              </span>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                            >
                              <Update />
                              <span
                                onClick={() => {
                                  setshort(item?.shortName);
                                  setStep(50);
                                  setOpen9(!open9);
                                }}
                                className="text-black"
                              >
                                Update
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : audit ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "20%" }}>
                    DATE & TIME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    USER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    ACTION
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    DEVICE USED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    BROWSER USED
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "20%" }}>
                    12/04/1975 09:11:04
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Create User
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Macbook Pro 2020
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Chrome
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "20%" }}>
                    12/04/1975 09:11:04
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Create User
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Macbook Pro 2020
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Chrome
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "20%" }}>
                    12/04/1975 09:11:04
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Create User
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Macbook Pro 2020
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Chrome
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : airtime ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE CREATED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    SENDER'S NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    SENDER'S ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    BENEFICIARY'S NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    SERVICE PROVIDER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    TRANSACTION ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    STATUS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "10%" }}>
                    12/04/1975
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    07057007046
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    0040759354
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    GLO
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    WOFUFHKKDDL099
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                      Successful
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "10%" }}>
                    12/04/1975
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    07057007046
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    AIRTEL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    200,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    WOFUFHKKDDL099
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button className="bg-pendingbg h-[30px] w-[100%] rounded-full text-pendingtext font-semibold text-[9px]">
                      Pending
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "10%" }}>
                    12/04/1975
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    07057007046
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Al-ameen Sodiq
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ETISALAT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    200,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    WOFUFHKKDDL099
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button className="bg-pendingbg h-[30px] w-[100%] rounded-full text-pendingtext font-semibold text-[9px]">
                      Pending
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : overview ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ACCOUNT NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    FULL NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE OF BIRTH
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE JOINED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "10%" }}>
                      1
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      0124890900
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      AL-AMEEN SODIQ
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      alameensodiq@yahoo.com
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      07057007046
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      12/04/1975
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      12/04/2003
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.status ? (
                        <button className="bg-successbg h-[30px] w-[70%] rounded-full text-successtext font-semibold text-[9px]">
                          Successful
                        </button>
                      ) : (
                        <button className="bg-pendingbg h-[30px] w-[70%] rounded-full text-pendingtext font-semibold text-[9px]">
                          Pending
                        </button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>2</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0124890900
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AL-AMEEN SODIQ
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/2003
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  <button className="bg-pendingbg h-[30px] w-[70%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>3</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0124890900
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AL-AMEEN SODIQ
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/2003
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  <button className="bg-pendingbg h-[30px] w-[70%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>4</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0124890900
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AL-AMEEN SODIQ
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/2003
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  <button className="bg-pendingbg h-[30px] w-[70%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : meter ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    METER TYPE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACCOUNT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    BANK
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DISCO SHORT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE CREATED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    CUSTOMER REFERENCE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "10%" }}>
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.type}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.accountName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.address}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bank?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.disco?.shortName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      <Moment format="DD-MM-YYYY">{item?.createdAt}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.customerReference}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <p
                        className="text-route-color"
                        onClick={() =>
                          navigate(`/meter/${item?.customerReference}`)
                        }
                      >
                        View
                      </p>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : agents ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PARTNER NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    COMMISSION
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE ADDED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    TOTAL AMOUNT RECEIVED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      onClick={() => {
                        setStep(11);
                        setUserIds(item?.id);
                      }}
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setStep(11);
                        setUserIds(item?.id);
                      }}
                      style={{ width: "15%" }}
                    >
                      {item?.firstName}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setStep(11);
                        setUserIds(item?.id);
                      }}
                      style={{ width: "15%" }}
                    >
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setStep(11);
                        setUserIds(item?.id);
                      }}
                      style={{ width: "15%" }}
                    >
                      {item?.address}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setStep(11);
                        setUserIds(item?.id);
                      }}
                      style={{ width: "10%" }}
                    >
                      ---
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setStep(11);
                        setUserIds(item?.id);
                      }}
                      style={{ width: "20%" }}
                    >
                      ----
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#000000"
                        }}
                        onClick={() => navigate(`/agents/${item?.user?.id}`)}
                      >
                        View
                      </span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : apipartners ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PARTNER NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    COMMISSION
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE ADDED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.firstName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.address}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ width: "5%", position: "relative" }}
                    >
                      {/* <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/api/${item?.id}`)}
                    >
                      View
                    </span> */}
                      <svg
                        onClick={() => {
                          setOpen8(!open8);
                          setIndexing8(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing8 && open8 ? (
                        <div
                          style={{ overflowY: "scroll" }}
                          className="absolute right-20 top-0 w-36 h-30 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <View />
                              <span
                                className="text-black"
                                onClick={() => {
                                  navigate(`/api/${item?.id}`);
                                  setOpen8(!open8);
                                }}
                              >
                                View
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Edit />
                              <span
                                onClick={() => {
                                  setStep(11);
                                  setUserIds(item?.id);
                                  setOpen8(!open8);
                                }}
                                className="text-black"
                              >
                                Edit Commission
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Suspend />
                              <span
                                onClick={() => {
                                  setaction("blocked");
                                  setStep(48);
                                  setOpen8(!open8);
                                  setuserIding(item?.id);
                                }}
                                className="text-black"
                              >
                                Blocked
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Suspend />
                              <span
                                onClick={() => {
                                  setaction("restricted");
                                  setStep(48);
                                  setOpen8(!open8);
                                  setuserIding(item?.id);
                                }}
                                className="text-black"
                              >
                                Restricted
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Activate />
                              <span
                                onClick={() => {
                                  setaction("active");
                                  setStep(48);
                                  setOpen8(!open8);
                                  setuserIding(item?.id);
                                }}
                                className="text-black"
                              >
                                Activate
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Update />
                              <span
                                onClick={() => {
                                  setuserIding(item?.id);
                                  setStep(45);
                                  setOpen8(!open8);
                                }}
                                className="text-black"
                              >
                                Update
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : payment ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              sx={{ maxHeight: "60vh" }}
              style={{ boxShadow: "none" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 1300, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "7%" }}>
                      S/N
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "7%" }}>
                      BALANCE
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "7%" }}>
                      TRANSACTION TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "7%" }}>
                      TRANSACTION DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "8%" }}>
                      TRANSACTION AMOUNT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "7%" }}>
                      RECEIPT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "7%" }}>
                      REQUEST ID
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.unitsPayment}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.debtPayment}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.unitsType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.units}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.totalPayment}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.receipt}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.account}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.tariffDescription}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.idVendor}
                      </StyledTableCell>
                      <StyledTableCell
                        style={{ width: "10%" }}
                      ></StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.customerName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.paymentDate ? item?.paymentDate : 0}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterSerial}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))} */}
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                        {item?.balance}
                      </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.transactionType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.transactionDate}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.transactionAmount}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.receiptNo}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.requestID}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : shift ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              sx={{ maxHeight: "60vh" }}
              style={{ boxShadow: "none" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 1300, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "5%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      USER
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      UNIT PAYMENT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DEBT PAYMENT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TRANSACTION DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AMOUNT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      RECEIPT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ACCOUNT.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      VENDOR ID
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      CUSTOMER. NAME
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "8%" }}>
                    DATE
                  </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      METER SERIAL
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.codUser}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.unitPayment}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.debtPayment}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        <Moment format="DD-MM-YYYY">
                          {item?.transactionDate}
                        </Moment>
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.totalAmount}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.receipt}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.account}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.idVendor}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.customerName}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                      {item?.account?.disco?.name}
                    </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterSerial}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : balance ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              sx={{ maxHeight: "60vh" }}
              style={{ boxShadow: "none" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 1300, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "5%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      Meter Serial
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      Account
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      Tariff Description
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      Service Address
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      Name
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      Account Balance
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      Indicator PrePostAccount
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      Collection Ind
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterSerial}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.account}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.tariffDescription}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.serviceAddress}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.name}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.accountBalance}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.indicatorPrePostAccount}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.collectionInd}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  {/* {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.idVendor}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.descVendor}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.district}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.balance}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.displayBalance}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.lowBalanceAlert}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))} */}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : statementvirtual ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              sx={{ maxHeight: "60vh" }}
              style={{ boxShadow: "none" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 1300, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "7%" }}>
                      S/N
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "7%" }}>
                      BALANCE
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "7%" }}>
                      TRANSACTION TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "7%" }}>
                      TRANSACTION DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "8%" }}>
                      OPENING BALANCE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "7%" }}>
                      CLOSING BALANCE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "7%" }}>
                      CREDIT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "7%" }}>
                      DEBIT
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.statementData?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                        {item?.balance}
                      </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.transactionType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        <Moment format="DD-MM-YYYY">
                          {item?.transactionDate}
                        </Moment>
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.openingBalance}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.closingBalance}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.credit}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.debit}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : setting ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              sx={{ maxHeight: "60vh" }}
              style={{ boxShadow: "none" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 1300, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "20%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      DISCOS
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      USER TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      COMMISSION FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      COMMISSION CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      COMMISSION TYPE
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow
                      onClick={() => {
                        setStep(30);
                        setsettingId(item?.id);
                      }}
                    >
                      <StyledTableCell style={{ width: "20%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "20%" }}>
                        {item?.discoName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "20%" }}>
                        {item?.userType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "20%" }}>
                        {item?.commissionDTO?.fee}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "20%" }}>
                        {item?.commissionDTO?.capFee}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "20%" }}>
                        {item?.commissionDTO?.commissionType}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  {/* <StyledTableRow>
                  <StyledTableCell style={{ width: "20%" }}>2</StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    EKO
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    API PARTNER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>2%</StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PERCENTAGE
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "20%" }}>3</StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    IKEJA
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    AGENT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    2500
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    FIXED
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "20%" }}>4</StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    IKEJA
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    API PARTNER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>2%</StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PERCENTAGE
                  </StyledTableCell>
                </StyledTableRow> */}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : paymentsmethod ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "20%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    DATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    STATUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "25%" }}
                    >
                      {item?.id}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.status === "ENABLED" ? (
                        <button
                          onClick={() => Pay(item?.id, "disable")}
                          className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          ENABLED
                        </button>
                      ) : (
                        <button
                          onClick={() => Pay(item?.id, "enable")}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          DISABLED
                        </button>
                      )}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setOpen6(!open6);
                        setIndexing6(index);
                      }}
                      style={{ width: "20%", position: "relative" }}
                    >
                      <svg
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing6 && open6 ? (
                        <div className="absolute right-10 top-5 w-36 h-16 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2">
                          <div className="flex flex-col gap-2 text-blue-600 items-center cursor-pointer">
                            {item?.status === "ENABLED" ? (
                              <span
                                className="text-black"
                                onClick={() => Pay(item?.id, "disable")}
                              >
                                ENABLED
                              </span>
                            ) : (
                              <span
                                className="text-black"
                                onClick={() => Pay(item?.id, "enable")}
                              >
                                DISABLED
                              </span>
                            )}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : notification ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    PHONE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    MESSAGE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    COMMISSION
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    STATUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {item?.user?.name}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "15%" }}
                    >
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "10%" }}
                    >
                      {item?.user?.phone}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "20%" }}
                    >
                      {item?.message}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "15%" }}
                    >
                      {"N/A"}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "10%" }}
                    >
                      <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.status === "ACCEPTED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                          className="bg-successbg h-[30px] w-[90%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          ACCEPTED
                        </button>
                      ) : item?.status === "REJECTED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          DECLINED
                        </button>
                      ) : (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          PENDING
                        </button>
                      )}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setOpen2(!open2);
                        setIndexing2(index);
                      }}
                      style={{ width: "10%", position: "relative" }}
                    >
                      {/* <button
                      onClick={() => {
                        setOpen2(!open2);
                        setIndexing2(index);
                      }}
                      className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                    >
                      Action
                    </button> */}
                      <svg
                        onClick={() => {
                          setOpen2(!open2);
                          setIndexing2(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing2 && open2 ? (
                        <div
                          style={{ overflowY: "scroll" }}
                          className="absolute right-40 top-0 w-36 h-30 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                navigate(`/agents/${item?.user?.id}`);
                                setOpen2(!open2);
                              }}
                            >
                              <View />
                              <span
                                className="text-black flex-row gap-1 items-center"
                                onClick={() => {
                                  navigate(`/agents/${item?.user?.id}`);
                                  setOpen2(!open2);
                                }}
                              >
                                View
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("blocked");
                                setStep(48);
                                setOpen2(!open2);
                                setuserIding(item?.user?.id);
                              }}
                            >
                              <Suspend />
                              <span
                                onClick={() => {
                                  setaction("blocked");
                                  setStep(48);
                                  setOpen2(!open2);
                                  setuserIding(item?.user?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Blocked
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("restricted");
                                setStep(48);
                                setOpen2(!open2);
                                setuserIding(item?.user?.id);
                              }}
                            >
                              <Suspend />
                              <span
                                onClick={() => {
                                  setaction("restricted");
                                  setStep(48);
                                  setOpen2(!open2);
                                  setuserIding(item?.user?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Restricted
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("active");
                                setStep(48);
                                setOpen2(!open2);
                                setuserIding(item?.user?.id);
                              }}
                            >
                              <Activate />
                              <span
                                onClick={() => {
                                  setaction("active");
                                  setStep(48);
                                  setOpen2(!open2);
                                  setuserIding(item?.user?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Activate
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setuserIding(item?.user?.id);
                                setStep(70);
                                setOpen2(!open2);
                              }}
                            >
                              <Update />
                              <span
                                onClick={() => {
                                  setuserIding(item?.user?.id);
                                  setStep(70);
                                  setOpen2(!open2);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Commission
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setuserIding(item?.user?.id);
                                setStep(45);
                                setOpen2(!open2);
                              }}
                            >
                              <Update />
                              <span
                                onClick={() => {
                                  setuserIding(item?.user?.id);
                                  setStep(45);
                                  setOpen2(!open2);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Update
                              </span>
                            </div>
                            {/* <span
                            className="text-black"
                            onClick={() => {
                              setStep(11);
                              setUserIds(item?.id);
                              setOpen2(!open2);
                            }}
                          >
                            Set Commission
                          </span> */}

                            {/* <span className="text-black">Fund Wallet</span>
                          <span className="text-black">Deplete Wallet</span> */}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {/* <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/agents/${item?.user?.id}`)}
                    >
                      View
                    </span> */}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : funding ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    SOURCE ACCOUNT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    SOURCE ACCOUNT NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    CUSTOMER NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ACCOUNT NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PHONE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    SOURCE BANK
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    INPUT AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    TRANX. AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    STATUS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {item?.sourceAccountName
                        ? item?.sourceAccountName
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.sourceAccountNumber
                        ? item?.sourceAccountNumber
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {item?.customerName ? item?.customerName : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.accountNumber ? item?.accountNumber : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.phoneNumber ? item?.phoneNumber : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.bankName ? item?.bankName : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.inputAmount
                        ? `${formatNumberWithCommas(item?.inputAmount)}`
                        : "N/A"}
                      {/* <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment> */}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.transactionAmount
                        ? `${formatNumberWithCommas(item?.transactionAmount)}`
                        : "N/A"}
                      {/* <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment> */}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.status === "SUCCESSFUL" ? (
                        <button
                          onClick={() =>
                            toast.succes("Method has been Completed")
                          }
                          className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          SUCCESSFUL
                        </button>
                      ) : item?.status === "DECLINED" ? (
                        // <button
                        //   onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                        //   className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        // >
                        //   INITIATED
                        // </button>

                        <button
                          onClick={() =>
                            Pay(item?.rrn, item?.phoneNumber, item?.amount)
                          }
                          className="bg-failedtext h-[30px] w-[100%] rounded-full text-cable-bg font-semibold text-[9px]"
                        >
                          DECLINED
                        </button>
                      ) : item?.status === "PROCESSED" ? (
                        <button
                          onClick={() =>
                            Pay(item?.rrn, item?.phoneNumber, item?.amount)
                          }
                          className="bg-elect-bg h-[30px] w-[100%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          PROCESSED
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            Pay(item?.rrn, item?.phoneNumber, item?.amount)
                          }
                          className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          PENDING
                        </button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : fundingpending ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    SOURCE ACCOUNT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    SOURCE ACCOUNT NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    CUSTOMER NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ACCOUNT NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PHONE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    BANK
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    TRANX. AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    STATUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {item?.sourceAccountName
                        ? item?.sourceAccountName
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.sourceAccountNumber
                        ? item?.sourceAccountNumber
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {item?.customerName ? item?.customerName : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.accountNumber ? item?.accountNumber : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.phoneNumber ? item?.phoneNumber : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.bankName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.inputAmount
                        ? `${formatNumberWithCommas(item?.inputAmount)}`
                        : "N/A"}
                      {/* <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment> */}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.transactionAmount
                        ? `${formatNumberWithCommas(item?.transactionAmount)}`
                        : "N/A"}
                      {/* <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment> */}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.status === "ACCEPTED" ? (
                        <button
                          onClick={() =>
                            toast.succes("Method has been Completed")
                          }
                          className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          COMPLETED
                        </button>
                      ) : item?.status === "INITIATED" ? (
                        // <button
                        //   onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                        //   className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        // >
                        //   INITIATED
                        // </button>
                        <button
                          onClick={() =>
                            Pay(item?.rrn, item?.phoneNumber, item?.amount)
                          }
                          className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          INITIATED
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            Pay(item?.rrn, item?.phoneNumber, item?.amount)
                          }
                          className="bg-elect-bg h-[30px] w-[100%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          PENDING
                        </button>
                      )}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setOpen(!open);
                        setIndexing(index);
                      }}
                      style={{
                        width: "10%",
                        position: "relative"
                        // justifyContent: "flex-end"
                      }}
                    >
                      {/* <button
            onClick={() => {
              setOpen(!open);
              setIndexing(index);
            }}
            className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
          >
            Action
          </button> */}
                      <svg
                        style={{ marginLeft: "30px" }}
                        onClick={() => {
                          setOpen16(!open16);
                          setIndexing16(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing16 && open16 ? (
                        <div className="absolute right-10 top-5 w-36 h-20 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 bg-white">
                          <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                            {/* <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                              onClick={() => {
                                Pay(item?.id);
                                setOpen16(!open16);
                                // setOpen(!open);
                                // setDownload(item);
                                console.log(item);
                                // setStep(53);
                              }}
                            >
                              <Suspend width={10} />
                              <span className="text-black">Decline</span>
                            </div> */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                              onClick={() => {
                                Pay(item?.id);
                                setOpen16(!open16);
                              }}
                            >
                              <Activate width={10} />
                              <span className="text-black">
                                Approve/Decline
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : complain ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PHONE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    MESSAGE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    STATUS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {item?.customerName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.customerEmail}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.customerPhone}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.description}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.status !== "REJECTED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                          className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          RESOLVED
                        </button>
                      ) : item?.status === "REJECTED" ? (
                        <button
                          onClick={() => Pay(item?.id)}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          PENDING
                        </button>
                      ) : (
                        <button
                          onClick={() => Pay(item?.id)}
                          className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          PENDING
                        </button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : complainpending ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PHONE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    MESSAGE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    STATUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {item?.customerName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.customerEmail}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.customerPhone}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.description}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.status === "REJECTED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                          className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          RESOLVED
                        </button>
                      ) : item?.status === "PENDING" ? (
                        <button
                          onClick={() => Pay(item?.id)}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          PENDING
                        </button>
                      ) : (
                        ""
                        // <button
                        //   onClick={() => Pay(item?.id)}
                        //   className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        // >
                        //   PENDING
                        // </button>
                      )}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        width: "15%",
                        position: "relative"
                      }}
                      onClick={() => {
                        setOpen7(!open7);
                        setIndexing7(index);
                      }}
                    >
                      <svg
                        style={{ marginLeft: "30px" }}
                        onClick={() => {
                          setOpen7(!open7);
                          setIndexing7(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing7 && open7 ? (
                        <div className="absolute right-10 top-5 w-36 h-10 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 20
                            }}
                            onClick={() => Pay(item?.id)}
                          >
                            <Activate />
                            <span
                              onClick={() => Pay(item?.id)}
                              className="text-black flex-row gap-1 items-center"
                            >
                              Resolve
                            </span>
                          </div>
                          {/* <div className="flex flex-col gap-2 text-blue-600 items-center cursor-pointer">
                          <span
                            onClick={() => Pay(item?.id)}
                            className="text-black flex-row gap-1 items-center"
                          >
                            <Activate /> Resolve
                          </span>
                        </div> */}
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : earning ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    COMMISSION
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE ADDED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow
                  // onClick={() => {
                  //   setStep(11);
                  //   setUserIds(item?.id);
                  // }}
                  >
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.firstName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.address}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {"N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {/* 200,000 */} {item?.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setOpen3(!open3);
                        setIndexing3(index);
                      }}
                      style={{ width: "5%", position: "relative" }}
                    >
                      {/* <button
                      onClick={() => {
                        setOpen3(!open3);
                        setIndexing3(index);
                      }}
                      className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                    >
                      Action
                    </button> */}
                      <svg
                        onClick={() => {
                          setOpen3(!open3);
                          setIndexing3(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing3 && open3 ? (
                        <div
                          style={{ overflowY: "scroll" }}
                          className="absolute right-20 top-0 w-36 h-30 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                navigate(`/earning/${item?.id}`);
                                setOpen3(!open3);
                              }}
                            >
                              <View />
                              <span
                                className="text-black flex-row gap-1 items-center"
                                onClick={() => {
                                  navigate(`/earning/${item?.id}`);
                                  setOpen3(!open3);
                                }}
                              >
                                View
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setuserIding(item?.id);
                                setStep(59);
                                setOpen3(!open3);
                              }}
                            >
                              <Edit />
                              <span
                                onClick={() => {
                                  setuserIding(item?.id);
                                  setStep(59);
                                  setOpen3(!open3);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Edit
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("blocked");
                                setStep(48);
                                setOpen3(!open3);
                                setuserIding(item?.id);
                              }}
                            >
                              <Suspend />
                              <span
                                onClick={() => {
                                  setaction("blocked");
                                  setStep(48);
                                  setOpen3(!open3);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Blocked
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("restricted");
                                setStep(48);
                                setOpen3(!open3);
                                setuserIding(item?.id);
                              }}
                            >
                              <Suspend />
                              <span
                                onClick={() => {
                                  setaction("restricted");
                                  setStep(48);
                                  setOpen3(!open3);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Restricted
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("active");
                                setStep(48);
                                setOpen3(!open3);
                                setuserIding(item?.id);
                              }}
                            >
                              <Activate />
                              <span
                                onClick={() => {
                                  setaction("active");
                                  setStep(48);
                                  setOpen3(!open3);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Activate
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setuserIding(item?.id);
                                setStep(45);
                                setOpen3(!open3);
                              }}
                            >
                              <Update />
                              <span
                                onClick={() => {
                                  setuserIding(item?.id);
                                  setStep(45);
                                  setOpen3(!open3);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Update
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {/* <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/earning/${item?.id}`)}
                    >
                      View
                    </span> */}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : pending ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    NIN
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    PHONE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    MESSAGE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    STATUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "5%" }}
                      // onClick={() => {
                      //   setStep(39);
                      //   setImages(item?.addressUrl);
                      //   console.log(item?.addressUrl);
                      // }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                      // onClick={() => {
                      //   setStep(39);
                      //   setImages(item?.addressUrl);
                      //   console.log(item?.addressUrl);
                      // }}
                    >
                      {item?.user?.name}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ width: "10%" }}
                      // onClick={() => {
                      //   setStep(39);
                      //   setImages(item?.addressUrl);
                      //   console.log(item?.addressUrl);
                      // }}
                    >
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ width: "10%" }}
                      // onClick={() => {
                      //   setStep(39);
                      //   setImages(item?.addressUrl);
                      //   console.log(item?.addressUrl);
                      // }}
                    >
                      {item?.nin}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ width: "10%" }}
                      // onClick={() => {
                      //   setStep(39);
                      //   setImages(item?.addressUrl);
                      //   console.log(item?.addressUrl);
                      // }}
                    >
                      {item?.user?.phone}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ width: "10%" }}
                      // onClick={() => {
                      //   setStep(39);
                      //   setImages(item?.addressUrl);
                      //   console.log(item?.addressUrl);
                      // }}
                    >
                      {item?.address}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ width: "15%" }}
                      // onClick={() => {
                      //   setStep(39);
                      //   setImages(item?.addressUrl);
                      //   console.log(item?.addressUrl);
                      // }}
                    >
                      {item?.message}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ width: "10%" }}
                      // onClick={() => {
                      //   setStep(39);
                      //   setImages(item?.addressUrl);
                      //   console.log(item?.addressUrl);
                      // }}
                    >
                      <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.status === "ACCEPTED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                          className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          ACCEPTED
                        </button>
                      ) : item?.status === "REJECTED" ? (
                        <button
                          // onClick={() => Pay(item, item?.user?.id, "approve")}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          DECLINED
                        </button>
                      ) : (
                        <button
                          onClick={() => Pay(item, item?.user?.id, "approve")}
                          className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          PENDING
                        </button>
                      )}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        width: "10%",
                        position: "relative"
                        // justifyContent: "flex-end"
                      }}
                      onClick={() => {
                        setOpen13(!open13);
                        setIndexing13(index);
                        console.log("sodiq");
                      }}
                    >
                      <svg
                        onClick={() => {
                          setOpen13(!open13);
                          setIndexing13(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing13 && open13 ? (
                        <div className="absolute right-20 top-15 w-36 h-20 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 bg-white z-10">
                          <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                              onClick={() => {
                                setStep(39);
                                setImages(item?.addressUrl);
                                setOpen13(!open13);
                                console.log(item?.addressUrl);
                              }}
                            >
                              <Suspend width={10} />
                              <span
                                className="text-black"
                                onClick={() => {
                                  setStep(39);
                                  setImages(item?.addressUrl);
                                  setOpen13(!open13);
                                  console.log(item?.addressUrl);
                                }}
                              >
                                Doc Uploaded
                              </span>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                              onClick={() => {
                                console.log(item);
                                // setdecliner(decliner);
                                Pay(item, item?.user?.id, "approve");
                                setOpen13(!open13);
                              }}
                            >
                              <Activate width={10} />
                              <span
                                className="text-black"
                                onClick={() => {
                                  console.log(item);
                                  // setdecliner(decliner);
                                  Pay(item, item?.user?.id, "approve");
                                  setOpen13(!open13);
                                }}
                              >
                                Approve Agent
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                              onClick={() => {
                                console.log(item);
                                // setdecliner(!decliner);
                                Payer(item, item?.user?.id, "approve");
                                setOpen13(!open13);
                              }}
                            >
                              <Activate width={10} />
                              <span
                                className="text-black"
                                onClick={() => {
                                  console.log(item);
                                  // setdecliner(!decliner);
                                  Payer(item, item?.user?.id, "approve");
                                  setOpen13(!open13);
                                }}
                              >
                                Decline Agent
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : rejected ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    PHONE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    MESSAGE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    STATUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow
                  // onClick={() => {
                  //   setStep(11);
                  //   setUserIds(item?.id);
                  // }}
                  >
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {item?.user?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.user?.phone}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.message}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.status === "ACCEPTED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                          className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          ACCEPETD
                        </button>
                      ) : item?.status === "REJECTED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          DECLINED
                        </button>
                      ) : (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          PENDING
                        </button>
                      )}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        width: "10%",
                        position: "relative"
                        // justifyContent: "flex-end"
                      }}
                      onClick={() => {
                        setOpen14(!open14);
                        setIndexing14(index);
                        console.log("sodiq");
                      }}
                    >
                      <svg
                        onClick={() => {
                          setOpen14(!open14);
                          setIndexing14(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing14 && open14 ? (
                        <div className="absolute right-20 top-15 w-36 h-20 rounded-lg px-2 py-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 bg-white z-10">
                          <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                            {/* <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                            >
                              <Suspend width={10} />
                              <span
                                className="text-black"
                                onClick={() => {
                                  setStep(39);
                                  setImages(item?.addressUrl);
                                  setOpen13(!open13);
                                  console.log(item?.addressUrl);
                                }}
                              >
                                Doc Uploaded
                              </span>
                            </div> */}

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                              onClick={() => {
                                console.log(item);
                                // setdecliner(decliner);
                                Payreject(item, item?.user?.id, "re-approve");
                                setOpen14(!open14);
                              }}
                            >
                              <Activate width={10} />
                              <span
                                className="text-black"
                                onClick={() => {
                                  console.log(item);
                                  // setdecliner(decliner);
                                  Payreject(item, item?.user?.id, "re-approve");
                                  setOpen14(!open14);
                                }}
                              >
                                Re-approve Agent
                              </span>
                            </div>
                            {/* <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                            >
                              <Activate width={10} />
                              <span
                                className="text-black"
                                onClick={() => {
                                  console.log(item);
                                  // setdecliner(!decliner);
                                  Payer(item, item?.user?.id, "approve");
                                  setOpen13(!open13);
                                }}
                              >
                                Decline Agent
                              </span>
                            </div> */}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : overviewtransaction ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
              sx={{ maxHeight: "60vh" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 700, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "5%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      STATUS
                    </StyledTableCell>

                    <StyledTableCell style={{ width: "10%" }}>
                      REF.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      USER TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      CUS. NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      CUS. PHONE NO.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO
                    </StyledTableCell>

                    <StyledTableCell style={{ width: "10%" }}>
                      METER NO.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      METER TYPE.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK ACCT NO.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      RECEIVED AMOUNT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      SERVICE CHARGE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TRANX AMOUNT.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMM. TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMM. CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK TAX FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM. TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM. CAP FEE
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                    DISTRICT COMM. TYPE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DSTM COMM.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DSTM COMM. VALUE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DSTM CAP FEE
                  </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM. TYPE
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
        DISCO COMMISSION CAP
      </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM. CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      EP COMM. TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      EP COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      EP COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      EP CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      FEE DUE TO SYSTEM
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TOKEN
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TOKEN DS.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      SMS ID
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ACTIONS
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        <Moment format="ddd MMM DD YYYY HH:mm:ss">
                          {item?.dispense?.updatedDate}
                        </Moment>
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.status ? (
                          item?.status === "PENDING" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "80%",
                                height: "20px",
                                background: "#8a8a7d",
                                color: "#e6df19",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#e5e999",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              PENDING
                            </button>
                          ) : item?.status === "SUCCESSFUL" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "90px",
                                height: "20px",
                                background: "#ECFDF3",
                                color: "#027A48",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#027A48",
                                  fontSize: "10px",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              SUCCESSFUL
                            </button>
                          ) : (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "20px",
                                background: "#ed7d6c",
                                color: "#f4270b",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#f4270b",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  fontSize: "10px"
                                }}
                              ></span>{" "}
                              FAILED
                            </button>
                          )
                        ) : (
                          "N/A"
                        )}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.reference}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.userType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.customerName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {/* {item?.customerName ? } */}
                        {item?.phone ? item?.phone : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoName}
                      </StyledTableCell>

                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterNo}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.accountNumber}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.inputAmount
                          ? `₦${formatNumberWithCommas(item?.inputAmount)}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦{formatNumberWithCommas(item?.systemCharge)}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦{formatNumberWithCommas(item?.transactionAmount)}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionType
                          ? item?.bankCommissionType
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionType === "PERCENTAGE" &&
                        item?.bankCommissionFee
                          ? `${item?.bankCommissionFee || 0}%`
                          : item?.bankCommissionType !== "PERCENTAGE" &&
                            item?.bankCommissionFeeValue
                          ? `₦${
                              formatNumberWithCommas(
                                item?.bankCommissionFeeValue
                              ) || 0
                            }`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionFeeValue
                          ? `₦${formatNumberWithCommas(
                              item?.bankCommissionFeeValue
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionFeeCap
                          ? `₦${item?.bankCommissionFeeCap}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦0
                        {/* {item?.bankTaxFee
                      ? `₦${item?.bankTaxFee}`
                      : "not applicable"} */}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionType
                          ? item?.agentCommissionType
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionType === "PERCENTAGE" &&
                        item?.agentCommissionFee
                          ? `${item?.agentCommissionFee}%`
                          : item?.agentCommissionType === "FIXED"
                          ? `₦${formatNumberWithCommas(
                              item?.agentCommissionPercentageTypeFeeValue
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionPercentageTypeFeeValue
                          ? `₦${formatNumberWithCommas(
                              item?.agentCommissionPercentageTypeFeeValue
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionCapFee
                          ? `₦${formatNumberWithCommas(
                              item?.agentCommissionCapFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                      {item?.managerCommissionType
                        ? `${item?.managerCommissionType}`
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.managerCommissionType === "PERCENTAGE" &&
                      item?.managerCommissionPercentageTypeFeeValue
                        ? `${
                            item?.managerCommissionPercentageTypeFeeValue || 0
                          }%`
                        : item?.managerCommissionType !== "PERCENTAGE"
                        ? `₦${
                            formatNumberWithCommas(
                              item?.districtManagerFee
                            ) || 0
                          }`
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.dispense?.systemTransactions?.districtManagerFee
                        ? `₦${formatNumberWithCommas(
                            item?.dispense?.systemTransactions
                              ?.districtManagerFee
                          )}`
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      N/A
                    </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionType}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
          {item?.discoSystemCommissionCapFee
            ? `₦${item?.discoSystemCommissionCapFee}`
            : "not applicable"}
        </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {/* ₦{item?.discoSystemCommissionFee} */}
                        {item?.discoSystemCommissionType === "PERCENTAGE" &&
                        item?.discoAmount
                          ? `${item?.discoAmount}%`
                          : item?.discoSystemCommissionType !== "PERCENTAGE"
                          ? `₦${
                              formatNumberWithCommas(
                                item?.discoSystemCommissionFee
                              ) || 0
                            }`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionFee
                          ? `₦${formatNumberWithCommas(
                              item?.discoSystemCommissionFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionCapFee
                          ? `₦${formatNumberWithCommas(
                              item?.discoSystemCommissionCapFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.earningPartnerCommissionType
                          ? item?.earningPartnerCommissionType
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.earningPartnerCommissionType === "PERCENTAGE"
                          ? `${item?.earningFeeValue}%`
                          : item?.earningPartnerCommissionType === "FIXED"
                          ? `₦${
                              formatNumberWithCommas(item?.earningPartnerFee) ||
                              0
                            }`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.earningPartnerFee
                          ? `₦${formatNumberWithCommas(
                              item?.earningPartnerFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.earningPartnerCapFee
                          ? `₦${formatNumberWithCommas(
                              item?.earningPartnerCapFee
                            )}`
                          : "₦0"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦{formatNumberWithCommas(item?.feeDueToSystem)}
                      </StyledTableCell>
                      <StyledTableCell
                        ref={inputRef3}
                        onClick={() =>
                          handleCopy3(item?.dispense?.listtoken[0])
                        }
                        style={{ width: "10%" }}
                      >
                        {item?.dispense?.listtoken[0] || "N/A"}
                      </StyledTableCell>
                      <StyledTableCell
                        // ref={inputRef3}
                        // onClick={() => handleCopy3(item?.dispense?.listtoken[0])}
                        style={{ width: "10%" }}
                      >
                        {item?.smsdeliveryStatus ? (
                          item?.smsdeliveryStatus === "SENT" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "80%",
                                height: "20px",
                                background: "#8a8a7d",
                                color: "#e6df19",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#e5e999",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              SENT
                            </button>
                          ) : item?.smsdeliveryStatus === "DELIVERED" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "90px",
                                height: "20px",
                                background: "#ECFDF3",
                                color: "#027A48",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#027A48",
                                  fontSize: "10px",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              DELIVERED
                            </button>
                          ) : (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                height: "20px",
                                background: "#ed7d6c",
                                color: "#f4270b",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#f4270b",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  fontSize: "10px"
                                }}
                              ></span>{" "}
                              FAILED
                            </button>
                          )
                        ) : (
                          "N/A"
                        )}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "5%" }}>
                        {item?.messageId ? item?.messageId : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell
                        onClick={() => {
                          setOpen(!open);
                          setIndexing(index);
                        }}
                        style={{
                          width: "10%",
                          position: "relative"
                          // justifyContent: "flex-end"
                        }}
                      >
                        {/* <button
            onClick={() => {
              setOpen(!open);
              setIndexing(index);
            }}
            className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
          >
            Action
          </button> */}
                        <svg
                          style={{ marginLeft: "30px" }}
                          onClick={() => {
                            setOpen(!open);
                            setIndexing(index);
                          }}
                          width="4"
                          height="16"
                          viewBox="0 0 4 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                            fill="#868FA0"
                          />
                        </svg>
                        {index === indexing && open ? (
                          <div className="absolute right-10 top-5 w-44 h-30 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-4 bg-white">
                            <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 20
                                }}
                                onClick={() => {
                                  setOpen(!open);
                                  setDownload(item);
                                  console.log(item);
                                  setStep(53);
                                }}
                              >
                                <Suspend width={10} />
                                <span className="text-black text-[12px]">
                                  Download Receipt
                                </span>
                              </div>
                              {!item?.dispense?.listtoken[0] && (
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: 20
                                  }}
                                  onClick={() => {
                                    setOpen(!open);
                                    dispatch(
                                      RegenerateToken({
                                        customerReference: item?.meterNo,
                                        discoShortName: item?.discoName,
                                        phone: item?.phone,
                                        amount: item?.transactionAmount
                                      })
                                    );
                                  }}
                                >
                                  <Activate width={10} />
                                  <span className="text-black text-[12px]">
                                    Regenerate Token
                                  </span>
                                </div>
                              )}

                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 20
                                }}
                                onClick={() => {
                                  setOpen(!open);
                                  // setStep(53);
                                  console.log(item?.dispense?.listtoken[0]);
                                  dispatch(
                                    ResendToken({
                                      // metertoken: item?.dispense?.listtoken[0],
                                      phoneNo: item?.phone,
                                      meterNo: item?.meterNo,
                                      dispenseId: item?.dispense?.id
                                    })
                                  );
                                  // setReload(true)
                                }}
                              >
                                <Edit />
                                <span className="text-black text-[12px]">
                                  Resend Token
                                </span>
                              </div>
                              {item?.status === "PENDING" && (
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: 20
                                  }}
                                  onClick={() => {
                                    setOpen(!open);
                                    // setStep(53);
                                    console.log(item?.dispense?.listtoken[0]);
                                    dispatch(
                                      Initiate({
                                        // metertoken: item?.dispense?.listtoken[0],
                                        id: item?.id
                                      })
                                    );
                                    // setReload(true)
                                  }}
                                >
                                  <Edit />
                                  <span className="text-red-500 text-[12px]">
                                    Initiate Refund
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
      {item?.paymentStatus === "successfull" ? (
        <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
          Successful
        </button>
      ) : (
        <button className="bg-failedbg h-[30px] w-[100%] rounded-full text-failedtext font-semibold text-[9px]">
          Failed
        </button>
      )}
    </StyledTableCell> */}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : overviewcommission ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
              sx={{ maxHeight: "60vh" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 700, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "5%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BUSINESS TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      COMMISSION TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      COMMISSION
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      COMMISSION CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ACTIONS
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.businessType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.commissions?.commissionType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.commissions?.commissionType === "PERCENTAGE"
                          ? `${item?.commissions?.fee}%`
                          : `₦${formatNumberWithCommas(
                              item?.commissions?.fee
                            )}`}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦{formatNumberWithCommas(item?.commissions?.capFee)}
                      </StyledTableCell>
                      <StyledTableCell
                        onClick={() => {
                          setOpen5(!open5);
                          setIndexing5(index);
                        }}
                        style={{ width: "10%", position: "relative" }}
                      >
                        {/* <button
                        onClick={() => {
                          setOpen5(!open5);
                          setIndexing5(index);
                        }}
                        className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                      >
                        Action
                      </button> */}
                        <svg
                          onClick={() => {
                            setOpen5(!open5);
                            setIndexing5(index);
                          }}
                          width="4"
                          height="16"
                          viewBox="0 0 4 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                            fill="#868FA0"
                          />
                        </svg>
                        {index === indexing5 && open5 ? (
                          <div
                            style={{ overflowY: "scroll" }}
                            className="absolute right-20 top-0 w-36 h-30 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                          >
                            <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: 20
                                }}
                                onClick={() => {
                                  setStep(33);
                                  setNaming(item);
                                  setOpen5(!open5);
                                }}
                              >
                                <Activate />
                                <span
                                  className="text-black flex-row gap-1 items-center"
                                  onClick={() => {
                                    setStep(33);
                                    setNaming(item);
                                    setOpen5(!open5);
                                  }}
                                >
                                  Set Commission
                                </span>
                              </div>
                              {/* <span className="text-black">Suspend</span>
                          <span className="text-black">Deactivate</span>
                          <span className="text-black">Update</span>
                          <span className="text-black">Fund Wallet</span>
                          <span className="text-black">Deplete Wallet</span> */}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {/* <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/agents/${item?.user?.id}`)}
                    >
                      View
                    </span> */}
                      </StyledTableCell>

                      {/* <StyledTableCell style={{ width: "10%" }}>
                    {item?.paymentStatus === "successfull" ? (
                      <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                        Successful
                      </button>
                    ) : (
                      <button className="bg-failedbg h-[30px] w-[100%] rounded-full text-failedtext font-semibold text-[9px]">
                        Failed
                      </button>
                    )}
                  </StyledTableCell> */}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : virt ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DISCO
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow
                // onClick={() => {
                //   setStep(11);
                //   setUserIds(item?.id);
                // }}
                >
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "10%" }}
                  >
                    {1}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {data?.bankAccount}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {data?.bankName}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : metering ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
              sx={{ maxHeight: "60vh" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 700, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "5%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      CUSTOMER NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ACCOUNT NUMBER
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      METER NUMBER
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TRANSACTION AMOUNT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMMISSION TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMMISSION
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMMISSION CAP
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      RRN
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      REFERENCE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      USER TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMMISSION TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMMISSION FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK COMMISSION CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMMISSION TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMMISSION FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      FEE DUE TO SYSTEM
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.customerName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.accountNumber}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterNo}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.transactionAmount}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionFee}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionCapFee}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.rrn}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.reference}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.userType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionFee}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionFeeCap}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionFee}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.feeDueToSystem}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                    {item?.paymentStatus === "successfull" ? (
                      <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                        Successful
                      </button>
                    ) : (
                      <button className="bg-failedbg h-[30px] w-[100%] rounded-full text-failedtext font-semibold text-[9px]">
                        Failed
                      </button>
                    )}
                  </StyledTableCell> */}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : meterss ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
              sx={{ maxHeight: "60vh" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 700, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "5%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center"
                        }}
                      >
                        ACCT. NAME{" "}
                        <img
                          onClick={() => handleSort("name")}
                          style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer"
                          }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVUlEQVR4nO3ar0tdYRjA8Y/bZIgMBgNhsGAwWAyGGZYsSyaTaW1tzeY/YLPZbCbTksliWphhwWIwLAwGwkAQGWO6HRHeF24Y4rzn58P7hW+7cM833HPf8zyHQmGwbCQHzQdUyXUD5R3+jIT8xXsDYxVXIxHZa6wZCG/x6x8R2d9Y0XPe4PKOiOxPLOspS7i4R0T29rOv9YwF/PiPiOw5FvWEOXx/QET2DPNdR7zC1zEist8w21XEDE5qiMie4mXbEc/xpcaI7DFetBXxDEcNRGQ/p+9olCkcNhhRJT9huqmISey3EFElD/C07ojH2Gsxokp+xJO6Iiaw00FEldzFozpCtjqMqJLb40Zs9iCiSt5eS6FQaIhQP/atCLffUH+IYY4ooQ6NoY7xoR6sQj3qhho+hBoHhRrQhRqZhhpih1orhFr0hFq9hVqGhlpPh3phoFAo6Ac35fmpcy8GLsoAAAAASUVORK5CYII="
                          alt="sort"
                        ></img>
                      </div>
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      BANK NAME
                    </StyledTableCell> */}
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      DISCO NAME
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      ACCOUNT NUMBER
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center"
                        }}
                      >
                        BANK NAME{" "}
                        <img
                          onClick={() => handleSort("bank")}
                          style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer"
                          }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVUlEQVR4nO3ar0tdYRjA8Y/bZIgMBgNhsGAwWAyGGZYsSyaTaW1tzeY/YLPZbCbTksliWphhwWIwLAwGwkAQGWO6HRHeF24Y4rzn58P7hW+7cM833HPf8zyHQmGwbCQHzQdUyXUD5R3+jIT8xXsDYxVXIxHZa6wZCG/x6x8R2d9Y0XPe4PKOiOxPLOspS7i4R0T29rOv9YwF/PiPiOw5FvWEOXx/QET2DPNdR7zC1zEist8w21XEDE5qiMie4mXbEc/xpcaI7DFetBXxDEcNRGQ/p+9olCkcNhhRJT9huqmISey3EFElD/C07ojH2Gsxokp+xJO6Iiaw00FEldzFozpCtjqMqJLb40Zs9iCiSt5eS6FQaIhQP/atCLffUH+IYY4ooQ6NoY7xoR6sQj3qhho+hBoHhRrQhRqZhhpih1orhFr0hFq9hVqGhlpPh3phoFAo6Ac35fmpcy8GLsoAAAAASUVORK5CYII="
                          alt="sort"
                        ></img>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      METER NUMBER
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      TRANSACTION AMOUNT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMMISSION TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMMISSION
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMMISSION CAP
                    </StyledTableCell> */}
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      RRN
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      REFERENCE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ADDRESS
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      BANK COMMISSION CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMMISSION TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMMISSION FEE
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      BAND
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ACTIONS
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.virtualAccount?.name}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankName}
                      </StyledTableCell> */}
                      {/* <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoName}
                      </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.virtualAccount?.virtualAccountNumber}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.virtualAccount?.bankName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoAccount}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                        {item?.transactionAmount}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionFee}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionCapFee}
                      </StyledTableCell> */}
                      {/* <StyledTableCell style={{ width: "10%" }}>
                        {item?.rrn}
                      </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.customerReference}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.type}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.address}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                        {item?.bankCommissionFeeCap}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionFee}
                      </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.band}
                      </StyledTableCell>
                      <StyledTableCell
                        onClick={() => {
                          setOpen(!open);
                          setIndexing(index);
                        }}
                        style={{
                          width: "10%",
                          position: "relative"
                          // justifyContent: "flex-end"
                        }}
                      >
                        {/* <button
            onClick={() => {
              setOpen(!open);
              setIndexing(index);
            }}
            className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
          >
            Action
          </button> */}
                        <svg
                          style={{ marginLeft: "30px" }}
                          onClick={() => {
                            setOpen12(!open12);
                            setIndexing12(index);
                          }}
                          width="4"
                          height="16"
                          viewBox="0 0 4 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                            fill="#868FA0"
                          />
                        </svg>
                        {index === indexing12 && open12 ? (
                          <div className="absolute right-20 top-5 w-46 h-10 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 bg-white">
                            <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 20
                                }}
                                onClick={() => {
                                  setOpen12(!open12);
                                  // setDownload(item);
                                  console.log(item);
                                  // setStep(53);
                                }}
                              >
                                <Suspend width={10} />
                                <span className="text-black">
                                  Send Payment Reminder
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : manager ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ADDRESS
                  </StyledTableCell>
                  {/* <StyledTableCell style={{ width: "10%" }}>
                    COMMISSION
                  </StyledTableCell> */}
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE ADDED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow
                  // onClick={() => {
                  //   setStep(11);
                  //   setUserIds(item?.id);
                  // }}
                  >
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.firstName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.address}
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      {"N/A"}
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setOpen4(!open4);
                        setIndexing4(index);
                      }}
                      style={{ width: "5%", position: "relative" }}
                    >
                      {/* <button
                      onClick={() => {
                        setOpen4(!open3);
                        setIndexing4(index); 
                      }}
                      className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                    >
                      Action
                    </button> */}
                      <svg
                        onClick={() => {
                          setOpen4(!open4);
                          setIndexing4(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing4 && open4 ? (
                        <div
                          style={{ overflowY: "scroll" }}
                          className="absolute right-20 top-0 w-36 h-30 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            {/* <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 20
                            }}
                          >
                            <View />
                            <span
                              className="text-black flex-row gap-1 items-center"
                              onClick={() => {
                                navigate(`/manager/${item?.id}`);
                                setOpen4(!open4);
                              }}
                            >
                              View
                            </span>
                          </div> */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setStep(11);
                                setUserIds(item?.id);
                              }}
                            >
                              <Edit />
                              <span
                                onClick={() => {
                                  setStep(11);
                                  setUserIds(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Edit Comm.
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("blocked");
                                setStep(48);
                                setOpen4(!open4);
                                setuserIding(item?.id);
                              }}
                            >
                              <Suspend />
                              <span
                                onClick={() => {
                                  setaction("blocked");
                                  setStep(48);
                                  setOpen4(!open4);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Blocked
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("restricted");
                                setStep(48);
                                setOpen4(!open4);
                                setuserIding(item?.id);
                              }}
                            >
                              <Suspend />
                              <span
                                onClick={() => {
                                  setaction("restricted");
                                  setStep(48);
                                  setOpen4(!open4);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Restricted
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("active");
                                setStep(48);
                                setOpen4(!open4);
                                setuserIding(item?.id);
                              }}
                            >
                              <Activate />
                              <span
                                onClick={() => {
                                  setaction("active");
                                  setStep(48);
                                  setOpen4(!open4);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Activate
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setuserIding(item?.id);
                                setStep(45);
                                setOpen4(!open4);
                              }}
                            >
                              <Update />
                              <span
                                onClick={() => {
                                  setuserIding(item?.id);
                                  setStep(45);
                                  setOpen4(!open4);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Update
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {/* <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/manager/${item?.id}`)}
                    >
                      View
                    </span> */}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : users ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    USER NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ADDRESS
                  </StyledTableCell>
                  {/* <StyledTableCell style={{ width: "10%" }}>
                    COMMISSION
                  </StyledTableCell> */}
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE ADDED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    TOTAL TRANSACTION COUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    ACTION
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow
                  // onClick={() => {
                  //   setStep(11);
                  //   setUserIds(item?.id);
                  // }}
                  >
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.name || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.email || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.address || "N/A"}
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      N/A
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      N/A
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "5%" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/user/${item?.id}`)}
                    >
                      View
                    </span>
                  </StyledTableCell> */}
                    <StyledTableCell
                      onClick={() => {
                        setOpen10(!open10);
                        setIndexing10(index);
                      }}
                      style={{ width: "20%", position: "relative" }}
                    >
                      {/* <button
                      onClick={() => {
                        setOpen3(!open3);
                        setIndexing3(index);
                      }}
                      className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                    >
                      Action
                    </button> */}
                      <svg
                        style={{ marginLeft: "20px" }}
                        onClick={() => {
                          setOpen10(!open10);
                          setIndexing10(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing10 && open10 ? (
                        <div
                          style={{ overflowY: "scroll" }}
                          className="absolute right-20 top-0 w-36 h-30 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 z-20"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                navigate(`/user/${item?.id}`);
                                setOpen10(!open10);
                              }}
                            >
                              <View />
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "#000000"
                                }}
                                className="text-black"
                                onClick={() => {
                                  navigate(`/user/${item?.id}`);
                                  setOpen10(!open10);
                                }}
                              >
                                View
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("blocked");
                                setStep(48);
                                setOpen10(!open10);
                                setuserIding(item?.id);
                              }}
                            >
                              {" "}
                              <Suspend />{" "}
                              <span
                                onClick={() => {
                                  setaction("blocked");
                                  setStep(48);
                                  setOpen10(!open10);
                                  setuserIding(item?.id);
                                }}
                                className="text-black"
                              >
                                Blocked
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("restricted");
                                setStep(48);
                                setOpen10(!open10);
                                setuserIding(item?.id);
                              }}
                            >
                              <Suspend />{" "}
                              <span
                                onClick={() => {
                                  setaction("restricted");
                                  setStep(48);
                                  setOpen10(!open10);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Restricted
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setaction("active");
                                setStep(48);
                                setOpen10(!open10);
                                setuserIding(item?.id);
                              }}
                            >
                              {" "}
                              <Activate />{" "}
                              <span
                                onClick={() => {
                                  setaction("active");
                                  setStep(48);
                                  setOpen10(!open10);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Activate
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                              onClick={() => {
                                setuserIding(item?.id);
                                setStep(45);
                                setOpen10(!open10);
                              }}
                            >
                              {" "}
                              <Update />{" "}
                              <span
                                onClick={() => {
                                  setuserIding(item?.id);
                                  setStep(45);
                                  setOpen10(!open10);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Update
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : allmetering ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>ID</StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DATE CREATED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DISCO
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    CUS. NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    CUS. PHONE NO.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    METER NO.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    BANK NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    BANK ACCT NO.
                  </StyledTableCell>
                  {/* <StyledTableCell style={{ width: "10%" }}>
                    COMMISSION
                  </StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow
                  // onClick={() => {
                  //   setStep(11);
                  //   setUserIds(item?.id);
                  // }}
                  >
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.id || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      <Moment format="DD-MM-YYYY">
                        {item?.createdAt || "N/A"}
                      </Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.disco?.shortName || "N/A"}
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      N/A
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.accountName || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.phoneNo || "N/A"}
                    </StyledTableCell>

                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.address || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.customerReference || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.virtualAccount?.bankName || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.virtualAccount?.virtualAccountNumber || "N/A"}
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "5%" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/user/${item?.id}`)}
                    >
                      View
                    </span>
                  </StyledTableCell> */}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : discotransactions ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
              sx={{ maxHeight: "60vh" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 700, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "5%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      REFERENCE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      USER TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      CUSTOMER NAME
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                    BANK NAME
                  </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO CUS NO.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      METER NO.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ACCOUNT NUMBER
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TRANSACTION AMOUNT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMMISSION
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      EARNING PARTNER FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TOKEN
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TOKEN DELIVERY STATUS
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ACTIONS
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        <Moment>{item?.dispense?.updatedDate}</Moment>
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.reference}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.userType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.customerName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.phone ? item?.phone : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterNo}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.accountNumber}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦{formatNumberWithCommas(item?.transactionAmount)}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦
                        {formatNumberWithCommas(item?.discoSystemCommissionFee)}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoAmount
                          ? `₦${formatNumberWithCommas(
                              item?.item?.discoAmount
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.earningPartnerFee
                          ? `₦${formatNumberWithCommas(
                              item?.earningPartnerFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell
                        ref={inputRef3}
                        onClick={() =>
                          handleCopy3(item?.dispense?.listtoken[0])
                        }
                        style={{ width: "10%" }}
                      >
                        {item?.dispense?.listtoken[0] || "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.smsdeliveryStatus
                          ? item?.smsdeliveryStatus
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell
                        style={{
                          width: "10%",
                          position: "relative"
                        }}
                        onClick={() => {
                          setOpen(!open);
                          setIndexing(index);
                        }}
                      >
                        {/* <button
                        onClick={() => {
                          setOpen(!open);
                          setIndexing(index);
                        }}
                        className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                      >
                        Action
                      </button> */}
                        <svg
                          style={{ marginLeft: "30px" }}
                          onClick={() => {
                            setOpen(!open);
                            setIndexing(index);
                          }}
                          width="4"
                          height="16"
                          viewBox="0 0 4 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                            fill="#868FA0"
                          />
                        </svg>
                        {index === indexing && open ? (
                          <div className="absolute right-10 top-5 w-36 h-20 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2">
                            <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: 20
                                }}
                              >
                                <Suspend width={10} />
                                <span
                                  className="text-black"
                                  onClick={() => {
                                    setOpen(!open);
                                    setDownload(item);
                                    console.log(item);
                                    setStep(53);
                                  }}
                                  //  onClick={() => {
                                  //    setOpen(!open);
                                  //    setDownload(item);
                                  //    console.log(item);
                                  //    setStep(53);
                                  //  }}
                                >
                                  Download Receipt
                                </span>
                              </div>
                              {/* <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Activate width={10} />
                              <span className="text-black">
                                Regenerate Token
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Edit />
                              <span className="text-black">Resend Token</span>
                            </div> */}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                    {item?.paymentStatus === "successfull" ? (
                      <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                        Successful
                      </button>
                    ) : (
                      <button className="bg-failedbg h-[30px] w-[100%] rounded-full text-failedtext font-semibold text-[9px]">
                        Failed
                      </button>
                    )}
                  </StyledTableCell> */}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : customer ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PARTNER NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "30%" }}>
                    EMAIL
                  </StyledTableCell>
                  {/* <StyledTableCell style={{ width: "15%" }}>
                  ADDRESS
                </StyledTableCell> */}
                  {/* <StyledTableCell style={{ width: "10%" }}>
                  COMMISSION
                </StyledTableCell> */}
                  <StyledTableCell style={{ width: "20%" }}>
                    DATE ADDED
                  </StyledTableCell>
                  {/* <StyledTableCell style={{ width: "20%" }}>
                  TOTAL AMOUNT RECEIVED
                </StyledTableCell> */}
                  <StyledTableCell style={{ width: "20%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow
                  // onClick={() => {
                  //   setStep(11);
                  //   setUserIds(item?.id);
                  // }}
                  >
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.firstName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      {item?.email}
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "15%" }}>
                    {item?.address}
                  </StyledTableCell> */}
                    {/* <StyledTableCell style={{ width: "10%" }}></StyledTableCell> */}
                    <StyledTableCell style={{ width: "20%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "20%" }}>
                 
                  </StyledTableCell> */}
                    <StyledTableCell
                      onClick={() => {
                        setOpen10(!open10);
                        setIndexing10(index);
                      }}
                      style={{ width: "20%", position: "relative" }}
                    >
                      {/* <button
                      onClick={() => {
                        setOpen3(!open3);
                        setIndexing3(index);
                      }}
                      className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                    >
                      Action
                    </button> */}
                      <svg
                        style={{ marginLeft: "20px" }}
                        onClick={() => {
                          setOpen10(!open10);
                          setIndexing10(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing10 && open10 ? (
                        <div
                          style={{ overflowY: "scroll", marginRight: "130px" }}
                          className="absolute right-20 top-0 w-36 h-30 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            {/* <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#000000"
                            }}
                            className="text-black"
                            onClick={() => {
                              navigate(`/customer/${item?.id}`);
                              setOpen10(!open10);
                            }}
                          >
                            View
                          </span> */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Update />{" "}
                              <span
                                onClick={() => {
                                  setaction("blocked");
                                  setStep(48);
                                  setOpen10(!open10);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Blocked
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Suspend />
                              <span
                                onClick={() => {
                                  setaction("restricted");
                                  setStep(48);
                                  setOpen10(!open10);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Restricted
                              </span>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Activate />
                              <span
                                onClick={() => {
                                  setaction("active");
                                  setStep(48);
                                  setOpen10(!open10);
                                  setuserIding(item?.id);
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                Activate
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Update />
                              <span
                                onClick={() => {
                                  setuserIding(item?.id);
                                  setStep(45);
                                  setOpen10(!open10);
                                }}
                                className="text-black"
                              >
                                Update
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {/* <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/earning/${item?.id}`)}
                    >
                      View
                    </span> */}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : agentvirtualmeter ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DISCO
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ACCT.NO
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    BANK NAME
                  </StyledTableCell>
                  {/* <StyledTableCell style={{ width: "10%" }}>
                  COMMISSION
                </StyledTableCell> */}
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE ADDED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    CUS. REF.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow
                  // onClick={() => {
                  //   setStep(11);
                  //   setUserIds(item?.id);
                  // }}
                  >
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "5%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.accountName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.disco?.shortName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.address}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.virtualAccount?.virtualAccountNumber}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.virtualAccount?.bankName}
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                    {"N/A"}
                  </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.createdAt}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.customerReference}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setOpen4(!open4);
                        setIndexing4(index);
                      }}
                      style={{ width: "5%", position: "relative" }}
                    >
                      {/* <button
                    onClick={() => {
                      setOpen4(!open3);
                      setIndexing4(index); 
                    }}
                    className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                  >
                    Action
                  </button> */}
                      <svg
                        onClick={() => {
                          setOpen4(!open4);
                          setIndexing4(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing4 && open4 ? (
                        <div
                          style={{ overflowY: "scroll" }}
                          className="absolute right-20 top-0 w-36 h-30 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            {/* <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: 20
                          }}
                        >
                          <View />
                          <span
                            className="text-black flex-row gap-1 items-center"
                            onClick={() => {
                              navigate(`/manager/${item?.id}`);
                              setOpen4(!open4);
                            }}
                          >
                            View
                          </span>
                        </div> */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Edit />
                              <span
                                onClick={() => {
                                  // setStep(11);
                                  // setUserIds(item?.id);
                                  navigate(
                                    `/virtualmeter/${item?.customerReference}`
                                  );
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                View
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {/* <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000"
                    }}
                    onClick={() => navigate(`/manager/${item?.id}`)}
                  >
                    View
                  </span> */}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : virtualagenting ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    BANK NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    BANK ACCOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    BANK
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ADDRESS
                  </StyledTableCell>
                  {/* <StyledTableCell style={{ width: "10%" }}>
                COMMISSION
              </StyledTableCell> */}
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE ADDED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    CUS. REF.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow
                  // onClick={() => {
                  //   setStep(11);
                  //   setUserIds(item?.id);
                  // }}
                  >
                    <StyledTableCell
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.virtualAccount?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.virtualAccount?.virtualAccountNumber}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.virtualAccount?.bankName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.address}
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                  {"N/A"}
                </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.createdAt}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.customerReference}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setOpen4(!open4);
                        setIndexing4(index);
                      }}
                      style={{ width: "5%", position: "relative" }}
                    >
                      {/* <button
                  onClick={() => {
                    setOpen4(!open3);
                    setIndexing4(index); 
                  }}
                  className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                >
                  Action
                </button> */}
                      <svg
                        onClick={() => {
                          setOpen4(!open4);
                          setIndexing4(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing4 && open4 ? (
                        <div
                          style={{ overflowY: "scroll" }}
                          className="absolute right-20 top-0 w-36 h-30 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            {/* <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: 20
                        }}
                      >
                        <View />
                        <span
                          className="text-black flex-row gap-1 items-center"
                          onClick={() => {
                            navigate(`/manager/${item?.id}`);
                            setOpen4(!open4);
                          }}
                        >
                          View
                        </span>
                      </div> */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <Edit />
                              <span
                                onClick={() => {
                                  // setStep(11);
                                  // setUserIds(item?.id);
                                  navigate(
                                    `/virtualmeter/${item?.customerReference}`
                                  );
                                }}
                                className="text-black flex-row gap-1 items-center"
                              >
                                View
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {/* <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000000"
                  }}
                  onClick={() => navigate(`/manager/${item?.id}`)}
                >
                  View
                </span> */}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : bankaccountsdetails ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "25%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    BANK NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    VIRTUAL ACCOUNT NUMBER
                  </StyledTableCell>
                  {/* <StyledTableCell style={{ width: "10%" }}>
                DATE ADDED
              </StyledTableCell>
              <StyledTableCell style={{ width: "10%", textAlign: "center" }}>
                ACTIONS
              </StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "20%" }}>
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.bankName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.virtualAccountNumber}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : customertransfer ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
              sx={{ maxHeight: "60vh" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 700, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "5%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      REF.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      USER TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      CUS. NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO CUS N0.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      METER NO.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK ACCT NO
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TRANX AMOUNT.
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      DISTRICT COMM. TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DSTM COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DSTM COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DSTM CAP FEE
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM. TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO COMM. CAP FEE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TOKEN
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TOKEN DS.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ACTIONS
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        <Moment format="ddd MMM DD YYYY HH:mm:ss">
                          {item?.dispense?.updatedDate}
                        </Moment>
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.reference}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.userType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.customerName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.phone ? item?.phone : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterNo}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.accountNumber}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦{formatNumberWithCommas(item?.transactionAmount)}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                        {item?.managerCommissionType
                          ? `₦${item?.managerCommissionType}`
                          : "not applicable"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.managerCommissionType === "PERCENTAGE" &&
                        item?.managerCommissionPercentageTypeFeeValue
                          ? `${
                              item?.managerCommissionPercentageTypeFeeValue || 0
                            }%`
                          : item?.managerCommissionType !== "PERCENTAGE"
                          ? `₦${item?.districtManagerFee || 0}`
                          : "not applicable"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.dispense?.systemTransactions?.districtManagerFee
                          ? `₦${formatNumberWithCommas(
                              item?.dispense?.systemTransactions
                                ?.districtManagerFee
                            )}`
                          : "not applicable"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        not applicable
                      </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionType === "PERCENTAGE" &&
                        item?.discoSystemCommissionFeePercentage
                          ? `${item?.discoSystemCommissionFeePercentage}%`
                          : item?.discoSystemCommissionType !== "PERCENTAGE"
                          ? `₦${
                              formatNumberWithCommas(
                                item?.discoSystemCommissionFee
                              ) || 0
                            }`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionFee
                          ? `₦${formatNumberWithCommas(
                              item?.discoSystemCommissionFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoSystemCommissionCapFee
                          ? `₦${formatNumberWithCommas(
                              item?.discoSystemCommissionCapFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell
                        ref={inputRef3}
                        onClick={() =>
                          handleCopy3(item?.dispense?.listtoken[0])
                        }
                        style={{ width: "10%" }}
                      >
                        {item?.dispense?.listtoken[0] || "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.smsdeliveryStatus ? (
                          item?.smsdeliveryStatus === "SENT" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "80%",
                                height: "20px",
                                background: "#8a8a7d",
                                color: "#e6df19",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#e5e999",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              SENT
                            </button>
                          ) : item?.smsdeliveryStatus === "DELIVERED" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "90px",
                                height: "20px",
                                background: "#ECFDF3",
                                color: "#027A48",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#027A48",
                                  fontSize: "10px",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              DELIVERED
                            </button>
                          ) : (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "80%",
                                height: "20px",
                                background: "#ed7d6c",
                                color: "#f4270b",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#f4270b",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              FAILED
                            </button>
                          )
                        ) : (
                          "N/A"
                        )}
                      </StyledTableCell>
                      <StyledTableCell
                        onClick={() => {
                          setOpen(!open);
                          setIndexing(index);
                        }}
                        style={{
                          width: "10%",
                          position: "relative"
                          // justifyContent: "flex-end"
                        }}
                      >
                        <svg
                          style={{ marginLeft: "30px" }}
                          onClick={() => {
                            setOpen(!open);
                            setIndexing(index);
                          }}
                          width="4"
                          height="16"
                          viewBox="0 0 4 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                            fill="#868FA0"
                          />
                        </svg>
                        {index === indexing && open ? (
                          <div className="absolute right-10 top-5 w-36 h-10 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 bg-white">
                            <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 20
                                }}
                              >
                                <Suspend width={10} />
                                <span
                                  className="text-black"
                                  onClick={() => {
                                    setOpen(!open);
                                    setDownload(item);
                                    console.log(item);
                                    setStep(53);
                                  }}
                                >
                                  Download Receipt
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : manageragents ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    EMAIL
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    PHONE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    NIN
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    STATUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {item?.name}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "15%" }}
                    >
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "10%" }}
                    >
                      {item?.phone}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "20%" }}
                    >
                      {item?.nin}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "10%" }}
                    >
                      {item?.address}
                      {/* <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment> */}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.status === "active" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                          className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          ACTIVE
                        </button>
                      ) : item?.status === "REJECTED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          DECLINED
                        </button>
                      ) : (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          DEACTIVATED
                        </button>
                      )}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setOpen2(!open2);
                        setIndexing2(index);
                      }}
                      style={{ width: "10%", position: "relative" }}
                    >
                      {/* <button
                      onClick={() => {
                        setOpen2(!open2);
                        setIndexing2(index);
                      }}
                      className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                    >
                      Action
                    </button> */}
                      <svg
                        onClick={() => {
                          setOpen2(!open2);
                          setIndexing2(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing2 && open2 ? (
                        <div
                          style={{ overflowY: "scroll" }}
                          className="absolute right-40 top-0 w-36 h-15 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <View />
                              <span
                                className="text-black flex-row gap-1 items-center"
                                onClick={() => {
                                  navigate(`/manageragents/${item?.id}`);
                                  setOpen2(!open2);
                                }}
                              >
                                View
                              </span>
                            </div>
                            {/* <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 20
                            }}
                          >
                            <Suspend />
                            <span
                              onClick={() => {
                                setaction("blocked");
                                setStep(48);
                                setOpen2(!open2);
                                setuserIding(item?.user?.id);
                              }}
                              className="text-black flex-row gap-1 items-center"
                            >
                              Blocked
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 20
                            }}
                          >
                            <Suspend />
                            <span
                              onClick={() => {
                                setaction("restricted");
                                setStep(48);
                                setOpen2(!open2);
                                setuserIding(item?.user?.id);
                              }}
                              className="text-black flex-row gap-1 items-center"
                            >
                              Restricted
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 20
                            }}
                          >
                            <Activate />
                            <span
                              onClick={() => {
                                setaction("active");
                                setStep(48);
                                setOpen2(!open2);
                                setuserIding(item?.user?.id);
                              }}
                              className="text-black flex-row gap-1 items-center"
                            >
                              Activate
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 20
                            }}
                          >
                            <Update />
                            <span
                              onClick={() => {
                                setuserIding(item?.user?.id);
                                setStep(45);
                                setOpen2(!open2);
                              }}
                              className="text-black flex-row gap-1 items-center"
                            >
                              Update
                            </span>
                          </div> */}
                            {/* <span
                            className="text-black"
                            onClick={() => {
                              setStep(11);
                              setUserIds(item?.id);
                              setOpen2(!open2);
                            }}
                          >
                            Set Commission
                          </span> */}

                            {/* <span className="text-black">Fund Wallet</span>
                          <span className="text-black">Deplete Wallet</span> */}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : withdraw ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    BANK NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    ACCOUNT NO.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    BANK CODE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    STATUS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      className="text-dob"
                      style={{ width: "20%" }}
                    >
                      {item?.bankName}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "20%" }}
                    >
                      {item?.accountNumber}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "15%" }}
                    >
                      {item?.bankCode}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "20%" }}
                    >
                      {item?.amount
                        ? `₦${formatNumberWithCommas(item?.amount)}`
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.status === "PENDING" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          PENDING
                        </button>
                      ) : item?.status === "DECLINED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          DECLINED
                        </button>
                      ) : item?.status === "FAILED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          FAILED
                        </button>
                      ) : (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                          className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          ACTIVE
                        </button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : withdrawpending ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    BANK NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    ACCOUNT NO.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    BANK CODE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    STATUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ACTION
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      className="text-dob"
                      style={{ width: "10%" }}
                    >
                      {currentPage * 10 + index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      className="text-dob"
                      style={{ width: "20%" }}
                    >
                      {item?.bankName}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "20%" }}
                    >
                      {item?.accountNumber}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "15%" }}
                    >
                      {item?.bankCode}
                    </StyledTableCell>
                    <StyledTableCell
                      // onClick={() => {
                      //   setStep(11);
                      //   setUserIds(item?.id);
                      // }}
                      style={{ width: "20%" }}
                    >
                      {item?.amount
                        ? `₦${formatNumberWithCommas(item?.amount)}`
                        : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.status === "PENDING" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                        >
                          PENDING
                        </button>
                      ) : item?.status === "DECLINED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          DECLINED
                        </button>
                      ) : item?.status === "FAILED" ? (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                          className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                        >
                          FAILED
                        </button>
                      ) : (
                        <button
                          // onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                          className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                        >
                          ACTIVE
                        </button>
                      )}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => {
                        setOpen2(!open2);
                        setIndexing2(index);
                      }}
                      style={{ width: "15%", position: "relative" }}
                    >
                      {/* <button
                      onClick={() => {
                        setOpen2(!open2);
                        setIndexing2(index);
                      }}
                      className="bg-white h-[30px] w-[100%] rounded-full text-black font-semibold text-[9px]"
                    >
                      Action
                    </button> */}
                      <svg
                        onClick={() => {
                          setOpen15(!open15);
                          setIndexing15(index);
                        }}
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                          fill="#868FA0"
                        />
                        <path
                          d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                          fill="#868FA0"
                        />
                      </svg>
                      {index === indexing15 && open15 ? (
                        <div
                          style={{ overflowY: "scroll" }}
                          className="absolute right-40 top-0 w-36 h-15 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2"
                        >
                          <div className="flex flex-col gap-2 text-blue-600 items-start cursor-pointer">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: 20
                              }}
                            >
                              <View />
                              <span
                                className="text-black flex-row gap-1 items-center"
                                onClick={() => {
                                  setwithdrawaction(item);
                                  setStep(79);
                                  // navigate(`/manageragents/${item?.id}`);
                                  setOpen15(!open15);
                                }}
                              >
                                Approve/Decline
                              </span>
                            </div>
                            {/* <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 20
                            }}
                          >
                            <Suspend />
                            <span
                              onClick={() => {
                                setaction("blocked");
                                setStep(48);
                                setOpen2(!open2);
                                setuserIding(item?.user?.id);
                              }}
                              className="text-black flex-row gap-1 items-center"
                            >
                              Blocked
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 20
                            }}
                          >
                            <Suspend />
                            <span
                              onClick={() => {
                                setaction("restricted");
                                setStep(48);
                                setOpen2(!open2);
                                setuserIding(item?.user?.id);
                              }}
                              className="text-black flex-row gap-1 items-center"
                            >
                              Restricted
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 20
                            }}
                          >
                            <Activate />
                            <span
                              onClick={() => {
                                setaction("active");
                                setStep(48);
                                setOpen2(!open2);
                                setuserIding(item?.user?.id);
                              }}
                              className="text-black flex-row gap-1 items-center"
                            >
                              Activate
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 20
                            }}
                          >
                            <Update />
                            <span
                              onClick={() => {
                                setuserIding(item?.user?.id);
                                setStep(45);
                                setOpen2(!open2);
                              }}
                              className="text-black flex-row gap-1 items-center"
                            >
                              Update
                            </span>
                          </div> */}
                            {/* <span
                            className="text-black"
                            onClick={() => {
                              setStep(11);
                              setUserIds(item?.id);
                              setOpen2(!open2);
                            }}
                          >
                            Set Commission
                          </span> */}

                            {/* <span className="text-black">Fund Wallet</span>
                          <span className="text-black">Deplete Wallet</span> */}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : agenttransfer ? (
          <ScrollableXContainer>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
              sx={{ maxHeight: "60vh" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 700, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "5%" }}>
                      S/N
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      REF.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      STATUS
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      USER TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      CUS. NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DISCO CUS N0.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      METER NO.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      BANK ACCT NO
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TRANX AMOUNT.
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      DISTRICT COMM. TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DSTM COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DSTM COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      DSTM CAP FEE
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM. TYPE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM.
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM. VALUE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      AGENT COMM. CAP FEE
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "10%" }}>
                      TOKEN
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      TOKEN DS.
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      ACTIONS
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "5%" }}>
                        {currentPage * 10 + index + 1}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        <Moment format="ddd MMM DD YYYY HH:mm:ss">
                          {item?.dispense?.updatedDate}
                        </Moment>
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.reference}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.status === "SUCCESSFUL" ? (
                          <button
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "90px",
                              height: "20px",
                              background: "#ECFDF3",
                              color: "#027A48",
                              gap: "6px",
                              borderRadius: "6px"
                            }}
                          >
                            <span
                              style={{
                                background: "#027A48",
                                fontSize: "10px",
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%"
                              }}
                            ></span>{" "}
                            SUCCESSFUL
                          </button>
                        ) : item?.status === "PENDING" ? (
                          <button
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "80%",
                              height: "20px",
                              background: "#8a8a7d",
                              color: "#e6df19",
                              gap: "6px",
                              borderRadius: "6px"
                            }}
                          >
                            <span
                              style={{
                                background: "#e5e999",
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%"
                              }}
                            ></span>{" "}
                            PENDING
                          </button>
                        ) : (
                          <button
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "80%",
                              height: "20px",
                              background: "#ed7d6c",
                              color: "#f4270b",
                              gap: "6px",
                              borderRadius: "6px"
                            }}
                          >
                            <span
                              style={{
                                background: "#f4270b",
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%"
                              }}
                            ></span>{" "}
                            FAILED
                          </button>
                        )}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.userType}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.customerName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.discoName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.phone ? item?.phone : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.meterNo}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.accountNumber}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        ₦{formatNumberWithCommas(item?.transactionAmount)}
                      </StyledTableCell>
                      {/* <StyledTableCell style={{ width: "10%" }}>
                        {item?.managerCommissionType
                          ? `₦${item?.managerCommissionType}`
                          : "not applicable"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.managerCommissionType === "PERCENTAGE" &&
                        item?.managerCommissionPercentageTypeFeeValue
                          ? `${
                              item?.managerCommissionPercentageTypeFeeValue || 0
                            }%`
                          : item?.managerCommissionType !== "PERCENTAGE"
                          ? `₦${item?.districtManagerFee || 0}`
                          : "not applicable"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.dispense?.systemTransactions?.districtManagerFee
                          ? `₦${formatNumberWithCommas(
                              item?.dispense?.systemTransactions
                                ?.districtManagerFee
                            )}`
                          : "not applicable"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        not applicable
                      </StyledTableCell> */}
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionType
                          ? item?.agentCommissionType
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionType === "PERCENTAGE" &&
                        item?.agentCommissionFee
                          ? `${item?.agentCommissionFee}%`
                          : item?.agentCommissionType === "FIXED"
                          ? `₦${formatNumberWithCommas(
                              item?.agentCommissionPercentageTypeFeeValue
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionPercentageTypeFeeValue
                          ? `₦${formatNumberWithCommas(
                              item?.agentCommissionPercentageTypeFeeValue
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.agentCommissionCapFee
                          ? `₦${formatNumberWithCommas(
                              item?.agentCommissionCapFee
                            )}`
                          : "N/A"}
                      </StyledTableCell>
                      {/* <StyledTableCell
                        ref={inputRef3}
                        onClick={() =>
                          handleCopy3(item?.dispense?.listtoken[0])
                        }
                        style={{ width: "10%" }}
                      >
                        {item?.dispense?.listtoken[0] || "N/A"}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "10%" }}>
                        {item?.smsdeliveryStatus ? (
                          item?.smsdeliveryStatus === "SENT" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "80%",
                                height: "20px",
                                background: "#8a8a7d",
                                color: "#e6df19",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#e5e999",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              SENT
                            </button>
                          ) : item?.smsdeliveryStatus === "DELIVERED" ? (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "90px",
                                height: "20px",
                                background: "#ECFDF3",
                                color: "#027A48",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#027A48",
                                  fontSize: "10px",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              DELIVERED
                            </button>
                          ) : (
                            <button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "80%",
                                height: "20px",
                                background: "#ed7d6c",
                                color: "#f4270b",
                                gap: "6px",
                                borderRadius: "6px"
                              }}
                            >
                              <span
                                style={{
                                  background: "#f4270b",
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%"
                                }}
                              ></span>{" "}
                              FAILED
                            </button>
                          )
                        ) : (
                          "N/A"
                        )}
                      </StyledTableCell> */}
                      <StyledTableCell
                        onClick={() => {
                          setOpen(!open);
                          setIndexing(index);
                        }}
                        style={{
                          width: "10%",
                          position: "relative"
                          // justifyContent: "flex-end"
                        }}
                      >
                        <svg
                          style={{ marginLeft: "30px" }}
                          onClick={() => {
                            setOpen(!open);
                            setIndexing(index);
                          }}
                          width="4"
                          height="16"
                          viewBox="0 0 4 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z"
                            fill="#868FA0"
                          />
                          <path
                            d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z"
                            fill="#868FA0"
                          />
                        </svg>
                        {index === indexing && open ? (
                          <div className="absolute right-10 top-5 w-36 h-10 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 bg-white">
                            <div className="flex flex-col gap-1 text-blue-600 items-start cursor-pointer">
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 20
                                }}
                              >
                                <Suspend width={10} />
                                <span
                                  className="text-black"
                                  onClick={() => {
                                    setOpen(!open);
                                    setDownload(item);
                                    console.log(item);
                                    setStep(53);
                                  }}
                                >
                                  Download Receipt
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ScrollableXContainer>
        ) : (
          ""
        )}
      </ThemeProvider>
    </div>
  );
};

const ScrollableXContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  white-space: nowrap; /* Ensure content is not wrapped and forces horizontal scrolling */
  &::-webkit-scrollbar {
    height: 12px; /* Adjust the height of the scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default Tables;
