import React from 'react';
import './usecases.css';
import { Row, Col, Container } from 'react-bootstrap'

const Usecases = () => {
  return (
    <section id='usecases'>
      <Container className='usecases__main'>
        <Row>
          <Col lg={12}>
            <h1>Use Cases</h1>
          </Col>
          <Col lg={12}>
            <section>
              <h5>Automated Lead Qualification & Follow-Ups</h5>
                <Row>
                    <Col lg={4}>Problem</Col>
                    <Col lg={4}>Solution</Col>
                    <Col lg={4}>Example</Col>
                </Row>
                <Row>
                    <Col lg={4}>Businesses lose potential customers because they don’t follow up on leads efficiently.</Col>
                    <Col lg={4}>An AI agent integrated with CRM tools can engage leads via email or chat, qualify them based on responses, and schedule calls for sales teams.</Col>
                    <Col lg={4}>A real estate agency uses an AI assistant to respond to inquiries, gather buyer preferences, and book appointments with agents.</Col>
                </Row>
              </section>
              <section>
              <h5>AI-Driven Document Processing & Data Entry</h5>
                <Row>
                    <Col lg={4}>Problem</Col>
                    <Col lg={4}>Solution</Col>
                    <Col lg={4}>Example</Col>
                </Row>
                <Row>
                    <Col lg={4}>Companies waste time manually processing invoices, contracts, and forms.</Col>
                    <Col lg={4}>AI-powered automation extracts key information from documents, enters it into databases, and sends notifications for approvals.</Col>
                    <Col lg={4}>A law firm uses AI to automatically categorize contracts, extract key clauses, and flag risky terms for review.</Col>
                </Row>
              </section>
              <section>
              <h5>AI-Powered Personalization & Marketing Automation</h5>
                <Row>
                    <Col lg={4}>Problem</Col>
                    <Col lg={4}>Solution</Col>
                    <Col lg={4}>Example</Col>
                </Row>
                <Row>
                    <Col lg={4}>Businesses struggle to send the right content to the right customers at the right time.</Col>
                    <Col lg={4}>AI analyzes customer behavior and automatically sends personalized email campaigns, recommendations, and ads.</Col>
                    <Col lg={4}>An online fitness brand uses AI to suggest workout plans based on a user’s past activity and sends reminders to keep them engaged.</Col>
                </Row>
              </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Usecases;
