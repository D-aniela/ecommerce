import ProductCard from '../Cards/ProductCard'

const ProductList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-white justify-items-center'>
      {[...Array(10)].map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  )
}

export default ProductList
