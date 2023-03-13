import { useSelector } from 'react-redux';

import { getDepartments } from 'redux/departments/departments-selectors';

export const DepartmentsList = () => {
  const departmentsData = useSelector(getDepartments);
  const { data, info } = departmentsData;

  return (
    <>
      {data && data.length === 0 ? 'Sorry, there are no departments' : null}
      <ul>
        {data &&
          data.map(department => (
            <li key={department.SiteKey}>{department.ShortAddress}</li>
          ))}
      </ul>
    </>
  );
};
