import "./navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import Container from "react-bootstrap/Container";

function NavBar({ position }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar__main">
      <Container>
        <Navbar.Brand href="#home">
        <img src={Logo} alt="logo" className="btn-logo btn-optional" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#usecases">Use Cases</Nav.Link> */}
            <Nav.Link href="#process">Process</Nav.Link>
            <Nav.Link href="#blog" className="navbar__blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a href="#contact" className="btn btn-secondary btn-lg">
                Free Consultation
              </a>
      </Container>
    </Navbar>
  );
}

export default NavBar;
