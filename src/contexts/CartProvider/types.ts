import { ReactNode } from 'react'

export type CartProviderProps = {
  children: ReactNode
}

export type CartContextData = {
  cart: Product[]
  addProductToCart: (product: Product) => void
  removeProductFromCart: (id: string) => void
  updateProductAmount: (product: Product, amount: number) => void
  clearCart: () => void
}

export type Product = {
  id: string
  name: string
  description: string
  image: string
  tags: string[]
  price: number
  quantity?: number
}
