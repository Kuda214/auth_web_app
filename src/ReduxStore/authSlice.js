import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    password: null
  },
  reducers: {
    setEmailAndPassword: (state, action) => {
      const { email, password } = action.payload;
      if (email === 'darryn@randrtechsa.com' && password === 'P@55w0rd@1') {
        state.email = email;
        state.password = password;
      }
    }
  }
});

export const { setEmailAndPassword } = authSlice.actions;
export default authSlice.reducer;
