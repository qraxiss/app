
import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import discordIcon from "assets/images/socials/dc.png";
import mediumIcon from "assets/images/socials/md.png";
import telegramIcon from "assets/images/socials/tg.png";
import twitterIcon from "assets/images/socials/x.png";
//img
import { useSelector } from "react-redux";
import { MISC } from "constants/footer";

import logo from "assets/images/svg/footer-logo-icon.svg";
import Shopcek from "assets/images/logo-dark.png";
import microsoft_banner from "assets/images/ms-purple.png";

const socials = [
  {
    to: "https://telegram.com/shopcek",
    icon: telegramIcon,
  },
  {
    to: "https://discord.com/shopcek",
    icon: discordIcon,
  },
  {
    to: "https://twitter.com/shopcek",
    icon: twitterIcon,
  },
  {
    to: "https://medium.com/shopcek",
    icon: mediumIcon,
  },
];

const Footer = () => {
  const categories = useSelector((state: any) => state.categories.data);

  return (
    <React.Fragment>
      <section className="section footer-landing pb-0">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer-info">
                <div style={{ paddingRight: "40px" }}>
                  <Image
                    style={{ margin: "auto" }}
                    src={logo}
                    alt=""
                    height="120"
                    className="logo-light"
                  />
                  <Image
                    style={{ margin: "auto" }}
                    src={Shopcek}
                    alt=""
                    height="80"
                    width="auto"
                    className="logo-light"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Image src={logo} alt="" height="120" className="logo-dark" />
                  <Image
                    src={Shopcek}
                    alt=""
                    height="80"
                    className="logo-dark"
                  />
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <Row className="pl-0 pl-lg-3">
                <Col md={3} xs={6}>
                  <div className="mt-lg-0 mt-4">
                    <h5 className="footer-title">Categories</h5>
                    <ul className="list-unstyled footer-link mt-3">
                      {categories?.map((category: any, idx: number) => (
                        <li key={`category-${idx}`}>
                          <Link to={`products/${category.slug}`}>
                            {category.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link to={`products/earn`}>EARN</Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col md={3} xs={6}>
                  <div className="mt-lg-0 mt-4">
                    <h5 className="footer-title"> MISC </h5>
                    <ul className="list-unstyled footer-link mt-3">
                      {MISC.map((item, idx) => (
                        <li key={`misc-${idx}`}>
                          <Link to={item.url} target="_blank">
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="mt-lg-0 mt-4">
                    <h5 className="footer-title text-start mb-3">
                      {" "}
                      SUBSCRIBE TO OUR NEWSLETTER{" "}
                    </h5>
                    <Form action="#">
                      <div className="subscribe-input position-relative">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter your email"
                        />
                        <Button
                          className="button-secondary"
                          type="submit"
                          variant="primary"
                        >
                          Subscribe Now
                        </Button>
                      </div>
                    </Form>
                    <div className="footer-social mt-3">
                      <ul
                        className="list-inline mb-0"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        {socials.map((social, inx: number) => (
                          <li className="list-inline-item" key={inx}>
                            <Link
                              to={social.to}
                              target="_blank"
                              className="text-reset"
                            >
                              <Image
                                src={social.icon}
                                alt=""
                                height={30}
                                width={30}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-3 d-flex justify-content-start">
                      <Image
                        src={microsoft_banner}
                        alt=""
                        height="auto"
                        width="50%"
                        className="logo-light"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="footer-border-alt mt-4 align-items-center fs-15">
            <Col sm={6}>
              {new Date().getFullYear()} © SHOPCEK-All Rights Reserved
            </Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block">
                Developed for the transition of the next billion to crypto
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Footer;
