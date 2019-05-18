import styled from 'styled-components'

export const Card = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      flex-direction: row;
      height: 70px;
      width: 270px;
      cursor: pointer;
      justify-content: space-between;
      padding: 15px;
      align-items: center;

      &: hover {
        background-color: #eee;
      }
    }

    li:first-child {
      margin-top: 0;
    }

    li .cardContent {
      border-bottom: 1px solid #eee;
      display: flex;

      height: 100%;
      align-items: center;
      width: 270px;
      justify-content: space-between;
    }

    .card-left {
      display: flex;
    }

    .foto {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }

    .card-middle {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      justify-content: center;
    }

    .card-middle strong {
      font-size: 18px;
      color: black;
    }

    .card-middle span {
      display: flex;
      flex-direction: column;
      font-size: 15px;
      color: #ccc;
    }

    .close {
      color: #f00;
      width: 18px;
      height: 18px;
    }

    .seta {
      color: #999;
      width: 18px;
      height: 18px;
    }
  }
`
