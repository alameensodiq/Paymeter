import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const Approve = createAsyncThunk(
  "approve",
  async (
    { userId, notId, stat, items, declineMessage, districtManagerId },
    thunkAPI
  ) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    // Prepare the body based on the notId value
    let body;

    if (notId === "decline") {
      body = JSON.stringify({
        email: items?.email,
        declineMessage
      });
    } else {
      // Assuming "approve" or other cases
      body = JSON.stringify({
        email: items?.email,
        nin: items?.nin,
        address: items?.address,
        proofOfAddressUrl: items?.addressUrl,
        districtManagerId
      });
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}admin/approve-upgrade?userId=${userId}&notificationId=${items?.id}&action=${notId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body // Use the constructed body
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let data = await response.json();
      console.log(data);
      if (!data?.status) {
        toast.error(data.message);
      }
      console.log(data);
      if (data?.status) {
        // toast.success(data.message);
      }
      return data;
    } catch (e) {
      console.error("API call failed:", e);
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection."
      });
    }
  }
);
