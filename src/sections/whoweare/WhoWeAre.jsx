import './whoweare.css'
import { Row, Col, Container } from 'react-bootstrap'
import CatGirl from '../../assets/shutterstock_587456957.jpg'

const WhoWeAre = () => {
  return (
    <section id='whoweare'>
      <Container className='whoweare__main'>
        <Row>
          <Col lg={6} xs={12} className='whoweare__image'>
            <img src={CatGirl} alt='responsive devices' />
          </Col>
          <Col lg={6} xs={12} className='whoweare__text'>
            <div>
              <h2>Who We Are</h2>
              <h5>Why you should trust us</h5>
              <p>
                We are a web design agency that works closely with businesses in
                the animal services industry. This includes such businesses as
                veterinarians, animal groomers, pet boarding, daycare and
                training, pet sitting and walking, and pet stores.
              </p>
              <p>
                We build and maintain websites and other types of software, and
                maintain existing web properties to your spec. We offer a &nbsp;
                <a href='#contact'>
                  <strong>free consultation</strong>
                </a>
                &nbsp;which is an intensive analysis of your current website to
                find places to improve.
              </p>
              <p>
                We seek to learn and understand the specific concerns that exist
                in your industry so we can serve you to the best of our ability.
              </p>
              <p>
                We have 20 years of professional web design and development
                experience so you can count on us to provide you with a best in
                class, industry standard, and high quality product.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhoWeAre
