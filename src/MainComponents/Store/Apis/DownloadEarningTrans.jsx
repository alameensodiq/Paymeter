import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import csvtojson from "csvtojson"; // Import the csvtojson library

export const DownloadEarningTrans = createAsyncThunk(
  "downloadearningtrans",
  async ({ startDate, endDate, searcher }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
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

    const formattedDated = dateObjs.toISOString().slice(0, 10);
    const accessToken = sessionStorage.getItem("token");
    const realuserId = sessionStorage.getItem("realuserId");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}reports/api/earningpartner-transactions/export/${realuserId}?search=${searcher}&startDate=${formattedDateTime}&endDate=${formattedDateTimed}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      const csvData = await response.text(); // Get the response as text (CSV format)

      // Convert CSV to JSON using csvtojson
      const jsonData = await csvtojson().fromString(csvData);

      console.log(jsonData); // log the converted JSON data

      return jsonData; // return the JSON data to be used in the store
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue({
        error: "Failed to fetch or convert CSV data."
      });
    }
  }
);
