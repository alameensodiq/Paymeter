import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const RegenerateToken = createAsyncThunk(
  "regeneratetoken",
  async ({ customerReference, discoShortName, phone, amount }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}customer-service/regenerate-token
`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            customerReference,
            discoShortName,
            phone,
            amount
          })
        }
      );
      let data = await response.json();
      if (data?.status) {
        toast.success(data.message);
      }
      if (!data?.status) {
        toast.error(data.message);
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
