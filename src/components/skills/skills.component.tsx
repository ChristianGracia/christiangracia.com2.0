import React from "react";
import * as Fade from "react-reveal/Fade";
import * as LightSpeed from "react-reveal/LightSpeed";
// import Skills from "../skills/skills.component";
// import Education from "../education/education.component";
// import "./skills-and-edu.styles.css";
import Slide from "react-reveal/Slide";
import styles from "./skills.module.scss";

export function Skills() {
  return (
    <div>
      <div style={{ padding: 20 }}></div>
      <div className="container">
        <div className="">
          <div className="col-sm">
            <div style={{ paddingBottom: 5 }}></div>
            <Fade top></Fade>

            <LightSpeed top cascade>
              <div
                style={{
                  alignItems: "center",

                  textAlign: "center"
                }}
              >
                <p className={styles.skillsText}>
                  <span style={{ color: "yellow" }}>Languages:</span>{" "}
                  JavaScript, C#, Java, Python, C, PHP, HTML/CSS
                </p>
                <p
                  style={{
                    color: "white",
                    fontWeight: "bold"
                  }}
                >
                  <span style={{ color: "yellow" }}>Frameworks:</span> React
                  Native, VueJS, Angular, Django, Flask
                </p>
                <p className={styles.skillsText}>
                  <span style={{ color: "yellow" }}>Libraries:</span> React,
                  Redux, Bootstrap, Express.js, NodeJs
                </p>

                <p className={styles.skillsText}>
                  <span style={{ color: "yellow" }}>Database:</span> SQL, NoSQL,
                  MongoDB, MySQL, SQL Server
                </p>

                <p className={styles.skillsText}>
                  <span style={{ color: "yellow" }}>API:</span> RESTful,
                  GraphQL, AWS Amplify Serverless
                </p>
              </div>
            </LightSpeed>

            <Slide right cascade>
              <div className={styles.container}>
                <p className={styles.skillHeader}>Technologies</p>
                <span className={styles.skillsText}>
                  NET, .NET Core, ASP.NET MVC, Maven, Sprint Boot, Docker, Git,
                  Eclipse, Visual Studio Code, Linux, Salesforce, Skuid
                </span>
              </div>

              <div className={styles.container}>
                <p className={styles.skillHeader}>Skills</p>
                <span className={styles.skillsText}>
                  {" "}
                  Unit testing, MERN stack, API design, OOP, TDD, SOLID, Design
                  Patterns, UI/UX, Data Structures, Algorithms, Agile, Scrum
                </span>
              </div>

              <span style={{ padding: 30 }}></span>
            </Slide>

            <LightSpeed left>
              <div
                style={{
                  padding: 20
                }}
              >
                <div
                  className="row"
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    margin: "auto",
                    padding: 2,
                    justifyContent: "space-around"
                  }}
                >
                  <div className="col-xs">
                    <span style={{ color: "#F5DE19", textAlign: "center" }}>
                      <i
                        style={{ fontSize: 47 }}
                        className="fab fa-js-square"
                      ></i>
                    </span>
                  </div>
                  <div className="col-xs">
                    <span style={{ color: "#3775A8" }}>
                      <i style={{ fontSize: 47 }} className="fab fa-python"></i>
                    </span>
                  </div>
                  <div className="col-xs">
                    <span style={{ color: "#87C000" }}>
                      <i style={{ fontSize: 47 }} className="fab fa-node"></i>
                    </span>
                  </div>
                  <div className="col-xs">
                    <span style={{ color: "#60DBFB" }}>
                      <i style={{ fontSize: 47 }} className="fab fa-react"></i>
                    </span>
                  </div>
                </div>
              </div>
            </LightSpeed>
          </div>
          <div style={{ padding: 10 }}></div>
          <div className="col-sm">
            <div
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 20
              }}
            >
              {" "}
              <div style={{ paddingBottom: 30 }}></div>
              <span style={{ color: "yellow" }}>
                <i style={{ fontSize: 200 }} className="far fa-lightbulb"></i>
              </span>
            </div>{" "}
            <div style={{ paddingBottom: 30 }}></div>
            <Fade right></Fade>
          </div>
        </div>
      </div>
      <div style={{ padding: 50 }}></div>
    </div>
  );
}
