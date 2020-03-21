import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
// import "./github.styles.scss";

export function Github() {
  const fetchDataAction = async () => {
    const URL = "";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    setGithubData(dataJSON);
    console.log(dataJSON);
  };
  const [githubData, setGithubData] = useState<object>({});
  useState(() => {
    // setGithubData({ one: "1" });
    console.log(githubData);
    fetchDataAction();
  });

  return <div style={{ fontSize: 30, color: "white" }}>Hi</div>;
}
