import { ShoppingCart } from 'phosphor-react'

import { QuantitySelect } from '../../../../components/QuantitySelect'
import * as S from './styles'
import { ProductCardProps } from './types'

export function ProductCard(props: ProductCardProps) {
  const { name, description, price, tags, image } = props
  return (
    <S.Container>
      <S.Image src={`/src/assets/coffees/${image}`} alt={name} />
      <S.Tags>
        {tags.map((tag) => (
          <S.Tag key={tag}>{tag.toUpperCase()}</S.Tag>
        ))}
      </S.Tags>
      <S.Content>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
      <S.CardFooter>
        <S.Price>
          <S.PrefixPrice>R$ </S.PrefixPrice>
          {price.toFixed(2).replace('.', ',')}
        </S.Price>
        <S.CardAction>
          <QuantitySelect quantity={0} />
          <S.AddToCart>
            <ShoppingCart size={24} weight="fill" />
          </S.AddToCart>
        </S.CardAction>
      </S.CardFooter>
    </S.Container>
  )
}
