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
          Click here to see what I do <i className="far fa-hand-pointer"></i>
        </Button>
      </div>
    </Fade>
  );
}
