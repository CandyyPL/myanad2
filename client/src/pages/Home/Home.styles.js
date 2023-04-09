import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-weight: bold;
`
