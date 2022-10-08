import React from "react";

import Avatar from "../Images/avatar.jpg";
import Resume from "../Images/Rahul_Resume.pdf";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import "../Styles/Home.css";

function Home() {
  return (
    <motion.div
      className="home__container"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="home__left">
        <img
          src={Avatar}
          alt="Avatar"
          className="home__avatar"
        />
        <h1 className="home__my-name1">Rahul Hotta</h1>
        <h4 className="home__my-position1">Web developer</h4>
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/rahul-hotta-a58078203/"
            target="__blank"
            className="home__social-icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/rahulhotta"
            target="__blank"
            className="home__social-icon"
          >
            <VscGithubInverted />
          </a>
          <a
            href="mailto: rahulhotta99@gmail.com"
            target="__blank"
            className="home__social-icon"
          >
            <FiMail />
          </a>
        </div>

        <a href={Resume} download="rahul resume">
          <button className="home__resume">Download resume</button>
        </a>
      </div>

      <div className="home__right">
        <h1 className="home__my-name2">Rahul Hotta</h1>
        <h4 className="home__my-position2">
          I am a web developer focused on crafting clean and user-friendly
          experiences, I am passionate about building excellent software that
          improves the lives of those around me.
        </h4>

        <NavLink to="/work" className="home__Navlink">
          <button className="home__work-btn">
            My Works <BsArrowRight />
          </button>
        </NavLink>
      </div>
    </motion.div>
  );
}

export default Home;
