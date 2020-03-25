import React from "react";
import styles from "./site-title.module.scss";

export function SiteTitle(props: any): JSX.Element {
  return (
    <div className={styles.headerDiv}>
      <span className={styles.siteHeader}>{props.title}</span>
    </div>
  );
}
