import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import HomePage from './Pages/PageHome/HomePage';
import ComparaCarro from './Pages/PageComparaCarro/ComparaCarro';

export default function RouteComponent() {
    return (
        <Router>
            <Switch>
                <Route path="/home" exact component={HomePage} />   
                <Route path="/compara" exact component={ComparaCarro} />   
                <Route path="*">
                    <p> <strong> NOT FOUND 666 </strong> </p>
                </Route>
            </Switch>
        </Router>
    );
}