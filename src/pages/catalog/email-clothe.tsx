import React from "react";
import { Button, Col, Container, Form, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

const EmailClothe = () => {
  return (
    <React.Fragment>
      <section
        className="section bg-light bg-opacity-25"
      >
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col lg={6}>
              <div>
                <p className="fs-15 text-uppercase fw-medium">
                  <span className="fw-semibold text-danger">25% Up to </span>
                  off all Products
                </p>
                <h1 className="lh-base text-capitalize mb-3">
                  Stay home &amp; get your daily needs from our shop
                </h1>
                <p className="fs-15 mb-4 pb-2">
                  Start You'r Daily Shopping with{" "}
                  <Link to="#" className="link-primary fw-medium">
                    Shopcek
                  </Link>
                </p>
                <Form action="#">
                  <div className="position-relative ecommerce-subscript">
                    <Form.Control
                      type="email"
                      className="rounded-pill"
                      placeholder="Enter your email"
                      name="email"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      className="btn-hover button-secondary rounded-pill"
                    >
                      Subscript Now
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default EmailClothe;
