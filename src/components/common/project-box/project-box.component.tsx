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
        textAlign: "center",
        marginTop: 30,
        marginBottom: 30
      }}
    >
      <div
        style={{
          color: "black",
          backgroundColor: "white",
          borderRadius: 19,
          padding: 20
        }}
      >
        <p className="title" style={{ marginTop: 30 }}>
          <a className="linkStyle" href={props.siteLink}>
            <span style={{ fontWeight: "bold", fontSize: 20 }}>
              {props.title}
            </span>
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
