import React, {useState} from 'react';
import experience from './experience.css'
export default function Experience(){
    const defaultToogleState = -1;
    const [toggleState, setToggleState] = useState(defaultToogleState);
    const toggleTab = (index) => {
       setToggleState(index);
    };
    const data = {
    "Navis LLC":["0","Oakland, CA", "MARCH 2021 - MAY 2023", "Test Engineer",
        "Design and deliver legacy and automated test suites to cover business use cases for international shipping and yard management",
         "Increased pass rates on 4 CI/CD targets from 75% to 95%",
         "Designed, developed, and implemented Hybrid testing/Keyword-driven automation testing frameworks utilizing Java, TestNG, Groovy, and Selenium WebDriver.",
         "Reduced global AWS costs by 5% through designing standardized local tests",
         "Leveraged the customer production database backups for configuring my local test environment to deep dive environment-specific issues.",
         "Utilized MySQL and implement SQL queries to validate data updates in sync with UI activities during UI testing",
         "Worked directly with customers during product releases, achieving a 95% customer satisfaction rating with the two largest clients."],
     "Lumentum, INC":["1","San Jose, CA", "MAY 2020 - AUGUST 2020", "Software Engineer Intern",
         "Developed dashboarding tools for hardware engineers to compare part specifications and historical performance data",
         "Built full-stack on-premise application using Flask, Jinja2, jQuery using MySQL and Oracle data sources to serve Amchart-powered graphs, charts, tables"]
    }
    const keyvaluePairs = Object.entries(data);
    return(
        <section className="experience section" id="experience">
              <h2 className="section__title">Experiences</h2>
              <span className="section__subtitle">My work experiences</span>

              <div className="experience__container container grid">
                {keyvaluePairs.map(([objectKey, objectValue])=>(
                    <div className="experience__content">
                      <div>
                        <i class="uil uil-ship experience__icon"></i>
                        <h3 className="experience__title"> {objectKey}</h3>
                      </div>

                      <span className="experience__button" onClick={() => toggleTab(objectValue[0])}> View More
                        <i className="uil uil-arrow-right experience__button-icon"></i>
                      </span>

                      <div className={toggleState === objectValue[0] ? "experience__modal active-modal" : "experience__modal"}>
                        <div className="experience__modal-content">
                          <i onClick={() => toggleTab(defaultToogleState)} className="uil uil-times experience__modal-close"></i>

                          <h3 className="experience__modal-title">{objectValue[3]}</h3>
                          <p className="experience__modal-description">
                                {objectValue[1]} <br/> {objectValue[2]}
                          </p>

                          <ul className="experience__modal-experience grid">
                            {objectValue.slice(4).map((value)=> (
                                <li className="experience__modal-service">
                                  <i className="uil uil-check-circle experience__modal-icon"></i>
                                  <p className="experience__modal-info">{value}</p>
                                </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
        </section>
    )
}