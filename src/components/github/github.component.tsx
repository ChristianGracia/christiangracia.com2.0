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
          <div key={repo.id} style={{}}>
            <Fade top>
              <div
                key={repo.id}
                className="card card-body mb-2 bg-light ml-auto mr-auto pr-3"
                style={{ margin: 0, paddingRight: 0, width: "88vw" }}
              >
                <div className="row">
                  <div className="col-lg-6" style={{}}>
                    <h4 style={{ color: "white" }}>
                      <Link
                        to={`//${repo.html_url.substr(7)}`}
                        className="text-info"
                        target="_blank"
                      >
                        <p style={{ color: "#3993EC" }}>{repo.name}</p>
                      </Link>
                    </h4>
                    <p>{repo.description}</p>
                  </div>

                  <div className="col-md-6" style={{}}>
                    <span className="badge badge-info mr-1">
                      <i className="fas fa-star"></i> Stars:{" "}
                      {repo.stargazers_count}
                    </span>
                    <span className="badge badge-secondary mr-1">
                      <i className="fas fa-eye"></i> Watchers:{" "}
                      {repo.watchers_count}
                    </span>
                    <span className="badge badge-success">
                      <i className="fas fa-code-branch"></i> Forks:{" "}
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
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
