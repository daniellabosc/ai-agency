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
              <h1>
                Transform Your Business with Custom AI Agents & Intelligent
                Automation
              </h1>
              <h2>Streamline Operations | Reduce Costs | Scale Effortlessly</h2>
              <p>
                Experience the power of AI-driven business transformation with
                Axion AI. Our intelligent automation solutions combine
                cutting-edge AI agents with custom workflows to:
                <ul>
                  <li>Streamline complex business operations</li>
                  <li>Automate customer service with 24/7 AI support</li>
                  <li>Optimize lead generation and conversion</li>
                  <li>Reduce operational costs by up to 40%</li>
                  <li>Scale your business without scaling overhead</li>
                </ul>
                From sophisticated chatbots to end-to-end process automation,
                our tailored solutions adapt to your unique business needs. Join
                industry leaders who trust Axion AI for their digital
                transformation journey.
              </p>
              <br />
              <a
                href="#contact"
                className="btn btn-secondary btn-lg btn-optional"
              >
                Get a Quote
              </a>
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="hero__button">
              <a
                href="#contact"
                className="btn btn-secondary btn-secondary-hero btn-lg"
              >
                Get A Quote
              </a>
            </div>

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
