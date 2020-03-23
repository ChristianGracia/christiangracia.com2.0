import React from "react";
import { ProjectDisplay } from "../../components/common/project-display/project-display.component";
import styles from "./other-projects.module.scss";

export function OtherProjects() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ textAlign: "center" }}>
        <span className={styles.sitesHeaders}>Projects</span>
      </div>
      <ProjectDisplay />
    </div>
  );
}
