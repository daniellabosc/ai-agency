import "./contact.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ContactForm from "../../components/contactform/ContactForm";
import Logo from "../../assets/logo.png";
import BookLink from "../../components/booklink/Booklink";

const Contact = () => {
  return (
    <section id="contact" className="contact__main">
      <div>
        <Container className="contact__inner">
          <h2>Contact Us</h2>
          <Row>
            <Col lg={6} sm={12}>
              <ContactForm />
            </Col>
            <Col lg={6} sm={12}>
              <BookLink />
            </Col>
            {/* <Nav.Link href="#top" className="top_btn"><img src={Logo} alt="logo" className="btn-logo btn-optional" /></Nav.Link> */}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
