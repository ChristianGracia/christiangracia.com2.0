import React from "react";
import styles from "./main-info.module.scss";

import * as Slide from "react-reveal/Slide";

export function MainInfo() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <div className="container" style={{ alignItems: "center" }}>
        <div className="row">
          <div className="col-sm">
            <div className={styles.container}>
              <Slide left>
                <div className={styles.nameText}>Christian Gracia</div>
              </Slide>
            </div>
            <p className={styles.jobText}>
              Software Engineer <i className="fas fa-laptop-code"></i>
              {"  "}
              Providence, RI
            </p>
            <p className={styles.languagesText}>
              React, Java, React Native, C#, ++
            </p>
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
