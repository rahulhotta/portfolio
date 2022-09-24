import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import About from "./About";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence initial={false}  exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
