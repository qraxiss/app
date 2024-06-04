import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

export const RatingsReviews = () => {
  return (
    <React.Fragment>
      <Container fluid className="container-custom">
        <Row className="gx-2">
          <Col md={12}>
            <Tabs
              defaultActiveKey="description"
              id="uncontrolled-tab-example"
              className="mb-3"
              style={{ backgroundColor: "transparent" }}
            >
              <Tab eventKey="description" title="Description">
                <p>
                  Clothing serves many purposes: it can serve as protection from
                  the elements, rough surfaces, sharp stones, stinging plants,
                  insect bites, by providing a barrier between the skin and the
                  environment. It is worth noting that in many ways it gives a
                  psychological and social experience. This is about more than
                  the clothes you wear, it's who you are on the inside and how
                  you present yourself to the outside world. It's making a
                  statement as well as functional gratification.
                </p>
              </Tab>
              <Tab eventKey="ratings" title="Ratings & Reviews">
                <p>
                  Clothing serves many purposes: it can serve as protection from
                  the elements, rough surfaces, sharp stones, stinging plants,
                  insect bites, by providing a barrier between the skin and the
                  environment. It is worth noting that in many ways it gives a
                  psychological and social experience. This is about more than
                  the clothes you wear, it's who you are on the inside and how
                  you present yourself to the outside world. It's making a
                  statement as well as functional gratification.
                </p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
