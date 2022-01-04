
import { Container } from "@mui/material";
import React from "react";
import "./FooterBanner.css";

const FooterBanner = () => {
  return (
  <div>
     <Container>
       <div className="footerBanner">
        <div className="FB-1">
          <h1>You can be your own <br/> Guiding star with our help</h1>
        </div>
        <div className="FB-2">
            <button>GET STARTED</button>
        </div>
       </div>
     </Container>
  </div>);
};

export default FooterBanner;
