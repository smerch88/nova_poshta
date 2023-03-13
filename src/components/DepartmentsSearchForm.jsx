/* eslint-disable no-unused-vars */
import { Box, Button, CircularProgress, TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { getIsLoading } from 'redux/departments/departments-selectors';
import { fetchDepartments } from 'redux/departments/departments-operations';

import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  query: yup.string('Enter Name to Search').required('Name is Required'),
});

export const DepartmentsSearchForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  const formik = useFormik({
    initialValues: {
      query: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const body = {
        apiKey: '8d677609f6e47ce83929374b3afab572',
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: values.query,
          Page: '1',
          Limit: '50',
          Language: 'UA',
        },
      };

      dispatch(fetchDepartments(body));
    },
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          gap: 1,
        }}
      >
        <TextField
          mb={1}
          fullWidth
          id="query"
          name="query"
          label="What do you want to find?"
          value={formik.values.query}
          onChange={formik.handleChange}
          error={formik.touched.query && Boolean(formik.errors.query)}
          helperText={formik.touched.query && formik.errors.query}
        />
        <Button
          fullWidth
          mb={1}
          variant="contained"
          color="primary"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? <CircularProgress size={24} /> : 'Search'}
        </Button>
      </Box>
    </>
  );
};
