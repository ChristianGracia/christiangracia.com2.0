import React from "react";
import { Button } from "react-bootstrap";

import styles from "./this-site.module.scss";
const cg = require("../../assets/christiangraciacode.PNG");

export function ThisSite() {
  return (
    <div className={styles.pageContainer}>
      <div>
        <span className={styles.siteHeader}>christiangracia.com</span>
      </div>
      <div className={styles.container}>
        <div>
          <img
            src={cg}
            className={styles.siteImage}
            alt="A view of this website's code written in TypeScript"
          />
        </div>
        <span className={styles.siteText}>
          This site is written in Typescript using only functional components
          and React Hooks. React/Redux + Sass front-end with a NodeJS back-end
          API.
        </span>
        <div className={styles.buttonDiv}>
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
