import React from "react";
import { BBackground } from "../../components/particles/bbackground/bbackground.component";
import { Skills } from "../../components/skills/skills.component";
import styles from "./about.module.scss";

export function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.particleBackground}>
        <BBackground />
      </div>
      <Skills />
    </div>
  );
}
