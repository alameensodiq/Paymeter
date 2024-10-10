import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const DashboardDiscoMonthlys = createAsyncThunk(
  "dashboarddiscomonthly",
  async ({ startDate }, thunkAPI) => {
    const accessToken = sessionStorage.getItem("token");
    const dateObjs = new Date(startDate);
    const year = dateObjs.getFullYear();
    const month = String(dateObjs.getMonth() + 1).padStart(2, "0");

    console.log(`Fetching data for Year: ${year}, Month: ${month}`);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}dashboard/monthly-revenue/${month}/${year}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
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
