import React, { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "../../utils/context";
import "./index.css";

import { DataTable } from "react-ab-data-table";

import Navbar from "../../components/navBar";

const Employee = () => {
  const { list } = useContext(UserContext);

  const columns = [
    { name: "First Name", id: "firstName", sortable: true },
    { name: "Last Name", id: "lastName", sortable: true },
    { name: "Start Date", id: "startDate", sortable: true },
    { name: "Department", id: "department", sortable: true },
    { name: "Date of Birth", id: "dateOfBirth", sortable: true },
    { name: "Street", id: "street", sortable: true },
    { name: "City", id: "city", sortable: true },
    { name: "State", id: "state", sortable: true },
    { name: "Zip Code", id: "zipCode", sortable: true },
  ];

  return (
    <React.StrictMode>
      <Navbar link="addemployee" />
      <section className="tableContainer">
        <div id="employee-div" className="container table">
          <h1>Current Employees</h1>
          {list ? (
            <DataTable
              columns={columns}
              data={list}
              tableId="employee"
              sortId="startDate"
            />
          ) : (
            "No Data"
          )}
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Employee;
