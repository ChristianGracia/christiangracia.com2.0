import React from "react";
import styles from "./site-info.module.scss";

export function SiteInfo() {
  return (
    <div className={styles.siteInfoContainer}>
      <span className={styles.siteInfoText}>Site written in TypeScript</span>
      <span className={styles.siteInfoText}>
        {" "}
        <span style={{ color: "#F9FD06" }}>Front-end:</span> React + Redux
      </span>
      <span className={styles.siteInfoText}>
        <span style={{ color: "#F9FD06" }}>Back-end API:</span> NodeJs
      </span>
      <span className={styles.codeLink}>
        <a
          href="https://github.com/ChristianGracia/christiangracia.com2.0"
          className={styles.codeLink}
        >
          Link to this site's code
        </a>
      </span>
    </div>
  );
}
