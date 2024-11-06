import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const EarningCard = createAsyncThunk("earningcard", async (thunkAPI) => {
  console.log(process.env.REACT_APP_BASE_URL);
  //   const dateObj = new Date(startDate);

  //   const formattedDate = dateObj.toISOString().slice(0, 10);
  const accessToken = sessionStorage.getItem("token");
  const realuserId = sessionStorage.getItem("realuserId");
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}admin/earningPartnerSummary/${realuserId}`,
      // `${process.env.REACT_APP_BASE_URL}transaction?search=${searcher}&start_date=${formattedDate}&page=${currentPage}`,
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
    console.log("earning");
    // toast.success(data.message);
    console.log(data);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue({
      error: "Failed! To establish connection."
    });
    // console.log('Error', e.response.data);
    // thunkAPI.rejectWithValue(e.response.data);
  }
});
