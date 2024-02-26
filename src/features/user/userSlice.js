import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    first_name: "",
    surname: "",
    password: "",
    email: "",
    company_name: "",
    address: "",
    role: "",
    snapspace_use_for: "",
    selected_file: "",
  },
  isAuth: false,
  userAttributes: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSelectedFile: (state, action) => {
      state.user.selected_file = action.payload;
    },
    setUserFirstName: (state, action) => {
      state.user.first_name = action.payload;
    },
    setUserSurname: (state, action) => {
      state.user.surname = action.payload;
    },
    setUserPassword: (state, action) => {
      state.user.password = action.payload;
    },
    setUserEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setUserCompanyName: (state, action) => {
      state.user.company_name = action.payload;
    },
    setUserAddress: (state, action) => {
      state.user.address = action.payload;
    },
    setUserRole: (state, action) => {
      state.user.role = action.payload;
    },
    setUserSnapspaceUseFor: (state, action) => {
      state.user.snapspace_use_for = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUserAtributes: (state, action) => {
      state.userAttributes = action.payload;
    },
  },
});
// export const { setUser } = userSlice.actions;
export const { setUserAtributes } = userSlice.actions;
export const { setUserAddress } = userSlice.actions;
export const { setIsAuth } = userSlice.actions;
export const { setUserSnapspaceUseFor } = userSlice.actions;
export const { setUserRole } = userSlice.actions;
export const { setUserCompanyName } = userSlice.actions;
export const { setUserSurname } = userSlice.actions;
export const { setUserFirstName } = userSlice.actions;
export const { setUserPassword } = userSlice.actions;
export const { setUserEmail } = userSlice.actions;
export const { setUserSelectedFile } = userSlice.actions;
export default userSlice.reducer;
