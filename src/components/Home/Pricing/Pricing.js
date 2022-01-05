import { Container } from "@mui/material";
import React from "react";
import {BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
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
            <Link to='/monthly'>
            <button>Monthly Plan</button>
            </Link>
           <Link to='/annual'>
           <button>Annual Plan</button>
           </Link>
          </div>
          <Switch>
            <Route exact path='/'>
              <Monthly/>
            </Route>
            <Route  path='/monthly'>
              <Monthly/>
            </Route>
            <Route path='/annual'>
              <Annual/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  </Container>
  </div>);
};

export default Pricing;
