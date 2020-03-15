import React from "react";
import { Button } from "react-bootstrap";

export function ExploreButton() {
  return (
    <Button
      style={{
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        backgroundColor: "transparent",
        border: "none",
        fontSize: 20,
        margin: "0 auto"
      }}
      variant="dark"
    >
      Scroll down or click <span style={{ color: "#FEFF01" }}>Here</span>
    </Button>
  );
}
