import React from "react";
import * as Fade from "react-reveal/Fade";
import styles from "./built-sites.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import { ProjectDisplay } from "../common/project-display/project-display.component";

// import Slider from "react-animated-slider";

const nflPic = require("../../assets/nflpic.PNG");
const onabeatPic = require("../../assets/onabeatpic.PNG");
const nflPic2 = require("../../assets/nflpic2.PNG");
const onabeatPic2 = require("../../assets/onabeat2.PNG");
// const content = [
//   {
//     image: nflPic
//   },
//   {
//     image: onabeatPic
//   }
// ];

export function BuiltSites(): JSX.Element {
  return (
    <Fade left cascade>
      <div className={styles.sitesContainer}>
        <span className={styles.sitesHeader}>Other Sites</span>

        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            minWidth: 290,
            padding: 20
          }}
        >
          <Carousel>
            <div>
              <img src={onabeatPic} />
            </div>
            <div>
              <img src={onabeatPic2} />
            </div>
          </Carousel>
          <Carousel>
            <div>
              <img src={nflPic} />
            </div>
            <div>
              <img src={nflPic2} />
            </div>
          </Carousel>
        </div>
        {/*
        <div>
          <img
            className={styles.siteImages}
            src={onabeatPic}
            alt="onabeat multimedia site I built"
          />
        </div>
        <div>
          <img
            className={styles.siteImages}
            alt="natures frontier landscaping site I built"
            src={nflPic}
          />
        </div>

        <span
          className={styles.sitesDiv}
          style={{ marginTop: 30, marginBottom: 30 }}
        >
          <a className="btn btn-danger" href="https://www.nflandscaping.com">
            nflandscaping.com
          </a>
        </span>
        <span
          className={styles.sitesDiv}
          style={{ marginTop: 30, marginBottom: 30 }}
        >
          <a className=" btn btn-danger" href="https://www.onabeat.com">
            onabeat.com
          </a>
        </span>
              */}
      </div>
    </Fade>
  );
}
