import React from "react";
import { Button } from "react-bootstrap";

export function ButtonCG(props: any) {
  return (
    <div>
      <Button>{props.buttonText}</Button>
    </div>
  );
}
