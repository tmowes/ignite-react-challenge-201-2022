import React from 'react'

import {
  Bank,
  Coffee,
  CreditCard,
  CurrencyDollar,
  MapPin,
  MapPinLine,
  Minus,
  Money,
  Package,
  Plus,
  ShoppingCart,
  Timer,
  Trash,
} from 'phosphor-react'

export function Icons() {
  return (
    <>
      <MapPin size={24} weight="fill" />
      <MapPinLine size={24} />
      <Trash size={24} />
      <CurrencyDollar size={24} />
      <ShoppingCart size={24} weight="fill" />
      <Timer size={24} weight="fill" />
      <Package size={24} weight="fill" />
      <Coffee size={24} weight="fill" />
      <Plus size={24} weight="bold" />
      <Minus size={24} weight="bold" />
      <CreditCard size={24} />
      <Money size={24} />
      <Bank size={24} />
    </>
  )
}
