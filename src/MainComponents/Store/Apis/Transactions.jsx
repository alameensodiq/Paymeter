import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const Transactions = createAsyncThunk(
  "transactions",
  async ({ startDate, searcher, currentPage, endDate }, thunkAPI) => {
    // console.log(process.env.REACT_APP_BASE_URL);
    // const dateObj = new Date(startDate);

    // const formattedDate = dateObj.toISOString().slice(0, 10);
    const dateObj = new Date(startDate);
    const dateObjs = new Date(endDate);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
    const day = String(dateObj.getDate()).padStart(2, "0");

    // Get the local time components
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    const seconds = String(dateObj.getSeconds()).padStart(2, "0");

    // Combine the components into the desired format
    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

    const years = dateObjs.getFullYear();
    const months = String(dateObjs.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
    const days = String(dateObjs.getDate()).padStart(2, "0");

    // Get the local time components
    const hourss = String(dateObjs.getHours()).padStart(2, "0");
    const minutess = String(dateObjs.getMinutes()).padStart(2, "0");
    const secondss = String(dateObjs.getSeconds()).padStart(2, "0");

    // Combine the components into the desired format
    const formattedDateTimed = `${years}-${months}-${days}T${hourss}:${minutess}:${secondss}`;
    const accessToken = sessionStorage.getItem("token");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}admin/all-transactions?search=${searcher}&startDate=${formattedDateTime}&endDate=${formattedDateTimed}&page=${currentPage}`,
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
  }
);
