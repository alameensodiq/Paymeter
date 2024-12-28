import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const ApproveWithdraw = createAsyncThunk(
  "approvewithdraw",
  async ({ withdrawaction, action }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    // const dateObj = new Date(startDate);
    console.log(withdrawaction);

    // const formattedDate = dateObj.toISOString().slice(0, 10);
    const accessToken = sessionStorage.getItem("token");
    const body =
      action === "approve"
        ? {
            transactionId: withdrawaction.id,
            beneficiaryAccountName: withdrawaction.name,
            transactionAmount: withdrawaction.amount,
            beneficiaryAccountNumber: withdrawaction.accountNumber,
            beneficiaryBank: withdrawaction.bankCode
          }
        : { transactionId: withdrawaction.id };

    const {
      transactionId,
      beneficiaryAccountName,
      transactionAmount,
      beneficiaryAccountNumber,
      beneficiaryBank
    } = body;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}agent/fundTransfer?action=${action}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body:
            action === "approve"
              ? JSON.stringify({
                  transactionId,
                  beneficiaryAccountName,
                  transactionAmount,
                  beneficiaryAccountNumber,
                  beneficiaryBank
                })
              : JSON.stringify({
                  transactionId
                })
        }
      );
      let data = await response.json();
      // toast.success(data.message);
      console.log(data);
      if (!data?.status) {
        toast.error(data.message);
      }
      console.log(data);
      if (data?.status) {
        // toast.success(data.message);
      }
      //   sessionStorage.setItem('firstName', data?.data?.user?.firstName);
      //   sessionStorage.setItem('role', data?.data?.user?.userRole);
      // sessionStorage.setItem('token', data?.data?.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection."
      });
      // console.log('Error', e.response.data);
      // thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
