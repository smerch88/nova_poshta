import { List, ListItem, Skeleton, Typography } from '@mui/material';

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

      <List>
        {data &&
          data.map(department => (
            <ListItem key={department.SiteKey}>
              <Typography width="100%">
                {isLoading ? <Skeleton width="100%" /> : department.Description}
              </Typography>
            </ListItem>
          ))}
      </List>
    </>
  );
};
