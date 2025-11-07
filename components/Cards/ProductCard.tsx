import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard() {
  return (
    <Link href='/product/1'>
      <div className='w-2xs relative bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200'>
        {/* Product Image */}
        <div className='relative w-full aspect-[3/4] overflow-hidden'>
          <Image
            src='https://images.unsplash.com/photo-1417325384643-aac51acc9e5d' // reemplaza con tu ruta real
            alt='Cosy Luxe Hoodie'
            fill
            className='object-cover hover:scale-105 transition-transform duration-300'
          />

          {/* Wishlist Icon */}
          <button
            aria-label='Add to wishlist'
            className='absolute top-2 right-2 p-2 bg-white/70 rounded-full hover:bg-white transition'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 text-gray-700'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
          </button>

          {/* Badge */}
          <span className='absolute bottom-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded shadow-md text-black'>
            NEW
          </span>
        </div>

        {/* Product Info */}
        <div className='p-3 space-y-1'>
          <h3 className='text-sm font-semibold text-gray-900 leading-tight'>
            Cosy Luxe Hoodie
          </h3>
          <p className='text-sm text-gray-600'>Oversized Fit</p>
          <p className='text-sm text-blue-700 font-medium'>Rich Maroon</p>

          <div className='flex items-center justify-between pt-1'>
            <p className='text-sm font-bold text-gray-900'>£50</p>

            {/* Rating */}
            <div className='flex items-center text-sm text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
                className='w-4 h-4 text-yellow-400 mr-1'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.387 2.462a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.951 2.728c-.784.57-1.838-.197-1.539-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.046 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.975z' />
              </svg>
              <span>4.5</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
