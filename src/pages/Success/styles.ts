import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 70rem;
  width: 100%;
  padding: 6rem 0;
  margin: 0 auto;
`

export const LeftSide = styled.div`
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 2.5rem;
`

export const SuccessHeader = styled.div``

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    color: ${colors['yellow-dark']};
    margin-bottom: 0.25rem;
  `}
`

export const Subtitle = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 1.25rem;
    color: ${colors['base-subtitle']};
  `}
`

export const SuccessDetailsBorder = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2px;
    background: linear-gradient(135deg, ${colors.yellow} 0%, ${colors.purple} 100%);
    border-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
  `}
`

export const SuccessDetailsCard = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem;
    width: 100%;
    background-color: ${colors.background};
    border-radius: 4px;
    border-bottom-left-radius: 34px;
    border-top-right-radius: 34px;
    gap: 2rem;
  `}
`

export const Illustration = styled.img`
  margin-top: auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const BaseDetails = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    svg {
      color: ${colors.white};
      padding: 0.5rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
  `}
`

export const DetailsAddress = styled(BaseDetails)`
  ${({ theme: { colors } }) => css`
    svg {
      background-color: ${colors.purple};
    }
  `}
`

export const DetailsDeliveryTime = styled(BaseDetails)`
  ${({ theme: { colors } }) => css`
    svg {
      background-color: ${colors.yellow};
    }
  `}
`

export const DetailsPayment = styled(BaseDetails)`
  ${({ theme: { colors } }) => css`
    svg {
      background-color: ${colors['yellow-dark']};
    }
  `}
`

export const Text = styled.span`
  ${({ theme: { colors } }) => css`
    font-size: 1rem;
    line-height: 1.3;
    color: ${colors['base-text']};
  `}
`

export const Strong = styled(Text)`
  font-weight: 700;
`
