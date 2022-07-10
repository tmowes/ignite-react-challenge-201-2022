import { ActionTypes, Product } from './types'

export function addProductToCartAction(newProduct: Product) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: { newProduct },
  }
}

export function removeProductFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: { id },
  }
}

export function updateProductAmountAction(product: Product, amount: number) {
  return {
    type: ActionTypes.UPDATE_PRODUCT_AMOUNT,
    payload: { product, amount },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
