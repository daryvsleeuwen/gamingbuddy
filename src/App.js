import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import './styles/css-variables.css';
import './styles/fonts.css';
import PublicRoute from "./components/PublicRoute";
import HomePage from './components/home-page';
 
function App() {
    return (
        <Router>
            <Switch>
                <PublicRoute path="/" component={HomePage} exact/>
            </Switch>
        </Router>
    )
}

export default App;