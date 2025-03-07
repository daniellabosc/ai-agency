import "./features.css";
import { Container, Row, Col } from "react-bootstrap";
import { data, data2, data3, data4 } from "./data";


const Features = () => {
  return (
    <section id="features" className="bg-body-secondary">
      <Container className="features__main">
        <Row>
          <Col lg={6} sm={12} className="features__data">
            <h2>Features</h2>
            <Row>
              <Col lg={6} sm={12}>
                <ul>
                  {data.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col lg={6} sm={12}>
                <ul className="features__list2">
                  {data2.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>
            <h2>Benefits</h2>
            <Row>
              <Col lg={6} sm={12}>
                <ul>
                  {data3.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col lg={6} sm={12}>
                <ul className="features__list2">
                  {data4.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
          {/* <Col lg={6} sm={12} className="features__img">
            <img src={ProcessImg} alt="features image" />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
