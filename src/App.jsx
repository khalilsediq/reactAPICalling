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
        My Personal Shop
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
                className='bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col'
              >
                {/* Image Section */}
                <div className='h-48 w-full relative bg-gray-100'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover'
                  />
                  {/* Optional: Add a subtle overlay or tag if needed, but keeping it clean for now */}
                </div>

                {/* Content Section */}
                <div className='p-3 flex flex-col flex-grow'>
                  {/* Price and Heart Row */}
                  <div className='flex justify-between items-start mb-1'>
                    <h3 className='text-lg font-bold text-gray-900'>
                      Rs {Math.round(item.price * 100).toLocaleString()} 
                    </h3>
                    <button className='text-gray-900 hover:text-red-500 focus:outline-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Title */}
                  <h4 className='text-gray-700 text-base font-normal line-clamp-2 leading-snug mb-2'>
                    {item.title}
                  </h4>

                  {/* Spacer to push footer down */}
                  <div className='mt-auto'>
                    {/* Location */}
                    <p className='text-xs text-gray-500 truncate'>
                      Samanabad, Lahore
                    </p>
                    {/* Date */}
                    <p className='text-xs text-gray-500 mt-1'>
                      2 weeks ago
                    </p>
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
