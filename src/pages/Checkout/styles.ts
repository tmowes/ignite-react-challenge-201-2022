import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  max-width: 70rem;
  width: 100%;
  padding: 6rem 0;
  margin: 0 auto;
  gap: 2rem;
`

export const LeftSide = styled.section`
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1rem;
`

export const RightSide = styled.aside`
  max-width: 28rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    line-height: 1.3;
    color: ${colors['base-subtitle']};
  `}
`
