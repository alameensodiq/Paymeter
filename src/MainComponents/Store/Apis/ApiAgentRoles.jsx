import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const ApiAgentRole = createAsyncThunk(
  "apiagent",
  async ({ role1, role2, role3, role4, role5, currentPage }, thunkAPI) => {
    console.log("Base URL:", process.env.REACT_APP_BASE_URL);

    const accessToken = sessionStorage.getItem("token");

    // Determine the role based on role1 and role2
    let role;
    if (role1) {
      role = "DISTRICTMANAGER";
    } else if (role2) {
      role = "APIPARTNER";
    } else if (role3) {
      role = "CUSTOMERSERVICE";
    } else if (role4) {
      role = "SYSTEMCARE";
    } else if (role5) {
      role = "ACCOUNTANT";
    } else {
      role = "EARNINGPARTNER";
    }

    try {
      // Construct the base URL with the roleName
      let url = `${process.env.REACT_APP_BASE_URL}admin/byrole?roleName=${role}`;

      // Append currentPage if it is provided
      if (currentPage) {
        url += `&page=${currentPage}`;
      }

      console.log("Final API URL:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      });

      const data = await response.json();
      console.log("API Response:", data);

      // Uncomment and use toast for user feedback if needed
      // toast.success(data.message);
      if (!data?.status) {
        toast.error(data.message);
      }
      console.log(data);
      if (data?.status) {
        // toast.success(data.message);
      }

      return data; // Return the data on success
    } catch (e) {
      console.error("Error fetching agent role:", e); // Log the error for debugging
      return thunkAPI.rejectWithValue({
        error: "Failed to establish connection."
      });
    }
  }
);
