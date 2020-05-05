import React from "react";
import styles from "./site-info.module.scss";
import * as Fade from "react-reveal/Fade";

export function SiteInfo() {
  return (
    <Fade bottom cascade>
      <div className={styles.siteInfoContainer}>
        <span className={styles.siteInfoText}>
          Site written in TypeScript{" "}
          <a
            href="https://github.com/ChristianGracia/christiangracia.com2.0"
            className={styles.codeLink}
          >
            Code Link
          </a>
        </span>
        <span className={styles.siteInfoText}>
          <span className={styles.techs}>Front-end:</span> React
        </span>
        <span className={styles.siteInfoText}>
          <span className={styles.techs}>Back-end API:</span> NodeJs
        </span>
        <span className={styles.codeLink}></span>
      </div>
    </Fade>
  );
}
