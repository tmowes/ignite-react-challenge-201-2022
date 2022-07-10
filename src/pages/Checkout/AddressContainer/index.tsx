import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import * as S from './styles'

export function AddressContainer() {
  const { register } = useFormContext()

  return (
    <S.AddressContainer>
      <S.AddressHeader>
        <MapPinLine size={24} />
        <S.Column>
          <S.AddressTitle>Endereço de entrega</S.AddressTitle>
          <S.AddressSubTitle>
            Informe o endereço onde deseja receber seu pedido
          </S.AddressSubTitle>
        </S.Column>
      </S.AddressHeader>
      <S.AddressForm>
        <S.AddressRow>
          <S.AddressInput placeholder="CEP" {...register('zipCode')} />
        </S.AddressRow>
        <S.AddressRow>
          <S.AddressInput flex placeholder="Rua, Av, Travessa, etc." {...register('street')} />
        </S.AddressRow>
        <S.AddressRow>
          <S.AddressInput placeholder="Número" {...register('houseNumber')} />
          <S.AddressInput flex placeholder="Complemento" {...register('complement')} />
        </S.AddressRow>
        <S.AddressRow>
          <S.AddressInput placeholder="Bairro" {...register('neighborhood')} />
          <S.AddressInput flex placeholder="Cidade" {...register('city')} />
          <S.UFInput placeholder="UF" {...register('state')} />
        </S.AddressRow>
      </S.AddressForm>
    </S.AddressContainer>
  )
}
