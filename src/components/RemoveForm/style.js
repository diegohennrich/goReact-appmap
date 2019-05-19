import styled from 'styled-components'

export const RemoveFormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;

  border-radius: 5px;
  background: #fff;
  align-items: center;
  padding: 30px 20px;

  h1 {
    font-size: 18px;
  }

  input {
    border-radius: 3px;
    border: solid 1px #ccc;
    padding: 5px 10px;
    width: 300px;
    height: 30px;
    font-size: 16px;
    color: #999;
    outline: 0;
    margin-top: 10px;
  }

  button {
    display: flex;
    align-content: center;
    justify-content: center;
    border-radius: 5px;
    width: 150px;
    height: 45px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: 0;
    outline: 0;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 310px;
  }

  .cancelButton {
    background: #999;
  }

  .removeButton {
    background: #f00;
  }
`
