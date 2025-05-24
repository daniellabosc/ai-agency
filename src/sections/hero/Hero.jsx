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
                At <span className="title">Axion AI</span> we build with&nbsp;
                <a href="https://www.make.com/en/register?pc=margaretphillips003">
                  <span className="make-affiliate">Make</span>
                </a>
                &nbsp;to create custom AI agents and automation solutions
                tailored to your business needs.
              </h2>
              <p>
                We connect your business tools — like forms, CRMs, spreadsheets,
                and social media — so they work together seamlessly.
                <br />
                <br />
                We add intelligent agents that automate repetitive tasks,
                respond to leads, and keep your systems updated in real time.
                It’s like having a smart assistant running your business behind
                the scenes, so you can save time, reduce errors, and focus on
                what matters most.
              </p>
              <h2>Behind-the-Scenes Automation That Just Works</h2>
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
        <Row>
          <Col className="hero__cta" lg={12} sm={12}>
            <h3>
              Start Now with a free, comprehensive, no obligation analysis of
              your business.
            </h3>
            <h4>Let us show you how automation and agents can work for you!</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
