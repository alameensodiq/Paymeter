import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const Withdrawing = createAsyncThunk(
  "withdrawing",
  async ({ accountNumber, bankCode, bankName, amount }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}agent/withdrawal`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            accountNumber,
            bankCode,
            bankName,
            amount
          })
        }
      );
      let data = await response.json();
      if (data?.status) {
        toast.success(data.message);
      } else {
        toast.error(data?.message);
      }
      console.log(data);
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
