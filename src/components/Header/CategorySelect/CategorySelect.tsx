import { useState, useEffect } from 'react';
import SelectMenu from '../SelectMenu/SelectMenu';

function CategorySelect({ values, setValues }) {
  const categories = [
    { id: 1, name: 'all', value: '' },
    { id: 2, name: 'art', value: 'art' },
    { id: 3, name: 'biography', value: 'biography' },
    { id: 4, name: 'computers', value: 'computers' },
    { id: 5, name: 'history', value: 'history' },
    { id: 6, name: 'medical', value: 'medical' },
    { id: 7, name: 'poetry', value: 'poetry' },
  ];
  const [selected, setSelected] = useState(categories[0]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setValues({ ...values, category: selected.value });
  }, [selected]);

  const filtered =
    query === ''
      ? categories
      : categories.filter(item =>
          item.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <>
      <SelectMenu
        categories={categories}
        label='Categories'
        filtered={filtered}
        selected={selected}
        setSelected={setSelected}
        query={query}
        setQuery={setQuery}
      />
    </>
  );
}

export default CategorySelect;
