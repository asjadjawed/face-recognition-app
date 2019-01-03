import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange }) => (
  <nav className="Navigation">
    <p onClick={() => onRouteChange("signIn")}>Sign Out</p>
  </nav>
);

export default Navigation;
