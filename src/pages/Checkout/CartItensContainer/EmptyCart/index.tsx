import { NavLink } from 'react-router-dom'

import * as S from './styles'

export function EmptyCart() {
  return (
    <S.Container>
      <S.Title>Seu carrinho está vazio.</S.Title>
      <NavLink to="/">
        <S.SubTitle>Voltar para a lista de produtos</S.SubTitle>
      </NavLink>
    </S.Container>
  )
}
