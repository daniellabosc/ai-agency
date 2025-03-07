import "./benefits.css";
import { Container, Row, Col } from "react-bootstrap";
import { data, data1 } from "./data";
import ProcessImg from "../../assets/stock-photo-professional-veterinarian-examining-cute-cat-in-clinic-1372990757.jpg";

const Benefits = () => {
  return (
    <section id="benefits">
      <Container className="benefits__main">
        <Row>
          {/* <Col lg={6} sm={12}>
            <img src={ProcessImg} alt="features image" />
          </Col> */}
          <Col lg={6} sm={12}>
            <h2>Benefits</h2>
            <Row>
              <Col lg={6} xs={12}>
                <ul>
                  {data.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col lg={6} xs={12}>
                <ul>
                  {data1.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
