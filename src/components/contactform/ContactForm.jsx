import "./contactform.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import AlertBlock from "../alertblock/AlertBlock";
import { Row, Col } from "react-bootstrap";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wr84j4i",
        "template_sd37cxs",
        e.target,
        "m8xtjW9-aNXllYdYn"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            window.location.reload();
          }, 3000);
        },
        (err) => {
          console.log(JSON.stringify(err));
        }
      );
  };
  return (
    <div className="contact-form__main">
      {isSubmitted && (
        <AlertBlock text="Thanks! Someone will be in touch shortly." />
      )}
      <Form onSubmit={handleSubmit} id="form">
        <Row>
          <Col className="mb-3">
            {/* <Form.Group className="mb-3">
              <Form.Label htmlFor="company">Company Name</Form.Label>
              <Form.Control id="company" name="company" type="text" required />
            </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="contact">Contact Name</Form.Label>
              <Form.Control
                id="contact_name"
                name="contact_name"
                type="text"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label htmlFor="phone">Phone Number</Form.Label>
              <Form.Control type="tel" name="phone" required />
            </Form.Group> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              type="submit"
              className="btn btn-secondary btn-secondary-contact btn-lg"
              id="button"
              value="Connect"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ContactForm;
