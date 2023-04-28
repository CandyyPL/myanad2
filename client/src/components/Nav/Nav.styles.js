import styled from 'styled-components'

export const NavMenu = styled.div`
  width: 80%;
  height: 50%;

  position: absolute;
  top: 0;
  right: 0;

  z-index: 5;

  margin: 0;
  padding: 0;

  transform: translateX(100%);
  transition: all 0.2s;

  &.active {
    transform: translateX(0);
  }

  background-color: #eee;

  border-bottom-left-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  list-style: none;

  li {
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.josefin};
    font-weight: bold;
  }
`
