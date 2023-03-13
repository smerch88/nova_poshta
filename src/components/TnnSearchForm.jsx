/* eslint-disable no-unused-vars */
import { Box, Button, CircularProgress, TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { getIsLoading } from 'redux/departments/departments-selectors';
import { fetchDepartments } from 'redux/departments/departments-operations';

import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  tnn: yup.string('Enter Name to Search').required('Name is Required'),
});

export const TnnSearchForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  const formik = useFormik({
    initialValues: {
      tnn: '20450676599509',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const body = {
        apiKey: '8d677609f6e47ce83929374b3afab572',
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
          Documents: [
            {
              DocumentNumber: values.tnn,
              Phone: '380681186265',
            },
          ],
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
          id="tnn"
          name="tnn"
          label="Enter TNN"
          value={formik.values.tnn}
          onChange={formik.handleChange}
          error={formik.touched.tnn && Boolean(formik.errors.tnn)}
          helperText={formik.touched.tnn && formik.errors.tnn}
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
