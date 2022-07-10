import { MapPinLine } from 'phosphor-react'

import * as S from './styles'

export function AddressContainer() {
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
          <S.AddressInput placeholder="CEP" />
        </S.AddressRow>
        <S.AddressRow>
          <S.AddressInput flex placeholder="Rua, Av, Travessa, etc." />
        </S.AddressRow>
        <S.AddressRow>
          <S.AddressInput placeholder="Número" />
          <S.AddressInput flex placeholder="Complemento" />
        </S.AddressRow>
        <S.AddressRow>
          <S.AddressInput placeholder="Bairro" />
          <S.AddressInput flex placeholder="Cidade" />
          <S.UFInput placeholder="UF" />
        </S.AddressRow>
      </S.AddressForm>
    </S.AddressContainer>
  )
}
