import styled from 'styled-components'

export const BookingWrapper = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
    flex-direction: row;
    justify-content: space-around;
  }

  form {
    width: 100%;
    height: 100%;

    @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
      width: 50%;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input[type='time'],
    input[type='text'] {
      margin-bottom: 20px;
    }

    input[type='time'],
    input[type='text'],
    input[type='email'] {
      width: 60%;
      height: 40px;

      background-color: #fff;
      border: none;
      border-radius: 10px;

      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.noto};
      font-weight: bold;
      text-align: center;

      @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
        width: 40%;

        font-size: 18px;
      }

      @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
        width: 50%;
        height: 60px;

        font-size: 20px;
      }
    }

    input[type='time'] {
      width: 30%;
    }

    .checkbox {
      width: 80%;
      height: fit-content;

      margin: 10px auto;

      @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
        margin: 20px auto;
      }

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 18px;
      font-family: ${({ theme }) => theme.fonts.noto};
      color: #eee;
    }
  }

  .book-button {
    width: 80%;
    height: 80px;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      width: 300px;
      height: 120px;
    }

    background-color: #2dc87a;
    border: none;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    font-family: ${({ theme }) => theme.fonts.josefin};
    font-weight: bold;
    color: #eee;

    cursor: pointer;

    .title {
      font-size: 32px;
    }

    .sub-title {
      font-size: 20px;
      font-weight: normal;
    }

    @media screen and (min-width: ${({ theme }) => theme.sizes.smallMedium}) {
      &:hover {
        background-color: #1cb769;
      }
    }
  }

  .error {
    width: 80%;
    height: 80px;

    background-color: #990a00;
    border: none;
    border-radius: 10px;
    margin: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.noto};
    font-weight: bold;
    color: white;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      font-size: 18px;
    }

    @media screen and (min-width: ${({ theme }) => theme.sizes.smallMedium}) {
      width: 60%;

      font-size: 20px;
    }

    @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
      width: 50%;

      font-size: 22px;
    }
  }
`
