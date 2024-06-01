import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
  Image,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Shoptopbar } from "components/shop-top-bar";
import { shopProducDetails } from "common/data";
import EmailClothe from "pages/catalog/email-clothe";
import { CommonService } from "components/common-service";

import { ORDER } from "graphql/order/queries";
import { useShopcekQuery } from "graphql/apollo/query-wrapper";

const Trackorder = () => {
  const { id } = useParams();
  const { data, loading, error } = useShopcekQuery<any>(ORDER, {
    variables: {
      id,
    },
  });

  console.log(data, loading, error);
  document.title = "Track Order | Shopcek";
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="mb-4 pb-2">
                <h5 className="mb-0 text-decoration-underline                                                                                                                                                                                                                                                                   ">
                  Order ID <b>#SHPC{25000 + Number(data?.id)}</b>
                </h5>
              </div>
            </Col>
          </Row>
          <div className="track-orders">
    <Row className="justify-content-between gy-4 gy-md-0">
      <Col
        xs={6} md={3}
        className="order-tracking text-center ps-4 ps-md-0 completed"
      >
        <span className="is-complete"></span>
        <h6 className="fs-15 mt-3 mt-md-4">Order Process</h6>
        <p className="text-muted fs-14 mb-0">Mon, 23 Nov</p>
      </Col>
      <Col
        xs={6} md={3}
        className="order-tracking text-center ps-4 ps-md-0 completed"
      >
        <span className="is-complete"></span>
        <h6 className="fs-15 mt-3 mt-md-4">Order Shipped</h6>
        <p className="text-muted fs-14 mb-0">Mon, 23 Nov</p>
      </Col>
      <Col
        xs={6} md={3}
        className="order-tracking text-center ps-4 ps-md-0"
      >
        <span className="is-complete"></span>
        <h6 className="fs-15 mt-3 mt-md-4">Out Of Delivery</h6>
        <p className="text-muted fs-14 mb-0">Mon, 23 Nov</p>
      </Col>
      <Col
        xs={6} md={3}
        className="order-tracking text-center ps-4 ps-md-0"
      >
        <span className="is-complete"></span>
        <h6 className="fs-15 mt-3 mt-md-4">Delivered</h6>
        <p className="text-muted fs-14 mb-0">Mon, 23 Nov</p>
      </Col>
      </Row>
    </div>
        </Container>
      </section>
      <section className="section pt-0">
        <Container>
          <Card className="border-dashed">
            <Card.Body className="border-bottom border-bottom-dashed p-4">
              <Row className="g-3">
                <Col lg={3} xs={6}>
                  <p className="text-muted mb-2 text-uppercase fw-medium fs-12">
                    Transaction TX
                  </p>
                  <h5 className="fs-14 mb-0">
                    <Link
                      to={`https://testnet.bscscan.com/tx/${data?.transaction}`}
                      target="_blank"
                    >
                      <span id="invoice-no">
                        {data?.transaction.substring(0, 6)}...
                        {data?.transaction.substring(
                          data?.transaction.length - 6,
                          data?.transaction.length,
                        )}
                      </span>
                    </Link>
                  </h5>
                </Col>
                <Col lg={3} xs={6}>
                  <p className="text-muted mb-2 text-uppercase fw-medium fs-12">
                    Date
                  </p>
                  <h5 className="fs-14 mb-0">
                    <span id="invoice-date">
                      {new Date(data?.createdAt).toLocaleDateString()}
                    </span>{" "}
                    <small className="text-muted" id="invoice-time">
                      {new Date(data?.createdAt).toTimeString().substring(0, 5)}
                    </small>
                  </h5>
                </Col>
                <Col lg={3} xs={6}>
                  <p className="text-muted mb-2 text-uppercase fw-medium fs-12">
                    Payment Status
                  </p>
                  <span
                    className="badge bg-success-subtle text-success fs-11"
                    id="payment-status"
                  >
                    Paid
                  </span>
                </Col>
                <Col lg={3} xs={6}>
                  <p className="text-muted mb-2 text-uppercase fw-medium fs-12">
                    Total Amount
                  </p>
                  <h5 className="fs-14 mb-0">
                    $<span id="total-amount">{data?.cart.price}</span>
                  </h5>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body className="p-4">
              <Row className="g-3">
                <Col xs={6}>
                  <h6 className="text-muted text-uppercase fs-12 mb-3">
                    Billing Address
                  </h6>
                  <h6 id="billing-name">Diana Nichols</h6>
                  <p className="text-muted mb-1" id="billing-address-line-1">
                    305 S San Gabriel Blvd
                  </p>
                  <p className="text-muted mb-1">
                    <span>Phone: +</span>
                    <span id="billing-phone-no">(123) 456-7890</span>
                  </p>
                  <p className="text-muted mb-0">
                    <span>Tax: </span>
                    <span id="billing-tax-no">12-3456789</span>{" "}
                  </p>
                </Col>
                <Col xs={6}>
                  <h6 className="text-muted text-uppercase fs-12 mb-3">
                    Shipping Address
                  </h6>
                  <h6 id="shipping-name">Diana Nichols</h6>
                  <p className="text-muted mb-1" id="shipping-address-line-1">
                    305 S San Gabriel Blvd
                  </p>
                  <p className="text-muted mb-1">
                    <span>Phone: +</span>
                    <span id="shipping-phone-no">(123) 456-7890</span>
                  </p>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body className="p-4">
              <div className="table-responsive">
                <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                  <thead>
                    <tr className="table-active">
                      <th scope="col" style={{ width: "50px" }}>
                        #
                      </th>
                      <th scope="col">Product Details</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col" className="text-end">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody id="products-list">
                    {data?.cart.items.map((item: any, index: number) => {
                      return (
                        <tr key={index}>
                          <th scope="row">0{item.id}</th>
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
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Enim, amet?
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>${item.variant.price}</td>
                          <td>{item.count}</td>
                          <td className="text-end">
                            ${item.count * item.variant.price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <div className="border-top border-top-dashed mt-2">
                <Table
                  className="table-borderless table-nowrap align-middle mb-0 ms-auto"
                  style={{ width: "250px" }}
                >
                  <tbody>
                    <tr>
                      <td>Sub Total</td>
                      <td className="text-end">${data?.cart.price}</td>
                    </tr>
                    <tr>
                      <td>Estimated Tax (12.5%)</td>
                      <td className="text-end">
                        ${(data?.cart.price * 12.5) / 100}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Discount{" "}
                        <small className="text-muted">(Shopcek15)</small>
                      </td>
                      <td className="text-end">
                        - ${(data?.cart.price * 15) / 100}
                      </td>
                    </tr>
                    <tr>
                      <td>Shipping Charge</td>
                      <td className="text-end">$65.00</td>
                    </tr>
                    <tr className="border-top border-top-dashed fs-15">
                      <th scope="row">Total Amount</th>
                      <th className="text-end">
                        $
                        {-((data?.cart.price * 15) / 100) +
                          (data?.cart.price * 12.5) / 100 +
                          data?.cart.price +
                          65}
                      </th>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
            <Card.Body className="p-4">
              <div className="d-flex mb-3">
                <h5 className="card-title flex-grow-1 mb-0">
                  <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>{" "}
                  Logistics Details
                </h5>
                <div className="flex-shrink-0">
                  <Link
                    to="#"
                    className="badge bg-primary-subtle text-primary fs-11"
                  >
                    Track Order
                  </Link>
                </div>
              </div>
              <div>
                <Row className="align-items-center gy-3 gy-md-0">
                  <Col md={4}>
                    <div className="d-flex align-items-center justify-content-between justify-content-md-start text-end text-md-start">
                      <div className="">
                        {/* <lord-icon src="https://cdn.lordicon.com/uetqnvvg.json" trigger="loop" colors="primary:#438eff,secondary:#0ab39c" style="width:70px;height:70px"></lord-icon> */}
                      </div>
                      <div className="ms-2">
                        <h6>RQK Logistics</h6>
                        <p className="text-muted mb-0 fs-14">ID: MFDS140045</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-end text-md-start">
                      <h6>Debit Card</h6>
                      <p className="text-muted mb-0 fs-14">Payment Mode</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-end">
                      <Button className="btn btn-soft-info">
                        <i className="ri-customer-service-2-line align-bottom me-1"></i>{" "}
                        Help Center
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="text-end mt-4">
                <Button variant="danger" className="btn-hover">
                  Continue Shopping{" "}
                  <i className="ri-arrow-right-line align-bottom ms-1"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>
      <EmailClothe />
    </React.Fragment>
  );
};

export default Trackorder;
