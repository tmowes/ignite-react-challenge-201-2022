import { ReactNode } from 'react'

export type CheckoutProviderProps = {
  children: ReactNode
}

export type CheckoutContextData = {
  selectedPayMethod: PayMethod | null
  previousAddress: AddressData
  saveCurrentAddress: (address: AddressData) => void
  updatePayMethod: (payMethod: PayMethod) => void
}

export type AddressData = {
  zipCode: string
  street: string
  houseNumber: string
  neighborhood: string
  city: string
  state: string
  complement?: string
}

export type PayMethod = 'creditCard' | 'debitCard' | 'cash'
