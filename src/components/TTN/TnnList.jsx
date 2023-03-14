import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  Skeleton,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTnn,
  getError,
  getTnnList,
  getIsLoading,
} from 'redux/tnn/tnn-selectors';
import {
  deleteAllSavedTnn,
  deleteQueryTnn,
  setQueryTnn,
} from 'redux/tnn/tnn-slice';
import SwipeableEdgeDrawer from './SwipeableEdgeDrawer';
import { TtnSavedCards } from './TtnSavedCards';

export const TnnList = () => {
  const tnnData = useSelector(getTnn);
  const tnnListData = useSelector(getTnnList);

  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const { data, errors } = tnnData;

  const onTnnListClickHandler = event => {
    dispatch(setQueryTnn(event.target.dataset.tnn));
  };

  const onTnnDeleteClickHandler = event => {
    dispatch(setQueryTnn(''));
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
            <ListItem
              key={document.Number}
              sx={{
                width: '100%',
              }}
            >
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <Typography>Статус доставки: {document.Status}</Typography>
                  )}
                  <Divider />
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <Typography>
                      Відправлено: {document.WarehouseSender}
                    </Typography>
                  )}
                  <Divider />
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <Typography>
                      Отримано: {document.WarehouseRecipient}
                    </Typography>
                  )}
                  <Divider />
                </CardContent>
              </Card>
            </ListItem>
          ))}
      </List>
      <Typography ml={2}> Історія пошуку: </Typography>
      <SwipeableEdgeDrawer
        tnnListData={tnnListData}
        onTnnListClickHandler={onTnnListClickHandler}
        onTnnDeleteClickHandler={onTnnDeleteClickHandler}
      />
      <List sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Grid container spacing={2}>
          {tnnListData &&
            tnnListData.map(ttn => (
              <TtnSavedCards
                key={ttn}
                ttn={ttn}
                onTnnListClickHandler={onTnnListClickHandler}
                onTnnDeleteClickHandler={onTnnDeleteClickHandler}
              />
            ))}
        </Grid>
      </List>
      {tnnListData.length !== 0 && (
        <Button onClick={onAllTnnDeleteClickHandler} fullWidth mb={8}>
          очистити історію
        </Button>
      )}
    </>
  );
};
