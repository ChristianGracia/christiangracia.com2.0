import React from "react";
import "./social-links.module.scss";

export function SocialLinks() {
  return (
    <div style={{ textAlign: "center" }} className="social-links">
      <a href="https://github.com/ChristianGracia">
        <span style={{ paddingRight: 5, color: "white" }}>GitHub</span>
        <span>
          <i
            className="fab fa-github"
            style={{ color: "#FEFF01", fontSize: 20 }}
          ></i>
        </span>
      </a>
      <span style={{ padding: 10 }}></span>
      <a href="https://www.linkedin.com/in/christiangracia">
        <span style={{ paddingRight: 5, color: "white" }}>LinkedIn</span>
        <span>
          <i
            className="fab fa-linkedin"
            style={{ color: "#FEFF01", fontSize: 20 }}
          ></i>
        </span>
      </a>
      <span style={{ padding: 10 }}></span>

      <a href="http://www.twitter.com/CG_CODING">
        <span style={{ paddingRight: 5, color: "white" }}>Twitter</span>
        <span>
          <i
            className="fab fa-twitter"
            style={{ color: "#FEFF01", fontSize: 20 }}
          ></i>
        </span>
      </a>
    </div>
  );
}
