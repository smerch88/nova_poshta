import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  useTheme,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import {
  getIsLoading,
  getPageNumber,
} from 'redux/departments/departments-selectors';
import { fetchDepartments } from 'redux/departments/departments-operations';

import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  query: yup
    .string('Введіть назву для пошуку')
    .matches(
      /^[\u0400-\u04FF\s]+$/,
      'Підтримується пошук тільки українською мовою...'
    )
    .required(`Поле "Назва" є обов'язковим`),
  warehouseId: yup.number('Введіть номер відділення...'),
});

export const DepartmentsSearchForm = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const isLoading = useSelector(getIsLoading);
  const currentPage = useSelector(getPageNumber);

  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const formik = useFormik({
    initialValues: {
      query: 'київ',
      warehouseId: '41',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const body = {
        apiKey: '8d677609f6e47ce83929374b3afab572',
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: values.query,
          Page: page,
          Limit: '50',
          Language: 'UA',
          WarehouseId: values.warehouseId,
        },
      };

      dispatch(fetchDepartments(body));
    },
  });

  useEffect(() => {
    formik.submitForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          gap: 1,
        }}
        mt={2}
      >
        <TextField
          fullWidth
          id="query"
          name="query"
          label="Введіть назву населенного пункту"
          value={formik.values.query}
          onChange={formik.handleChange}
          error={formik.touched.query && Boolean(formik.errors.query)}
          helperText={formik.touched.query && formik.errors.query}
          sx={{ marginBottom: theme.spacing(2) }}
        />
        <TextField
          fullWidth
          id="warehouseId"
          name="warehouseId"
          label="Введіть номер відділення"
          value={formik.values.warehouseId}
          onChange={formik.handleChange}
          error={
            formik.touched.warehouseId && Boolean(formik.errors.warehouseId)
          }
          helperText={formik.touched.warehouseId && formik.errors.warehouseId}
          sx={{ marginBottom: theme.spacing(2) }}
        />
        <Button
          fullWidth
          mb={1}
          variant="contained"
          color="primary"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? <CircularProgress size={25} /> : 'Шукати'}
        </Button>
      </Box>
    </>
  );
};
