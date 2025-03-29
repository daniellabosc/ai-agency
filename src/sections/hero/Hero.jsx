import "./hero.css";
import { Container, Row, Col } from "react-bootstrap";
import HeroCat from "../../assets/hero-img.png";
// import Chatbot from "../../components/chatbot/Chatbot";

const Hero = () => {
  return (
    <section id="hero" className="hero__main">
      <Container>
        {/* <Chatbot /> */}
        <Row>
          <Col lg={6} sm={12}>
            <div className="hero__text">
              <h2>We build AI agents and automation.</h2>
              <h5 className="txt-optional">
                <p>
                  Boost your business with AI-powered automation! Our
                  intelligent AI agents streamline workflows, handle customer
                  interactions, and optimize operations—saving you time and
                  money. Whether you need chatbots, lead capture, or full
                  automation, we build custom solutions tailored to your needs.
                  Ready to scale effortlessly? Let’s automate your success
                  today!
                </p>
              </h5>
              <br />
              <a
                href="#contact"
                className="btn btn-secondary btn-lg btn-optional"
              >
                Get A Quote
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
