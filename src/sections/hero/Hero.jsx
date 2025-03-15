import "./hero.css";
import { Container, Row, Col } from "react-bootstrap";
import HeroCat from "../../assets/hero-img.png";
import Chatbot from "../../components/chatbot/Chatbot";

const Hero = () => {
  return (
    <section id="hero" className="hero__main">
      <Container>
        <Row>
        
          <Col lg={6} sm={12}>
            <div className="hero__text">
              <h2>We build AI agents and automation.</h2>
              <h5 className="txt-optional">
              What is an agent?
                <p>An agent is an LLM connected to memory and tools
                  which can perform tasks autonomously. Just like 
                  chatGPT, Copilot, or Claude, the agent can respond
                  intelligently based on it's prompting and implementation.
                </p>
                <p>
                  Do your business processes seem repetitive and time-consuming?
                  We can help you automate them with AI agents and automation.
                </p>
              </h5>
            <br/>
            {/* <Chatbot /> */}
              <a href="#contact" className="btn btn-secondary btn-lg btn-optional">
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
