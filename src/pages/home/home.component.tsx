import React from "react";
import styles from "./home.module.scss";
import { PBackground } from "../../components/particles/pbackground/pbackground.component";
import { MainInfo } from "../../components/main-info/main-info.component";
import { ExploreButton } from "../../components/explore-button/explore-button.component";
import { SiteInfo } from "../../components/site-info/site-info.component";

export function HomePage(): JSX.Element {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.particleBackground}>
        <React.Suspense
          fallback={
            <div style={{ color: "white", padding: 40 }}>Loading...</div>
          }
        >
          <PBackground />
        </React.Suspense>
      </div>
      <div className={styles.contentContainer}>
        <MainInfo />

        <ExploreButton />
        <SiteInfo />
      </div>
    </div>
  );
}
// <LazyLoad placeholder={<Spinner />}>
//   <PBackground />
// </LazyLoad>
