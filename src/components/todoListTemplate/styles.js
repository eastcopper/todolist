import styled, { keyframes } from "styled-components";

export const MainDiv = styled.div`
  background-color: white;
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 0 4px #ffffff, 0 0 7px #ffffff, 0 0 20px #e8b4ff;
  .list {
    overflow-y: scroll;
  }

  .item {
    display: inline-flex;
    align-items: center;
  }

  & img {
    display: flex;
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`;

export const Add = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  input {
    position: absolute;
  }
  .plus {
    background-color: black;
  }
`;

export const buttonRotate = styled.div`
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.5s ease-out;
  ${({ rotate }) => rotate && `transform: rotate(315deg)`};
  border: black 1px solid;
  width: 50px;
  height: 50px;
  font-size: 40px;
  font-weight: 1000;
  border-radius: 30px;
  background: white;
  display: flex;
  justify-content: center;
`;
