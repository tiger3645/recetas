import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home.component";
import Recipee from "./pages/recipee/recipee.component";

import Client from "./client";
import { ApolloProvider } from "react-apollo";

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={Client}>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipee/:id" component={Recipee} />
          </Switch>
          <hr />
          <div className="link">
            <a href="http://emcipriani.com/">emcipriani.com</a>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
