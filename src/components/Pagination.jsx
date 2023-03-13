import { Button, Typography } from '@mui/material';

import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

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

  console.log(page);

  useEffect(() => {
    dispatch(setPageNumber(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Button onClick={onClickPrevHandler} disabled={page < 2 ? true : false}>
        Prev Page
      </Button>
      <Typography component="span" mr={1} ml={1}>
        {page}
      </Typography>
      <Button onClick={onClickNexthandler}>Next Page</Button>
    </>
  );
};
