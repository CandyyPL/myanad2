import styled from 'styled-components'

export const BookingWrapper = styled.section`
  width: 100%;
  height: 550px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .book-button {
    width: 80%;
    height: 90px;

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

    .title {
      font-size: 32px;
    }

    .sub-title {
      font-size: 20px;
      font-weight: normal;
    }
  }
`
