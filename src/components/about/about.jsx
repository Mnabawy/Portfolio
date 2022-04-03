import React from "react";

import ME from "../../assets/me-about.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            quidem, optio ratione dolorem iusto, natus corporis animi aliquid
            mollitia aperiam voluptatibus exercitationem praesentium nihil fugit
            porro fuga! Maxime, dolor asperiores!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
