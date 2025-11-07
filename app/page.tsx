import ProductList from '@/components/Sections/ProductList'

export default function Home() {
  return (
    <>
      <div
        className='w-full h-[80vh] bg-cover bg-center flex flex-col justify-center items-start px-10 text-white'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e')",
        }}
      >
        <p className='text-6xl font-bold'>ESTE ES UN TÍTULO</p>
        <p className='mt-4 text-lg max-w-lg'>
          Texto o subtítulo encima de la imagen
        </p>
      </div>

      <ProductList />
    </>
  )
}
