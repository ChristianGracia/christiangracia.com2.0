import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
// import "./github.styles.scss";
interface repoInfo {}

export function Github() {
  const fetchDataAction = async () => {
    const clientId = require("../../config/keys").clientId;
    const clientSecret = require("../../config/keys").clientSecret;
    const URL = `https://api.github.com/users/ChristianGracia/repos?per_page=10&sort=createdasc&client_id=${clientId}&client_secret=${clientSecret}`;

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
