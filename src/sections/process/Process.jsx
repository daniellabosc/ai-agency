import './process.css'
import ProcessImg from '../../assets/shutterstock_2043842930.png'

import { Row, Col, Container } from 'react-bootstrap'

const Process = () => {
  return (
    <section id='process'>
      <Container className='process__main'>
        <Row>
          <Col lg={6}>
            <div>
              <h2>Our Process</h2>
              <h5>Gathering Requirements</h5>
              <p>
                The first thing we need to do is determine your needs and your
                budget. We will work with you to create a product within your
                budget, or let you know what we think your product will cost.
              </p>
              <h5>Development</h5>
              <p>
                We start working on your project! We will reach out to you for
                feedback, and happily help you work through revisions to your
                original design.
              </p>
              <h5>User Acceptance Testing</h5>
              <p>
                We will make your product available for your to interact with.
                This is your final chance to make any changes before your site
                goes live.
              </p>
              <h5>Deployment</h5>
              <p>We work with your web host to get your site live.</p>
            </div>
          </Col>

          <Col lg={6} className='process__img'>
            <img src={ProcessImg} alt='our process' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Process
