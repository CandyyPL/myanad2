import styled from 'styled-components'

export const TopbarWrapper = styled.div`
  width: 100%;
  height: 80px;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;

  .logo {
    grid-column: 2 / 3;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    img {
      height: 50%;
    }

    span {
      font-size: 24px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      font-weight: bold;
      letter-spacing: 2px;
      color: #eee;
    }
  }

  .menu {
    grid-column: 3 / 4;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Hamburger = styled.div`
  width: 60%;
  height: 60%;

  position: relative;
  z-index: 6;

  cursor: pointer;

  .hamburger-line {
    position: absolute;

    width: 100%;
    height: 5px;

    background-color: #fff;
    border-radius: 10px;

    left: 0;
    top: 50%;

    transform: translateY(-50%);

    pointer-events: none;

    transition: all 0.2s;

    &::before,
    &::after {
      content: '';

      position: absolute;

      width: 100%;
      height: 5px;

      background-color: #fff;
      border-radius: 10px;

      left: 0;

      transition: all 0.3s;
    }

    &::before {
      top: -15px;
    }

    &::after {
      top: 15px;
    }
  }

  &.active {
    .hamburger-line {
      background-color: transparent;
    }

    .hamburger-line::before {
      transform: translateY(15px) rotate(45deg);
      background-color: #000;
    }

    .hamburger-line::after {
      transform: translateY(-15px) rotate(-45deg);
      background-color: #000;
    }
  }
`
