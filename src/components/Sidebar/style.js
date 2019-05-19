import styled from 'styled-components'

export const Sidebar = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  display: 1 auto;
  height: 94%;
  background: #fff;
  border-radius: 3px;
  position: absolute;
  z-index: 20;
  margin: 15px;
  top: 0;
  box-shadow: 3px 3px 20px grey;
  overflow: auto;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      height: 70px;
      width: 90%;
      cursor: pointer;
      justify-content: center;
      padding: 15px 15px 0 15px;
      align-items: center;
      &: hover {
        background-color: #eee;
      }
    }

    li:first-child {
      margin-top: 0;
    }

    li:last-child:after {
      height: 0;
    }

    li::after {
      content: '';
      width: 90%;
      height: 1px;
      background: #eee;
    }

    .content {
      display: flex;
      width: 270px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
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
