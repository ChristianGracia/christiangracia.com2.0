import React from "react";
import { Particles } from "react-particles-js";

export function BBackground(): JSX.Element {
  return (
    <Particles
      style={{
        width: "100%",
        background: `#3993EC`
      }}
      params={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: false
            }
          },
          size: {
            value: 5,
            random: true
          },
          move: {
            direction: "bottom",
            out_mode: "out"
          },
          line_linked: {
            enable: false
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              mode: "repulse"
            }
          }
        }
      }}
    />
  );
}
