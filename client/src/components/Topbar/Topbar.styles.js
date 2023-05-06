import styled from 'styled-components'

export const TopbarWrapper = styled.div`
  width: 100%;
  height: 80px;

  @media screen and (max-width: ${({ theme }) => theme.sizes.small}) {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
    width: 95%;

    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    grid-template-rows: 1fr;
  }

  .logo {
    grid-column: 2 / 3;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      grid-column: 1 / 2;

      flex-direction: row;
    }

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
    .desktop-menu {
      width: 100%;
      height: 100%;

      list-style: none;

      display: none;
      justify-content: space-evenly;
      align-items: center;

      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      color: #eee;

      @media screen and (min-width: ${({ theme }) => theme.sizes.smallMedium}) {
        font-size: 24px;
      }

      @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
        font-size: 26px;
      }

      li {
        cursor: pointer;

        transition: text-shadow 0.2s;

        &:hover {
          text-shadow: 0 0 10px rgba(255, 255, 255, 1);
        }
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      grid-column: 2 / 3;

      .desktop-menu {
        display: flex;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
      grid-column: 3 / 4;
    }

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
