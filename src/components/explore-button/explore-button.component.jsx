import React from "react";
import { Button } from "react-bootstrap";
import styles from "./explore-button.module.scss";
import * as Fade from "react-reveal/Fade";

export function ExploreButton() {
  return (
    <Fade bottom>
      <div className={styles.buttonContainer}>
        <Button className={styles.exploreButton} variant="light">
          Click here to see what I do <i class="far fa-hand-pointer"></i>
        </Button>
      </div>
    </Fade>
  );
}