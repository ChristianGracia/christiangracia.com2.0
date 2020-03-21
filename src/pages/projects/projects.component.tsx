import React from "react";
import { SBackground } from "../../components/particles/sbackground/sbackground.component";
import { BuiltSites } from "../../components/built-sites/built-sites.component";
import { Github } from "../../components/github/github.component";
import styles from "./projects.module.scss";
import { ProjectDisplay } from "../../components/common/project-display/project-display.component";

export function ProjectsPage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.particleBackground} style={{}}>
        <SBackground />
      </div>
      <div style={{ backgroundColor: "black" }}>
        <BuiltSites />
        <Github />
        <ProjectDisplay />
      </div>
      <div style={{ padding: 60 }}></div>
    </div>
  );
}
