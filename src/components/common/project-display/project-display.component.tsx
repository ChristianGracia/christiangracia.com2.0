import React from "react";
import { ProjectBox } from "../project-box/project-box.component";

export function ProjectDisplay(): JSX.Element {
  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto" }}>
      <div style={{ backgroundColor: "white" }}>
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
      </div>
      <div style={{ backgroundColor: "white" }}>
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
    </div>
  );
}
