import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

import { CART_KEY_STORAGE } from '../../constants/localStorageKeys'
import { cartReducer } from '../../reducers/cartReducer'
import { ActionTypes } from '../../reducers/cartReducer/types'
import { CartContextData, CartProviderProps, Product } from './types'

const CartContext = createContext({} as CartContextData)

const cartInitialState = { cart: [] }

export function CartProvider(props: CartProviderProps) {
  const { children } = props

  const [cartState, dispatch] = useReducer(cartReducer, cartInitialState, () => {
    const storedStateAsJSON = localStorage.getItem(CART_KEY_STORAGE)
    return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : cartInitialState
  })

  const { cart } = cartState

  const addProductToCart = (newProduct: Product) => {
    dispatch({ type: ActionTypes.ADD_NEW_PRODUCT, payload: { newProduct } })
  }

  const removeProductFromCart = (id: string) => {
    dispatch({ type: ActionTypes.REMOVE_PRODUCT_FROM_CART, payload: { id } })
  }

  const updateProductAmount = (product: Product, amount: number) => {
    dispatch({ type: ActionTypes.UPDATE_PRODUCT_AMOUNT, payload: { product, amount } })
  }

  const clearCart = () => {
    dispatch({ type: ActionTypes.CLEAR_CART })
  }

  useEffect(() => {
    localStorage.setItem(CART_KEY_STORAGE, JSON.stringify(cartState))
  }, [cartState])

  const provideValues = useMemo(
    () => ({
      cart,
      addProductToCart,
      removeProductFromCart,
      updateProductAmount,
      clearCart,
    }),
    [cart],
  )

  return <CartContext.Provider value={provideValues}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
