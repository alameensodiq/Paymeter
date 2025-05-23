import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const Complain = createAsyncThunk(
  "complain",
  async ({ status }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);

    const accessToken = sessionStorage.getItem("token");
    // const data = JSON.parse(sessionStorage.getItem("data"));
    // console.log(data);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}disco/complaints?status=${status}`,
        // `${process.env.REACT_APP_BASE_URL}disco/complaints?discoShortName=IKEDC&status=${status}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
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
