import logo from "../../assets/hrNetLogo.png";
import "../../utils/styles/navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ link }) => {
  const navigate = useNavigate();
  return (
    <nav className="bg--dark centerXbetweenY">
      <img src={logo}></img>
      {link === "currentEmployee" ? (
        <button
          onClick={() => {
            navigate("/employee");
          }}
        >
          View current employee
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Add an employee
        </button>
      )}
    </nav>
  );
};

export default Navbar;
