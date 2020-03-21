import React from "react";

export function SiteImage(props: any): JSX.Element {
  return (
    <div>
      {" "}
      <img src={props.logo} alt="site content" />
    </div>
  );
}
