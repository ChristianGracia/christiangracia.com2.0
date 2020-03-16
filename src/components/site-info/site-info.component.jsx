import React from "react";
import styles from "./site-info.module.scss";

export function SiteInfo() {
  return (
    <div className={styles.siteInfoContainer}>
      <span className={styles.siteInfoText}>Site written in TypeScript</span>
      <span className={styles.siteInfoText}>Front-end: React + Redux</span>
      <span className={styles.siteInfoText}>Back-end API: NodeJs</span>
      <span className={styles.codeLink}>
        <a href="https://github.com/ChristianGracia/christiangracia.com2.0">
          Link to this site's code
        </a>
      </span>
    </div>
  );
}
