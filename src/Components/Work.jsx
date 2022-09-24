import React from "react";

import expenseTracker from "../Images/expense-tracker.jpg";
import foodOrderApp from "../Images/food-order-app.jpg";
import libot from "../Images/Libot.jpg";
import notes from "../Images/Notes-app.jpg";

import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import CardUi from "./CardUi";

import "../Styles/Work.css";
function Work() {
  const worksData = [
    {
      id: 1,
      title: "Expense tracker",
      img: expenseTracker,
      description:
        "It is a website which will help you to keep track of your expenses.",
      Link: "https://expense-tracker-4ve.pages.dev/",
    },
    {
      id: 2,
      title: "Food order website",
      img: foodOrderApp,
      description:
        "It is a website which will help you to order delicious food.",
      Link: "https://food-order-website.pages.dev/",
    },
    {
      id: 3,
      title: "Libot",
      img: libot,
      description:
        "It is a website which will help you to search books, read free samples and order books.",
      Link: "https://libot.pages.dev/",
    },
    {
      id: 4,
      title: "Notes app",
      img: notes,
      description:
        "It is a website which will help you to manage all your notes.",
      Link: "https://upbeat-ritchie-c74b9f.netlify.app/",
    },
  ];
  return (
    <motion.div
      className="workpage__container"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="works__container">
        {worksData.map((work) => {
          return (
            <CardUi
              title={work.title}
              img={work.img}
              description={work.description}
              Link={work.Link}
              key={work.id}
            />
          );
        })}

        <div className="workpage__footer">
          <NavLink to="/about" className="works__Navlink">
            <button className="works__about-btn">About ME</button>
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
