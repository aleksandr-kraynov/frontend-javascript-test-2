import { useState, useEffect } from 'react';
import SearchInput from './SearchInput/SearchInput';
import CategorySelect from './CategorySelect/CategorySelect';
import OrderSelect from './OrderSelect/OrderSelect';
import { fetchBooks, getLoadMoreBooks } from '../../redux/reducers/booksSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const initialParams = { search: '', category: '', order: 'relevance', startIndex: 0 };
  const [values, setValues] = useState(initialParams);

  const dispatch = useDispatch();

  const handleOnChange = () => {
    setValues({ ...values, startIndex: (values.startIndex += 30) });
  };

  useEffect(() => {
    dispatch(fetchBooks(values));
  }, [values]);

  return (
    <header className='bg-[url("./assets/book.jpg")] bg-cover bg-center'>
      <div className='max-w-2xl mx-auto py-6 px-6'>
        <h1 className='text-white text-3xl font-bold mb-8 tracking-wider'>Search for books</h1>
        <SearchInput values={values} setValues={setValues} />
        <div className='flex justify-between mt-6'>
          <CategorySelect values={values} setValues={setValues} />
          <OrderSelect values={values} setValues={setValues} />
        </div>
      </div>
      <button onClick={() => handleOnChange()}>Load More</button>
    </header>
  );
}

export default Header;
