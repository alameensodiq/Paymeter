import React from "react";
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
  rejected
}) => {
  const navigate = useNavigate();
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
      color: "rgba(90, 99, 118, 1)",
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
                  METER TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>RRN</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  PAYMENT TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  PAYMENT DATE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  TRANSACTION REFERENCE
                </StyledTableCell>
                <StyledTableCell style={{ width: "5%" }}>
                  AMOUNT
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  BANK NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  BANK USSD
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DISCOS
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  STATUS
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
                    {item?.account?.type}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.rrn}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.paymentType}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="DD-MM-YYYY">{item?.paymentTime}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.txRef}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    {item?.amount?.AMOUNT}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.account?.bank?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.account?.bank?.ussd}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.account?.disco?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.paymentStatus === "successfull" ? (
                      <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                        Successful
                      </button>
                    ) : (
                      <button className="bg-failedbg h-[30px] w-[100%] rounded-full text-failedtext font-semibold text-[9px]">
                        Failed
                      </button>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.ussd}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    12/04/1975
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    200,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button
                      // onClick={() => navigate(`/discos/${item?.id}`)}
                      className="h-[30px] w-[100%] border border-none text-button-bg font-semibold text-[9px]"
                    >
                      View
                    </button>
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
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "20%" }}>1</StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    29a, berkeley
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.shortName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    12/05/2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button
                      onClick={() => navigate(`/discos/${item?.id}`)}
                      className="h-[30px] w-[100%] border border-none text-button-bg font-semibold text-[9px]"
                    >
                      View
                    </button>
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
                <StyledTableCell style={{ width: "15%" }}>
                  ACCOUNT NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
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
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.accountName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
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
                <StyledTableRow
                  onClick={() => {
                    setStep(11);
                    setUserIds(item?.id);
                  }}
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
                    200,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/agents/${item?.id}`)}
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
                  TOTAL AMOUNT RECEIVED
                </StyledTableCell>
                <StyledTableCell style={{ width: "5%" }}></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow
                  onClick={() => {
                    setStep(11);
                    setUserIds(item?.id);
                  }}
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
                    200,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/api/${item?.id}`)}
                    >
                      View
                    </span>
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
                    COMMISSION
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    COMMISSION TYPE
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
                      {item?.discoName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.userType}
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
                <StyledTableCell style={{ width: "25%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "25%" }}>NAME</StyledTableCell>
                <StyledTableCell style={{ width: "25%" }}>DATE</StyledTableCell>
                <StyledTableCell style={{ width: "25%" }}>
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <StyledTableRow>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "25%" }}
                  >
                    {item?.id}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    {item?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
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
                        DECLINE
                      </button>
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
                <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow
                  onClick={() => {
                    setStep(11);
                    setUserIds(item?.id);
                  }}
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
                    {item?.user?.email}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.user?.phone}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.message}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="YYYY-MM-DD">{item?.createdDate}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.status === "ACCEPTED" ? (
                      <button
                        onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                        className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                      >
                        ACCEPETD
                      </button>
                    ) : item?.status === "REJECTED" ? (
                      <button
                        onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                        className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                      >
                        DECLINED
                      </button>
                    ) : (
                      <button
                        onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                        className="bg-elect-bg h-[30px] w-[50%] rounded-full text-details-loancolor font-semibold text-[9px]"
                      >
                        PENDING
                      </button>
                    )}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/agents/${item?.id}`)}
                    >
                      View
                    </span>
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
                        onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                        className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                      >
                        ACCEPETD
                      </button>
                    ) : item?.status === "REJECTED" ? (
                      <button
                        onClick={() => Pay(item?.id)}
                        className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                      >
                        DECLINED
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
                  TOTAL AMOUNT RECEIVED
                </StyledTableCell>
                <StyledTableCell style={{ width: "5%" }}></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow
                  onClick={() => {
                    setStep(11);
                    setUserIds(item?.id);
                  }}
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
                    200,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000"
                      }}
                      onClick={() => navigate(`/earning/${item?.id}`)}
                    >
                      View
                    </span>
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
                  onClick={() => {
                    setStep(11);
                    setUserIds(item?.id);
                  }}
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
                    {item?.user?.email}
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
                        onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                        className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                      >
                        ACCEPETD
                      </button>
                    ) : item?.status === "REJECTED" ? (
                      <button
                        onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                        className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                      >
                        DECLINED
                      </button>
                    ) : (
                      <button
                        onClick={() => Pay(item?.id, item?.user?.id, "approve")}
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
                  onClick={() => {
                    setStep(11);
                    setUserIds(item?.id);
                  }}
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
                    {item?.user?.email}
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
                        onClick={() => Pay(item?.id, item?.user?.id, "decline")}
                        className="bg-successbg h-[30px] w-[50%] rounded-full text-successtext font-semibold text-[9px]"
                      >
                        ACCEPETD
                      </button>
                    ) : item?.status === "REJECTED" ? (
                      <button
                        onClick={() => Pay(item?.id, item?.user?.id, "approve")}
                        className="bg-failedbg h-[30px] w-[50%] rounded-full text-failedtext font-semibold text-[9px]"
                      >
                        DECLINED
                      </button>
                    ) : (
                      <button
                        onClick={() => Pay(item?.id, item?.user?.id, "approve")}
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
