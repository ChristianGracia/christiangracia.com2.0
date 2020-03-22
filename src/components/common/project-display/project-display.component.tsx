import React from "react";
import { ProjectBox } from "../project-box/project-box.component";

export function ProjectDisplay() {
  return (
    <div style={{ backgroundColor: "white", position: "relative" }}>
      <ProjectBox
        codeLink={
          "https://github.com/ChristianGracia/Java-Financial-Web-Scraper"
        }
        title={"Java Web Scraper with React/Redux Front-end"}
        description={
          "Webscraper written in Java that scrapes cryptocurrency data with Selenium, stores the data in a SQL db using MySql, and displays on the React front-end. The Java portion functions as an REST API endpoint that my front-end communicates with. Users can create accounts, request data scrapes, and view all data when logged in."
        }
        tweet={"1198478865901015041"}
        siteLink={""}
      />

      <i className="fas fa-code iconStyle"></i>

      <ProjectBox
        codeLink={"https://github.com/ChristianGracia/onabeat.com"}
        title={"onabeat.com"}
        description={
          "MERN stack site I wrote and host for my friends in On a Beat. Hosted on Heroku on a single server. React/Redux front-end with a Node Js back-end and a MongoDB database. Users can make accounts, sign in, add/delete videos and songs to front page, and more with a protected dashboard I built."
        }
        tweet={"1207152863434231808"}
        siteLink={"http://onabeat.com"}
      />

      <i className="fas fa-code iconStyle"></i>

      <ProjectBox
        codeLink={
          "https://github.com/ChristianGracia/Dental-iOSApp-React-Native"
        }
        title={"Dental iOS App React Native"}
        description={
          "Over 11,000+ lines of React Native code. Users can email the front desk, view detailed info and images about services offered, leave suggestions, and more!"
        }
        tweet={"1173662545464451075"}
        siteLink={"http://adcofnorton.com"}
      />
    </div>
  );
}
