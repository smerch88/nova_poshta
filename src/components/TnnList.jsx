import { useDispatch, useSelector } from 'react-redux';

import { getTnn, getError, getTnnList } from 'redux/tnn/tnn-selectors';
import { setQueryTnn } from 'redux/tnn/tnn-slice';

export const TnnList = () => {
  const tnnData = useSelector(getTnn);
  const tnnListData = useSelector(getTnnList);

  const error = useSelector(getError);
  const dispatch = useDispatch();

  const { data, errors } = tnnData;

  const onTnnListClickHandler = event => {
    dispatch(setQueryTnn(event.target.dataset.tnn));
  };

  return (
    <>
      {error && `Something went wrong: ${error}`}
      {errors && errors[0]}
      <ul>
        {!error &&
          data &&
          data.map(document => (
            <li key={document.Number}>
              <p>Статус доставки: {document.Status}</p>
              <p>Відправлено: {document.WarehouseSender}</p>
              <p>Отримано:{document.WarehouseRecipient}</p>
            </li>
          ))}
      </ul>
      <ul>
        {tnnListData &&
          tnnListData.map(tnn => (
            <li key={tnn} onClick={onTnnListClickHandler} data-tnn={tnn}>
              {tnn}
            </li>
          ))}
      </ul>
    </>
  );
};
