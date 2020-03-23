import React from "react";
import { Button } from "react-bootstrap";
import { BBackground } from "../../particles/bbackground/bbackground.component";

export const ProjectBox = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center"
      }}
    >
      <div
        style={{ color: "black", backgroundColor: "white", borderRadius: 19 }}
      >
        <p className="title">
          <a className="linkStyle" href={props.siteLink}>
            <span style={{ fontWeight: "bold" }}>{props.title}</span>
          </a>
        </p>
        <p className="description" style={{ maxWidth: 900 }}>
          {props.description}
        </p>
        <div style={{ marginTop: 30, marginBottom: 30 }}>
          <Button
            onClick={() => (window.location.href = props.codeLink)}
            variant="danger"
          >
            Link to Code
          </Button>
        </div>
      </div>
    </div>
  );
};
