import React from "react";
import "./skills.css";
import Technical from "./Technical";
const technicalSkills = {
        "Programming Languages and Frameworks" : ["Java","Groovy","ReactJS","Bootstrap"],
        "APIs and Web Services" : ["REST API","GraphQL","OAuth 2.0"],
        "Testing Frameworks and Tools" : ["Selenium","TestNG","Rest Assured","Postman"],
        "Cloud Platforms" : ["Azure"],
        "Build Tools" : ["Maven","Gradle"],
        "Database Management Systems" : ["MySQL","PostgreSQL","Oracle","RDBMS"],
        "Version Control Systems" : ["SVN", "Git", "Bitbucket"],
        "Continuous Integration and Deployment Tools" : ["Azure"],
        "Cloud Platforms" : ["TeamCity","Jenkins"]
   }
const methodologies = {
   "Testing Methodologies":[ "Ad-hoc","Functional","Integration","Sanity","Smoke","Regression"],
   "Types of Testing":["UI","API","Server","Database"],
   "Testing Techniques": ["Black-box","White-box","Grey-box"],
   "Project Management":["JIRA","Confluence","TestRail"]
}

export default function Skills(){
  return (
  <div>
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <Technical skills = {technicalSkills}/>
    </section>
    <section>
      <h2 className="section__title">Testing methodologies</h2>
      <span className="section__subtitle"></span>
      <div className="skills__container container grid">
        <Technical skills = {methodologies}/>
      </div>
    </section>
  </div>
  );
};
