import React from "react";
import styles from "./construction-banner.module.scss";

export function ConstructionBanner(): JSX.Element {
  return (
    <div>
      <span className={styles.siteInfoText}>
        <span className={styles.techs}>
          Starting writing new website 7/6/2020. Coming soon
        </span>{" "}
        <a
          href="https://github.com/ChristianGracia/christiangracia3.0"
          style={{ color: "white" }}
        >
          Link to new site code
        </a>
      </span>
    </div>
  );
}
