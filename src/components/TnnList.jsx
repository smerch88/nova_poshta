import { useSelector } from 'react-redux';

import {
  getDepartments,
  getError,
} from 'redux/departments/departments-selectors';

export const TnnList = () => {
  const departmentsData = useSelector(getDepartments);
  const error = useSelector(getError);
  const { data, errors } = departmentsData;

  return (
    <>
      {error && `Something went wrong: ${error}`}
      {errors && errors[0]}
      <ul>
        {data &&
          data.map(document => (
            <li key={document.Number}>
              <p>Статус доставки: {document.Status}</p>
              <p>Відправлено: {document.WarehouseSender}</p>
              <p>Отримано:{document.WarehouseRecipient}</p>
            </li>
          ))}
      </ul>
      <ul></ul>
    </>
  );
};
