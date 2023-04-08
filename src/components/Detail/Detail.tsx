import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, selectBook } from '../../redux/reducers/bookSlice';
import DetailCard from './DetailCard';

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { status, error, book } = useSelector(selectBook);

  useEffect(() => {
    dispatch(fetchBook(id));
  }, []);

  if (status === 'loading') {
    return <div>Загрузка...</div>;
  } else if (status === 'rejected') {
    return <div>Ошибка: {error.message}</div>;
  } else {
    return <><DetailCard book={book} /></>;
  }
}

export default Detail;
