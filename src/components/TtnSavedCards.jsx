import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  ListItem,
  Typography,
} from '@mui/material';

export const TtnSavedCards = ({
  ttn,
  onTnnListClickHandler,
  onTnnDeleteClickHandler,
}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} key={ttn} data-tnn={ttn}>
        <ListItem sx={{ minWidth: 275 }}>
          <Card sx={{ width: '100%' }}>
            <CardActionArea>
              <CardContent onClick={onTnnListClickHandler} data-tnn={ttn}>
                <Typography
                  onClick={onTnnListClickHandler}
                  sx={{ textAlign: 'center' }}
                  data-tnn={ttn}
                >
                  {ttn}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                fullWidth
                data-tnn={ttn}
                onClick={onTnnDeleteClickHandler}
              >
                видалити
              </Button>
            </CardActions>
          </Card>
        </ListItem>
      </Grid>
    </>
  );
};
