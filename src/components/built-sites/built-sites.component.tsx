import React from "react";
import * as Fade from "react-reveal/Fade";
import styles from "./built-sites.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { ProjectBox } from "../common/project-box/project-box.component";
import { SiteTitle } from "../common/site-title/site-title.component";

const onabeatPic = require("../../assets/onabeat.JPG");
const onabeatPic2 = require("../../assets/onabeat2.PNG");
const onabeatPic3 = require("../../assets/onabeat3.PNG");
const onabeatPic4 = require("../../assets/onabeat4.JPG");
const nflPic = require("../../assets/nflpic.JPG");
const nflPic2 = require("../../assets/nflpic2.PNG");
const nflPic3 = require("../../assets/nflpic3.PNG");

export function BuiltSites(): JSX.Element {
  return (
    <Fade left cascade>
      <div className={styles.sitesContainer}>
        <SiteTitle title="Sites I've Built" />

        <div className={styles.projectContainer}>
          <ProjectBox
            codeLink={"https://github.com/ChristianGracia/onabeat.com"}
            title={"onabeat.com"}
            description={
              "MERN stack site I wrote and host for my friends in On a Beat. Hosted on Heroku on a single server. React/Redux front-end with a Node Js back-end and a MongoDB database. Users can make accounts, sign in, add/delete videos, songs, pics, and gifs to front page, and more with a site dashboard I built."
            }
            tweet={"1207152863434231808"}
            siteLink={"http://onabeat.com"}
          />{" "}
          <Carousel autoPlay="true" infiniteLoop="true">
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
          <div className={styles.iconColor}>
            <i className="fas fa-code"></i>
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
          <Carousel autoPlay="true" infiniteLoop="true">
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
      </div>
    </Fade>
  );
}
