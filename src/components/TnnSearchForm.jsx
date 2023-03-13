import { Box, Button, CircularProgress, TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { getIsLoading } from 'redux/departments/departments-selectors';
import { fetchTnn } from 'redux/tnn/tnn-operations';

import { saveTnn } from 'redux/tnn/tnn-slice';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { getQueryTnn } from 'redux/tnn/tnn-selectors';

const validationSchema = yup.object({
  tnn: yup
    .string()
    .matches(/^[0-9]{14}$/, 'TTN number must be exactly 14 digits long')
    .required('TTN number is required'),
});

export const TnnSearchForm = () => {
  const dispatch = useDispatch();

  const queryTnn = useSelector(getQueryTnn);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    formik.setFieldValue('tnn', queryTnn);
    formik.setValues({ tnn: queryTnn });
    formik.submitForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryTnn]);

  const formik = useFormik({
    initialValues: {
      tnn: queryTnn,
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

      dispatch(fetchTnn(body));
      dispatch(saveTnn(values.tnn));
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
