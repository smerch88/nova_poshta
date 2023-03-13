import { useSelector } from 'react-redux';

import { getTnn, getError, getTnnList } from 'redux/tnn/tnn-selectors';

export const TnnList = () => {
  const tnnData = useSelector(getTnn);
  const tnnListData = useSelector(getTnnList);

  console.log('tnnListData', tnnListData);

  const error = useSelector(getError);
  const { data, errors } = tnnData;

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
      <ul>{tnnListData && tnnListData.map(tnn => <li key={tnn}>{tnn}</li>)}</ul>
    </>
  );
};
