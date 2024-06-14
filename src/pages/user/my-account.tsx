import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Tab,
  Nav,
  Card,
  Table,
  Form,
  Image,
  Button,
  CardBody,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Selectaddress from "components/select-address";

//img
import usersavatar1 from "assets/images/users/avatar-1.jpg";

import { orderHistorys, wishlishProduct } from "common/data";
import EmailClothe from "pages/catalog/email-clothe";
import { CommonService } from "components/common-service";
import { AppDispatch } from "store";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync, removeFromWishlistAsync } from "slices/thunk";


const MyAccount = () => {
  //dispatch
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state: any) => state.wishlist.data.items);
  const userData = useSelector((state: any) => state.user.data);
  const orders = useSelector((state: any) => state.order.orders.data);
  const addresses = useSelector((state: any) => state.address.data);

  const location = useLocation();
  const [activeKey, setActiveKey] = useState(location.state || "profile");

  useEffect(() => {
    if (location.state) {
      setActiveKey(location.state);
    }
  }, [location.state]);

  return (
    <React.Fragment>
      <section className="position-relative">
        <div
          style={{
            height: "150px",
          }}
        ></div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="pt-3">
                <div className="mt-n5 d-flex gap-3 flex-wrap align-items-end">
                  <div>
                    <div className="d-flex align-items-center">
                      <h5 className="px-2 cursor-pointer mb-0">{`${userData.address.substring(0, 6)}...${userData.address.substring(userData.address.length - 6)}`}</h5>
                      <div className="float-end clearfix">
                        {" "}
                        <Link
                          to="#"
                          className="badge bg-primary-subtle text-primary"
                        >
                          <i className="ri-pencil-fill align-bottom me-1"></i>{" "}
                          Edit
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="ms-md-auto">
                    <Link
                      to="/product-list"
                      className="btn button-add-cart btn-hover"
                    >
                      <i className="bi bi-cart4 me-1 align-middle"></i> Shopping
                      Now
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Tab.Container
            id="left-tabs-example"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
          >
            <Row>
              <Col lg={3}>
                <Card>
                  <Card.Body>
                    <Nav variant="pills" className="flex-column gap-3">
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          eventKey="profile"
                          className="fs-15"
                          role="presentation"
                        >
                          <i className="bi bi-person-circle align-middle me-1"></i>{" "}
                          Account
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          eventKey="list"
                          className="fs-15"
                          role="presentation"
                        >
                          <i className="bi bi-bookmark-check align-middle me-1"></i>{" "}
                          Wish list
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          eventKey="order"
                          className="fs-15"
                          role="presentation"
                        >
                          <i className="bi bi-bag align-middle me-1"></i> Order
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          eventKey="XP"
                          className="fs-15"
                          role="presentation"
                        >
                          <i className="bi bi-coin align-middle me-1"></i> XP
                          Points
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          as="a"
                          eventKey="stake"
                          className="fs-15"
                          role="presentation"
                        >
                          <i className="bi bi-piggy-bank align-middle me-1"></i>{" "}
                          Stake
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="profile">
                    <div
                      className="tab-pane fade show active"
                      id="custom-v-pills-profile"
                      role="tabpanel"
                    >
                      <Row>
                        <Col lg={12}>
                          <Card className="mb-0">
                            <Card.Body>
                              <div className="mt-4">
                                <h6 className="fs-16 text-decoration-underline">
                                  Billing &amp; Shipping Addresses
                                </h6>
                              </div>
                              <Selectaddress></Selectaddress>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="list">
                    <div
                      className="tab-pane fade show"
                      id="custom-v-pills-list"
                      role="tabpanel"
                    >
                      <Row>
                        <Col lg={12}>
                          <Card className="overflow-hidden mb-0">
                            <Card.Body>
                              <div className="table-responsive table-card">
                                <Table className="fs-15 align-middle">
                                  <thead>
                                    <tr>
                                      <th scope="col">Product</th>
                                      <th scope="col">Price</th>
                                      <th scope="col" className="stock-status">
                                        Stock Status
                                      </th>
                                      <th scope="col">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {wishlist && wishlist.length > 0 ? (
                                      wishlist.map((item: any, inx: number) => (
                                        <tr key={inx}>
                                          <td>
                                            <div className="d-flex gap-3">
                                              <div className="avatar-sm flex-shrink-0">
                                                <div
                                                  className={`avatar-title bg-${item.bg}-subtle rounded`}
                                                >
                                                  <Image
                                                    src={item.image}
                                                    alt=""
                                                    className="avatar-xs"
                                                  />
                                                </div>
                                              </div>
                                              <div className="flex-grow-1">
                                                <Link
                                                  to={`/product-details/${item.slug}`}
                                                >
                                                  <h6 className="fs-16">
                                                    {item.name}
                                                  </h6>
                                                </Link>
                                                <p className="mb-0 text-muted fs-13">
                                                  {item.text}
                                                </p>
                                              </div>
                                            </div>
                                          </td>
                                          <td>${item.price}</td>
                                          <td className="stock-status">
                                            <span
                                              className={`badge bg-success-subtle text-success`}
                                            >
                                              {"In Stock"}
                                            </span>
                                          </td>
                                          <td>
                                            <ul className="list-unstyled d-flex gap-3 mb-0">
                                              <li>
                                                <Link
                                                  to="/shop/shopingcard"
                                                  className="btn btn-soft-info btn-icon btn-sm"
                                                >
                                                  <i className="ri-shopping-cart-2-line fs-13"></i>
                                                </Link>
                                              </li>
                                              <li>
                                                <Button
                                                  onClick={() => {
                                                    dispatch(
                                                      removeFromWishlistAsync(
                                                        item,
                                                      ),
                                                    );
                                                  }}
                                                  className="btn btn-soft-danger btn-icon btn-sm"
                                                >
                                                  <i className="ri-close-line fs-13"></i>
                                                </Button>
                                              </li>
                                            </ul>
                                          </td>
                                        </tr>
                                      ))
                                    ) : (
                                      <tr>
                                        <td colSpan={4}>
                                          <div className="text-center">
                                            <p>No products</p>
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  </tbody>
                                </Table>
                              </div>
                              <div className="hstack gap-2 justify-content-end mt-4">
                                <Link
                                  to="/product-list"
                                  className="btn button-add-cart btn-secondary d-flex align-items-center"
                                  style={{padding: '10px'}}
                                >
                                  Continue Shopping{" "}
                                  <i className="ri-arrow-right-line align-bottom"></i>
                                </Link>
                                <Link
                                  to="/shop/checkout"
                                  className="btn btn-hover button-buy-now d-flex align-items-center"
                                  style={{padding: '10px'}}
                                >
                                  Check Out{" "}
                                  <i className="ri-arrow-right-line align-bottom"></i>
                                </Link>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="order">
                    <div
                      className="tab-pane fade show"
                      id="custom-v-pills-order"
                      role="tabpanel"
                    >
                      <Card className="mb-0">
                        <Card.Body>
                          <div className="table-responsive table-card">
                            <Table className="fs-15 align-middle table-nowrap">
                              <thead>
                                <tr>
                                  <th scope="col">Order ID</th>
                                  <th scope="col">Date</th>
                                  <th scope="col">Total Amount</th>
                                  <th scope="col">Status</th>
                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                                {orders.map((item: any, inx: number) => {
                                  return (
                                    <tr key={inx}>
                                      <td>
                                        <Link
                                          to={`/invoice/${item.id}`}
                                          className="text-body"
                                        >
                                          #SHPC{25000 + Number(item.id)}
                                        </Link>
                                      </td>
                                      <td>
                                        <span className="text-muted">
                                          {new Date(
                                            item.createdAt,
                                          ).toLocaleDateString()}
                                        </span>
                                      </td>
                                      <td className="fw-medium">
                                        ${item.count}
                                      </td>
                                      <td>
                                        {item.error ? (
                                          <span
                                            className={`badge bg-danger-subtle text-danger`}
                                          >
                                            Failed
                                          </span>
                                        ) : (
                                          <span
                                            className={`badge bg-secondary-subtle text-secondary`}
                                          >
                                            Shipping
                                          </span>
                                        )}
                                      </td>
                                      <td>
                                        {item.error ? (
                                          <Link
                                            to={`/invoice/${item.id}`}
                                            data-bs-toggle="modal"
                                            className="btn btn-danger btn-sm"
                                          >
                                            Details
                                          </Link>
                                        ) : (
                                          <Link
                                            to={`/invoice/${item.id}`}
                                            data-bs-toggle="modal"
                                            className="btn btn-secondary btn-sm"
                                          >
                                            Invoice
                                          </Link>
                                        )}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </div>
                          <div className="text-end mt-4">
                            <Link
                              to={"/products-grid"}
                              className="btn btn-hover button-add-cart"
                            >
                              Continue Shopping{" "}
                              <i className="ri-arrow-right-line align-middle ms-1"></i>
                            </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="XP">
                    <div
                      className="tab-pane fade show"
                      id="custom-v-pills-order"
                      role="tabpanel"
                    >
                      <Card className="mb-0">
                        <CardBody>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <h3>Total: {0}</h3>
                            <div className="hstack gap-2 justify-content-center mt-4">
                              <Button className="btn button-add-cart">
                                Collect XP
                              </Button>
                              <Button className="btn btn-secondary button-buy-now">
                                Earn Docs
                              </Button>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="stake"></Tab.Pane>
                  {/* <Tab.Pane eventKey="setting">
                    <div
                      className="tab-pane fade show"
                      id="custom-v-pills-setting"
                      role="tabpanel"
                    >
                      <Row>
                        <Col lg={12}>
                          <Card>
                            <Card.Body>
                              <form action="#">
                                <Row>
                                  <Col lg={12}>
                                    <h5 className="fs-16 text-decoration-underline mb-4">
                                      Personal Details
                                    </h5>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="firstnameInput">
                                        First Name
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        id="firstnameInput"
                                        placeholder="Enter your firstname"
                                        defaultValue="Raquel"
                                        name="firstname"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="lastnameInput">
                                        Last Name
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        id="lastnameInput"
                                        placeholder="Enter your lastname"
                                        defaultValue="Murillo"
                                        name="lastname"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="phonenumberInput">
                                        Phone Number
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        id="phonenumberInput"
                                        placeholder="Enter your phone number"
                                        defaultValue="+(253) 01234 5678"
                                        name="phno"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="emailInput">
                                        Email Address
                                      </Form.Label>
                                      <Form.Control
                                        type="email"
                                        id="emailInput"
                                        placeholder="Enter your email"
                                        defaultValue="raque@Shopcek.com"
                                        name="email"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="cityInput">
                                        City
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        id="cityInput"
                                        placeholder="City"
                                        defaultValue="Phoenix"
                                        name="city"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="countryInput">
                                        Country
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        id="countryInput"
                                        placeholder="Country"
                                        defaultValue="USA"
                                        name="country"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div className="mb-3">
                                      <Form.Label htmlFor="zipcodeInput">
                                        Zip Code
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        minLength={5}
                                        maxLength={6}
                                        id="zipcodeInput"
                                        placeholder="Enter zipcode"
                                        defaultValue="90011"
                                        name="zip"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={12}>
                                    <div className="mb-3 pb-2">
                                      <Form.Label htmlFor="exampleFormControlTextarea">
                                        Description
                                      </Form.Label>
                                      <Form.Control
                                        name="desc"
                                        as="textarea"
                                        id="exampleFormControlTextarea"
                                        placeholder="Enter your description"
                                        rows={3}
                                        defaultValue="Hi I'm Raquel Murillo, It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family."
                                      ></Form.Control>
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                              <div className="mb-3" id="changePassword">
                                <h5 className="fs-16 text-decoration-underline mb-4">
                                  Change Password
                                </h5>
                                <form action="#">
                                  <Row className="g-2">
                                    <Col lg={4}>
                                      <div>
                                        <Form.Label htmlFor="oldpasswordInput">
                                          Old Password*
                                        </Form.Label>
                                        <Form.Control
                                          type="password"
                                          id="oldpasswordInput"
                                          placeholder="Enter current password"
                                          name="opassword"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={4}>
                                      <div>
                                        <Form.Label htmlFor="newpasswordInput">
                                          New Password*
                                        </Form.Label>
                                        <Form.Control
                                          type="password"
                                          id="newpasswordInput"
                                          placeholder="Enter new password"
                                          name="npassword"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={4}>
                                      <div>
                                        <Form.Label htmlFor="confirmpasswordInput">
                                          Confirm Password*
                                        </Form.Label>
                                        <Form.Control
                                          type="password"
                                          id="confirmpasswordInput"
                                          placeholder="Confirm password"
                                          name="cpassword"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </Col>
                                    <Col lg={12}>
                                      <div className="mb-3">
                                        <Link
                                          to="/auth-pass-reset-basic"
                                          className="link-primary text-decoration-underline"
                                        >
                                          Forgot Password ?
                                        </Link>
                                      </div>
                                    </Col>
                                  </Row>
                                </form>
                              </div>
                              <div className="mb-3" id="privacy">
                                <h5 className="fs-16 text-decoration-underline mb-4">
                                  Privacy Policy
                                </h5>
                                <div className="mb-3">
                                  <h5 className="fs-15 mb-2">Security:</h5>
                                  <div className="d-flex flex-column align-items-center flex-sm-row mb-sm-0">
                                    <div className="flex-grow-1">
                                      <p className="text-muted fs-14 mb-0">
                                        Two-factor Authentication
                                      </p>
                                    </div>
                                    <div className="flex-shrink-0 ms-sm-3">
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-primary"
                                      >
                                        Enable Two-facor Authentication
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-column align-items-center flex-sm-row mb-sm-0 mt-2">
                                    <div className="flex-grow-1">
                                      <p className="text-muted fs-14 mb-0">
                                        Secondary Verification
                                      </p>
                                    </div>
                                    <div className="flex-shrink-0 ms-sm-3">
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-primary"
                                      >
                                        Set up secondary method
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-column align-items-center flex-sm-row mb-sm-0 mt-2">
                                    <div className="flex-grow-1">
                                      <p className="text-muted fs-14 mb-0">
                                        Backup Codes
                                      </p>
                                    </div>
                                    <div className="flex-shrink-0 ms-sm-3">
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-primary"
                                      >
                                        Generate backup codes
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <h5 className="fs-15 mb-2">
                                    Application Notifications:
                                  </h5>
                                  <ul className="list-unstyled mb-0">
                                    <li className="d-flex">
                                      <div className="flex-grow-1">
                                        <Form.Label
                                          htmlFor="directMessage"
                                          className="form-check-label fs-14"
                                        >
                                          Direct messages
                                        </Form.Label>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="form-check form-switch">
                                          <Form.Check type="switch" />
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mt-2">
                                      <div className="flex-grow-1">
                                        <Form.Label
                                          className="form-check-label fs-14"
                                          htmlFor="desktopNotification"
                                        >
                                          Show desktop notifications
                                        </Form.Label>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="form-check form-switch">
                                          <Form.Check type="switch" />
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mt-2">
                                      <div className="flex-grow-1">
                                        <Form.Label
                                          className="form-check-label fs-14"
                                          htmlFor="emailNotification"
                                        >
                                          Show email notifications
                                        </Form.Label>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="form-check form-switch">
                                          <Form.Check type="switch" />
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mt-2">
                                      <div className="flex-grow-1">
                                        <Form.Label
                                          className="form-check-label fs-14"
                                          htmlFor="chatNotification"
                                        >
                                          Show chat notifications
                                        </Form.Label>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="form-check form-switch">
                                          <Form.Check type="switch" />
                                        </div>
                                      </div>
                                    </li>
                                    <li className="d-flex mt-2">
                                      <div className="flex-grow-1">
                                        <Form.Label
                                          className="form-check-label fs-14"
                                          htmlFor="purchaesNotification"
                                        >
                                          Show purchase notifications
                                        </Form.Label>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="form-check form-switch">
                                          <Form.Check type="switch" />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="text-sm-end">
                                <Link
                                  to="#"
                                  className="btn btn-secondary d-block d-sm-inline-block"
                                >
                                  <i className="ri-edit-box-line align-middle me-2"></i>{" "}
                                  Update Profile
                                </Link>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane> */}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyAccount;
