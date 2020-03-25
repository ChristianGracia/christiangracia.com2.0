import React from "react";
import * as Fade from "react-reveal/Fade";
import styles from "./built-sites.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { ProjectBox } from "../common/project-box/project-box.component";

// import Slider from "react-animated-slider";

const onabeatPic = require("../../assets/onabeatpic.PNG");
const onabeatPic2 = require("../../assets/onabeat2.PNG");
const onabeatPic3 = require("../../assets/onabeat3.PNG");
const nflPic = require("../../assets/nflpic.PNG");
const nflPic2 = require("../../assets/nflpic2.PNG");
const nflPic3 = require("../../assets/nflpic3.PNG");

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
        <span className={styles.sitesHeader}>Sites I Built</span>

        <div
          style={{
            maxWidth: 700,
            width: "60%",
            minWidth: 280,
            margin: "0 auto",
            padding: 10
          }}
        >
          <ProjectBox
            codeLink={"https://github.com/ChristianGracia/onabeat.com"}
            title={"onabeat.com"}
            description={
              "MERN stack site I wrote and host for my friends in On a Beat. Hosted on Heroku on a single server. React/Redux front-end with a Node Js back-end and a MongoDB database. Users can make accounts, sign in, add/delete videos, songs, pics, and gifs to front page, and more with a site dashboard I built."
            }
            tweet={"1207152863434231808"}
            siteLink={"http://onabeat.com"}
          />{" "}
          <Carousel>
            <div>
              <img src={onabeatPic} alt="Main page of onabeat.com" />
            </div>
            <div>
              <img
                src={onabeatPic2}
                alt="Admin dashboard where they can edit what is on their site that I made from scratch"
              />
            </div>
            <div>
              <img src={onabeatPic3} alt="Login screen for website I made" />
            </div>
          </Carousel>
          <div
            style={{
              color: "#FDFE01",
              fontSize: 40
            }}
          >
            <i className="fas fa-code iconStyle"></i>
          </div>
          <ProjectBox
            codeLink={"https://github.com/ChristianGracia/nflandscaping.com"}
            title={"Nature's Frontier Landscaping"}
            description={
              "React front-end + NodeJS back-end site I made for Nature's Frontier Landscaping"
            }
            tweet={"1173662545464451075"}
            siteLink={"http://nflandscaping.com"}
          />
          <Carousel>
            <div>
              <img
                src={nflPic}
                alt="Natures view of Frontier's landscaping website I made"
              />
            </div>
            <div>
              <img
                src={nflPic2}
                alt="Another view of Natures Frontier's landscaping website I made"
              />
            </div>
            <div>
              <img
                src={nflPic3}
                alt="One more view of Natures Frontier's landscaping website I made"
              />
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
