import React from "react";
import {
  Col,
  Container,
  Row,
  Alert,
  Card,
  Button,
  Table,
  Image,
} from "react-bootstrap";
import { Shoporder, Shoptopbar } from "components/shop-top-bar";
import { Link } from "react-router-dom";
import { ShopingAddress } from "pages/shop/shopping-Address";
import EmailClothe from "pages/catalog/email-clothe";
import { CommonService } from "components/common-service";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

import { useSelector } from "react-redux";

const Checkout = () => {
  document.title = "Shopcek | Checkout";

  const { items } = useSelector((state: any) => state.cart.data);

  return (
    <React.Fragment>
      <Shoptopbar title="Checkout" page="Checkout" />
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <Alert
                className="alert-danger alert-modern alert-dismissible fade show"
                role="alert"
              >
                <i className="bi bi-box-arrow-in-right icons"></i>Returning
                customer?
                <Alert.Link href="auth-signin-basic" className="link-danger">
                  <strong> Click here to login</strong>.
                </Alert.Link>
                <Button
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></Button>
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <Card>
                <Card.Body>
                  <div className="table-responsive table-card">
                    <Table className="align-middle table-borderless table-nowrap text-center mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Rate</th>
                          <th scope="col">Order ID</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item: any, inx: number) => {
                          return (
                            <tr key={inx}>
                              <td className="text-start">
                                <div className="d-flex align-items-center gap-2">
                                  <div className="avatar-sm flex-shrink-0">
                                    <div
                                      className={`avatar-title bg-success-subtle rounded-3`}
                                    >
                                      <Image
                                        src={item.variant.image}
                                        alt=""
                                        className="avatar-xs"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6>{item.variant.product.name}</h6>
                                    <p className="text-muted mb-0">
                                      {/*description*/}
                                      Lorem ipsum dolor, sit amet consectetur
                                      adipisicing elit. Eos, ipsam!
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td> {"⭐️".repeat(getRandomInt(5))}</td>
                              <td> {item.variant.id}</td>
                              <td className="text-end">
                                ${item.variant.price}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
              <ShopingAddress
                title="Select or add an address"
                HomeAdd="Home Address"
                officeAdd="Office Address"
              />
              <ShopingAddress title="Billing Address" />
            </Col>
            <Col lg={4}>
              <div className="sticky-side-div">
                <Shoporder
                  subtotal="510.50"
                  dic="18.00"
                  charge="2.4"
                  tax="1.6"
                  total="630.25"
                />
                <div className="hstack gap-2 justify-content-between justify-content-end">
                  <Link
                    to="/shop/shopingcard"
                    className="btn btn-hover btn-soft-info w-100"
                  >
                    Back To Cart{" "}
                    <i className="ri-arrow-right-line label-icon align-middle ms-1"></i>
                  </Link>
                  <Link
                    to="/payment"
                    className="btn btn-hover btn-primary w-100"
                  >
                    Continue Payment
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <EmailClothe />
      <CommonService />
    </React.Fragment>
  );
};

export default Checkout;
