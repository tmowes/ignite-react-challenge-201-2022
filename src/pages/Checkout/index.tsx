import { AddressContainer } from './AddressContainer'
import { CartItensContainer } from './CartItensContainer'
import { PaymentContainer } from './PaymentContainer'
import * as S from './styles'

export function Checkout() {
  return (
    <S.Container>
      <S.LeftSide>
        <S.Title>Complete seu pedido</S.Title>
        <AddressContainer />
        <PaymentContainer />
      </S.LeftSide>
      <S.RightSide>
        <S.Title>Cafés selecionados</S.Title>
        <CartItensContainer />
      </S.RightSide>
    </S.Container>
  )
}
