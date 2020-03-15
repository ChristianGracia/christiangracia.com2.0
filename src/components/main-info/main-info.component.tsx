import React from "react";
import styles from "./main-info.module.scss";

import * as Slide from "react-reveal/Slide";
import { Wave } from "react-animated-text";

export function MainInfo() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <div className="container" style={{ alignItems: "center" }}>
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
      </div>
    </div>
  );
}
