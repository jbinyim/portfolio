import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/modal/:modalId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
