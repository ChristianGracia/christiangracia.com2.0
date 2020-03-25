import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Button } from "react-bootstrap";
import styles from "./github.module.scss";

export function Github(): JSX.Element {
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

  const getUpdateTime = (time: string): string => {
    var timeSplit = time.split("T");
    var date = timeSplit[0];
    var dateSplit = date.split("-");
    var newDate = [dateSplit[1], dateSplit[2], dateSplit[0]].join("-");
    var hours = timeSplit[1];
    var returnString = newDate + "\n " + hours.substring(0, hours.length - 1);
    return returnString;
  };
  const hideRepos = () => {
    if (githubData === undefined) {
      fetchDataAction();
    } else {
      setGithubData(undefined);
    }
  };

  const repoItems =
    githubData !== undefined
      ? githubData.map(
          (repo: any): JSX.Element => (
            <div key={repo.id} style={{ padding: 20 }}>
              <Fade top>
                <div
                  key={repo.id}
                  className="card card-body mb-2 bg-light ml-auto mr-auto"
                  style={{
                    margin: 0,
                    maxWidth: 400,
                    minWidth: 280,
                    padding: 20
                  }}
                >
                  <div
                    className="row"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <div className="" style={{ textAlign: "center" }}>
                      <h4 style={{ color: "white" }}>
                        <Link
                          to={`//${repo.html_url.substr(7)}`}
                          className="text-info"
                          target="_blank"
                        >
                          <p style={{ color: "#007BFF", fontWeight: "bold" }}>
                            {repo.name}
                          </p>
                        </Link>
                      </h4>
                      <span style={{ fontSize: 20 }}>{repo.description}</span>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <span
                        className={styles.updatedText}
                        // style={{ color: "#3892EB" }}
                      >
                        Last updated at:{" "}
                      </span>
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: 20
                        }}
                      >
                        {getUpdateTime(repo.updated_at)}
                      </span>

                      <div
                        className="badge badge-danger"
                        style={{
                          textAlign: "center",
                          flexWrap: "wrap",
                          margin: 5
                        }}
                      >
                        <span> Language: </span>
                        <span>{repo.language}</span>
                        {/*
                        <span className="badge badge-info ">
                          <i className="fas fa-star"></i> Stars:{" "}
                          {repo.stargazers_count}
                        </span>
                        <span className="badge badge-secondary ">
                          <i className="fas fa-eye"></i> Watchers:{" "}
                          {repo.watchers_count}
                        </span>
                        <span className="badge badge-success">
                          <i className="fas fa-code-branch"></i> Forks:{" "}
                          {repo.forks_count}
                    </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          )
        )
      : null;

  return (
    <div>
      <div style={{ position: "relative", textAlign: "center" }}>
        <span className={styles.githubHeader}>
          {" "}
          Latest Github Repos <i className="fab fa-github"></i>{" "}
        </span>
        <div style={{ marginTop: 35, marginBottom: 35 }}>
          <Button onClick={() => hideRepos()}>
            {githubData === undefined ? "Show " : "Hide "}
            Projects
          </Button>
        </div>
      </div>

      <div
        style={{
          fontSize: 30,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {" "}
        {repoItems}
      </div>
    </div>
  );
}
