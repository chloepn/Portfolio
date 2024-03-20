import React from "react";
import "./project.css";
import Projects from "./Projects";

export default function Project(){
  return (
    <section class="work section" id="project">
      <h2 class="section__title">Project</h2>
      <span class="section__subtitle">My fun projects </span>
      <Projects />
    </section>
  );
}