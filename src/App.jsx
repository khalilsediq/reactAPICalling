import React, { useEffect, useState } from 'react';

const App = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProducts(response);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 p-8 font-sans'>
      <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>
        My Shop
      </h1>

      {loading && (
        <div className='text-center text-xl text-blue-600 font-semibold animate-pulse'>
          Loading products...
        </div>
      )}

      {error && (
        <div className='text-center text-red-500 font-bold bg-red-100 p-4 rounded-lg'>
          Error occurred. Please try again later.
        </div>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto'>
        {products &&
          products.map((item) => {
            return (
              <div
                key={item.id}
                className='bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col'
              >
                {/* Image Section */}
                <div className='h-48 p-4 flex items-center justify-center bg-white relative'>
                  {/* Heart Icon Placeholder */}
                  <div className='absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5 text-gray-600'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                      />
                    </svg>
                  </div>
                  
                  {/* Featured Badge (optional for OLX vibe) */}
                  <div className='absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded text-black'>
                    FEATURED
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className='h-full w-full object-contain'
                  />
                </div>

                {/* Content Section */}
                <div className='p-3 border-t border-gray-100 flex flex-col flex-grow border-l-4 border-l-yellow-400'>
                  {/* Price */}
                  <h3 className='text-xl font-bold text-gray-900'>
                    $ {item.price}
                  </h3>

                  {/* Title */}
                  <h4 className='text-gray-700 text-sm mt-1 line-clamp-2 leading-snug'>
                    {item.title}
                  </h4>

                    {/*  Ratings */}
                    <h5 className='text-gray-700 text-sm mt-1 line-clamp-2 leading-snug' >
                    {item.rating && (
                      <span className='flex items-center gap-1'>
                        <span className='font-bold text-yellow-500'>★ {item.rating.rate}</span>
                        <span className='text-gray-500 text-xs'>({item.rating.count})</span>
                      </span>
                    )}
                    </h5>

                  {/* Location/Date (Mock data since API doesn't provide it) */}
                  <div className='mt-auto pt-3 flex justify-between items-end text-[10px] text-gray-400 uppercase'>
                    <span>Karachi</span>
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
