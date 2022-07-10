import { Bank, CreditCard, Money, CurrencyDollar } from 'phosphor-react'

import * as S from './styles'

export function PaymentContainer() {
  return (
    <S.PaymentContainer>
      <S.PaymentHeader>
        <CurrencyDollar size={24} weight="fill" />
        <S.Column>
          <S.PaymentTitle>Forma de pagamento</S.PaymentTitle>
          <S.PaymentSubTitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </S.PaymentSubTitle>
        </S.Column>
      </S.PaymentHeader>
      <S.PaymentOptions>
        <S.PaymentOption selected>
          <CreditCard size={22} />
          <S.PaymentOptionTitle>cartão de crédito</S.PaymentOptionTitle>
        </S.PaymentOption>
        <S.PaymentOption>
          <Money size={22} />
          <S.PaymentOptionTitle>dinheiro</S.PaymentOptionTitle>
        </S.PaymentOption>
        <S.PaymentOption>
          <Bank size={22} />
          <S.PaymentOptionTitle>cartão de débito</S.PaymentOptionTitle>
        </S.PaymentOption>
      </S.PaymentOptions>
    </S.PaymentContainer>
  )
}
