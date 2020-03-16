import React from "react";
import { ProjectsPage } from "../projects/projects.component";
import { AboutPage } from "../about/about.component";

export function MainPage() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <ProjectsPage />
      </div>
      <div>
        <AboutPage />
      </div>
    </div>
  );
}
