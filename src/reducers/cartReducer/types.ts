export type ActionReducerProps = {
  type: ActionTypes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}

export type Product = {
  id: string
  name: string
  description: string
  image: string
  tags: string[]
  price: number
  quantity: number
}

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT',
  CLEAR_CART = 'CLEAR_CART',
}

export type CartState = {
  cart: Product[]
}
