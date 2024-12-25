import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import csvtojson from "csvtojson"; // Import the csvtojson library

export const AllmeterDownload = createAsyncThunk(
  "allmeterdownload",
  async ({ searcher, currentPage }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}reports/export?search=${searcher}&page=${currentPage}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      //   let data = await response.json();
      //   // toast.success(data.message);
      //   console.log(data);
      //   if (!data?.status) {
      //     toast.error(data.message);
      //   }
      //   console.log(data);
      //   if (data?.status) {
      //     // toast.success(data.message);
      //   }
      //   sessionStorage.setItem('firstName', data?.data?.user?.firstName);
      //   sessionStorage.setItem('role', data?.data?.user?.userRole);
      // sessionStorage.setItem('token', data?.data?.token );
      const csvData = await response.text(); // Get the response as text (CSV format)

      // Convert CSV to JSON using csvtojson
      const jsonData = await csvtojson().fromString(csvData);

      console.log(jsonData); // log the converted JSON data

      return jsonData;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection."
      });
      // console.log('Error', e.response.data);
      // thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
