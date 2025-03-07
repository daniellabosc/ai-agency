import "./hero.css";
import { Container, Row, Col } from "react-bootstrap";
import HeroCat from "../../assets/hero-img.png";
const Hero = () => {
  return (
    <section id="hero" className="hero__main">
      <Container>
        <Row>
        
          <Col lg={6} sm={12}>
            <div className="hero__text">
              <h2>Revolutionizing Workflows with Smarter Solutions.</h2>
              <h5 className="txt-optional">
              Our AI automation agency delivers innovative solutions to streamline workflows, boost efficiency, and drive growth. We offer intelligent process automation, custom AI integrations, and data-driven strategies, empowering businesses to thrive in the age of artificial intelligence.
              </h5>
            <br/>
              <a href="#contact" className="btn btn-secondary btn-lg">
                Free Consultation
              </a>
              
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="hero__img">
              <img src={HeroCat} alt="hero" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
