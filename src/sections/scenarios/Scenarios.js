import "./scenarios.css";
import { Container, Row, Col } from "react-bootstrap";
import Make1 from "../../assets/make1.jpg"; // Assuming you have an image for the scenarios section

const Scenarios = () => {
  return (
    <section id="scenarios">
      <Container className="scenarios__main">
        <Row>
          <Col lg={12} sm={12} className="scenarios__title">
            <h3>
              We use Make, Zapier and n8n to build intelligent automation.
            </h3>
          </Col>
          <Col>
            <img
              src={Make1}
              alt="Scenario Overview"
              className="make_img"
              id="make1"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Scenarios;
