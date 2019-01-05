import React from "react";

const Rank = ({ userName, userEntries }) => (
  <div
    className="Rank"
    style={{ textAlign: "center", fontSize: "1.4rem", padding: "20px" }}
  >
    <div>{`${userName} No. of submissions: `}</div>
    <div style={{ fontSize: "1.5em" }}>{`${userEntries}`}</div>
  </div>
);

export default Rank;
