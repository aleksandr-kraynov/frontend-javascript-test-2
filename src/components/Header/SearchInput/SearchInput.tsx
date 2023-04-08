import { useState, useEffect } from 'react';
import { Combobox } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../redux/reducers/booksSlice';

function SearchInput({ values, setValues }) {
  const dispatch = useDispatch();

  const handleOnChange = event => {
    setValues({ ...values, search: event.target.value });
  };

  useEffect(() => {
    dispatch(fetchBooks(values));
  }, []);

  return (
    <div className='relative mt-1'>
      <div className='relative w-full cursor-default overflow-hidden bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
        <Combobox>
          <Combobox.Input
            className='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
            value={values.search}
            onChange={handleOnChange}
          />
          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2' onClick={() => dispatch(fetchBooks(values))}>
            <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </Combobox.Button>
        </Combobox>
      </div>
    </div>
  );
}

export default SearchInput;
