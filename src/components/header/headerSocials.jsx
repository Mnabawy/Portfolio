import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/mohamed-nabawy-45a470194/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Mnabawy" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/mnabawy9">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
