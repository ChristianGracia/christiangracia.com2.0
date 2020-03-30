import React from "react";
import "./social-links.module.scss";

export function SocialLinks(): JSX.Element {
  return (
    <div style={{ textAlign: "center" }} className="social-links">
      <a href="https://github.com/ChristianGracia">
        <span style={{ paddingRight: 5, color: "white" }}>GitHub</span>
        <span>
          <React.Suspense fallback={<div></div>}>
            <i
              className="fab fa-github"
              style={{ color: "#FEFF01", fontSize: 20 }}
            ></i>
          </React.Suspense>
        </span>
      </a>
      <span style={{ padding: 10 }}></span>
      <a href="https://www.linkedin.com/in/christiangracia">
        <span style={{ paddingRight: 5, color: "white" }}>LinkedIn</span>
        <span>
          <React.Suspense fallback={<div></div>}>
            <i
              className="fab fa-linkedin"
              style={{ color: "#FEFF01", fontSize: 20 }}
            ></i>
          </React.Suspense>
        </span>
      </a>
      <span style={{ padding: 10 }}></span>

      <a href="http://www.twitter.com/CG_CODING">
        <span style={{ paddingRight: 5, color: "white" }}>Twitter</span>
        <span>
          <React.Suspense fallback={<div></div>}>
            <i
              className="fab fa-twitter"
              style={{ color: "#FEFF01", fontSize: 20 }}
            ></i>
          </React.Suspense>
        </span>
      </a>
    </div>
  );
}
