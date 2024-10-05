import "../../utils/styles/employeeAdderForm.css";
import employeeImg from "../../assets/employee.png";
import buble from "../../assets/buble.png";

import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Modal } from "pckgmodalbool";

import "react-datepicker/dist/react-datepicker.css";

import { useContext } from "react";
import UserContext from "../../utils/context";

const EmployeeAdderForm = () => {
  const { list, setList } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [ZIP, setZIP] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeZIP = (e) => {
    setZIP(e.target.value);
  };

  const onChangeDepartment = (e) => {
    setDepartment(e.target.value);
  };

  const [modalBool, setModalBool] = useState(false);
  const [modalType, setType] = useState("success");
  const [modalTxt, setTxt] = useState("success");

  const showModal = () => {
    setModalBool(!modalBool);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      firstName &&
      lastName &&
      street &&
      country &&
      ZIP &&
      department &&
      startDate &&
      birthDate
    ) {
      const prevList = [...list];

      prevList.push({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: birthDate.toDateString(),
        startDate: startDate.toDateString(),
        department: department,
        street: street,
        city: "Nancy",
        state: country,
        zipCode: ZIP,
      });
      setList(prevList);
      setType("success");
      setTxt("A new employee has just been created !");
    } else {
      setType("error");
      setTxt("Merci de vérifier votre saisie");
    }

    setModalBool(!modalBool);
  };

  return (
    <>
      <Modal
        defaultState={modalBool}
        type={modalType}
        txt={modalTxt}
        stateUPDT={showModal}
      />
      <section id="formContainer" className="centerXY">
        <div className="title txt--dark">
          <h1>Create a new employee</h1>
          <img src={employeeImg} alt="employee" />
          <img className="bubleImg" src={buble} alt="bubble"></img>
          <div className="jobSelector">
            <label className="opac" htmlFor="selectDp">
              Select a department
            </label>
            <select onChange={onChangeDepartment} id="selectDp">
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
            <tbody>
              <tr>
                <td>
                  <label htmlFor="firstName">First Name : </label>
                  <br />
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={onChangeFirstName}
                  ></input>
                </td>
                <td>
                  <label htmlFor="lastName">Last Name : </label>
                  <br />
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={onChangeLastName}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label form="birthDate" htmlFor="birthDate">
                    Date of birth :
                  </label>
                  <br />
                  <DatePicker
                    id="birthDate"
                    selected={birthDate}
                    onChange={(date) => setBirthDate(date)}
                  />
                </td>
                <td>
                  <label form="startDate" htmlFor="starDate">
                    Start date :
                  </label>
                  <br />
                  <DatePicker
                    id="starDate"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
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
                        <input
                          type="text"
                          id="street"
                          value={street}
                          onChange={onChangeStreet}
                        />
                      </div>
                      <div>
                        <label htmlFor="state">State</label>
                        <br />
                        <select id="state" onChange={onChangeCountry}>
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
                        <input
                          type="text"
                          id="zipCode"
                          value={ZIP}
                          onChange={onChangeZIP}
                        />
                      </div>
                    </section>
                  </fieldset>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  {" "}
                  <label htmlFor="department" className="opac">
                    department
                  </label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    value={department}
                    onChange={onChangeDepartment}
                    className="opac"
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
            </tbody>
          </table>
        </form>
      </section>
    </>
  );
};

export default EmployeeAdderForm;
