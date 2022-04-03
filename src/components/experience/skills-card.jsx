import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const SkillsCard = ({ title, expLevel }) => {
  return (
    <div className="skill_container">
      <h5 className="flex">
        <div>
          <BsPatchCheckFill className="exp-icon" />
          {title}
        </div>
        <div>{expLevel}</div>
      </h5>
    </div>
  );
};

export default SkillsCard;
