import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from 'services/api';

export const fetchDepartments = createAsyncThunk(
  'departments/getDepartments',
  async (body, thunkApi) => {
    try {
      const res = await getData(body);

      if (res.data?.length === '0') {
        throw new Error(`Failed, no results.`);
      }

      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
