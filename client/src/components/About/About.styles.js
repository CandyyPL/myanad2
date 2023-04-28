import styled from 'styled-components'

export const AboutWrapper = styled.section`
  width: 100%;
  height: 600px;

  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box {
    width: 100%;
    height: 60%;

    background-color: #0c322c;
    border-radius: 20px;
    padding: 20px;
  }

  .title {
    width: 100%;
    height: 10%;

    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.josefin};
    font-weight: bold;
    color: #eee;
    text-align: center;
  }

  .info {
    .text {
      width: 100%;
      height: 80%;

      padding: 10px;
      margin-bottom: 30px;

      font-size: 24px;
      font-family: ${({ theme }) => theme.fonts.quicksand};
      text-align: center;
      color: #eee;

      @media screen and (max-width: 300px) {
        font-size: 20px;
      }
    }

    .gallery {
      width: 100%;
      height: 25%;

      margin: 0;
      padding: 0;

      display: flex;
      justify-content: space-around;
      align-items: center;

      list-style: none;

      .photo {
        :not(.photo-smaller) {
          width: 100px;
          height: 100px;

          @media screen and (max-width: 300px) {
            width: 70px;
            height: 70px;
          }
        }

        &-smaller {
          width: 85px;
          height: 85px;

          @media screen and (max-width: 300px) {
            width: 55px;
            height: 55px;
          }
        }

        border: 4px solid #2dc87a;
        border-radius: 50%;

        img {
          height: 100%;

          border-radius: 50%;
        }
      }
    }
  }

  .identity {
    width: 90%;
    height: 100px;

    background-color: #0c322c;
    border-radius: 10px;
    margin-top: 75px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .name {
      font-size: 36px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      text-align: center;
      color: #eee;

      @media screen and (max-width: 300px) {
        font-size: 32px;
      }
    }

    .role {
      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      text-align: center;
      color: #aaa;
    }
  }
`
