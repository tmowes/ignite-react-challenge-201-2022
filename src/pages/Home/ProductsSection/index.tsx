import { products } from '../../../constants'
import { useCart } from '../../../contexts'
import { ProductCard } from './ProductCard'
import * as S from './styles'

export function ProductsSection() {
  const { addProductToCart } = useCart()

  return (
    <S.Container>
      <S.Title>Nossos cafés</S.Title>
      <S.Products>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddProduct={() => addProductToCart(product)}
          />
        ))}
      </S.Products>
    </S.Container>
  )
}
