import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Features from "../Pages/Features";
import NavBar from "../Components/NavBar";
import Pricing from "../Pages/Pricing";
import Params from "../Components/Params";
import Lifecycleclass from "../Components/LifeCYcleClass";
import Lifecyclefunction from "../Components/LifeCycleFunction";

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Lifecycleclass />} />
          <Route path="features" element={<Lifecyclefunction />} />
          <Route exact path="pricing" element={<Pricing />} />
          <Route path="/pricing/:id" element={<Params />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
