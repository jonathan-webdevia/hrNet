import React, { useEffect } from "react";
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";

import { UserContextProvider } from "../context";
import { useState } from "react";

import Home from "../../pages/home";
import Employee from "../../pages/employee";

const Router = () => {
  
  return (
    <Routing>
      <UserContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/employee" element={<Employee />}></Route>
        </Routes>
      </UserContextProvider>
    </Routing>
  );
};

export default Router;
