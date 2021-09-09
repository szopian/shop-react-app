import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header";
import SignInAndSignUp from "./components/sign-in-and-sign-up/sign-in-and-sign-up";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
