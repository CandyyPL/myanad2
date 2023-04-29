import styled from 'styled-components'

export const VideoWrapper = styled.section`
  width: 100%;
  min-height: 180px;
  height: fit-content;
  max-height: 400px;

  background-color: #0c322c;

  @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
    background-color: transparent;
  }

  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .text {
    width: 100%;
    height: 100px;

    font-size: 26px;
    font-family: ${({ theme }) => theme.fonts.josefin};
    color: #fff;
    text-align: center;

    @media screen and (max-width: ${({ theme }) => theme.sizes.minimal}) {
      font-size: 22px;
    }
  }

  .video-button {
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 100%;
      height: 100%;

      background-color: transparent;
      border: none;

      font-size: 32px;
      font-family: ${({ theme }) => theme.fonts.josefin};
      font-weight: bold;
      letter-spacing: 2px;
      color: darkslategray;
    }
  }

  .media-wrapper {
    width: fit-content;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 25px;

    position: relative;
    z-index: 1;

    video {
      width: 90%;

      border-radius: 20px;

      transition: filter 0.5s;
    }

    &.dark video {
      filter: brightness(0.2);
    }

    .control {
      width: 90%;
      height: 100%;

      position: absolute;
      z-index: 2;

      display: flex;
      justify-content: center;
      align-items: center;

      &.invisible img {
        opacity: 0;
      }

      &.active img {
        opacity: 1;
      }

      img {
        height: 35%;

        cursor: pointer;

        transition: opacity 0.25s;
      }
    }
  }
`
