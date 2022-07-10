import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import * as S from './styles'

const cartQuantity = 3

export function Header() {
  return (
    <S.Container>
      <NavLink to="/" title="Home">
        <S.Logo src={logoImg} />
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
  )
}
