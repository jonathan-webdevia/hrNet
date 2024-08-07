import React from "react";
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";

import Home from "../../pages/home";
import Employee from "../../pages/employee";

const Router = () => {
  return (
    <Routing>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/employee" element={<Employee />}></Route>
      </Routes>
    </Routing>
  );
};

export default Router;
