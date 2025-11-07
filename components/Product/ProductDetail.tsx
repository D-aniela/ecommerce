import Image from 'next/image'
import IconButton from '../Buttons/Icon'
import ColorsBtn from '../Buttons/Colors'
import SizesBtn from '../Buttons/Sizes'
import AddToCartBtn from '../Buttons/AddToCart'

export default function ProductDetail() {
  return (
    <section className='w-full bg-white py-12 px-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        {/* Imagen (columna izquierda) */}
        <div className='relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden'>
          <Image
            src='https://images.unsplash.com/photo-1542291026-7eec264c27ff'
            alt='Lifestyle image'
            fill
            className='object-cover object-center'
            priority
          />
        </div>

        {/* Texto (columna derecha) */}
        <div className='flex flex-col justify-center text-gray-800 px-2'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            SUDADERA CON GRÁFICO
          </h2>
          <h3 className='text-xl md:text-xl text-gray-600 mb-4'>
            Descripción de la sudadera
          </h3>
          <p className='font-extrabold mb-10'>$50.00</p>
          <div className='flex flex-row gap-3'>
            <IconButton src='/icons/heart.svg' alt='heart' />
            <IconButton src='/icons/share.svg' alt='heart' />
          </div>
          <div>
            <ColorsBtn colors={['000000', 'ffffff', 'FF2A00']} />
          </div>
          <p className='mt-5 text-sm'>Selecciona una medida</p>
          <SizesBtn />
          <AddToCartBtn />
        </div>
      </div>
    </section>
  )
}
