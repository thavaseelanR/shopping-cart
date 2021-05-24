import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addNewUserPage: {
    isAddUserFormClosed: false,
    formValues: {},
  },
};

const adminUserListCommonSlice = createSlice({
  name: "adminUserListCommonSlice",
  reducers: {
    setAddUserFormClosed(state, action) {
      state.addNewUserPage.isAddUserFormClosed = action.payload;
    },
  },
  initialState,
});

export const { setAddUserFormClosed } = adminUserListCommonSlice.actions;

export default adminUserListCommonSlice.reducer;
