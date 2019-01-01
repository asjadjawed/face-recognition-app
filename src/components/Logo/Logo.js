import React from "react";
import "./Logo.css";
import Tilt from "react-tilt";
import eye from "./vision.svg";

const Logo = () => (
  <div className="Logo">
    <Tilt
      className="Tilt"
      options={{ max: 25 }}
      style={{ height: 200, width: 200 }}
    >
      <img src={eye} alt="the digital eye" />
    </Tilt>
  </div>
);

export default Logo;
