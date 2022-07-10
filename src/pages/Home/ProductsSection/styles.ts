import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
`
export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    color: ${colors['base-subtitle']};
    margin-bottom: 3rem;
  `}
`

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 2.5rem 0;
`
