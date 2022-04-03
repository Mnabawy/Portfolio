import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import "./experience.css";

const ExpCard = ({ company, title, date, summary, icon }) => {
  return (
    <article className="experience__details">
      {company}
      <div className="flex">
        <h4>{title}</h4>
        <h6> {date}</h6>
      </div>
      <small className="text-light summary">
        <BsPatchCheckFill className="exp-icon" />
        {summary}
      </small>
    </article>
  );
};

export default ExpCard;
