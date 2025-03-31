import Logo from "../../assets/logo3.png";
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
          <div className="header__text">
            <p>
              "AI agents will become an integral part of our daily lives,
              helping us with everything from scheduling appointments to
              managing our finances. They will make our lives more convenient
              and efficient."
              <span>— Andrew Ng, Co-founder of Google Brain and Coursera.</span>
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
