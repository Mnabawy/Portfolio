/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

import "./nav.css";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeExp, setActiveExp] = useState(false);
  const [activeServices, setActiveServices] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  return (
    <nav>
      <a
        href="#"
        className={active ? "active" : ""}
        onClick={() => {
          setActive(true);
          setActiveAbout(false);
          setActiveContact(false);
          setActiveExp(false);
          setActiveServices(false);
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeAbout ? "active" : ""}
        onClick={() => {
          setActive(false);
          setActiveAbout(true);
          setActiveContact(false);
          setActiveExp(false);
          setActiveServices(false);
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeExp ? "active" : ""}
        onClick={() => {
          setActive(false);
          setActiveAbout(false);
          setActiveContact(false);
          setActiveExp(true);
          setActiveServices(false);
        }}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeServices ? "active" : ""}
        onClick={() => {
          setActive(false);
          setActiveAbout(false);
          setActiveContact(false);
          setActiveExp(false);
          setActiveServices(true);
        }}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeContact ? "active" : ""}
        onClick={() => {
          setActive(false);
          setActiveAbout(false);
          setActiveContact(true);
          setActiveExp(false);
          setActiveServices(false);
        }}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
