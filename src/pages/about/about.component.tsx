import React from "react";
import { BBackground } from "../../components/particles/bbackground/bbackground.component";
import { Skills } from "../../components/skills/skills.component";
import styles from "./about.module.scss";
import { SiteTitle } from "../../components/common/site-title/site-title.component";

export function AboutPage(): JSX.Element {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.particleBackground}>
        <BBackground />
      </div>
      <SiteTitle title="About" />
      <Skills />
    </div>
  );
}
