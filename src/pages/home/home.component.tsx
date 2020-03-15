import React from "react";
// import styles from "./home.module.scss";
import { PBackground } from "../../components/pbackground/pbackground.component";
import { MainInfo } from "../../components/main-info/main-info.component";

export function HomePage() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <div>
        <MainInfo />
      </div>
    </div>
  );
}
