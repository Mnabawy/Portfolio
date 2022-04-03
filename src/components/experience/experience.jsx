import React from "react";

import ExpCard from "./exp-card";
import "./experience.css";
import SkillsCard from "./skills-card";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Work Experience</h3>
          <div className="experience__content">
            <ExpCard
              company="Freelance"
              title="Front End Developer"
              date="mar 2021 - present"
              summary="working on different projects including [ wazzifa , bosta ] and many more with react and react native"
            />
            <ExpCard
              company="Omnix International"
              title="Software Developer"
              date="March 2020 - February 2021"
              summary="Built many large scale projects in an agile work environment using the Mendix platform"
            />
            <ExpCard
              company="AnimalCitizen"
              title="React Native Developer"
              date="July2019 - September 2019"
              summary="Design and Develop a mobile app with react native"
            />
          </div>
        </div>
        <div className="experience__skills">
          <h3>Skills</h3>
          <SkillsCard title="Javascript" expLevel="Experienced" />
          <SkillsCard title="React" expLevel="Experienced" />
          <SkillsCard title="React Native" expLevel="Experienced" />
          <SkillsCard title="Firebase" expLevel="mid-level" />
          <SkillsCard title="Google Maps Api" expLevel="mid-level" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
