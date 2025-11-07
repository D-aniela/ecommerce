import ProductRow from '../Product/ProductRow'

export default function CartExample() {
  return (
    <div className='max-w-3xl mx-auto mt-8'>
      <ProductRow
        imageSrc='https://images.unsplash.com/photo-1520975917304-0b4a9dd3303b'
        badge='OUR SOFTEST YET'
        title='Cosy Luxe Straight Leg Joggers'
        subtitle='Rich Maroon - L - Oversized Fit'
        price='£48'
        initialQty={2}
      />
    </div>
  )
}
