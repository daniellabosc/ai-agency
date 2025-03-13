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
              <h2>We build AI agents and automation.</h2>
              <h5 className="txt-optional">
              We help businesses streamline operations and save time 
              by building powerful AI-driven automations and intelligent 
              agents. <br/>Whether you need a chatbot to handle customer 
              inquiries, an AI assistant to automate repetitive tasks, 
              or a workflow that seamlessly integrates with your existing 
              tools, we’ve got you covered.<br/> Our solutions leverage 
              cutting-edge AI and automation platforms like OpenAI and n8n 
              to optimize efficiency, reduce costs, and improve customer 
              experiences. Let us help you unlock the full potential of AI 
              for your business.
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
