import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItemModal = createAsyncThunk(
  "modal/fetchItemloading",
  async (id, { dispatch }) => {
    const { data } = await axios.get(`http://localhost:3030/artworks/${id}`);
    dispatch(setOpenItemModal());
    return { data };
  }
);

const initialState = {
  modalActive: false,
  openItemModal: false,
  openSettingModal: false,
  openUserModal: false,
  itemModal: {},
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCloseModal: (state) => {
      state.modalActive = false;
      state.openItemModal = false;
      state.openSettingModal = false;
      state.openUserModal = false;
    },
    setOpenItemModal: (state) => {
      state.modalActive = true;
      state.openItemModal = true;
    },
    setOpenSettingModal: (state) => {
      state.modalActive = true;
      state.openSettingModal = true;
    },
    setOpenUserModal: (state) => {
      state.modalActive = true;
      state.openUserModal = true;
    },
  },
  extraReducers: {
    [fetchItemModal.pending]: (state) => {
      state.loading = "pending";
      console.log("wait!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    },
    [fetchItemModal.fulfilled]: (state, action) => {
      state.itemModal = action.payload.data;
      state.loading = "succes";
      console.log("succes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    },
    [fetchItemModal.rejected]: (state) => {
      state.loading = "error";
      console.log("error");
    },
  },
});
export const {
  setCloseModal,
  setOpenItemModal,
  setOpenSettingModal,
  setOpenUserModal,
} = modalSlice.actions;
export default modalSlice.reducer;
