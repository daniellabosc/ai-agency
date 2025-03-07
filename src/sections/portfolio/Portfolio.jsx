import "./portfolio.css";
import data from "./data";
import { Container, Row, Col } from "react-bootstrap";



const Portfolio = () => {
  let imageSrc;
  return (
    <section id="portfolio">
      <Container className="portfolio__main">
        <Row>
          {data.map((item) => {
            imageSrc = require(`../../assets/portfolio/${item}`);
            return (
              <Col lg={4} key={item} className="portfolio__item">
                <img src={imageSrc} alt={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
