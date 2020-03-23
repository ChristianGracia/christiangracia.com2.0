import React from "react";
import { BBackground } from "../../components/particles/bbackground/bbackground.component";
import { Skills } from "../../components/skills/skills.component";

export function AboutPage() {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <BBackground />
      <Skills />
    </div>
  );
}
