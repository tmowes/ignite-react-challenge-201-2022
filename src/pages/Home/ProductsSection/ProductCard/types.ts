import { Product } from '../../../../contexts/CartProvider/types'

export type ProductCardProps = {
  product: Product
  onAddProduct: () => void
}
