import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const FundingApproval = createAsyncThunk(
  "fundingapproval",
  async ({ transactionId, userPhoneNumber, amount }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);

    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}admin/approve-funding`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({ transactionId, userPhoneNumber, amount })
        }
      );
      let data = await response.json();
      if (!data?.status) {
        toast.error(data.message);
      }
      if (data?.status) {
        toast.success(data.message);
      }
      // toast.success(data.message);
      console.log(data);
      //   sessionStorage.setItem('firstName', data?.data?.user?.firstName);
      //   sessionStorage.setItem('role', data?.data?.user?.userRole);
      // sessionStorage.setItem('token', data?.data?.token );
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
