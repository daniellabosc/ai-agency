import "./contactbar.css";
import { Row, Col } from "react-bootstrap";
import FaceBook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";

const ContactBar = () => {
  return (
    <Row className="contact-bar__main">
      <Col lg={6} sm={12}>
        <Row className="contact-bar__contact">
          <Col xs={12} lg={12}>
            <span>
              <a href="tel:7024678671">702 467-8671</a>
            </span>
          </Col>
          <Col xs={12} lg={12}>
            <span>M-F 10am - 8pm</span>
          </Col>
          <Col xs={12} lg={12}>
            <span>
              <a href="mailto:info@healthypets.design">
                info@healthypets.design
              </a>
            </span>
          </Col>
        </Row>
      </Col>
      {/* <h1>Healthy Pets Design - Web Design and Development</h1> */}
      <Col lg={6} sm={12}>
        <div className="contact-bar__socials">
          <a
            href="https://www.facebook.com/profile.php?id=100095594951319"
            target="_new"
          >
            <img src={FaceBook} alt="facebook icon" className="icon" />
          </a>
          <a href="https://www.instagram.com/healthypets.design/" target="_new">
            <img src={Instagram} alt="instagram icon" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/healthypetsdesign/?viewAsMember=true"
            target="_new"
          >
            <img src={LinkedIn} alt="linkedin icon" className="icon" />
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default ContactBar;
