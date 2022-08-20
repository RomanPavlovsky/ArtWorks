import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalActive: false,
  openItemModal: false,
  openSettingModal: false,
  openUserModal: false,
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
});
export const {
  setCloseModal,
  setOpenItemModal,
  setOpenSettingModal,
  setOpenUserModal,
} = modalSlice.actions;
export default modalSlice.reducer;
