/* eslint-disable sonarjs/no-duplicate-string */
import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background: ${colors.background};
    position: sticky;
    top: 0;
    width: 100%;
  `}
`

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
`

export const Menu = styled.nav`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      border-radius: 6px;
      background: ${colors['purple-light']};
      color: ${colors['purple-dark']};
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3;
      height: 3rem;
      svg {
        color: ${colors.purple};
      }
    }
    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors['yellow-dark']};
      background: ${colors['yellow-light']};
      transition: all 180ms ease-in-out;
      border: 2px solid ${colors['yellow-light']};
      border-radius: 6px;
      position: relative;
      &:hover {
        border: 2px solid ${colors['yellow-dark']};
        border-radius: 6px;
      }
    }
  `}
`

export const NotificationDot = styled.div`
  ${({ theme: { colors } }) => css`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: ${colors['yellow-dark']};
    color: ${colors.white};
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.3;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    padding: 0.25rem;
  `}
`

export const Logo = styled.img``
