import React from "react";
import { Button } from "react-bootstrap";

import styles from "./this-site.module.scss";
import { SiteTitle } from "../common/site-title/site-title.component";
import { ButtonCG } from "../common/button-cg/button-cg.component";
const cg = require("../../assets/christiangraciacode.PNG");

export function ThisSite(): JSX.Element {
  return (
    <div className={styles.pageContainer}>
      <SiteTitle title="christiangracia.com" />
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
          <ButtonCG
            buttonText="See my code"
            buttonColor="outline-light"
            onClick={() =>
              (window.location.href =
                "https://github.com/ChristianGracia/christiangracia.com2.0")
            }
          />
        </div>
      </div>
    </div>
  );
}
