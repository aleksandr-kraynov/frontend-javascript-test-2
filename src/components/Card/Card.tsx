import { NavLink } from 'react-router-dom';

function Card({ item }) {
  let image = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
  let title = item.volumeInfo.title;
  let author = item.volumeInfo.authors && item.volumeInfo.authors[0];
  let categories = item.volumeInfo.categories && item.volumeInfo.categories[0];

  return (
    <NavLink key={item.id} to={`/detail/${item.id}`}>
      <a key={item.id} href={item.href} className='group'>
        <div className='text-left p-6 aspect-w-1 aspect-h-1 w-full min-h-full overflow-hidden rounded-lg bg-neutral-200 xl:aspect-w-7 xl:aspect-h-8'>
          <img
            src={image}
            alt={title}
            className='w-full h-[180px] object-cover object-center group-hover:opacity-75 w-1/2 mx-auto shadow-2xl'
          />
          <p className='mt-6 text-sm text-gray-400 underline'>{categories}</p>
          <h3 className='mt-1 text-lg font-medium text-gray-900'>{title}</h3>
          <p className='mt-1 text-base text-gray-500'>{author}</p>
        </div>
      </a>
    </NavLink>
  );
}

export default Card;
