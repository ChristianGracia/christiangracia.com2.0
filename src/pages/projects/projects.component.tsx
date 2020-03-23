import React from "react";
import { SBackground } from "../../components/particles/sbackground/sbackground.component";
import { BuiltSites } from "../../components/built-sites/built-sites.component";
import { Github } from "../../components/github/github.component";
import styles from "./projects.module.scss";

import { OtherProjects } from "../../components/other-projects/other-projects.component";
import { ThisSite } from "../../components/this-site/this-site.component";

export function ProjectsPage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.particleBackground} style={{}}>
        <SBackground />
      </div>
      <div>
        <ThisSite />
        <BuiltSites />
        <Github />
        <div style={{ maxWidth: 506, margin: "0 auto" }}>
          <OtherProjects />
        </div>
      </div>
      <div style={{ padding: 60 }}></div>
    </div>
  );
}
