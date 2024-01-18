import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//fetch details
export const fetchMenuItemsAction = createAsyncThunk(
  "menuItems/getLists",
  async () => {
    return axios
      .get(`https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc`)
      .then((res) => res.data);
  }
);

export const menuSlice = createSlice({
  name: "menuItems",
  initialState: {
    menuList: [],
    status: null,
  },

  extraReducers: {
    [fetchMenuItemsAction.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMenuItemsAction.fulfilled]: (state, { payload }) => {
      state.menuList = payload;
      state.status = "success";
    },
    [fetchMenuItemsAction.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default menuSlice.reducer;
