import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'
import { QuantitySelectProps } from './types'

export function QuantitySelect(props: QuantitySelectProps) {
  const { quantity, onDecreaseQuantity, onIncreaseQuantity } = props
  return (
    <S.QuantitySelectCard>
      <S.SubtractButton disabled={quantity <= 0} onClick={onDecreaseQuantity}>
        <Minus size={16} weight="bold" />
      </S.SubtractButton>
      {quantity}
      <S.AddButton onClick={onIncreaseQuantity}>
        <Plus size={16} weight="bold" />
      </S.AddButton>
    </S.QuantitySelectCard>
  )
}
