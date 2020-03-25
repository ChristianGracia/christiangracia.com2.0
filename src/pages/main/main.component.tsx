import React from "react";
import { ProjectsPage } from "../projects/projects.component";
import { AboutPage } from "../about/about.component";
//import styles from "./main.module.scss";

export function MainPage(): JSX.Element {
  return (
    <div>
      <AboutPage />
      <ProjectsPage />
    </div>
  );
}
