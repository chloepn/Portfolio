import React from "react";

export default function Infor({data}){
const keyValuePairs = Object.entries(data);
  return (
    <div className="about__info grid">
      {keyValuePairs.map(([key, value]) => (
        <div className="about__box" key = {key}>
            <i class="bx bx-award about__icon"></i>
            <h3 className="about__title">{key}</h3>
            <span className="about__subtitle">{value}</span>
        </div>
      ))}
    </div>
  );
};
