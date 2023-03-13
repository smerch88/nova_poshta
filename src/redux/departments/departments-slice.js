import { createSlice } from '@reduxjs/toolkit';
import { fetchDepartments } from './departments-operations';

const initialState = {
  departments: [],
  isLoading: false,
  error: null,
};

const departmentsSlice = createSlice({
  name: 'departments',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchDepartments.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.departments = action.payload;
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const departmentsReducer = departmentsSlice.reducer;
