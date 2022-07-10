import { Trash } from 'phosphor-react'

import { QuantitySelect } from '../../../../components/QuantitySelect'
import { formatCurrencyPTBR } from '../../../../utils/currency/formatPTBR'
import * as S from './styles'
import { CartProductCardProps } from './types'

export function CartProductCard(props: CartProductCardProps) {
  const { name, price, image } = props
  return (
    <S.Container>
      <S.Image src={`/src/assets/coffees/${image}`} alt={name} />
      <S.Column>
        <S.Title>{name}</S.Title>
        <S.Actions>
          <QuantitySelect quantity={1} />
          <S.RemoveFromCart>
            <Trash size={24} />
            Remover
          </S.RemoveFromCart>
        </S.Actions>
      </S.Column>
      <S.Price>{formatCurrencyPTBR(price)}</S.Price>
    </S.Container>
  )
}
