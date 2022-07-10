import styled, { css } from 'styled-components'

export const CartItemsContainer = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem;
    width: 100%;
    background-color: ${colors['base-card']};
    border-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
    gap: 1rem;
  `}
`
export const TotalContainer = styled.div``

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TotalTitle = styled.span`
  ${({ theme: { colors } }) => css`
    font-weight: 400;
    line-height: 1.3;
    color: ${colors['base-text']};
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  `}
`

export const TotalValue = styled.span`
  ${({ theme: { colors } }) => css`
    font-weight: 400;
    line-height: 1.3;
    color: ${colors['base-text']};
    font-size: 1rem;
    margin-bottom: 0.75rem;
  `}
`

export const SumTotalText = styled.h2`
  ${({ theme: { colors } }) => css`
    font-weight: 700;
    line-height: 1.3;
    color: ${colors['base-subtitle']};
  `}
`

export const ConfirmCheckout = styled.button`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 2.875rem;
    border-radius: 6px;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
    background-color: ${colors.yellow};
    color: ${colors.white};
    transition: all 180ms ease-in-out;
    border: 2px solid transparent;
    &:not(:disabled, :active):hover {
      background-color: ${colors['yellow-dark']};
    }
    &:active {
      background-color: ${colors.yellow};
    }
    &:disabled {
      background-color: ${colors['yellow-light']};
      cursor: not-allowed;
    }
  `}
`

export const Separator = styled.div`
  ${({ theme: { colors } }) => css`
    height: 1px;
    width: 100%;
    background-color: ${colors['base-button']};
  `}
`
