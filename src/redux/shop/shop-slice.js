import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collections: null,
  isFetching: false,
  error: null
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    fetchCollectionsStart: (state) => {
      state.isFetching = true;
    },
    fetchCollectionsSuccess: (state, action) => {
      state.isFetching = false;
      state.collections = action.payload;
    },
    fetchCollectionsFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    }
  }
});

export const { fetchCollectionsStart, fetchCollectionsSuccess, fetchCollectionsFailure } = shopSlice.actions;

export default shopSlice.reducer;

