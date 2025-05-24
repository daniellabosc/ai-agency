import Logo from "../../assets/logo5.jpg";
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
            <h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.make.com/en/register?pc=margaretphillips003"
              >
                Automate Everything with Make
              </a>
            </h3>
            <button className="btn btn-secondary btn-lg">
              <a href="#contact">Get A Quote</a>
            </button>
          </div>
        </div>
        {/* <button className="btn__goto">
          <a href="#home">GO</a>
        </button> */}
      </Container>
    </header>
  );
};

export default Header;
