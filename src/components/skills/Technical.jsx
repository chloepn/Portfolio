import React from "react";

export default function Technical({skills}){
const keyValuePairs = Object.entries(skills);
  return (
  <div className="skills__container  container grid">
        {keyValuePairs.map(([objectKey,objectValue]) => (
        <div className="skills__content" key = {objectKey}>
          <h3 className="skills__title">{objectKey}</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                    {objectValue.map(value =>
                        <div className ="skills">
                            <i class="bx bx-badge-check"></i>
                            <div>
                              <h3 className="skills__name">{value}</h3>
                            </div>
                            <br />
                        </div>
                    )}
              </div>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
};
