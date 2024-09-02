import React from "react";

import Navbar from "../../components/navBar";
import EmployeeAdderForm from "../../components/employeeAdderForm";

const Home = (updt) => {
  return (
    <React.StrictMode>
      <Navbar link="currentEmployee" />
      <EmployeeAdderForm updt={updt} />
    </React.StrictMode>
  );
};

export default Home;
