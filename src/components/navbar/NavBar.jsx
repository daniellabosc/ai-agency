import "./navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import Banner from "../banner/Banner";

function NavBar({ position }) {
  return (
    <Navbar expand="lg" className="bg-body-secondary navbar__main">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="logo" className="btn-logo btn-optional" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link> */}
          <Nav.Link href="#contact"><h1>Axion Studio</h1></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {position === "top" && <Banner />}
      <a href="#contact" className="btn btn-secondary btn-optional">
        Free Consultation
      </a>
    </Navbar>
  );
}

export default NavBar;
