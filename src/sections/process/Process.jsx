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
              <h1>Process</h1>
              <h5>Initial Meeting</h5>
              <p>
                The first thing we want to know is everything about your 
                business. What are your pain points? And how can AI automation
                and agents solve those problems? 
              </p>
              <h5>Proposal</h5>
              <p>
                Once we understand your work, we will send you a proposal. This will
                cover a detailed account of our solution, the cost to develop your integration, the timeline, and the monthly
                maintenance fee.
              </p>
              <h5>Development</h5>
              <p>
                We start working on your project! We will reach out to you for
                feedback, and happily help you work through tweeks to your
                original design.
              </p>
              <h5>User Acceptance Testing</h5>
              <p>
                We will demo the working workflow we built for you. 
                This is your final chance to make any changes before your
                integration goes live.
              </p>
              <h5>Deployment/Support</h5>
              <p>We activate your integration, monitor performance and respond to issues.</p>
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
