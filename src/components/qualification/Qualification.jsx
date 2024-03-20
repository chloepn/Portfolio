import React, { useState } from "react";
import "./qualification.css";

export default function Qualification(){
  const [toggleState, setToggleState] = useState(1);

  const education = {
    "San Jose State University": ["San Jose, CA", "B.S. Software Engineering, Minor Mathematics GPA 3.5/4.0","08/2018 - 05/2021"],
    "Green River Community College": ["Auburn, WA", "A.S. Computer Science GPA 3.9/4.0", "08/2017 - 08/2018"]
  };
  const keyValuePairsEdu = Object.entries(education);

  const experience = {
    "Navis, LLC": ["Oakland, CA", "Test Engineer", "03/2021 - 05/2023"],
    "Lumentum, INC": ["San Jose, CA", "Software Engineer Intern", "05/2020 - 08/2020"]
  };
  const keyValuePairsExp = Object.entries(experience);
  const  dividerLine= 0;


  return (
    <section className="qualification section" id="qualification">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personel journey</span>

          <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"}
                     onClick={() => setToggleState(1)}>
                     <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                  <div className={toggleState === 2? "qualification__button qualification__active button--flex": "qualification__button button--flex"}
                       onClick={() => setToggleState(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                  </div>
            </div>
                <div className="qualification__sections">
                  <div className={toggleState === 1? "qualification__content qualification__content-active": "qualification__content"}>
                    {keyValuePairsEdu.map(([key, value])=> (
                        <div className="qualification__data">
                          <div>
                            <h3 className="qualification__title">{key}</h3>
                            <span className="qualification__subtitle"><i class="uil uil-map-pin"></i>{value[0]}</span>
                            <br/>
                            <span className="qualification__subtitle"><i class="uil uil-graduation-cap"></i>{value[1]}</span>
                            <br/>
                            <div className="qualification__calender"><i className="uil uil-calendar-alt"></i>{value[2]}</div>
                          </div>
                          <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                          </div>
                        </div>
                    ))}
                  </div>

                  <div className={toggleState === 2? "qualification__content qualification__content-active": "qualification__content"}>
                        {keyValuePairsExp.map(([key, value])=> (
                            <div className="qualification__data">
                                  <div></div>
                                  <div>
                                     <span className="qualification__rounder"></span>
                                     <span className="qualification__line"></span>
                                  </div>
                                  <div>
                                    <h3 className="qualification__title">{key}</h3>
                                    <span className="qualification__subtitle"><i class="uil uil-map-pin"></i>{value[0]}</span>
                                    <br/>
                                    <span className="qualification__subtitle"><i class="uil uil-graduation-cap"></i>{value[1]}</span>
                                    <br/>
                                    <div className="qualification__calender"><i className="uil uil-calendar-alt"></i>{value[2]}</div>
                                  </div>
                            </div>
                        ))}
                  </div>
                </div>
            </div>
    </section>
  );
}
