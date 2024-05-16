import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Example from "./routes/Example";
import Header from "./components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
