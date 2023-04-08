import { useState, useEffect } from 'react';
import SelectMenu from '../SelectMenu/SelectMenu';

function OrderSelect({ values, setValues }) {
  const categories = [
    { id: 1, name: 'relevance', value: 'relevance' },
    { id: 2, name: 'newest', value: 'newest' },
  ];

  const [selected, setSelected] = useState(categories[0]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setValues({ ...values, order: selected.value });
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
        label='Sorting by'
        filtered={filtered}
        selected={selected}
        setSelected={setSelected}
        query={query}
        setQuery={setQuery}
      />
    </>
  );
}

export default OrderSelect;
