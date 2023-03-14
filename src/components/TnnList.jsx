import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
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
import { SkeletonCard } from './SkeletonCard';

export const TnnList = () => {
  const tnnData = useSelector(getTnn);
  const tnnListData = useSelector(getTnnList);

  console.log(tnnListData);

  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
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
        {isLoading ? (
          <SkeletonCard />
        ) : (
          !error &&
          data &&
          data.map(document => (
            <ListItem
              key={document.Number}
              sx={{
                width: '100%',
                height: { xs: 340, sm: 220, md: 152, lg: 160, xl: 160 },
              }}
            >
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Typography>Статус доставки: {document.Status}</Typography>
                  <Divider />
                  <Typography>
                    Відправлено: {document.WarehouseSender}
                  </Typography>
                  <Divider />
                  <Typography>
                    Отримано: {document.WarehouseRecipient}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))
        )}
      </List>
      <List>
        <Grid container spacing={2}>
          {tnnListData &&
            tnnListData.map(tnn => (
              <Grid item xs={12} sm={6} md={4} key={tnn} data-tnn={tnn}>
                <ListItem sx={{ minWidth: 275 }}>
                  <Card sx={{ width: '100%' }}>
                    <CardActionArea>
                      <CardContent
                        onClick={onTnnListClickHandler}
                        data-tnn={tnn}
                      >
                        <Typography
                          onClick={onTnnListClickHandler}
                          sx={{ textAlign: 'center' }}
                          data-tnn={tnn}
                        >
                          {tnn}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        fullWidth
                        data-tnn={tnn}
                        onClick={onTnnDeleteClickHandler}
                      >
                        видалити
                      </Button>
                    </CardActions>
                  </Card>
                </ListItem>
              </Grid>
            ))}
        </Grid>
      </List>
      {tnnListData.length !== 0 && (
        <Button onClick={onAllTnnDeleteClickHandler} fullWidth>
          видалити все
        </Button>
      )}
    </>
  );
};
