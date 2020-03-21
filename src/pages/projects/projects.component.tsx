import React from "react";
import { SBackground } from "../../components/particles/sbackground/sbackground.component";
import { BuiltSites } from "../../components/built-sites/built-sites.component";
import { Github } from "../../components/github/github.component";

export function ProjectsPage() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <BuiltSites />
      <div>
        <Github />
        <SBackground />
      </div>
    </div>
  );
}
