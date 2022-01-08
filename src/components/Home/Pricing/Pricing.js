import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Annual from "./Annual";
import Monthly from "./Monthly";

import "./Pricing.css";

const Pricing = () => {
  return (<div>
    <Container>
      <div className="pricing-section">
        <div className="price-intro">
          <h1>Simple <br />
            All Inclusive Pricing</h1>
          <p>No contracts. No surprise fees.</p>
        </div>
        <div className="pricing-card">
          <Router>
            <div className="price-button">
              <NavLink
                to="/monthly"
                style={isActive => ({
                  color: isActive ? "white" : "black",
                  background: isActive ? "#2B4EFF" : 'white',
                })} >
                <span className="monthly-btn"> Monthly Plan</span>
              </NavLink>
              <NavLink
                to="/annual"
                style={isActive => ({
                  color: isActive ? "white" : "black",
                  background: isActive ? "#2B4EFF" : 'white',
                })} >
                <span className="annual-btn">Annual Plan</span>
              </NavLink>
            </div>
            <Switch>
              <Route exact path='/'>
                <Monthly />
              </Route>
              <Route path='/monthly'>
                <Monthly />
              </Route>
              <Route path='/annual'>
                <Annual />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </Container>
  </div>);
};

export default Pricing;
