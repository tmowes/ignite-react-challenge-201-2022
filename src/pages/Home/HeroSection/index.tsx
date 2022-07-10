import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import heroImg from '../../../assets/hero.png'
import * as S from './styles'

export function HeroSection() {
  return (
    <S.HeroContainer>
      <S.HeroContent>
        <S.LeftSide>
          <div>
            <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
            <S.SubTitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </S.SubTitle>
          </div>
          <S.HeroItems>
            <S.HeroItem iconBg="yellowDark">
              <ShoppingCart size={24} weight="fill" />
              <span>Compra simples e segura</span>
            </S.HeroItem>
            <S.HeroItem iconBg="baseText">
              <Package size={24} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </S.HeroItem>
            <S.HeroItem iconBg="yellow">
              <Timer size={24} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </S.HeroItem>
            <S.HeroItem iconBg="purple">
              <Coffee size={24} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </S.HeroItem>
          </S.HeroItems>
        </S.LeftSide>
        <img src={heroImg} alt="" />
      </S.HeroContent>
    </S.HeroContainer>
  )
}
