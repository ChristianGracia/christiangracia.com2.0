import React from "react";
import { ProjectDisplay } from "../../components/common/project-display/project-display.component";
import styles from "./other-projects.styles.module.scss";

export function OtherProjects() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ textAlign: "center" }}>
        <span
          style={{
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: 30,
            borderBottom: "solid 1px white",
            maxWidth: 700,
            minWidth: 300,
            margin: "0 auto",
            color: "#feff01"
          }}
        >
          Projects
        </span>
      </div>
      <ProjectDisplay />
    </div>
  );
}
