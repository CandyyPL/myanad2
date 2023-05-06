import styled from 'styled-components'

export const CalendarWrapper = styled.div`
  width: 100%;
  height: 400px;

  @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
    width: 80%;
    height: 500px;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.smallMedium}) {
    width: 60%;
    height: 600px;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
    width: 40%;
    height: 600px;
  }

  background-color: #222;
  border-radius: 10px;
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .top {
    width: 100%;
    height: 15%;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 15%;
      height: 80%;

      margin-inline: 20px;
      border-radius: 5px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 22px;
      font-family: ${({ theme }) => theme.fonts.quicksand};
      font-weight: bold;
      color: #ddd;

      &:not(.month) {
        cursor: pointer;

        &:active {
          background-color: #666;
        }

        @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
          &:hover {
            background-color: #666;
          }
        }
      }
    }

    .month {
      width: 50%;
      font-size: 24px;
      font-family: ${({ theme }) => theme.fonts.quicksand};
      font-weight: bold;

      @media screen and (max-width: ${({ theme }) => theme.sizes.minimal}) {
        font-size: 16px;
      }
    }
  }
  .middle {
    width: 100%;
    height: 80%;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
  }
`

export const CalendarElement = styled.div`
  width: 40px;
  height: 40px;

  @media screen and (max-width: ${({ theme }) => theme.sizes.minimal}) {
    width: 25px;
    height: 25px;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.medium}) {
    width: 50px;
    height: 50px;
  }

  border-radius: 5px;
  margin: 2px;

  place-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.quicksand};
  font-weight: bold;
  color: #eee;

  @media screen and (max-width: ${({ theme }) => theme.sizes.minimal}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.small}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.smallMedium}) {
    font-size: 20px;
  }

  &.prior,
  &.next {
    font-family: ${({ theme }) => theme.fonts.quicksand};
    font-weight: bold;
    color: #666;
  }

  .current {
    color: green;
  }

  &:not(.wd, .prior, .next) {
    cursor: pointer;

    &:nth-child(7n - 1),
    &:nth-child(7n) {
      color: #e0515d;
    }

    &:hover {
      background-color: #666;
    }
  }
`
