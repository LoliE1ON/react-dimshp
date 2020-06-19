import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Index } from "./components/pages/Index";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
