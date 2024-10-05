import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      firstName: "JOHN",
      lastName: "Jo",
      dateOfBirth: "08/04/2024",
      startDate: "08/05/2024",
      department: "Sales",
      street: "32 RUE OB",
      city: "Nancy",
      state: "AL",
      zipCode: "54000",
    },
    {
      firstName: "KEVEIN",
      lastName: "Jo",
      dateOfBirth: "08/06/2024",
      startDate: "08/05/2024",
      department: "Sales",
      street: "32 RUE OB",
      city: "Nancy",
      state: "AL",
      zipCode: "54000",
    },
    {
      firstName: "KEVEIN",
      lastName: "Jo",
      dateOfBirth: "08/06/2024",
      startDate: "08/05/2024",
      department: "Sales",
      street: "32 RUE OB",
      city: "Nancy",
      state: "AL",
      zipCode: "54000",
    },
  ]);

  return (
    <UserContext.Provider value={{ list, setList }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
