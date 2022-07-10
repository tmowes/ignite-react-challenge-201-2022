/* eslint-disable sonarjs/no-small-switch */
import { produce } from 'immer'

import { ActionTypes, CartState, ActionReducerProps } from './types'

export function cartReducer(state: CartState, { type, payload }: ActionReducerProps) {
  switch (type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      const productIndex = state.cart.findIndex(({ id }) => id === payload!.newProduct.id)

      if (productIndex < 0) {
        return produce(state, (draft) => {
          draft.cart.push({ ...payload!.newProduct, quantity: 1 })
        })
      }
      return state

      return produce(state, (draft) => {
        draft.cart[productIndex].quantity += 1
      })
    }

    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(({ id }) => id !== payload!.id)
      })

    case ActionTypes.UPDATE_PRODUCT_AMOUNT: {
      const productIndex = state.cart.findIndex(({ id }) => id === payload!.product.id)

      if (productIndex < 0) {
        if (payload!.amount < 0) return state
        return produce(state, (draft) => {
          draft.cart.push({ ...payload!.product, quantity: 1 })
        })
      }

      const updatedAmount = state.cart[productIndex].quantity + payload!.amount

      if (updatedAmount <= 0) {
        return produce(state, (draft) => {
          draft.cart = draft.cart.filter(({ id }) => id !== payload!.product.id)
        })
      }

      return produce(state, (draft) => {
        draft.cart[productIndex].quantity += payload!.amount
      })
    }

    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.cart = []
      })

    default:
      return state
  }
}
