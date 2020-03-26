import React from "react";
import { Button } from "react-bootstrap";

export function ButtonCG(props: any) {
  return (
    <div>
      <Button variant={props.buttonColor} onClick={props.onClick}>
        {props.buttonText}
      </Button>
    </div>
  );
}
