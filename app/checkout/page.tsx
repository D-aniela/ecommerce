import Link from 'next/link'
import React from 'react'

const Checkout = () => {
  return (
    <div className='min-h-screen bg-white py-12'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* LEFT: formulario & botones express (ocupa 2 columnas en md) */}
          <main className='md:col-span-2'>
            <div className='flex flex-col items-center md:items-start gap-6 mb-8'>
              <h3 className='text-sm text-gray-500'>Express checkout</h3>
              <div className='flex items-center gap-4'>
                <button className='px-8 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md'>
                  shop
                </button>
                <button className='px-6 py-3 rounded-full bg-yellow-300 font-semibold shadow-md'>
                  PayPal
                </button>
                <button className='px-6 py-3 rounded-full bg-black text-white font-semibold shadow-md'>
                  G Pay
                </button>
              </div>
              <div className='w-full flex items-center gap-4 text-sm text-gray-400'>
                <div className='flex-grow border-t'></div>
                <span className='px-2'>OR</span>
                <div className='flex-grow border-t'></div>
              </div>
            </div>
          </main>

          <aside className='bg-gray-50 p-6 rounded-md shadow-sm'>
            <div className='flex items-start gap-4'>
              <div className='w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center'>
                IMG
              </div>
              <div className='flex-1'>
                <div className='font-medium'>Título</div>
                <div className='text-sm text-gray-500'>5</div>
              </div>
              <div className='text-right font-medium'>£20</div>
            </div>

            <div className='mt-6'>
              <label className='sr-only'>
                Gift card, redemption or discount code
              </label>
              {/* <div className='flex gap-3'>
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder='Gift Card, Redemption or Discount code'
                  className='flex-1 px-4 py-3 rounded-md border focus:outline-none'
                />
                <button
                  onClick={applyCoupon}
                  className='px-4 py-2 rounded-full bg-gray-200'
                >
                  APPLY
                </button>
              </div> */}
            </div>

            <div className='mt-4'>
              <a href='#' className='text-sm underline'>
                Been referred by a friend?
              </a>
            </div>

            <div className='mt-6 text-sm text-gray-700'>
              <div className='flex justify-between py-1'>
                <span>Subtotal</span>
                <span>£60</span>
              </div>
              <div className='flex justify-between py-1'>
                <span>Shipping</span>
                <span className='text-gray-400'>Enter shipping address</span>
              </div>
              <div className='flex justify-between py-3 border-t mt-3'>
                <div>
                  <div className='text-sm text-gray-500'>Total</div>
                  <div className='text-xs text-gray-400'>
                    Including £60 in taxes
                  </div>
                </div>
                <div className='text-right'>
                  <div className='text-lg font-bold'>£60</div>
                  <div className='text-xs text-gray-500'>GBP</div>
                </div>
              </div>
            </div>

            <div className='mt-6 flex flex-col gap-3'>
              <button className='w-full px-4 py-3 rounded-md bg-black text-white font-semibold'>
                Checkout
              </button>
              <Link
                href='/shop'
                className='w-full text-center px-4 py-3 rounded-md border'
              >
                Continue shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Checkout
