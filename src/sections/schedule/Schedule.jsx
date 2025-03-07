import "./schedule.css";
import { Row, Col } from "react-bootstrap";

const Schedule = () => {
  return (
    <section id="schedule" className="schedule__main">
      <Row>
        <Col className="schedule__text">
          <h2 className="mb-3">Get a Free Consultation</h2>
          <a href="#contact" className="btn btn-secondary btn-lg">
            Connect
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default Schedule;
