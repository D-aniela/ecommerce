import ProductList from '../Sections/ProductList'
import Subtitle from '../Texts/Subtitle'
import Title from '../Texts/Title'

const RecommendedProducts = () => {
  return (
    <section>
      <Title title='Productos recomendados' />
      <Subtitle text='Estos son artículos recomendados para ti' />
      <ProductList />
    </section>
  )
}

export default RecommendedProducts
