import Logo from "../../assets/logo.png";
import "./header.css";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header__main">
          <a href="#home">
            <img src={Logo} alt="logo" className="btn-logo" />
          </a>
          <h1>
            A<span>X</span>ION AI
          </h1>
          <a href="#contact" className="btn btn-secondary btn-lg">
            Get A Quote
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
