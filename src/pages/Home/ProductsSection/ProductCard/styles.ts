/* eslint-disable sonarjs/no-duplicate-string */
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    max-width: 16rem;
    height: 20rem;
    background-color: ${colors['base-card']};
    border-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 1rem;
  `}
`

export const Image = styled.img`
  margin-top: -1.25rem;
  margin-bottom: 0.75rem;
`

export const Tags = styled.div``

export const Tag = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 0.65rem;
    font-weight: 700;
    line-height: 1.3;
    padding: 0.25rem 0.5rem;
    border-radius: 99999px;
    text-transform: uppercase;
    transition: all 180ms ease-in-out;

    color: ${colors['yellow-dark']};
    background-color: ${colors['yellow-light']};
    margin: 0 0.25rem;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.strong`
  ${({ theme: { colors } }) => css`
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    line-height: 1.3;
    color: ${colors['base-subtitle']};
    margin-bottom: 0.5rem;
  `}
`

export const Description = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 1rem;
    line-height: 1.3;
    color: ${colors['base-label']};
    text-align: center;
  `}
`

export const CardFooter = styled.div`
  width: 100%;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.25rem;
`

export const PrefixPrice = styled.span`
  font-size: 0.875rem;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 1.3;
`

export const Price = styled.strong`
  ${({ theme: { colors } }) => css`
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    color: ${colors['base-text']};
  `}
`

export const CardAction = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${colors['base-text']};
    gap: 0.5rem;
  `}
`

export const AddToCart = styled.button`
  ${({ theme: { colors } }) => css`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    color: ${colors['base-card']};
    background-color: ${colors['purple-dark']};
    transition: all 180ms ease-in-out;
    border: 2px solid ${colors['purple-dark']};
    &:hover {
      background-color: ${colors.purple};
      border: 2px solid ${colors.purple};
    }
  `}
`
