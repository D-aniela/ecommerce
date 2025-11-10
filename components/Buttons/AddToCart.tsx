'use client'
import { useState } from 'react'
import ProductRow from '../Product/ProductRow'
import Link from 'next/link'

const AddToCartBtn = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setOpen(true)
        }}
        className='flex justify-center items-center bg-black text-white mt-5 h-14 rounded-full cursor-pointer'
      >
        <p>Agregar al carrito</p>
      </button>
      {open && (
        <>
          <div className='absolute right-0 top-0 h-full bg-white w-[35%] p-10'>
            <div className='flex justify-between'>
              <p className='font-bold'>CARRITO</p>
              <button
                onClick={() => setOpen(false)}
                className='font-bold cursor-pointer'
              >
                x
              </button>
            </div>
            <ProductRow />
            <Link href={'/checkout'}>
              <button className='flex absolute right-5 bottom-10 bg-black w-[90%] text-white h-10 rounded-full justify-center items-center cursor-pointer'>
                PROCEDER AL PAGO
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  )
}

export default AddToCartBtn
