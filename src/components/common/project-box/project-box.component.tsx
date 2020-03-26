import React from "react";
import styles from "./project-box.module.scss";
import { ButtonCG } from "../button-cg/button-cg.component";

export const ProjectBox = (props: any): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.title}>
          <a href={props.siteLink}>
            <span>{props.title}</span>
          </a>
        </p>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.buttonDiv}>
          <ButtonCG
            buttonText="See my code"
            buttonColor="primary"
            onClick={() => (window.location.href = props.codeLink)}
          />
        </div>
      </div>
    </div>
  );
};
