import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { ADDRESS_KEY_STORAGE, PAYMETHOD_KEY_STORAGE } from '../../constants/localStorageKeys'
import { AddressData, CheckoutContextData, CheckoutProviderProps, PayMethod } from './types'

const CheckoutContext = createContext({} as CheckoutContextData)

const initialFormValues = {
  street: '',
  houseNumber: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
  zipCode: '',
}

export function CheckoutProvider(props: CheckoutProviderProps) {
  const { children } = props
  const [selectedPayMethod, setSelectedPayMethod] = useState<PayMethod | null>(() => {
    const prevPayMethod = localStorage.getItem(PAYMETHOD_KEY_STORAGE)
    return prevPayMethod ? JSON.parse(prevPayMethod) : null
  })
  const [previousAddress, setPreviousAddress] = useState(() => {
    const storedStateAsJSON = localStorage.getItem(ADDRESS_KEY_STORAGE)
    return storedStateAsJSON
      ? (JSON.parse(storedStateAsJSON) as AddressData)
      : initialFormValues
  })
  const updatePayMethod = (payMethod: PayMethod) => {
    setSelectedPayMethod(payMethod)
  }

  const saveCurrentAddress = (address: AddressData) => {
    setPreviousAddress(address)
  }

  useEffect(() => {
    localStorage.setItem(ADDRESS_KEY_STORAGE, JSON.stringify(previousAddress))
  }, [previousAddress])

  useEffect(() => {
    localStorage.setItem(PAYMETHOD_KEY_STORAGE, JSON.stringify(selectedPayMethod))
  }, [selectedPayMethod])

  const provideValues = useMemo(
    () => ({
      selectedPayMethod,
      previousAddress,
      updatePayMethod,
      saveCurrentAddress,
    }),
    [previousAddress, selectedPayMethod],
  )

  return <CheckoutContext.Provider value={provideValues}>{children}</CheckoutContext.Provider>
}

export function useCheckout() {
  const context = useContext(CheckoutContext)
  if (!context) {
    throw new Error('useCheckout must be used within a CheckoutProvider')
  }
  return context
}
