import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${colors.background};
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  `}
`
