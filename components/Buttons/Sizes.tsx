'use client'
import { useState } from 'react'

const SizesBtn = ({ sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'] }) => {
  const [selected, setSelected] = useState('XS')

  return (
    <div className='mt-5 rounded-lg border border-gray-300 p-2'>
      <div className='flex justify-between items-center text-sm text-gray-700'>
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`
              w-10 h-10 flex items-center justify-center rounded-md font-medium transition cursor-pointer
              ${
                selected === size
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100 text-gray-800'
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SizesBtn
