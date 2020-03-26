import React from "react";
import { Particles } from "react-particles-js";

export function NBackground(): JSX.Element {
  return (
    <Particles
      style={{ backgroundColor: "#3993EC" }}
      params={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          line_linked: {
            enable: true,
            opacity: 0.02
          },
          move: {
            direction: "right",
            speed: 0.05
          },
          size: {
            value: 1
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
    />
  );
}
