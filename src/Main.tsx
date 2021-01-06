import React, { FC } from "react";
import logo from "./logo.svg";
import styled from "styled-components/macro";

const Buttons = styled.div`
  display: flex;
  margin: 50px 0 0 15px;
`;

const Button = styled.button`
  height: 50px;
  min-width: 200px;
  margin-right: 15px;
  background: transparent;
  border: 2px solid #4e5666;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    background: #4e5666;
  }
`;

export const Main: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Buttons>
          <Button>Example 1</Button>
          <Button>Example 2</Button>
          <Button>Example 3</Button>
        </Buttons>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
};
