import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'
import { QuantitySelectProps } from './types'

export function QuantitySelect(props: QuantitySelectProps) {
  const { quantity } = props
  return (
    <S.QuantitySelectCard>
      <S.SubtractButton>
        <Minus size={16} weight="bold" />
      </S.SubtractButton>
      {quantity}
      <S.AddButton>
        <Plus size={16} weight="bold" />
      </S.AddButton>
    </S.QuantitySelectCard>
  )
}
