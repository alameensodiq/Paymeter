import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import csvtojson from "csvtojson"; // Import the csvtojson library

export const DownloadEarningTrans = createAsyncThunk(
  "downloadearningtrans",
  async ({ startDate, endDate, searcher }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const dateObj = new Date(startDate);

    const formattedDate = dateObj.toISOString().slice(0, 10);
    const dateObjs = new Date(endDate);

    const formattedDated = dateObjs.toISOString().slice(0, 10);
    const accessToken = sessionStorage.getItem("token");
    const realuserId = sessionStorage.getItem("realuserId");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}reports/api/earningpartner-transactions/export/${realuserId}?search=${searcher}&start_date=${formattedDate}&end_date=${formattedDated}`,
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
