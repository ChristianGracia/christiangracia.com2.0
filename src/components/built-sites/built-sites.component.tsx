import React from "react";
import * as Fade from "react-reveal/Fade";
import styles from "./built-sites.module.scss";
import { ProjectDisplay } from "../common/project-display/project-display.component";

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
          <img
            className={styles.siteImages}
            alt="natures frontier landscaping site I built"
            src={nflPic}
          />
        </div>
        <ProjectDisplay />
        <div>
          <img
            className={styles.siteImages}
            src={onabeatPic}
            alt="onabeat multimedia site I built"
          />
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
