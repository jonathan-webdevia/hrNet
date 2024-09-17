import "../../utils/styles/employeeAdderForm.css";
import employeeImg from "../../assets/employee.png";
import buble from "../../assets/buble.png";

import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "../modal";
// import Modal from "modalresponser";

import "react-datepicker/dist/react-datepicker.css";

import { useContext } from "react";
import UserContext from "../../utils/context";

const EmployeeAdderForm = () => {
  const { list, setList } = useContext(UserContext);
  {
    console.log(list);
  }

  const [firstName, setFirstName] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeDepartment = (e) => {
    setDepartment(e.target.value);
  };

  const [modalBool, setModalBool] = useState(false);

  const firstNameVal = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const state = document.querySelector("#state");
  const zipCode = document.querySelector("#zipCode");
  const departmentVal = document.querySelector("#department");

  const showModal = () => {
    setModalBool(!modalBool);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstNameVal && lastName && state && zipCode && departmentVal) {
      console.log("ok");
    } else {
      console.log("erreur");
    }
    const prevList = [...list];

    prevList.push({
      firstName: "JOHN",
      lastName: "Jo",
      dateOfBirth: "08/04/2024",
      startDate: "08/05/2024",
      department: "Sales",
      street: "32 RUE OB",
      city: "Nancy",
      state: "AL",
      zipCode: "54000",
    });
    setList(prevList);

    setModalBool(!modalBool);
  };

  return (
    <>
      <Modal
        defaultState={modalBool}
        type={"success"}
        txt={"A new employee has just been created !"}
        stateUPDT={showModal}
      />
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
        <form className="txt--white centerXY" onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <label htmlFor="firstName">First Name : </label>
                <br />
                <input
                  type="text"
                  id="firstName"
                  onChange={onChangeFirstName}
                ></input>
              </td>
              <td>
                <label htmlFor="lastName">Last Name : </label>
                <br />
                <input type="text" id="lastName"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label form="birthDate">Date of birth :</label>
                <br />
                <DatePicker
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                />
              </td>
              <td>
                <label form="startDate">Start date :</label>
                <br />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                {/*<input type="date" name="startDate" id="startDate" />*/}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                {" "}
                <fieldset>
                  <legend>Adress</legend>
                  <section>
                    <div>
                      <label htmlFor="street">Street</label>
                      <br />
                      <input type="text" id="street" />
                    </div>
                    <div>
                      <label htmlFor="street">State</label>
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
                      <label htmlFor="zipCode">Zip code</label>
                      <input type="text" id="zipCode" />
                    </div>
                  </section>
                </fieldset>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                {" "}
                <label htmlFor="department"></label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  value={department}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="btn primary" type="submit">
                  Bienvenue {firstName} !
                </button>
              </td>
            </tr>
          </table>
        </form>
      </section>
    </>
  );
};

export default EmployeeAdderForm;
