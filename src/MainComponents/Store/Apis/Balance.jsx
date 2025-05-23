import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const Balance = createAsyncThunk(
  "balance",
  async ({ code, value }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");
    // const dateObj = new Date(dateFrom);

    // const formattedDate = dateObj.toISOString().slice(0, 10);
    // const dateObjs = new Date(dateTo);

    // const formattedDateTo = dateObjs.toISOString().slice(0, 10);

    try {
      const response = await fetch(
        `http://194.63.145.119:5600/venMeter/1.0.1/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer 44c471a0-c86d-38cf-8725-1cb93e6cf2b2`
          },
          body: JSON.stringify({
            idVendor: 7131,
            codUser: "payMeter",
            value,
            codType: code,
            totalPayment: 1000
          })
        }
      );
      let data = await response.json();
      //   toast.success(data.message);
      console.log(data);
      // if (!data?.status) {
      //   toast.error(data.message);
      // }
      console.log(data);
      if (data?.status) {
        // toast.success(data.message);
      }
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
