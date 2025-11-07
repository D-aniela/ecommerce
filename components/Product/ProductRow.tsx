'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductRow({
  imageSrc = '/images/cosy-luxe-hoodie.jpg',
  badge = 'OUR SOFTEST YET',
  title = 'Cosy Luxe Straight Leg Joggers',
  subtitle = 'Rich Maroon - L - Oversized Fit',
  price = '£48',
  initialQty = 1,
}) {
  const [qty, setQty] = useState(Math.max(1, initialQty))

  function dec() {
    setQty((q) => Math.max(1, q - 1))
  }
  function inc() {
    setQty((q) => q + 1)
  }

  return (
    <article className='w-full bg-white'>
      <div className='relative flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border-b border-gray-200'>
        {/* Image */}
        <div className='relative flex-shrink-0 w-20 h-28 md:w-24 md:h-32 rounded-md overflow-hidden bg-gray-100'>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className='object-cover object-center'
            // remove priority in production if many images
          />

          {/* Badge positioned over image */}
          {badge && (
            <div className='absolute left-1 bottom-1 bg-white text-xs font-semibold px-2 py-1 rounded shadow text-gray-800'>
              {badge}
            </div>
          )}
        </div>

        {/* Main content: title + subtitle */}
        <div className='flex-1 min-w-0'>
          <h3 className='text-base font-semibold text-gray-900 truncate'>
            {title}
          </h3>
          <p className='text-sm text-gray-500 mt-1'>{subtitle}</p>

          {/* Price and quantity on the same row on md+, stacked on mobile */}
          <div className='mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3'>
            <div className='flex items-center gap-4'>
              <div className='text-lg font-bold text-gray-900'>{price}</div>
            </div>

            {/* Quantity controls */}
            <div className='flex items-center gap-3'>
              <div className='flex items-center border border-gray-200 rounded-md'>
                <button
                  onClick={dec}
                  aria-label='Decrease quantity'
                  className='px-3 py-1 text-lg leading-none hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
                  disabled={qty <= 1}
                >
                  −
                </button>
                <div className='px-4 py-1 w-12 text-center'>{qty}</div>
                <button
                  onClick={inc}
                  aria-label='Increase quantity'
                  className='px-3 py-1 text-lg leading-none hover:bg-gray-100'
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right-side actions: wishlist (heart) */}
        <div className='absolute top-3 right-3 md:static md:ml-4'>
          <button
            aria-label='Add to wishlist'
            className='p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 shadow-sm'
          >
            {/* simple heart svg */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 text-gray-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 21.182 4.318 12.682a4.5 4.5 0 010-6.364z'
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
