import React from "react";

import Navbar from "../../components/navBar";
import EmployeeAdderForm from "../../components/employeeAdderForm";

const Home = () => {
  return (
    <React.StrictMode>
      <Navbar link="currentEmployee" />
      <EmployeeAdderForm />
    </React.StrictMode>
  );
};

export default Home;
