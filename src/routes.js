import { Route, Switch } from "react-router-dom";
import SinglePage from "./containers";
import Admin from "./containers/admin";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={SinglePage} />
          <Route path="/single-page" component={SinglePage} />
          <Route path="/admin" component={Admin} />
        </Switch>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);

