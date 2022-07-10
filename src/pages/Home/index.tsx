import { HeroSection } from './HeroSection'
import { ProductsSection } from './ProductsSection'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <HeroSection />
      <ProductsSection />
    </S.Container>
  )
}
