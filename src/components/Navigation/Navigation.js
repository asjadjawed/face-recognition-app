import React from "react";
import "./Navigation.css";

const Navigation = ({ initState }) => (
  <nav className="Navigation">
    <p onClick={initState}>Sign Out</p>
  </nav>
);

export default Navigation;
