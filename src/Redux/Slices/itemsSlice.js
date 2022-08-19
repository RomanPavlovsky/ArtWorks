import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../API/api";

export const fetchItems = createAsyncThunk(
  "items/fetchItemsloading",
  async (params) => {
    const { limitPage, currentPage, category, searchValue } = params;
    const { data, headers } = await axios.get(api, {
      params: {
        _limit: limitPage,
        _page: currentPage,
        category: category,
        title_like: searchValue,
      },
    });

    return { data, headers };
  }
);
export const deleteItems = createAsyncThunk(
  "items/deleteItems",
  async (id, { dispatch }) => {
    const response = await axios.delete(`http://localhost:3030/artworks/${id}`);
    console.log(response);
    dispatch(removeItems(id));
    return id;
  }
);

const initialState = {
  items: [],
  totalCount: 0,
  loading: "pending",
  currentPage: 1,
  limitPage: 4,
  removeId: null,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetPage: (state) => {
      state.currentPage = 1;
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((arr) => arr.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.loading = "pending";
      console.log("wait!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.items = action.payload.data;
      state.totalCount = Number(action.payload.headers["x-total-count"]);
      state.loading = "succes";
      console.log("succes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    },
    [fetchItems.rejected]: (state) => {
      state.loading = "error";
      console.log("error");
    },
    [deleteItems.fulfilled]: (state, action) => {
      state.removeId = action.payload;
    },
  },
});
export const { setCurrentPage, resetPage, removeItems } = itemsSlice.actions;
export default itemsSlice.reducer;
