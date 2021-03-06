import React from "react";
import { Particles } from "react-particles-js";
import styles from "./pbackground.module.scss";

export function PBackground(): JSX.Element {
  return (
    <Particles
      className={styles.particleBackground}
      params={{
        particles: {
          line_linked: {
            color: "#39F077",
          },
          number: {
            value: 20,
          },
          size: {
            value: 4,
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
      style={{
        width: "100%",
        background: `#3993EC`,
      }}
    />
  );
}
export default PBackground;
