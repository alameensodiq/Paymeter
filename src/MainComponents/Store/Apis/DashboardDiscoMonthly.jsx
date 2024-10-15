import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const DashboardDiscoMonthlys = createAsyncThunk(
  "dashboarddiscomonthly",
  async ({ editdisc, discname }, thunkAPI) => {
    const accessToken = sessionStorage.getItem("token");
    console.log(editdisc, discname);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}admin/edit-disco-commission/${discname}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify(editdisc)
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      console.error("API call failed:", e);
      return thunkAPI.rejectWithValue({
        error: "Failed to establish connection."
      });
    }
  }
);
