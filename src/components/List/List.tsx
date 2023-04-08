import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, selectBooks } from '../../redux/reducers/booksSlice';
import { useEffect } from 'react';
import Card from '../Card/Card';

function List() {
  const dispatch = useDispatch();
  const { status, error, books } = useSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Загрузка...</div>;
  } else if (status === 'rejected') {
    return <div>Ошибка: {error.message}</div>;
  } else {
    return (
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
            {books.items
              ? books.items.map(item => {
                  return <Card key={item.id} item={item} />;
                })
              : 'Ничего нет'}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
