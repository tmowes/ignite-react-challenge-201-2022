import { products } from '../../../constants'
import { ProductCard } from './ProductCard'
import * as S from './styles'

export function ProductsSection() {
  return (
    <S.Container>
      <S.Title>Nossos cafés</S.Title>
      <S.Products>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </S.Products>
    </S.Container>
  )
}
