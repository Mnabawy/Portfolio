import React from "react";

import { BsArrowDown } from "react-icons/bs";

import Cta from "./cta";
import ME from "../../assets/me.png";
import HeaderSocials from "./headerSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohamed Nabawy</h1>
        <h5 className="text-light">Front End Developer</h5>
        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          <BsArrowDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
