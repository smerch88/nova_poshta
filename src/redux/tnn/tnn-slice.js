import { createSlice } from '@reduxjs/toolkit';
import { fetchTnn } from './tnn-operations';

const initialState = {
  tnn: [],
  isLoading: false,
  error: null,
};

const tnnSlice = createSlice({
  name: 'tnn',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTnn.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTnn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tnn = action.payload;
      })
      .addCase(fetchTnn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const tnnReducer = tnnSlice.reducer;
