import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    googleSignInStart: () => {},
    facebookSignInStart: () => {},
    emailSignInStart: () => {},
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
    },
    checkUserSession: () => {},
    signOutStart: () => {},
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
    },
    signOutFailure: (state, action) => {
      state.error = action.payload;
    },
    signUpStart: () => {},
    signUpSuccess: () => {},
    signUpFailure: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { googleSignInStart, facebookSignInStart, emailSignInStart, signInSuccess, signInFailure, checkUserSession, signOutStart, signOutSuccess, signOutFailure, signUpStart, signUpSuccess, signUpFailure } = userSlice.actions;

export default userSlice.reducer;