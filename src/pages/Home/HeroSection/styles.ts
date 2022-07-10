import styled, { css } from 'styled-components'

import { ICON_COLORS, ItemsProps } from './types'

export const HeroContainer = styled.div`
  background-image: url('/src/assets/hero-bg.png');
  /* background-size: cover; */
  background-position: center;
  background-repeat: no-repeat;
`

export const HeroContent = styled.main`
  display: flex;
  justify-content: space-between;
  max-width: 70rem;
  width: 100%;
  padding: 6rem 0;
  margin: 0 auto;
`

export const LeftSide = styled.section`
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    color: ${colors['base-title']};
    margin-bottom: 1rem;
  `}
`

export const SubTitle = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${colors['base-subtitle']};
  `}
`

export const HeroItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
`

export const HeroItem = styled.li<ItemsProps>`
  ${({ theme: { colors }, iconBg }) => css`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    gap: 0.375rem;
    font-size: 1rem;
    font-weight: 400;
    svg {
      width: 2rem;
      height: 2rem;
      background-color: ${colors[ICON_COLORS[iconBg]]};
      color: ${colors.background};
      border-radius: 99999px;
      padding: 0.375rem;
    }
  `}
`
