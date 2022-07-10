import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-weight: 400;
  line-height: 1.3;
`

export const Title = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 1rem;
    color: ${colors['base-subtitle']};
  `}
`

export const SubTitle = styled.a`
  ${({ theme: { colors } }) => css`
    font-weight: 400;
    color: ${colors['purple-dark']};
  `}
`
