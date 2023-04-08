function DetailCard({ book }) {
  let image = book?.volumeInfo?.imageLinks && book.volumeInfo.imageLinks.thumbnail;
  let title = book?.volumeInfo?.title && book.volumeInfo.title;
  let author = book?.volumeInfo?.authors && book.volumeInfo.authors;
  let categories = book?.volumeInfo?.categories && book.volumeInfo.categories;
  let description = book?.volumeInfo?.description && book.volumeInfo.description;

  return (
    <div className='flex mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='w-1/2 py-14 px-16 bg-neutral-200'>
        <img
          className='w-full object-cover object-center group-hover:opacity-75 w-[320px] mx-auto shadow-2xl'
          src={image}
          alt={title}
        />
      </div>
      <div className='w-1/2 py-14 px-16 text-left'>
        <p className='mb-6 text-sm text-gray-500'>{categories}</p>
        <h3 className='mt-1 text-2xl font-medium text-gray-900'>{title}</h3>
        <p className='mt-1 text-base text-gray-400 underline'>{author}</p>
        <div className='py-14'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
