import { ShoppingCart } from 'phosphor-react'

import { QuantitySelect } from '../../../../components/QuantitySelect'
import { useCart } from '../../../../contexts'
import * as S from './styles'
import { ProductCardProps } from './types'

export function ProductCard(props: ProductCardProps) {
  const { product, onAddProduct } = props
  const { id, name, description, price, tags, image } = product
  const { updateProductAmount, cart } = useCart()
  const quantity = cart.find((c) => c.id === id)?.quantity ?? 0

  return (
    <S.Container>
      <S.Image src={`/src/assets/coffees/${image}`} alt={name} />
      <S.Tags>
        {tags.map((tag) => (
          <S.Tag key={tag}>{tag.toUpperCase()}</S.Tag>
        ))}
      </S.Tags>
      <S.Content>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
      <S.CardFooter>
        <S.Price>
          <S.PrefixPrice>R$ </S.PrefixPrice>
          {price.toFixed(2).replace('.', ',')}
        </S.Price>
        <S.CardAction>
          <QuantitySelect
            quantity={quantity}
            onIncreaseQuantity={() => updateProductAmount(product, 1)}
            onDecreaseQuantity={() => updateProductAmount(product, -1)}
          />
          <S.AddToCart onClick={onAddProduct}>
            <ShoppingCart size={24} weight="fill" />
          </S.AddToCart>
        </S.CardAction>
      </S.CardFooter>
    </S.Container>
  )
}
