import React from "react";
import { Button } from "react-bootstrap";
import styles from "./explore-button.module.scss";

export function ExploreButton() {
  return (
    <div className={styles.buttonContainer}>
      <Button
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          border: "none",
          fontSize: 20
        }}
        variant="dark"
      >
        Explore
      </Button>
    </div>
  );
}
