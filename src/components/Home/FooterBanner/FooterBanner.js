
import { Container } from "@mui/material";
import React from "react";
import "./FooterBanner.css";
import { useHistory } from 'react-router-dom'

const FooterBanner = () => {

  const history = useHistory();

  return (
    <div>
      <Container>
        <div className="footerBanner">
          <div className="FB-1">
            <h1>You can be your own <br /> Guiding star with our help</h1>
          </div>
          <div className="FB-2">
            <button onClick={() => history.push('/courses')}>GET STARTED</button>
          </div>
        </div>
      </Container>
    </div>);
};

export default FooterBanner;
