import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { deliveryFee } from '../../../constants'
import { useCart, useCheckout } from '../../../contexts'
import { formatCurrencyPTBR } from '../../../utils/currency/formatPTBR'
import { CartProductCard } from './CartProductCard'
import { EmptyCart } from './EmptyCart'
import * as S from './styles'

export function CartItensContainer() {
  const { cart } = useCart()
  const { selectedPayMethod } = useCheckout()

  const cartIsEmpty = cart.length <= 0

  const cartTotalProducts = cart.reduce(
    (acc, { price, quantity }) => (price && quantity ? acc + price * quantity : acc),
    0,
  )

  return (
    <S.CartItemsContainer>
      {cartIsEmpty && <EmptyCart />}

      {!cartIsEmpty &&
        cart.map((product) => (
          <div key={product.id}>
            <CartProductCard product={product} />
            <S.Separator />
          </div>
        ))}

      <S.Separator />
      <S.TotalContainer>
        <S.Row>
          <S.TotalTitle>Total de itens</S.TotalTitle>
          <S.TotalValue>{formatCurrencyPTBR(cartTotalProducts)}</S.TotalValue>
        </S.Row>
        <S.Row>
          <S.TotalTitle>Entrega</S.TotalTitle>
          <S.TotalValue>{formatCurrencyPTBR(deliveryFee)}</S.TotalValue>
        </S.Row>
        <S.Row>
          <S.SumTotalText>Total</S.SumTotalText>
          <S.SumTotalText>{formatCurrencyPTBR(cartTotalProducts + deliveryFee)}</S.SumTotalText>
        </S.Row>
      </S.TotalContainer>
      <S.ConfirmCheckout type="submit" disabled={cartIsEmpty || !selectedPayMethod}>
        confirmar pedido
      </S.ConfirmCheckout>
    </S.CartItemsContainer>
  )
}
