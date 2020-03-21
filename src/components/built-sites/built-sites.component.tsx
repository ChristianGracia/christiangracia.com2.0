import React from "react";
import * as Fade from "react-reveal/Fade";
import styles from "./built-sites.module.scss";
import { SiteImage } from "../common/site-image/site-image.component";

const nflPic = require("../../assets/nflpic.PNG");
const onabeatPic = require("../../assets/onabeatpic.PNG");

export function BuiltSites() {
  return (
    <Fade left cascade>
      <div className={styles.sitesContainer}>
        <span className={styles.sitesHeader}>Other Sites</span>
        <span className={styles.sitesDiv}>
          <a
            className="site-link btn btn-danger"
            href="https://www.onabeat.com"
          >
            onabeat.com
          </a>
        </span>
        <div>
          <img className={styles.siteImages} src={nflPic} />
        </div>
        <div>
          <img className={styles.siteImages} src={onabeatPic} />
        </div>

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
      </div>
    </Fade>
  );
}
