import { NavLink } from 'react-router-dom'

import { products } from '../../../constants'
import { CartProductCard } from './CartProductCard'
import { EmptyCart } from './EmptyCart'
import * as S from './styles'

export function CartItensContainer() {
  return (
    <S.CartItemsContainer>
      {products.map((product) => (
        <div>
          <CartProductCard {...product} />
          <S.Separator />
        </div>
      ))}

      {/* <EmptyCart /> */}
      <S.Separator />
      <S.TotalContainer>
        <S.Row>
          <S.TotalTitle>Total de itens</S.TotalTitle>
          <S.TotalValue>R$ 0,00</S.TotalValue>
        </S.Row>
        <S.Row>
          <S.TotalTitle>Entrega</S.TotalTitle>
          <S.TotalValue>R$ 0,00</S.TotalValue>
        </S.Row>
        <S.Row>
          <S.SumTotalText>Total</S.SumTotalText>
          <S.SumTotalText>R$ 0,00</S.SumTotalText>
        </S.Row>
      </S.TotalContainer>
      <NavLink to="/checkout/success">
        <S.ConfirmCheckout>confirmar pedido</S.ConfirmCheckout>
      </NavLink>
    </S.CartItemsContainer>
  )
}
