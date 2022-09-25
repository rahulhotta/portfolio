import React from 'react'

import { FaHtml5, FaCss3, FaReact, FaPython } from "react-icons/fa";
import { SiJavascript, SiBootstrap } from "react-icons/si";

import { motion } from "framer-motion";

import { LazyLoadImage } from "react-lazy-load-image-component";

import Avatar from "../Images/avatar2.jpg";
import Resume from "../Images/Rahul_Resume.pdf";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";

import { NavLink } from "react-router-dom";

import '../Styles/About.css';

function About() {
  return (
    <motion.div
      className="about__container"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="about__left">
        <div className="about__logo">
          <div className="about__about">ABOUT</div>
          <div className="about__me">ME</div>
        </div>

        <div className="about__desc-container">
          <p className="about__desc">
            I am Rahul kumar hotta a web developer focused on crafting clean and
            user-friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </p>
        </div>

        <div className="about__info-container">
          <div className="about__info1">
            <span className="about__info-left">Name : </span>
            <span className="about__info-right">Rahul Hotta</span>
          </div>
          <div className="about__info2">
            <span className="about__info-left">Age : </span>
            <span className="about__info-right">20</span>
          </div>
          <div className="about__info2">
            <span className="about__info-left">Residence : </span>
            <span className="about__info-right">Berhampur, Odisha</span>
          </div>
          <div className="about__info2">
            <span className="about__info-left">Phone : </span>
            <span className="about__info-right">7008262278</span>
          </div>
          <div className="about__info2">
            <span className="about__info-left">Email : </span>
            <span className="about__info-right">rahulhotta99@gmail.com</span>
          </div>
        </div>

        <div className="about__skills-container">
          <div className="about__skills-logo">
            <span className="about__skills-logo-p1">MY</span>
            <span className="about__skills-logo-p2">SKILLS</span>
          </div>
          <div className="about__skills-list">
            <div className="about__skill">
              <FaHtml5 className="about__skill-icon" /> HTML
            </div>
            <div className="about__skill">
              <FaCss3 className="about__skill-icon" /> CSS
            </div>
            <div className="about__skill">
              <SiJavascript className="about__skill-icon" /> JAVASCRIPT
            </div>
            <div className="about__skill">
              <FaReact className="about__skill-icon" /> REACT
            </div>
            <div className="about__skill">
              <SiBootstrap className="about__skill-icon" /> BOOTSTRAP
            </div>
            <div className="about__skill">
              <FaPython className="about__skill-icon" /> PYTHON
            </div>
          </div>
        </div>
        <NavLink to="/home" className="about__Navlink">
          <button className="about__home-btn">Home</button>
        </NavLink>
      </div>
      <div className="about__right">
        <LazyLoadImage
          src={Avatar}
          alt="Avatar"
          className="about__avatar"
          key={Avatar}
          effect="blur"
          placeholderSrc={Avatar}
          height={Avatar.height}
          width={Avatar.width}
        />
        <h1 className="about__my-name1">Rahul Hotta</h1>
        <h4 className="about__my-position1">Web developer</h4>
        <div className="about__social">
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
          <button className="about__resume">Download resume</button>
        </a>
      </div>
    </motion.div>
  );
}

export default About
