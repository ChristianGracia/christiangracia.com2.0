import React from "react";
import * as Fade from "react-reveal/Fade";
import styles from "./built-sites.module.scss";
// import { ProjectDisplay } from "../common/project-display/project-display.component";
import Slider from "react-animated-slider";

const nflPic = require("../../assets/nflpic.PNG");
const onabeatPic = require("../../assets/onabeatpic.PNG");

export function BuiltSites(): JSX.Element {
  const content = [
    {
      title: "Committed to Excellence",
      description:
        "With over 10 years of experience, we work with our clients to make their ideas come true",

      image: nflPic
    }
    // {
    //   title: "Jobs Big or Small, We Got You Covered",
    //   description: "",

    //   image: onabeatPic
    // }
  ];
  return (
    <Fade left cascade>
      <div className={styles.sitesContainer}>
        <span className={styles.sitesHeader}>Other Sites</span>
        <span
          className={styles.sitesDiv}
          style={{ marginTop: 30, marginBottom: 30 }}
        >
          <a className=" btn btn-danger" href="https://www.onabeat.com">
            onabeat.com
          </a>
        </span>

        <Slider className="slider-wrapper" infinite={true} autoplay={2000}>
          {content.map((item: any, index: number) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <div style={{}}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <div>
                  <div style={{}}>
                    <div className="" style={{ marginTop: "10vh" }}>
                      hi
                    </div>
                    {/* <div className="finance-text">
                      <Wave
                        text="Available"
                        effect="stretch"
                        effectChange={1.2}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
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
      </div>
    </Fade>
  );
}
