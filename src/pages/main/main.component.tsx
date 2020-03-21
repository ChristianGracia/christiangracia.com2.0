import React from "react";
import { ProjectsPage } from "../projects/projects.component";
import { AboutPage } from "../about/about.component";
import styles from "./main.module.scss";

export function MainPage() {
  return (
    <div className={styles.pageContainer} style={{ backgroundColor: "black" }}>
      <div>
        <ProjectsPage />
      </div>
      <div>
        <AboutPage />
      </div>
    </div>
  );
}
