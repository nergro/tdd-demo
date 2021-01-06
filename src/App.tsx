import React, { FC } from "react";
import "./App.css";
import { GlobalStyle } from "./globalStyle";
import { Route, Switch } from "react-router-dom";
import { Main } from "./Main/Main";
import { Example1 } from "./Examples/Example1";
import { Example2 } from "./Examples/Example2";
import { Example3 } from "./Examples/Example3";

export const App: FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/example-1" exact component={Example1} />
        <Route path="/example-2" exact component={Example2} />
        <Route path="/example-3" exact component={Example3} />
      </Switch>
    </div>
  );
};
