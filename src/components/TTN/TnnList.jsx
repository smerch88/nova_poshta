import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Icon,
  List,
  ListItem,
  Skeleton,
  Typography,
  useTheme,
} from '@mui/material';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';
import AllInboxIcon from '@mui/icons-material/AllInbox';

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

  const theme = useTheme();

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
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Icon
                      sx={{
                        marginRight: theme.spacing(4),
                        marginLeft: theme.spacing(2),
                      }}
                    >
                      <MarkunreadMailboxIcon />
                    </Icon>
                    <Box
                      sx={{
                        width: '100%',
                      }}
                    >
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography>
                          Статус доставки:{' '}
                          {document.Status.length
                            ? document.Status
                            : 'дані відсутні...'}
                        </Typography>
                      )}
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography variant="body2" color="grey" mb={1}>
                          Дата доставки:{' '}
                          {document.TrackingUpdateDate.length
                            ? document.TrackingUpdateDate
                            : 'дані відсутні...'}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Icon
                      sx={{
                        marginRight: theme.spacing(4),
                        marginLeft: theme.spacing(2),
                      }}
                    >
                      <SendTimeExtensionIcon />
                    </Icon>
                    <Box
                      sx={{
                        width: '100%',
                      }}
                    >
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography mt={1}>
                          Відправлено:{' '}
                          {document.WarehouseSender.length
                            ? document.WarehouseSender
                            : 'дані відсутні...'}
                        </Typography>
                      )}
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography variant="body2" color="grey" mb={1}>
                          Дата створення:{' '}
                          {document.DateCreated.length
                            ? document.DateCreated
                            : 'дані відсутні...'}
                        </Typography>
                      )}{' '}
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Icon
                      sx={{
                        marginRight: theme.spacing(4),
                        marginLeft: theme.spacing(2),
                      }}
                    >
                      <AllInboxIcon />
                    </Icon>
                    <Box
                      sx={{
                        width: '100%',
                      }}
                    >
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography mt={1}>
                          Отримано:{' '}
                          {document.WarehouseRecipient.length
                            ? document.WarehouseRecipient
                            : 'дані відсутні...'}
                        </Typography>
                      )}
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography variant="body2" color="grey">
                          Дата прибуття:{' '}
                          {document.ActualDeliveryDate.length
                            ? document.ActualDeliveryDate
                            : 'дані відсутні...'}
                        </Typography>
                      )}{' '}
                    </Box>
                  </Box>
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
