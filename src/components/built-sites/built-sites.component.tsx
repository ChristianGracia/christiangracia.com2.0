import React from "react";
import * as Fade from "react-reveal/Fade";
import styles from "./built-sites.module.scss";

export function BuiltSites() {
  return (
    <Fade left cascade>
      <div className={styles.sitesContainer}>
        <span className={styles.sitesHeader}>Sites I built and host</span>
        <span className={styles.sitesDiv}>
          <a
            className="site-link btn btn-danger"
            href="https://www.onabeat.com"
          >
            onabeat.com
          </a>
        </span>
        <span
          className={styles.sitesDiv}
          style={{ marginTop: 30, marginBottom: 30 }}
        >
          <a
            className="site-link btn btn-danger"
            href="https://www.nflandscaping.com"
          >
            nflandscaping.com
          </a>
        </span>

        <span
          style={{
            fontWeight: "bold",
            color: "rgb(0,255,0)",
            fontSize: 23,
            marginTop: 10
          }}
        >
          All sites are clients
        </span>
      </div>
    </Fade>
  );
}
