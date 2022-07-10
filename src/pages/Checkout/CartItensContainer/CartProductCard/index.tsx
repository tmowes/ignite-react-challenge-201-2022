import { Trash } from 'phosphor-react'

import { QuantitySelect } from '../../../../components/QuantitySelect'
import { useCart } from '../../../../contexts'
import { formatCurrencyPTBR } from '../../../../utils/currency/formatPTBR'
import * as S from './styles'
import { CartProductCardProps } from './types'

export function CartProductCard(props: CartProductCardProps) {
  const { product } = props
  const { id, name, price, image, quantity } = product
  const { updateProductAmount, removeProductFromCart } = useCart()
  return (
    <S.Container>
      <S.Image src={`/src/assets/coffees/${image}`} alt={name} />
      <S.Column>
        <S.Title>{name}</S.Title>
        <S.Actions>
          <QuantitySelect
            quantity={quantity ?? 0}
            onIncreaseQuantity={() => updateProductAmount(product, 1)}
            onDecreaseQuantity={() => updateProductAmount(product, -1)}
          />
          <S.RemoveFromCart onClick={() => removeProductFromCart(id)}>
            <Trash size={24} />
            Remover
          </S.RemoveFromCart>
        </S.Actions>
      </S.Column>
      <S.Price>{formatCurrencyPTBR(price)}</S.Price>
    </S.Container>
  )
}
