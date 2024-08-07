import logo from "../../assets/hrNetLogo.png";
import "../../utils/styles/navbar.css";

const Navbar = ({ link }) => {
  return (
    <nav className="bg--dark centerXbetweenY">
      <img src={logo}></img>
      {link === "currentEmployee" ? (
        <a href="/employee" className="txt--white initLink">
          View current employee
        </a>
      ) : (
        <a href="/" className="txt--white initLink">
          Add a new employee
        </a>
      )}
    </nav>
  );
};

export default Navbar;
