import React, { FC } from "react";
import logo from "./logo.svg";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { Button } from "Atoms/Button";

const Buttons = styled.div`
  display: flex;
  margin: 50px 0 0 15px;
`;

export const Main: FC = () => {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Buttons>
          <Button onClick={() => history.push("/example-1")}>Example 1</Button>
          <Button onClick={() => history.push("/example-2")}>Example 2</Button>
        </Buttons>
      </header>
    </div>
  );
};
