import React from "react";
import styles from "./home.module.scss";
import { PBackground } from "../../components/pbackground/pbackground.component";
import { MainInfo } from "../../components/main-info/main-info.component";
import { ExploreButton } from "../../components/explore-button/explore-button.component";

export function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.particleBackground}>
        <PBackground />
      </div>
      <div className={styles.contentContainer}>
        <MainInfo />
        <ExploreButton />
      </div>
    </div>
  );
}
