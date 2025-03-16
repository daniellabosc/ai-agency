import "./hero.css";
import { Container, Row, Col } from "react-bootstrap";
import HeroCat from "../../assets/hero-img.png";
//import Chatbot from "../../components/chatbot/Chatbot";

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
                <p>Agents are LLMs connected to memory and tools
                  which can perform tasks autonomously. Just like 
                  chatGPT, Copilot, or Claude, an agent can respond
                  intelligently based on it's prompting and implementation.
                </p>
                <p>When enabling agents to integrate
                  business systems, they can perform tasks without human intervention.
                </p>
                <p>
                  Do your business processes seem repetitive and time-consuming?
                  We can help you automate them with AI agents.
                </p>
              </h5>
            <br/>
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
