import styled from 'styled-components'

export const HeroWrapper = styled.section`
  width: 90%;
  height: 400px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .desktop-left {
    width: 100%;
    height: 50%;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      width: 60%;
      height: 100%;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;

    .motto {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
    }
  }

  .desktop-right {
    width: 40%;
    height: 100%;

    display: none;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      display: flex;
    }
  }

  .motto {
    width: 100%;
    height: 40%;

    .main-motto {
      font-size: 32px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      text-align: center;
      color: #fff;

      @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
        text-align: left;
      }
    }

    .desktop-under-motto {
      display: none;

      font-size: 18px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      text-align: left;
      color: #ddd;

      @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
        display: flex;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.sizes.minimal}) {
      font-size: 28px;
    }
  }

  .image {
    width: 100%;
    height: 30%;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      height: 60%;
    }

    img {
      height: 100%;
    }
  }

  .desktop-survey-button {
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      display: block;
    }
  }

  .survey-button {
    width: 100%;
    height: 20%;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      justify-content: flex-start;
    }

    button {
      width: 75%;
      height: 50px;

      background-color: #2dc87a;
      border: none;
      border-radius: 25px;

      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      color: #fff;

      cursor: pointer;

      @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
        width: 50%;
        height: 55px;

        background-color: transparent;
        border: 2px solid #2dc87a;
        border-radius: 10px;

        position: relative;

        span {
          position: relative;
          z-index: 2;
        }

        color: #2dc87a;

        overflow: hidden;

        &::after {
          width: 100%;
          height: 100%;

          position: absolute;
          left: 0;
          top: 0;

          z-index: 0;

          content: '';

          background-color: #2dc87a;
          border-radius: 5px;

          transform: translateX(-100%);
          transition: transform 0.2s;
        }

        &:hover {
          color: #fff;

          &::after {
            transform: translateX(0%);
          }
        }

        transition: color 0.1s;
      }
    }
  }
`
