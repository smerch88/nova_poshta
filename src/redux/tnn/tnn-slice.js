import { createSlice } from '@reduxjs/toolkit';
import { fetchTnn } from './tnn-operations';

const initialState = {
  tnn: [],
  tnnList: [],
  queryTnn: '',
  isLoading: false,
  error: null,
};

const tnnSlice = createSlice({
  name: 'tnn',
  initialState: initialState,
  reducers: {
    saveTnn: (state, action) => {
      if (!state.tnnList.some(tnn => tnn === action.payload)) {
        state.tnnList = [...state.tnnList, action.payload];
      }
    },
    setQueryTnn: (state, action) => {
      state.queryTnn = action.payload;
    },
    deleteQueryTnn: (state, action) => {
      state.tnnList = state.tnnList.filter(tnn => tnn !== action.payload);
    },
  },
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

export const { saveTnn } = tnnSlice.actions;
export const { setQueryTnn } = tnnSlice.actions;
export const { deleteQueryTnn } = tnnSlice.actions;

export const tnnReducer = tnnSlice.reducer;
