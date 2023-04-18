import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    password: null,
    isValid: false
  },
  reducers: {
    setEmailAndPassword: (state, action) => {
      const { email, password, isValid } = action.payload;
      console.log("here: " ,email, password);
      if (email === 'darryn@randrtechsa.com' && password === 'P@55w0rd@1') {
        state.email = email;
        state.password = password;
        state.isValid = isValid;
      }
    },
    resetAuthState: (state) => {
        state.email = null;
        state.password = null;
        state.isValid = false;
      }
  }
});

export const { setEmailAndPassword ,resetAuthState} = authSlice.actions;
export default authSlice.reducer;
