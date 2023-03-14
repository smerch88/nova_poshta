import { Box, Pagination, useMediaQuery, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getDepartments,
  getIsLoading,
} from 'redux/departments/departments-selectors';
import { setPageNumber } from 'redux/departments/departments-slice';

export const PaginationComponent = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const isLoading = useSelector(getIsLoading);

  const departmentsData = useSelector(getDepartments);
  const { info } = departmentsData;

  useEffect(() => {
    if (info) {
      const { totalCount } = info;
      setNumberOfPages(Math.ceil(totalCount / 50));
    }
  }, [info]);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(setPageNumber(page));
  }, [page, dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      mb={2}
    >
      <Pagination
        count={numberOfPages}
        page={page}
        onChange={handlePageChange}
        shape="rounded"
        variant="outlined"
        disabled={isLoading}
        siblingCount={isMobile ? 0 : 1}
      />
    </Box>
  );
};
