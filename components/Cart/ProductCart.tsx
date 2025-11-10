import ProductRow from '../Product/ProductRow'

export default function CartExample() {
  return (
    <div className='max-w-3xl mx-auto mt-8'>
      <ProductRow
        imageSrc='https://images.unsplash.com/photo-1542291026-7eec264c27ff'
        title='Cosy Luxe Straight Leg Joggers'
        subtitle='Rich Maroon - L - Oversized Fit'
        price='£48'
        initialQty={2}
      />
    </div>
  )
}
