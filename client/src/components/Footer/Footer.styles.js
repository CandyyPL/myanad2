import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 300px;

  background-color: #002022;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .top {
    width: 100%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  div {
    width: 100%;
  }

  .logo {
    height: 20%;

    text-align: center;

    img {
      height: 80%;
    }
  }

  .contact {
    height: 30%;

    font-size: 40px;
    font-family: ${({ theme }) => theme.fonts.noto};
    font-weight: bold;
    letter-spacing: 3px;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 300px) {
      font-size: 30px;
    }
  }

  .mail {
    height: 20%;

    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.noto};
    text-align: center;
    color: #4fea9c;

    text-decoration: underline;
  }

  .bottom {
    width: 100%;
    height: 20%;

    background-color: #001011;

    display: flex;
    justify-content: center;
    align-items: center;

    .copy {
      font-family: ${({ theme }) => theme.fonts.noto};
      color: #aaa;
    }
  }
`
