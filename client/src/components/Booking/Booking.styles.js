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
  }

  form {
    width: 100%;
    height: 280px;

    @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
      width: 50%;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input[type='text'] {
      margin-bottom: 20px;
    }

    input[type='text'],
    input[type='email'] {
      width: 60%;
      height: 40px;

      @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
        width: 40%;
      }

      @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
        width: 50%;
        height: 60px;
      }

      background-color: #fff;
      border: none;
      border-radius: 10px;

      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.noto};
      font-weight: bold;
      text-align: center;
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
    height: 90px;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      width: 300px;
      height: 140px;
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
`
