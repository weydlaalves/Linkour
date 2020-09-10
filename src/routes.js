import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./Services/autenticacao.js";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
   
    <BrowserRouter>
      <Switch>
        <Routes exact path="/" component={() => <h1>Login</h1>} />
        <Routes path="/cadastro" component={() => <h1>Cadastro</h1>} />
        <Routes path="/tutorial" component={() => <h1>Tutorial</h1>} />
        <PrivateRoute path="/app" component={() => <h1>App</h1>} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;
