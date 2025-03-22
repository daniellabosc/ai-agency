import React from "react";
import "./blog.css";
import { Container, Row, Col } from "react-bootstrap";
import data from "./data/blog.json";

const Blog = () => {
  return (
    <div id="blog" className="blog">
      <Container className="blog__container">
        {data.posts.map((post, index) => (
          <Row key={index} className="blog-post">
            <Col md={12}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Blog;
