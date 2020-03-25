import React from "react";
import { Button } from "react-bootstrap";
import { BBackground } from "../../particles/bbackground/bbackground.component";
import styles from "./project-box.module.scss";

export const ProjectBox = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.title}>
          <a className="linkStyle" href={props.siteLink}>
            <span>{props.title}</span>
          </a>
        </p>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.buttonDiv}>
          <Button
            onClick={() => (window.location.href = props.codeLink)}
            variant="danger"
          >
            Link to Code
          </Button>
        </div>
      </div>
    </div>
  );
};
