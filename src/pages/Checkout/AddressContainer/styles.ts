import styled, { css } from 'styled-components'

import { CustomInputProps } from './types'

export const AddressContainer = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem;
    background-color: ${colors['base-card']};
    border-radius: 6px;
  `}
`

export const AddressHeader = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: start;
    gap: 0.5rem;
    margin-bottom: 2rem;
    svg {
      color: ${colors['yellow-dark']};
    }
  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddressTitle = styled.strong`
  ${({ theme: { colors } }) => css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${colors['base-subtitle']};
  `}
`

export const AddressSubTitle = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${colors['base-text']};
  `}
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AddressRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`

export const AddressInput = styled.input<CustomInputProps>`
  ${({ theme: { colors }, flex }) => css`
    width: ${flex ? '100%' : '12.5rem'};
    height: 2.5rem;
    padding-left: 0.75rem;
    color: ${colors['base-text']};
    background-color: ${colors['base-input']};
    border: 1px solid ${colors['base-button']};
    border-radius: 4px;
    &:focus {
      border: 1px solid ${colors['yellow-dark']};
    }
  `}
`

export const UFInput = styled(AddressInput)`
  width: 3.75rem;
  text-transform: uppercase;
`
