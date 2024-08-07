import "../../utils/styles/employeeAdderForm.css";
import employeeImg from "../../assets/employee.png";
import buble from "../../assets/buble.png";

import React from "react";
import { useEffect, useState } from "react";

const EmployeeAdderForm = () => {
  const [firstName, setFirstName] = useState("");
  const [department, setDepartment] = useState("");

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeDepartment = (e) => {
    setDepartment(e.target.value);
  };

  return (
    <section id="formContainer" className="centerXY">
      <div className="title txt--dark">
        <h1>Create a new employee</h1>
        <img src={employeeImg} />
        <img className="bubleImg" src={buble}></img>
        <div className="jobSelector">
          <select onChange={onChangeDepartment}>
            <option>What's my department ?</option>
            <option>Sales</option>
            <option>Marketting</option>
            <option>Engineering</option>
            <option>Human resources</option>
            <option>Legal</option>
          </select>
        </div>
      </div>
      <form className="txt--white centerXY">
        <table>
          <tr>
            <td>
              <label for="firstName">First Name : </label>
              <br />
              <input
                type="text"
                id="firstName"
                onChange={onChangeFirstName}
              ></input>
            </td>
            <td>
              <label for="lastName">Last Name : </label>
              <br />
              <input type="text" id="lastName"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label form="birthDate">Date of birth :</label>
              <input type="date" name="birthDate" id="birthDate" />
            </td>
            <td>
              <label form="startDate">Start date :</label>
              <br />
              <input type="date" name="startDate" id="startDate" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {" "}
              <fieldset>
                <legend>Adress</legend>
                <section>
                  <div>
                    <label for="street">Street</label>
                    <br />
                    <input type="text" id="street" />
                  </div>
                  <div>
                    <label for="street">State</label>
                    <br />
                    <select id="state">
                      <option>-- Please choose a state --</option>
                      <option>State 1</option>
                      <option>State 2</option>
                      <option>State 3</option>
                      <option>State 4</option>
                      <option>State 5</option>
                    </select>
                  </div>
                  <div>
                    <label for="zipCode">Zip code</label>
                    <input type="text" id="zipCode" />
                  </div>
                </section>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {" "}
              <label for="department"></label>
              <input type="text" name="department" id="department" value={department}/>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button className="btn primary">
                Bienvenue {firstName} !
              </button>
            </td>
          </tr>
        </table>
      </form>
    </section>
  );
};

export default EmployeeAdderForm;
