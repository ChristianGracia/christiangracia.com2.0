import React from "react";
import { ProjectDisplay } from "../../components/common/project-display/project-display.component";
// import styles from "./other-projects.module.scss";
import { SiteTitle } from "../common/site-title/site-title.component";

export function OtherProjects(): JSX.Element {
  return (
    <div>
      <SiteTitle title="Projects" />
      <ProjectDisplay />
    </div>
  );
}
