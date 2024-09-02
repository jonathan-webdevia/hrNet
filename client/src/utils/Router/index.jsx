import React, { useEffect } from "react";
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";

import UserContext from "../context";
import { list } from "../context";
import { useState } from "react";

import Home from "../../pages/home";
import Employee from "../../pages/employee";

const Router = () => {
  const [usersList, updtUsersList] = useState(list);

  return (
    <UserContext.Provider value={usersList}>
      <Routing>
        <Routes>
          <Route exact path="/" element={<Home updt={updtUsersList} />}></Route>
          <Route exact path="/employee" element={<Employee />}></Route>
        </Routes>
      </Routing>
    </UserContext.Provider>
  );
};

export default Router;
