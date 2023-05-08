import styled from 'styled-components'

export const AboutWrapper = styled.section`
  width: 100%;
  height: 600px;

  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
    height: 800px;
  }

  .vert-gallery {
    width: 40%;
    height: 70%;

    @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
      width: 30%;
    }

    list-style: none;

    margin: 0;
    padding: 0;

    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      display: flex;
    }

    li {
      width: 100%;
      height: 28%;

      @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
        height: 25%;
      }

      background-color: #0c322c;
      border-radius: 100px 40px 40px 100px;

      display: flex;
      justify-content: center;
      align-items: center;

      .photo {
        width: 120px;
        height: 120px;

        @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
          width: 150px;
          height: 150px;
        }

        border: 2px solid #2dc87a;
        border-radius: 50%;

        img {
          height: 100%;
          border-radius: 50%;
        }
      }

      .info {
        width: 75%;
        height: 100%;

        margin-left: 25px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        font-family: ${({ theme }) => theme.fonts.josefin};

        .name {
          font-size: 20px;
          color: #fff;

          margin-bottom: 10px;

          @media screen and (min-width: ${({ theme }) => theme.sizes.smallMedium}) {
            font-size: 26px;
          }

          @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
            font-size: 32px;
          }
        }

        .role {
          font-size: 16px;
          font-weight: lighter;
          color: #ddd;

          @media screen and (min-width: ${({ theme }) => theme.sizes.smallMedium}) {
            font-size: 18px;
          }

          @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
            font-size: 20px;
          }
        }
      }
    }
  }

  .box {
    width: 100%;
    height: 60%;

    background-color: #0c322c;
    border-radius: 20px;
    padding: 20px;

    @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
      width: 40%;
      height: 75%;
    }
  }

  .title {
    width: 100%;
    height: 10%;

    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.josefin};
    font-weight: bold;
    color: #eee;
    text-align: center;

    @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
      font-size: 50px;
    }
  }

  .info {
    width: 100%;
    height: 100%;

    .text {
      width: 100%;
      height: 80%;

      padding: 10px;
      margin-bottom: 30px;

      font-size: 24px;
      font-family: ${({ theme }) => theme.fonts.quicksand};
      text-align: center;
      color: #eee;

      @media screen and (max-width: ${({ theme }) => theme.sizes.minimal}) {
        font-size: 20px;

        margin-bottom: 10px;
      }

      @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
        font-size: 32px;
      }
    }

    .gallery {
      width: 100%;
      height: 25%;

      margin: 0;
      padding: 0;

      display: none;
      justify-content: space-around;
      align-items: center;

      @media screen and (max-width: ${({ theme }) => theme.sizes.small}) {
        display: flex;
      }

      list-style: none;

      .photo {
        :not(.photo-smaller) {
          width: 100px;
          height: 100px;

          @media screen and (max-width: ${({ theme }) => theme.sizes.minimal}) {
            width: 70px;
            height: 70px;
          }
        }

        &-smaller {
          width: 85px;
          height: 85px;

          @media screen and (max-width: ${({ theme }) => theme.sizes.minimal}) {
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

    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => theme.sizes.small}) {
      display: flex;
    }

    .name {
      font-size: 36px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      text-align: center;
      color: #eee;

      @media screen and (max-width: ${({ theme }) => theme.sizes.minimal}) {
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
