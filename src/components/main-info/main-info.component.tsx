import React from "react";
import styles from "./main-info.module.scss";

import * as Slide from "react-reveal/Slide";
import { Wave } from "react-animated-text";
import { SocialLinks } from "../social-links/social-links.component";

export function MainInfo(): JSX.Element {
  return (
    <div className={styles.mainInfoContainer}>
      <div className="row">
        <div className="col-sm">
          <div className={styles.container}>
            <div className={styles.nameText}>
              {" "}
              <Wave
                text="Christian Gracia"
                effect="stretch"
                effectChange={1.2}
              />
            </div>
          </div>
          <p className={styles.jobText}>
            Software Engineer <i className="fas fa-laptop-code"></i>
            {"  "}
            Providence, RI
          </p>{" "}
          <Slide left>
            <p className={styles.languagesText}>
              React, Java, React Native, C#, ++
            </p>
          </Slide>
          <p className={styles.emailText}>
            Email{" "}
            <span style={{ color: "#FEFF01" }}>
              <i className="fas fa-envelope"></i>
            </span>{" "}
            <span className={styles.email}>christianmgracia@gmail.com</span>
          </p>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}
