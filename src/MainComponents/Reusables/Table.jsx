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
  bankaccountsdetails,
  customertransfer,
  manageragents
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
      backgroundColor: "#ffffff",
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

  const handleCopy3 = (item) => {
    const textToCopy = item; // Get the text to copy
    if (textToCopy) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast.success("Copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy address: ", err);
          toast.error("Failed to copy address.");
        });
    }
  };
  return (
    <div>
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
                <StyledTableCell className="text-dob" style={{ width: "15%" }}>
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
                <StyledTableCell style={{ width: "10%" }}>Male</StyledTableCell>
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
                <StyledTableCell className="text-dob" style={{ width: "15%" }}>
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
                <StyledTableCell style={{ width: "10%" }}>Male</StyledTableCell>
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
                <StyledTableCell className="text-dob" style={{ width: "15%" }}>
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
                <StyledTableCell style={{ width: "10%" }}>Male</StyledTableCell>
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
                  <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
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
                    DISCO CUS NO
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    METER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    BANK
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACC. N0
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    RECEIVED AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    TRANX AMOUNT.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    SERVICE CHARGE
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
                  <StyledTableCell style={{ width: "10%" }}>
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
                  </StyledTableCell>
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
                    DISCO AMOUNT
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
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "5%" }}>
                      {index + 1}
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
                      {/* {item?.customerName ? } */}
                      {item?.phone ? item?.phone : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.meterNo}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bankName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.accountNumber}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.inputAmount
                        ? `₦${item?.inputAmount}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ₦{item?.transactionAmount}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ₦{item?.systemCharge}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bankCommissionType
                        ? item?.bankCommissionType
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bankCommissionType === "PERCENTAGE" &&
                      item?.bankCommissionFeeValuePercentage
                        ? `${item?.bankCommissionFeeValuePercentage || 0}%`
                        : item?.bankCommissionType !== "PERCENTAGE" &&
                          item?.bankCommissionFee
                        ? `₦${item?.bankCommissionFee || 0}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bankCommissionFee
                        ? `₦${item?.bankCommissionFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bankCommissionFeeCap
                        ? `₦${item?.bankCommissionFeeCap}`
                        : "not applicable"}
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
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.agentCommissionType === "PERCENTAGE" &&
                      item?.agentCommissionPercentageTypeFeeValue
                        ? `${item?.agentCommissionPercentageTypeFeeValue || 0}%`
                        : item?.agentCommissionType !== "PERCENTAGE"
                        ? `₦${item?.agentCommissionFee || 0}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.agentCommissionFee
                        ? `₦${item?.agentCommissionFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.agentCommissionCapFee
                        ? `₦${item?.agentCommissionCapFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
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
                        ? `₦${item?.dispense?.systemTransactions?.districtManagerFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      not applicable
                    </StyledTableCell>
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
                      item?.discoSystemCommissionFeePercentage
                        ? `${item?.discoSystemCommissionFeePercentage}%`
                        : item?.discoSystemCommissionType !== "PERCENTAGE"
                        ? `₦${item?.discoSystemCommissionFee || 0}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.discoSystemCommissionFee
                        ? `₦${item?.discoSystemCommissionFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.discoSystemCommissionCapFee
                        ? `₦${item?.discoSystemCommissionCapFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      not applicable
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      not applicable
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.earningPartnerFee
                        ? `₦${item?.earningPartnerFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      not applicable
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ₦{item?.feeDueToSystem}
                    </StyledTableCell>
                    <StyledTableCell
                      ref={inputRef3}
                      onClick={() => handleCopy3(item?.dispense?.listtoken[0])}
                      style={{ width: "10%" }}
                    >
                      {item?.dispense?.listtoken[0] || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell
                      // ref={inputRef3}
                      // onClick={() => handleCopy3(item?.dispense?.listtoken[0])}
                      style={{ width: "10%" }}
                    >
                      {item?.smsdeliveryStatus
                        ? item?.smsdeliveryStatus
                        : "N/A"}
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
                        <div className="absolute right-10 top-5 w-36 h-20 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 bg-white">
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
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
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
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                            >
                              <Edit />
                              <span
                                onClick={() => {
                                  setOpen(!open);
                                  // setStep(53);
                                  console.log(item?.dispense?.listtoken[0]);
                                  // dispatch(
                                  //   ResendToken({
                                  //     metertoken: item?.dispense?.listtoken[0],
                                  //     phoneNo: item?.phone
                                  //   })
                                  // );
                                  // setReload(true)
                                }}
                                className="text-black"
                              >
                                Resend Token
                              </span>
                            </div>
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
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
                <StyledTableCell style={{ width: "10%", textAlign: "center" }}>
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
                    {index + 1}
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
                <StyledTableCell style={{ width: "20%" }}>S/N</StyledTableCell>
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
                <StyledTableCell style={{ width: "10%", textAlign: "center" }}>
                  ACTIONS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "20%" }}>
                    {index + 1}
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
                <StyledTableCell style={{ width: "20%" }}>USER</StyledTableCell>
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
                <StyledTableCell style={{ width: "10%" }}>GLO</StyledTableCell>
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
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
                  <StyledTableCell style={{ width: "10%" }}>1</StyledTableCell>
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  METER TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  ACCOUNT NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  ADDRESS
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>BANK</StyledTableCell>
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
                    {index + 1}
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
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
                    {index + 1}
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
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
                    {index + 1}
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
                  <StyledTableCell style={{ width: "7%" }}>S/N</StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    UNIT PAYMENT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    DEBT PAYMENT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    UNIT TYPE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    UNITS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    RECEIPT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    ACCOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    TARRIF
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    VENDOR ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    CASHIER NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    CUSTOMER. NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    DATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "7%" }}>
                    METER SERIAL
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "5%" }}>
                      {index + 1}
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
                    <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.customerName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {/* <Moment format="DD-MM-YYYY"> */}
                      {item?.paymentDate ? item?.paymentDate : 0}
                      {/* </Moment> */}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.meterSerial}
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
                  <StyledTableCell style={{ width: "8%" }}>S/N</StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    USER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    UNIT PAYMENT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    DEBT PAYMENT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    UNIT TYPE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "9%" }}>
                    RECEIPT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    ACCOUNT.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    VENDOR ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    CUSTOMER. NAME
                  </StyledTableCell>
                  {/* <StyledTableCell style={{ width: "8%" }}>
                    DATE
                  </StyledTableCell> */}
                  <StyledTableCell style={{ width: "9%" }}>
                    METER SERIAL
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "5%" }}>
                      {index + 1}
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
                      <Moment format="DD-MM-YYYY">{item?.paymentTime}</Moment>
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
                      {index + 1}
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
                <StyledTableCell style={{ width: "20%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>NAME</StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>DATE</StyledTableCell>
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>NAME</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  PHONE
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  MESSAGE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>DATE</StyledTableCell>
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
                    {index + 1}
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
                    style={{ width: "10%" }}
                  >
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>NAME</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  PHONE
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  PAYMENT TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
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
                    className="text-dob"
                    style={{ width: "10%" }}
                  >
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "10%" }}
                  >
                    {item?.agentName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.email}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.paymentMethod}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.amount}
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>NAME</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  PHONE
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  MESSAGE
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>DATE</StyledTableCell>
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
                    {index + 1}
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>NAME</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  PHONE
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  MESSAGE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>DATE</StyledTableCell>
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
                    {index + 1}
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
                      <div className="absolute right-10 top-5 w-36 h-16 bg-white rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2">
                        <div className="flex flex-col gap-2 text-blue-600 items-center cursor-pointer">
                          <span
                            onClick={() => Pay(item?.id)}
                            className="text-black flex-row gap-1 items-center"
                          >
                            <Activate /> Resolve
                          </span>
                          {/* <span className="text-black">Regenerate Token</span>
                            <span className="text-black">Resend Token</span> */}
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
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
                    {index + 1}
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
                <StyledTableCell style={{ width: "10%" }}>NAME</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  EMAIL
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>NIN</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  PHONE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  ADDRESS
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  MESSAGE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>DATE</StyledTableCell>
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
                    {index + 1}
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
                    style={{ width: "10%" }}
                    onClick={() => {
                      setStep(39);
                      setImages(item?.addressUrl);
                      console.log(item?.addressUrl);
                    }}
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>NAME</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  PHONE
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  MESSAGE
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>DATE</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  STATUS
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
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "10%" }}
                  >
                    {item?.user?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.email}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
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
                  <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
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
                    DISCO CUS NO
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    METER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    BANK
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACC. N0
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    RECEIVED AMOUNT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    TRANX AMOUNT.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    SERVICE CHARGE
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
                  <StyledTableCell style={{ width: "10%" }}>
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
                  </StyledTableCell>
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
                    DISCO AMOUNT
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
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "5%" }}>
                      {index + 1}
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
                      {/* {item?.customerName ? } */}
                      {item?.phone ? item?.phone : "N/A"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.meterNo}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bankName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.accountNumber}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.inputAmount
                        ? `₦${item?.inputAmount}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ₦{item?.transactionAmount}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ₦{item?.systemCharge}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bankCommissionType
                        ? item?.bankCommissionType
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bankCommissionType === "PERCENTAGE" &&
                      item?.bankCommissionFeeValuePercentage
                        ? `${item?.bankCommissionFeeValuePercentage || 0}%`
                        : item?.bankCommissionType !== "PERCENTAGE" &&
                          item?.bankCommissionFee
                        ? `₦${item?.bankCommissionFee || 0}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bankCommissionFee
                        ? `₦${item?.bankCommissionFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.bankCommissionFeeCap
                        ? `₦${item?.bankCommissionFeeCap}`
                        : "not applicable"}
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
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.agentCommissionType === "PERCENTAGE" &&
                      item?.agentCommissionPercentageTypeFeeValue
                        ? `${item?.agentCommissionPercentageTypeFeeValue || 0}%`
                        : item?.agentCommissionType !== "PERCENTAGE"
                        ? `₦${item?.agentCommissionFee || 0}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.agentCommissionFee
                        ? `₦${item?.agentCommissionFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.agentCommissionCapFee
                        ? `₦${item?.agentCommissionCapFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
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
                        ? `₦${item?.dispense?.systemTransactions?.districtManagerFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      not applicable
                    </StyledTableCell>
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
                      item?.discoSystemCommissionFeePercentage
                        ? `${item?.discoSystemCommissionFeePercentage}%`
                        : item?.discoSystemCommissionType !== "PERCENTAGE"
                        ? `₦${item?.discoSystemCommissionFee || 0}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.discoSystemCommissionFee
                        ? `₦${item?.discoSystemCommissionFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.discoSystemCommissionCapFee
                        ? `₦${item?.discoSystemCommissionCapFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      not applicable
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      not applicable
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.earningPartnerFee
                        ? `₦${item?.earningPartnerFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      not applicable
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ₦{item?.feeDueToSystem}
                    </StyledTableCell>
                    <StyledTableCell
                      ref={inputRef3}
                      onClick={() => handleCopy3(item?.dispense?.listtoken[0])}
                      style={{ width: "10%" }}
                    >
                      {item?.dispense?.listtoken[0] || "N/A"}
                    </StyledTableCell>
                    <StyledTableCell
                      // ref={inputRef3}
                      // onClick={() => handleCopy3(item?.dispense?.listtoken[0])}
                      style={{ width: "10%" }}
                    >
                      {item?.smsdeliveryStatus
                        ? item?.smsdeliveryStatus
                        : "N/A"}
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
                        <div className="absolute right-10 top-5 w-36 h-20 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 bg-white">
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
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
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
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20
                              }}
                            >
                              <Edit />
                              <span
                                onClick={() => {
                                  setOpen(!open);
                                  // setStep(53);
                                  console.log(item?.dispense?.listtoken[0]);
                                  // dispatch(
                                  //   ResendToken({
                                  //     metertoken: item?.dispense?.listtoken[0],
                                  //     phoneNo: item?.phone
                                  //   })
                                  // );
                                  // setReload(true)
                                }}
                                className="text-black"
                              >
                                Resend Token
                              </span>
                            </div>
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
                  <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
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
                      {index + 1}
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
                      {item?.commissions?.fee}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.commissions?.capFee}
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
                  <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
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
                      {index + 1}
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
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
                    {index + 1}
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  USER NAME
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
                    {index + 1}
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
                  <StyledTableCell style={{ width: "10%" }}>
                    N/A
                  </StyledTableCell>
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
                  <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
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
                    METER NUMBER
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
                    DISCO AMOUNT
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
                      {index + 1}
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
                      ₦{item?.transactionAmount}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      ₦{item?.discoSystemCommissionFee}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.discoAmount
                        ? `₦${item?.item?.discoAmount}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.earningPartnerFee
                        ? `₦${item?.earningPartnerFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell
                      ref={inputRef3}
                      onClick={() => handleCopy3(item?.dispense?.listtoken[0])}
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
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
                    {index + 1}
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
                <StyledTableCell style={{ width: "25%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "25%" }}>NAME</StyledTableCell>
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
                    {index + 1}
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
                  <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
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
                    METER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACC. N0
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    TRANX AMOUNT.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
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
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DISCO COMM. TYPE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DISCO COMM.
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DISCO AMOUNT
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
                      {index + 1}
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
                      ₦{item?.transactionAmount}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
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
                        ? `₦${item?.dispense?.systemTransactions?.districtManagerFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      not applicable
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.discoSystemCommissionType}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.discoSystemCommissionType === "PERCENTAGE" &&
                      item?.discoSystemCommissionFeePercentage
                        ? `${item?.discoSystemCommissionFeePercentage}%`
                        : item?.discoSystemCommissionType !== "PERCENTAGE"
                        ? `₦${item?.discoSystemCommissionFee || 0}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.discoSystemCommissionFee
                        ? `₦${item?.discoSystemCommissionFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.discoSystemCommissionCapFee
                        ? `₦${item?.discoSystemCommissionCapFee}`
                        : "not applicable"}
                    </StyledTableCell>
                    <StyledTableCell
                      ref={inputRef3}
                      onClick={() => handleCopy3(item?.dispense?.listtoken[0])}
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
                        <div className="absolute right-10 top-5 w-36 h-20 rounded-lg p-4 flex flex-col justify-center shadow-md border border-gray-200 gap-2 bg-white">
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
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>NAME</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  PHONE
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>NIN</StyledTableCell>
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
                    {index + 1}
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
      ) : (
        ""
      )}
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
