import "./services.css";
import { Container, Row, Col } from "react-bootstrap";
import data from "./data.js";

const Services = () => {
  return (
    <section id="services">
      <Container className="services__main">
        <h1>What you can expect from your website</h1>
        <Row>
          {data.map((service) => {
            return (
              <Col
                key={service.id}
                gap={1}
                lg={6}
                sm={12}
                className="services__block"
              >
                <div>
                  <h5>{service.name}</h5>
                  <p className="text-optional">{service.desc}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
