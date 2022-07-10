import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { useCart } from '../../contexts'
import { Logo } from './Logo'
import * as S from './styles'

export function Header() {
  const { cart } = useCart()
  const cartQuantity = cart.reduce((acc, { quantity }) => (quantity ? acc + quantity : acc), 0)
  return (
    <S.HeaderWrapper>
      <S.Container>
        <NavLink to="/" title="Home">
          <Logo />
        </NavLink>
        <S.Menu>
          <span>
            <MapPin size={24} weight="fill" />
            Timbó, SC
          </span>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart size={24} weight="fill" />
            {cartQuantity > 0 && <S.NotificationDot>{cartQuantity}</S.NotificationDot>}
          </NavLink>
        </S.Menu>
      </S.Container>
    </S.HeaderWrapper>
  )
}
