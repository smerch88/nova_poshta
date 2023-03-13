import { Button, Divider, List, ListItem, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getTnn, getError, getTnnList } from 'redux/tnn/tnn-selectors';
import {
  deleteAllSavedTnn,
  deleteQueryTnn,
  setQueryTnn,
} from 'redux/tnn/tnn-slice';

export const TnnList = () => {
  const tnnData = useSelector(getTnn);
  const tnnListData = useSelector(getTnnList);

  const error = useSelector(getError);
  const dispatch = useDispatch();

  const { data, errors } = tnnData;

  const onTnnListClickHandler = event => {
    dispatch(setQueryTnn(event.target.dataset.tnn));
  };

  const onTnnDeleteClickHandler = event => {
    dispatch(deleteQueryTnn(event.target.dataset.tnn));
  };
  const onAllTnnDeleteClickHandler = event => {
    dispatch(deleteAllSavedTnn());
  };

  return (
    <>
      {error && `Something went wrong: ${error}`}
      {errors && errors[0]}
      <List>
        {!error &&
          data &&
          data.map(document => (
            <ListItem key={document.Number}>
              <Typography component="div" sx={{ width: '100%' }}>
                Статус доставки: {document.Status}
              </Typography>
              <Divider />
              <Typography component="div" sx={{ width: '100%' }}>
                Відправлено: {document.WarehouseSender}
              </Typography>
              <Divider />
              <Typography component="div" sx={{ width: '100%' }}>
                Отримано: {document.WarehouseRecipient}
              </Typography>
            </ListItem>
          ))}
      </List>

      <List>
        {tnnListData &&
          tnnListData.map(tnn => (
            <ListItem key={tnn} data-tnn={tnn}>
              <Typography data-tnn={tnn} onClick={onTnnListClickHandler}>
                {tnn}
              </Typography>
              <Button data-tnn={tnn} onClick={onTnnDeleteClickHandler}>
                delete
              </Button>
            </ListItem>
          ))}
      </List>
      <Button onClick={onAllTnnDeleteClickHandler}>clear all</Button>
    </>
  );
};
