/* eslint-disable sonarjs/no-duplicate-string */
import styled, { css } from 'styled-components'

export const QuantitySelectCard = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
    border-radius: 6px;
    background-color: ${colors['base-button']};
    overflow: hidden;
  `}
`

const QuantityButton = styled.button`
  ${({ theme: { colors } }) => css`
    color: ${colors.purple};
    width: 2rem;
    height: 2.5rem;
    padding: 0.5rem;
    transition: all 180ms ease-in-out;
    background-color: ${colors['base-button']};
    border: 2px solid transparent;
    &:hover {
      color: ${colors['purple-dark']};
    }
    &:active {
      background-color: ${colors['yellow-light']};
    }
  `}
`

export const SubtractButton = styled(QuantityButton)`
  ${({ theme: { colors } }) => css`
    &:hover {
      border-left: 2px solid ${colors['base-label']};
      border-bottom: 2px solid ${colors['base-label']};
      border-bottom-left-radius: 6px;
    }
  `}
`

export const AddButton = styled(QuantityButton)`
  ${({ theme: { colors } }) => css`
    &:hover {
      border-right: 2px solid ${colors['base-label']};
      border-bottom: 2px solid ${colors['base-label']};
      border-bottom-right-radius: 6px;
    }
  `}
`
