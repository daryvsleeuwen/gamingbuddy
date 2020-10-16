import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./styles/css-variables.css";
import "./styles/fonts.css";
import PublicRoute from "./components/PublicRoute";
import HomePage from "./components/home-page";
import ProfilePage from "./components/profile-page";
import BuddySearchPage from "./components/buddy-search";
import ChatPage from "./components/chat-page";
import AccountPage from "./components/account-page";
import Messagepage from "./components/message-page";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" component={HomePage} exact />
        <PublicRoute path="/profile/:profileid" component={ProfilePage} />
        <PublicRoute path="/buddysearch" component={BuddySearchPage} />
        <PublicRoute path="/chat" component={ChatPage} />
        <PublicRoute path="/account" component={AccountPage} />
        <PublicRoute path="/userchat" component={Messagepage} />
      </Switch>
    </Router>
  );
}

export default App;
