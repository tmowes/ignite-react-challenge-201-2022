import { Bank, CreditCard, Money, CurrencyDollar } from 'phosphor-react'

import { useCheckout } from '../../../contexts'
import * as S from './styles'

export function PaymentContainer() {
  const { selectedPayMethod, updatePayMethod } = useCheckout()
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
        <S.PaymentOption
          type="button"
          selected={selectedPayMethod === 'creditCard'}
          onClick={() => updatePayMethod('creditCard')}
        >
          <CreditCard size={22} />
          <S.PaymentOptionTitle>cartão de crédito</S.PaymentOptionTitle>
        </S.PaymentOption>
        <S.PaymentOption
          type="button"
          selected={selectedPayMethod === 'debitCard'}
          onClick={() => updatePayMethod('debitCard')}
        >
          <Bank size={22} />
          <S.PaymentOptionTitle>cartão de débito</S.PaymentOptionTitle>
        </S.PaymentOption>
        <S.PaymentOption
          type="button"
          selected={selectedPayMethod === 'cash'}
          onClick={() => updatePayMethod('cash')}
        >
          <Money size={22} />
          <S.PaymentOptionTitle>dinheiro</S.PaymentOptionTitle>
        </S.PaymentOption>
      </S.PaymentOptions>
    </S.PaymentContainer>
  )
}
