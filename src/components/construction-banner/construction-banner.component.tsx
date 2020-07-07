import React from "react";
import styles from "./construction-banner.module.scss";

export function ConstructionBanner(): JSX.Element {
  return (
    <div className={styles.constructionContainer}>
      <div style={{ padding: 20 }}></div>
      <div className={"alert alert-warning"} role="alert">
        <span className={styles.siteInfoText}>
          <span className={styles.techs}>7/6/2020 | Writing new website |</span>{" "}
        </span>

        <span className={styles.siteInfoText}>
          Coming soon →{" "}
          <a
            href="http://christiangracia-staging.herokuapp.com/"
            style={{ color: "red", fontWeight: "bold" }}
          >
            Preview{" "}
          </a>
        </span>
      </div>
    </div>
  );
}
