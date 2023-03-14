import { List, ListItem, Skeleton, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as LinkReact } from '@mui/material';

import { useSelector } from 'react-redux';
import {
  getDepartments,
  getError,
  getIsLoading,
} from 'redux/departments/departments-selectors';

export const DepartmentsList = () => {
  const departmentsData = useSelector(getDepartments);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const { data, info } = departmentsData;

  return (
    <>
      {error && `Something went wrong: ${error}`}
      {info && info.totalCount === 0 ? 'Sorry, there are no departments' : null}

      {info && (
        <Typography variant="subtitle1" color="textSecondary" mt={2}>
          Знайдено: {info.totalCount}
        </Typography>
      )}

      <List>
        {data &&
          data.map(department => (
            <ListItem key={department.SiteKey} data-aos="zoom-in">
              <Typography width="100%">
                {isLoading ? <Skeleton width="100%" /> : department.Description}
              </Typography>
              <LinkReact
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  department.Description
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'inherit', marginRight: { md: '40px' } }}
              >
                <LocationOnIcon />
              </LinkReact>
            </ListItem>
          ))}
      </List>
    </>
  );
};
