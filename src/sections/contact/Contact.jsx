import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../../components/contactform/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact__main">
      <div>
        <Container className="contact__inner">
          <Row>
            <Col lg={12} sm={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
