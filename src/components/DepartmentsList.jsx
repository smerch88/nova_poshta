import { useSelector } from 'react-redux';

import {
  getDepartments,
  getError,
} from 'redux/departments/departments-selectors';

export const DepartmentsList = () => {
  const departmentsData = useSelector(getDepartments);
  const error = useSelector(getError);
  const { data, info } = departmentsData;

  return (
    <>
      {error && `Something went wrong: ${error}`}
      {info && info.totalCount === 0 ? 'Sorry, there are no departments' : null}
      <ul>
        {data &&
          data.map(department => (
            <li key={department.SiteKey}>{department.ShortAddress}</li>
          ))}
      </ul>
    </>
  );
};
