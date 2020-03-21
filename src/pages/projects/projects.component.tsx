import React from "react";
import { SBackground } from "../../components/particles/sbackground/sbackground.component";
import { BuiltSites } from "../../components/built-sites/built-sites.component";
import { Github } from "../../components/github/github.component";
import styles from "./projects.module.scss";

export function ProjectsPage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.particleBackground} style={{ height: 100 }}>
        <SBackground />
      </div>
      <div style={{ backgroundColor: "black" }}>
        <BuiltSites />
        <Github />
      </div>
      <div style={{ padding: 60 }}></div>
    </div>
  );
}
