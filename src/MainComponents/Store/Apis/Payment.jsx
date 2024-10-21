import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const Payment = createAsyncThunk(
  "payment",
  async ({ customerReference, dateFrom, dateTo }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");
    const dateObj = new Date(dateFrom);

    const formattedDate = dateObj.toISOString().slice(0, 10);
    const dateObjs = new Date(dateTo);

    const formattedDateTo = dateObjs.toISOString().slice(0, 10);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}agent/meter-payment`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            // Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            customerReference,
            dateFrom: formattedDate,
            dateTo: formattedDateTo
          })
        }
      );
      let data = await response.json();
      //   toast.success(data.message);
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
