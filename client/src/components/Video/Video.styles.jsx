import styled from 'styled-components'

export const VideoWrapper = styled.section`
  width: 100%;
  min-height: 180px;
  height: fit-content;
  max-height: 400px;

  background-color: #0c322c;
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

    @media screen and (max-width: 300px) {
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
`
