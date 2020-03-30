import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styles from "./github.module.scss";
import { Spinner } from "../common/spinner/spinner.component";
import { SiteTitle } from "../common/site-title/site-title.component";
import { ButtonCG } from "../common/button-cg/button-cg.component";

export function Github(): JSX.Element {
  const fetchDataAction = async (number: number = 6) => {
    const clientId = require("../../config/keys").clientId;
    const clientSecret = require("../../config/keys").clientSecret;
    const URL = `https://api.github.com/users/ChristianGracia/repos?per_page=${number}&sort=createdasc&client_id=${clientId}&client_secret=${clientSecret}`;

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
                    maxWidth: 500,
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
                      <span style={{ fontSize: 20, padding: 10 }}>
                        {repo.description}
                      </span>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <span>
                        <span className={styles.updatedText}>
                          Last updated at:{" "}
                        </span>
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 10
                          }}
                        >
                          {getUpdateTime(repo.updated_at)}
                        </span>
                      </span>
                      <div
                        style={{
                          textAlign: "center",
                          flexWrap: "wrap",
                          margin: 5
                        }}
                      >
                        <span style={{ color: "#3993EC" }}> Language: </span>
                        <span className="badge badge-danger">
                          {repo.language}
                        </span>
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
        <SiteTitle title="My Recent Github Repos" />
        <div
          style={{
            margin: 35
          }}
        >
          <span className={styles.codeText}>
            This functional component uses React Hooks to call GitHub's API and
            render my repos on my site. Click on a repos name to see some code.
          </span>

          <div className="m-2">
            <ButtonCG
              buttonText="Code for this component"
              buttonColor="outline-light"
              onClick={() =>
                (window.location.href =
                  "https://github.com/ChristianGracia/christiangracia.com2.0/blob/master/src/components/github/github.component.tsx")
              }
            />
          </div>
          <div className="mt-5">
            <ButtonCG
              buttonColor="light"
              buttonText={
                githubData === undefined
                  ? "Show repositories"
                  : "Hide repositories"
              }
              onClick={() => hideRepos()}
            />
          </div>
          {githubData === undefined || githubData.length > 6 ? null : (
            <div className="mt-5">
              <ButtonCG
                buttonColor="success"
                buttonText="Show more"
                onClick={() => fetchDataAction(12)}
              />
            </div>
          )}

          {githubData !== undefined && githubData.length > 6 ? (
            <div className="mt-5">
              <ButtonCG
                buttonColor="danger"
                buttonText="Show less"
                onClick={() => fetchDataAction(3)}
              />
            </div>
          ) : null}
        </div>
      </div>
      <React.Suspense
        fallback={
          <div style={{ color: "white", padding: 40 }}>
            <Spinner />
          </div>
        }
      >
        <div className={styles.repoContainer}>{repoItems}</div>
      </React.Suspense>
    </div>
  );
}
