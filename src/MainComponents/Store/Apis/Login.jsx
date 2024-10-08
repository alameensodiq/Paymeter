import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const Logins = createAsyncThunk(
  "login",
  async ({ phone, password }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}auth/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            phone,
            password
            // phone: "2347012345678",
            // password: "@#pay!meter&*0@"
          })
        }
      );
      let data = await response.json();
      // toast.success(data.message);
      console.log(data);
      //   sessionStorage.setItem('firstName', data?.data?.user?.firstName);
      //   sessionStorage.setItem('role', data?.data?.user?.userRole);
      sessionStorage.setItem("token", data?.data?.token);
      sessionStorage.setItem("roleName", data?.data?.user?.roleName);
      if (data?.data?.token && data?.data?.user?.roleName === "ADMIN") {
        window.location.pathname = "/dashboard";
      }
      if (data?.data?.token && data?.data?.user?.roleName !== "ADMIN") {
        window.location.pathname = "/complaint";
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection."
      });
      // console.log('Error', e.response.data);
      // thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
