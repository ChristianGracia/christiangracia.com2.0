import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
// import "./github.styles.scss";
interface IRepoInfo {
  repoName: string;
}

export function Github() {
  const fetchDataAction = async () => {
    const clientId = require("../../config/keys").clientId;
    const clientSecret = require("../../config/keys").clientSecret;
    const URL = `https://api.github.com/users/ChristianGracia/repos?per_page=16&sort=createdasc&client_id=${clientId}&client_secret=${clientSecret}`;

    const data = await fetch(URL);
    const dataJSON = await data.json();
    setGithubData(dataJSON);
    console.log(dataJSON);
  };
  const [githubData, setGithubData] = useState<Array<object>>();
  useState(() => {
    console.log(githubData);
    fetchDataAction();
  });

  const repoItems =
    githubData != undefined
      ? githubData.map((repo: any) => (
          <div style={{}}>
            <p>hi</p>

            <div style={{ padding: 30 }}></div>
          </div>
        ))
      : null;

  return (
    <div>
      <div style={{ fontSize: 30, color: "white" }}>{repoItems}</div>
    </div>
  );
}
