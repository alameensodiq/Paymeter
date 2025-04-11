import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const Shift = createAsyncThunk(
  "shift",
  async ({ date, currentPage }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    console.log(date);
    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `http://192.168.213.71:21443/venShiftEnquiries/1.0.1/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer a63cd5db-a5ee-3177-9669-af0095e314d1`
          },
          body: JSON.stringify({
            idVendor: 7131,
            paymentDate: new Date(date).getTime(),
            codUser: "payMeter",
            size: 1000,
            page: currentPage + 1,
            codUserShift: "payMeter",
            paginate: true
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
