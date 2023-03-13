import { Box, Button, Typography } from '@mui/material';

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getIsLoading } from 'redux/departments/departments-selectors';
import { setPageNumber } from 'redux/departments/departments-slice';

export const Pagination = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const onClickPrevHandler = () => {
    setPage(page - 1);
  };
  const onClickNexthandler = () => {
    setPage(page + 1);
  };

  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(setPageNumber(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={onClickPrevHandler}
          disabled={page < 2 || isLoading ? true : false}
        >
          Prev Page
        </Button>
        <Typography variant="h5" component="span" mr={1} ml={1}>
          {page}
        </Typography>
        <Button
          onClick={onClickNexthandler}
          disabled={isLoading ? true : false}
        >
          Next Page
        </Button>
      </Box>
    </>
  );
};
