import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import illustrationImg from '../../assets/success.svg'
import { useCheckout } from '../../contexts'
import * as S from './styles'

const paymentMethods = {
  creditCard: 'Cartão de crédito',
  debitCard: 'Cartão de débito',
  cash: 'Dinheiro',
}

export function Success() {
  const { previousAddress, selectedPayMethod } = useCheckout()

  const { neighborhood, city, state, street, houseNumber } = previousAddress

  return (
    <S.Container>
      <S.LeftSide>
        <S.SuccessHeader>
          <S.Title>Uhu! Pedido confirmado</S.Title>
          <S.Subtitle>Agora é só aguardar que logo o café chegará até você</S.Subtitle>
        </S.SuccessHeader>
        <S.SuccessDetailsBorder>
          <S.SuccessDetailsCard>
            <S.DetailsAddress>
              <MapPin size={24} weight="fill" />
              <S.Column>
                <S.Text>
                  Entrega em{' '}
                  <S.Strong>
                    {street}, {houseNumber}
                  </S.Strong>
                </S.Text>
                <S.Text>
                  {neighborhood} - {city}, {state}
                </S.Text>
              </S.Column>
            </S.DetailsAddress>
            <S.DetailsDeliveryTime>
              <Timer size={24} weight="fill" />
              <S.Column>
                <S.Text>Previsão de entrega</S.Text>
                <S.Strong>20 min - 30 min</S.Strong>
              </S.Column>
            </S.DetailsDeliveryTime>
            <S.DetailsPayment>
              <CurrencyDollar size={24} />
              <S.Column>
                <S.Text>Pagamento na entrega</S.Text>
                <S.Strong>{paymentMethods[selectedPayMethod!]}</S.Strong>
              </S.Column>
            </S.DetailsPayment>
          </S.SuccessDetailsCard>
        </S.SuccessDetailsBorder>
      </S.LeftSide>
      <S.Illustration src={illustrationImg} alt="" />
    </S.Container>
  )
}
