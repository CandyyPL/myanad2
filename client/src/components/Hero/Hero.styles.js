import styled from 'styled-components'

export const HeroWrapper = styled.section`
  width: 90%;
  height: 400px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .motto {
    width: 100%;
    height: 40%;

    font-size: 32px;
    font-family: ${({ theme }) => theme.fonts.josefin};
    text-align: center;
    color: #fff;

    @media screen and (max-width: 300px) {
      font-size: 28px;
    }
  }

  .image {
    width: 100%;
    height: 30%;

    img {
      height: 100%;
    }
  }

  .survey-button {
    width: 100%;
    height: 20%;

    button {
      width: 75%;
      height: 50px;

      background-color: #2dc87a;
      border: none;
      border-radius: 25px;

      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      color: #fff;
    }
  }
`
