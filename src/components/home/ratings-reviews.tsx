import React from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Tab,
  Nav,
  Table,
  ProgressBar,
  Form,
  Image,
} from "react-bootstrap";
import { descriptionData, productprogress } from "common/data";
import SimpleBar from "simplebar-react";
import avatar5 from "assets/images/users/avatar-5.jpg";
import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar8 from "assets/images/users/avatar-8.jpg";

export const RatingsReviews = () => {
  return (
    <React.Fragment>
      <Container
        fluid
        className="container-custom"
        style={{ marginTop: "-30px" }}
      >
        <Row>
          <Col lg={12}>
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="Description"
            >
              <Row>
                <Col sm={12}>
                  <Nav variant="tabs" className="nav-tabs-custom mb-3">
                    <Nav.Item as="li">
                      <Nav.Link as="a" eventKey="Description">
                        {" "}
                        Description
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link as="a" eventKey="Ratings">
                        Ratings Reviews
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="Description">
                      <div
                        className="tab-pane active show"
                        id="profile1"
                        role="tabpanel"
                      >
                        <p className="text-muted fs-15">
                          Clothing serves many purposes: it can serve as
                          protection from the elements, rough surfaces, sharp
                          stones, rash-causing plants, insect bites, by
                          providing a barrier between the skin and the
                          environment. It is worth noting that a man's style
                          goes beyond his outward appearance. Style is about
                          more than the clothes you wear. It's who you are on
                          the inside and how you present yourself to the outside
                          world. It's having appreciation and cultivating
                          gratitude.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Ratings">
                      <div
                        className="tab-pane show"
                        id="profile2"
                        role="tabpanel"
                      >
                        <div>
                          <div className="d-flex flex-wrap gap-4 justify-content-between align-items-center mt-4">
                            <div className="flex-shrink-0">
                              <h5 className="fs-15 mb-3 fw-medium">
                                Total Rating's
                              </h5>
                              <h2 className="fw-bold mb-3">10.14k</h2>
                              <p className="text-muted mb-0">
                                Growth in reviews on this year
                              </p>
                            </div>
                            <hr className="vr" />
                            <div className="flex-shrink-0">
                              <h5 className="fs-15 mb-3 fw-medium">
                                Average Rating
                              </h5>
                              <h2 className="fw-bold mb-3">
                                5.6
                                <span className="fs-16 align-middle text-warning ms-2">
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-half-fill" />
                                </span>
                              </h2>
                              <p className="text-muted mb-0">
                                Average rating on this year
                              </p>
                            </div>
                            <hr className="vr" />
                            <div className="flex-shrink-0 w-xl">
                              {(productprogress || [])?.map(
                                (item: any, idx: number) => {
                                  return (
                                    <Row
                                      className="align-items-center g-3 align-items-center mb-2"
                                      key={idx}
                                    >
                                      <Col className="col-auto">
                                        <div>
                                          <h6 className="mb-0 text-muted fs-13">
                                            <i className="ri-star-fill text-warning me-1 align-bottom" />
                                            {item.num}
                                          </h6>
                                        </div>
                                      </Col>
                                      <Col>
                                        <div>
                                          <ProgressBar
                                            now={item.value}
                                            variant={`${item.color}`}
                                            className="progress animated-progress progress-sm"
                                          />
                                        </div>
                                      </Col>
                                      <Col className="col-auto">
                                        <div>
                                          <h6 className="mb-0 text-muted fs-13">
                                            {item.progressnum}
                                          </h6>
                                        </div>
                                      </Col>
                                    </Row>
                                  );
                                },
                              )}
                            </div>
                          </div>
                          <SimpleBar
                            className="mt-4"
                            style={{ maxHeight: "350px" }}
                          >
                            <div className="d-flex p-3 border-bottom border-bottom-dashed">
                              <div className="flex-shrink-0 me-3">
                                <Image
                                  className="avatar-xs"
                                  src={avatar5}
                                  alt=""
                                  roundedCircle
                                />
                              </div>
                              <div className="flex-grow-1">
                                <div className="d-flex mb-3">
                                  <div className="flex-grow-1">
                                    <div>
                                      <div className="mb-2 fs-12">
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-line text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-line text-warning align-bottom" />
                                        </span>
                                      </div>
                                      <h6 className="mb-0">Donald Risher</h6>
                                    </div>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <p className="mb-0 text-muted">
                                      <i className="ri-calendar-event-fill me-2 align-middle" />
                                      Aug 16, 2022
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="lh-base fs-15">
                                    Design Quality
                                  </h5>
                                  <p className="mb-0">
                                    " This is an incredible framework worth so
                                    much in the right hands! Nowhere else are
                                    you going to get so much flexibility and
                                    great code for a few dollars. Highly
                                    recommend purchasing today! Like right now!
                                    "
                                  </p>
                                </div>
                                <div className="d-flex mt-4">
                                  <div className="flex-shrink-0 me-3">
                                    <Image
                                      className="avatar-xs"
                                      src={avatar1}
                                      alt=""
                                      roundedCircle
                                    />
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="d-flex mb-3">
                                      <div className="flex-grow-1">
                                        <div>
                                          <h6 className="mb-2">Jansh Brown</h6>
                                          <p className="mb-0 text-muted fs-13">
                                            Admin
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <p className="mb-0 text-muted">
                                          <i className="ri-calendar-event-fill me-2 align-middle" />
                                          Aug 16, 2022
                                        </p>
                                      </div>
                                    </div>
                                    <p className="mb-0">Thank You</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex p-3 border-bottom border-bottom-dashed">
                              <div className="flex-shrink-0 me-3">
                                <Image
                                  className="avatar-xs"
                                  src={avatar3}
                                  alt=""
                                  roundedCircle
                                />
                              </div>
                              <div className="flex-grow-1">
                                <div className="d-flex mb-3">
                                  <div className="flex-grow-1">
                                    <div>
                                      <div className="mb-2 fs-12">
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                      </div>
                                      <h6 className="mb-0">Richard Smith</h6>
                                    </div>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <p className="mb-0 text-muted">
                                      <i className="ri-calendar-event-fill me-2 align-middle" />
                                      Dec 10, 2022
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="lh-base fs-15">
                                    Feature Availability
                                  </h5>
                                  <p className="mb-0">
                                    " Hello everyone, I would like to suggest
                                    here two contents that you could create.
                                    Course pages and blog pages. In them you
                                    could insert the listing and management of
                                    courses and listing and management of blog.
                                    The theme is perfect, one of the best
                                    purchases I've ever made. "
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex p-3 border-bottom border-bottom-dashed mb-3">
                              <div className="flex-shrink-0 me-3">
                                <Image
                                  className="avatar-xs"
                                  src={avatar8}
                                  alt=""
                                  roundedCircle
                                />
                              </div>
                              <div className="flex-grow-1">
                                <div className="d-flex mb-3">
                                  <div className="flex-grow-1">
                                    <div>
                                      <div className="mb-2 fs-12">
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-half-fill text-warning align-bottom" />
                                        </span>
                                        <span>
                                          <i className="ri-star-line text-warning align-bottom" />
                                        </span>
                                      </div>
                                      <h6 className="mb-0">Pauline Moll</h6>
                                    </div>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <p className="mb-0 text-muted">
                                      <i className="ri-calendar-event-fill me-2 align-middle" />
                                      Aug 16, 2022
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="lh-base fs-15">
                                    Design Quality
                                  </h5>
                                  <p className="mb-0">
                                    "We have used your other templates as well
                                    and seems it's amazing with the design and
                                    code quality. Wish you best for the future
                                    updates. Keep updated you will be #1 in near
                                    future. "
                                  </p>
                                </div>
                                <div className="d-flex mt-4">
                                  <div className="flex-shrink-0 me-3">
                                    <Image
                                      className="avatar-xs"
                                      src={avatar1}
                                      alt=""
                                      roundedCircle
                                    />
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="d-flex mb-3">
                                      <div className="flex-grow-1">
                                        <div>
                                          <h6 className="mb-2">Jansh Brown</h6>
                                          <p className="mb-0 text-muted fs-13">
                                            Admin
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <p className="mb-0 text-muted">
                                          <i className="ri-calendar-event-fill me-2 align-middle" />
                                          Aug 16, 2022
                                        </p>
                                      </div>
                                    </div>
                                    <p className="mb-0">Thank You</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SimpleBar>

                          <div className="pt-3">
                            <h5 className="fs-18">Add a Review</h5>
                            <div>
                              <Form action="#">
                                <div className="d-flex align-items-center mb-3">
                                  <span className="fs-14">Your rating:</span>
                                  <div className="ms-3">
                                    <span className="fs-14">
                                      <i className="ri-star-fill text-warning align-bottom" />
                                    </span>
                                    <span className="fs-14">
                                      <i className="ri-star-fill text-warning align-bottom" />
                                    </span>
                                    <span className="fs-14">
                                      <i className="ri-star-fill text-warning align-bottom" />
                                    </span>
                                    <span className="fs-14">
                                      <i className="ri-star-fill text-warning align-bottom" />
                                    </span>
                                    <span className="fs-14">
                                      <i className="ri-star-half-fill text-warning align-bottom" />
                                    </span>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <Form.Control
                                    name="your-name"
                                    placeholder="Title"
                                    type="text"
                                  />
                                </div>
                                <div className="mb-3">
                                  <Form.Control
                                    as="textarea"
                                    name="your-comment"
                                    placeholder="Enter your comments & reviews"
                                    rows={4}
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="text-end">
                                  <Button
                                    variant="primary"
                                    className="btn-hover"
                                    type="submit"
                                    value="Submit"
                                  >
                                    Send Review
                                    <i className="ri-send-plane-2-line align-bottom ms-1" />
                                  </Button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          {/*end col*/}
        </Row>
        {/*end row*/}
      </Container>
    </React.Fragment>
  );
};
