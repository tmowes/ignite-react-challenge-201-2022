import styled, { css } from 'styled-components'

import { CustomButtonProps } from './types'

export const PaymentContainer = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem;
    background-color: ${colors['base-card']};
    border-radius: 6px;
  `}
`

export const PaymentHeader = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: start;
    gap: 0.5rem;
    margin-bottom: 2rem;
    svg {
      color: ${colors.purple};
    }
  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const PaymentTitle = styled.strong`
  ${({ theme: { colors } }) => css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${colors['base-subtitle']};
  `}
`

export const PaymentSubTitle = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${colors['base-text']};
  `}
`

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PaymentOption = styled.button<CustomButtonProps>`
  ${({ theme: { colors }, selected }) => css`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 1rem 0.75rem;
    gap: 0.5rem;
    width: 100%;
    background-color: ${colors['base-button']};
    border: 1px solid ${colors['base-button']};
    border-radius: 6px;
    svg {
      color: ${colors.purple};
    }
    &:hover {
      background-color: ${colors['base-hover']};
    }
    &:not(:last-child) {
      margin-right: 0.75rem;
    }

    ${selected &&
    css`
      background-color: ${colors['purple-light']};
      border-color: ${colors.purple};
      &:hover {
        background-color: ${colors['purple-light']};
      }
    `}
  `}
`

export const PaymentOptionTitle = styled.span`
  ${({ theme: { colors } }) => css`
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${colors['base-text']};
  `}
`
