import styled from "styled-components/macro";

export const Button = styled.button`
  height: 50px;
  width: 200px;
  margin-right: 15px;
  background: transparent;
  border: 2px solid #4e5666;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  outline: none;
  &:hover {
    background: #4e5666;
  }
`;
