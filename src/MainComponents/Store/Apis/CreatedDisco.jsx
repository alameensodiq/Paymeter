import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const CreatedDisco = createAsyncThunk(
  "createddisco",
  async (
    {
      name,
      shortName,
      commissionsDTO,
      earningPartnerId,
      earningPartnerFee,
      email,
      logoUrl,
      phone,
      systemFee,
      password
    },
    thunkAPI
  ) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}admin/onboard-disco`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            name,
            shortName,
            commissionsDTO,
            earningPartnerId,
            earningPartnerFee,
            email,
            logoUrl,
            systemFee,
            phone,
            password
          })
        }
      );
      let data = await response.json();
      toast.success(data.message);
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
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection."
      });
      // console.log('Error', e.response.data);
      // thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
