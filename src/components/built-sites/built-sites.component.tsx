import React from "react";
import * as Fade from "react-reveal/Fade";
import styles from "./built-sites.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { ProjectBox } from "../common/project-box/project-box.component";

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
          <ProjectBox
            codeLink={"https://github.com/ChristianGracia/onabeat.com"}
            title={"onabeat.com"}
            description={
              "MERN stack site I wrote and host for my friends in On a Beat. Hosted on Heroku on a single server. React/Redux front-end with a Node Js back-end and a MongoDB database. Users can make accounts, sign in, add/delete videos and songs to front page, and more with a protected dashboard I built."
            }
            tweet={"1207152863434231808"}
            siteLink={"http://onabeat.com"}
          />

          <i className="fas fa-code iconStyle"></i>
          <Carousel>
            <div>
              <img src={nflPic} />
            </div>
            <div>
              <img src={nflPic2} />
            </div>
          </Carousel>

          <ProjectBox
            codeLink={"https://github.com/ChristianGracia/nflandscaping.com"}
            title={"Nature's Frontier Landscaping"}
            description={
              "Over 11,000+ lines of React Native code. Users can email the front desk, view detailed info and images about services offered, leave suggestions, and more!"
            }
            tweet={"1173662545464451075"}
            siteLink={"http://nflandscaping.com"}
          />
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
