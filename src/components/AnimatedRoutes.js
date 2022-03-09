import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import SinglePost from "./SinglePost";
import Post from "./Post";
import Stories from "./Stories";
import SingleStory from "./SingleStory";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="stories/:slug/" element={<SingleStory />} />
        <Route path="stories" element={<Stories />} />
        <Route path="post/:slug/" element={<SinglePost />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </AnimatePresence>
  );
};
