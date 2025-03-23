import React from "react";
import "./products.css";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  return (
    <section id="products">
      <Container className="products__main">
        <Row>
          <Col lg={12} sm={12} className="products__title">
            <h1>Products</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={8} sm={12} className="products__block">
            <h2>Simple Lead Capture</h2>
            <p>
              Capture leads sent to a gmail account, insert into a google sheet
              and send a custom email to the lead.
            </p>
          </Col>
          <Col lg={4} sm={12} className="products__price">
            <h1>$300 set up / $30 per month</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Products;
