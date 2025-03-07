import './whatwedo.css'
import { Row, Col, Container } from 'react-bootstrap'
import ResponsiveDevices from '../../assets/shutterstock_265141661.png'
const WhatWeDo = () => {
  return (
    <section id='whatwedo'>
      <Container className='whatwedo__main'>
        <Row>
          <Col lg={6} xs={12} className='whatwedo__text'>
            <div>
              <h2>What We Do</h2>
              <h5>What your website will be like</h5>
              <p>
                You can count on us to build your product using the latest tools
                and technologies available. This means more than just a
                beautiful and functional website. It also means your product
                will be accessible, mobile responsive, SEO optimized and high
                performance.{' '}
              </p>
              <p>
                Your website will look good on all devices and be usable by
                everyone. It will be optimized to load quickly and perform well
                in search engines.{' '}
              </p>
              <p>
                We work with a variety of platforms. These include Wordpress and
                Webflow for design, Shopify for eCommerce sites, and finally
                React and Next for software development.
              </p>
            </div>
          </Col>
          <Col lg={6} xs={12} className='whatwedo__image'>
            <img src={ResponsiveDevices} alt='what we do' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhatWeDo
