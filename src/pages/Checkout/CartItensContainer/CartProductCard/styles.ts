import styled, { css } from 'styled-components'

export const Container = styled.div`
  /* background-color: gray; */
  display: flex;
  align-items: center;
  padding: 0.5rem 0.25rem;
  gap: 0.5rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${colors['base-subtitle']};
  `}
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveFromCart = styled.button`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    border-radius: 6px;
    color: ${colors['base-text']};
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    transition: all 180ms ease-in-out;
    background-color: ${colors['base-button']};
    border: 2px solid transparent;
    &:hover {
      background-color: ${colors['base-hover']};
    }
    &:active {
      background-color: ${colors['yellow-light']};
    }
    svg {
      color: ${colors.purple};
    }
  `}
`

export const Price = styled.strong`
  ${({ theme: { colors } }) => css`
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: auto;
    margin-left: auto;
    color: ${colors['base-text']};
  `}
`

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
`
