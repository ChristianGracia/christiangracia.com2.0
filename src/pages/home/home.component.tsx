import React from "react";
import styles from "./home.module.scss";
import { PBackground } from "../../components/particles/pbackground/pbackground.component";
import { MainInfo } from "../../components/main-info/main-info.component";
import { ExploreButton } from "../../components/explore-button/explore-button.component";
import { SiteInfo } from "../../components/site-info/site-info.component";
import LazyLoad from "react-lazyload";
import { Spinner } from "../../components/common/spinner/spinner.component";

export function HomePage(): JSX.Element {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.particleBackground}>
        <LazyLoad placeholder={<Spinner />}>
          <PBackground />
        </LazyLoad>
      </div>
      <div className={styles.contentContainer}>
        <MainInfo />

        <ExploreButton />
        <SiteInfo />
      </div>
    </div>
  );
}
