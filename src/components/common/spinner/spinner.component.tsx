import React from "react";
import spinner from "../spinner.gif";

export function Spinner() {
  return (
    <div style={{ backgroundColor: "#3993EC" }}>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: 200, height: 200, margin: "auto", display: "block" }}
      />
    </div>
  );
}
