import "./hero.css";
import { Container, Row, Col } from "react-bootstrap";
//import HeroCat from "../../assets/hero-img.png";
import HeroCat from "../../assets/Untitled1.jpg";
// import Chatbot from "../../components/chatbot/Chatbot";

const Hero = () => {
  return (
    <section id="hero" className="hero__main">
      <Container>
        <Row>
          <Col lg={12} sm={12} className="hero__title">
            <h1>We Build AI Agents and Automation Solutions</h1>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="hero__text">
              <h2>
                At <span className="title">Axion AI</span> we specialize in
                creating custom AI agents and automation solutions tailored to
                your business needs.
              </h2>
              <p>
                We work with Make.com to build custom AI agents and automation
                solutions that can help you:
                <ul>
                  <li>Streamline complex business operations</li>
                  <li>Automating repetitive tasks</li>
                  <li>Work intelligently 24/7</li>
                  <li>Integrate your business systems</li>
                  <li>Scale your business without scaling overhead</li>
                </ul>
                From sophisticated lead capture to end-to-end process
                automation, our tailored solutions adapt to your unique business
                needs. Contact us now to start your business transformation
                journey.
              </p>
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
              <img
                src={HeroCat}
                alt="Axion AI builds AI agents, automation and integration between systems."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
