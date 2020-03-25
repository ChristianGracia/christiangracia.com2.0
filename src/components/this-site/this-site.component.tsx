import React from "react";
import { Button } from "react-bootstrap";
const cg = require("../../assets/christiangraciacode.PNG");

export function ThisSite() {
  return (
    <div style={{ position: "relative", padding: 20 }}>
      <div style={{ textAlign: "center" }}>
        <span
          style={{
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: 30,
            borderBottom: "solid 1px white",
            maxWidth: 700,
            minWidth: 280,
            margin: "0 auto",
            color: "#feff01"
          }}
        >
          christiangracia.com
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 40,

          textAlign: "center"
        }}
      >
        <div style={{ margin: "0 auto" }}>
          <img src={cg} style={{ width: "80vw", maxWidth: 600 }} />
        </div>
        <span style={{ marginTop: 30, color: "white" }}>
          This site is written in Typescript using only functional components
          and React Hooks. React/Redux + Sass front-end with a NodeJS back-end
          API.
        </span>
        <div style={{ marginTop: 30 }}>
          <Button
            variant="danger"
            onClick={() =>
              (window.location.href =
                "https://github.com/ChristianGracia/christiangracia.com2.0")
            }
          >
            See my code
          </Button>
        </div>
      </div>
    </div>
  );
}
