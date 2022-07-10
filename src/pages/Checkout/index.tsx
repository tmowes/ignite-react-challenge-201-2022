import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useCart, useCheckout } from '../../contexts'
import { AddressContainer } from './AddressContainer'
import { AddressFormData, newAddressFormSchema } from './addressFormSchema'
import { CartItensContainer } from './CartItensContainer'
import { PaymentContainer } from './PaymentContainer'
import * as S from './styles'

export function Checkout() {
  const navigate = useNavigate()
  const { clearCart } = useCart()
  const { saveCurrentAddress, previousAddress } = useCheckout()
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(newAddressFormSchema),
    defaultValues: { ...previousAddress },
  })

  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = addressForm

  const onSubmitAddress = (data: AddressFormData) => {
    saveCurrentAddress(data)
    navigate('/checkout/success')
    clearCart()
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmitAddress)}>
      <S.Container>
        <S.LeftSide>
          <S.Title>Complete seu pedido</S.Title>
          <FormProvider {...addressForm}>
            <AddressContainer />
          </FormProvider>
          <PaymentContainer />
        </S.LeftSide>
        <S.RightSide>
          <S.Title>Cafés selecionados</S.Title>
          <CartItensContainer />
        </S.RightSide>
      </S.Container>
    </form>
  )
}
