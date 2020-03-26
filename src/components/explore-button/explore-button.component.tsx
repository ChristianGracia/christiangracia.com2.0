import React from "react";
import { Button } from "react-bootstrap";
import styles from "./explore-button.module.scss";
import * as Fade from "react-reveal/Fade";

export function ExploreButton(): JSX.Element {
  return (
    <Fade bottom>
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => (window.location.href = "/main")}
          className={styles.exploreButton}
          variant="light"
        >
          <span>Click to see what I do </span>
          <div className="ml-1"></div>

          <div className={styles.iconColor}>
            <i className="fab fa-react fa-spin"></i>
          </div>
        </Button>
      </div>
    </Fade>
  );
}
