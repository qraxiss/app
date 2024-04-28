/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import telegramIcon from "assets/images/socials/telegram.svg";
import mediumIcon from "assets/images/socials/medium.svg";
import twitterIcon from "assets/images/socials/x.svg";
//img
import shopcekLogo from "assets/images/svg/Shopcek_Official.png";
import { useSelector } from "react-redux";
import { MISC } from "constants/footer";

const Footer = () => {
  const categories = useSelector((state: any) => state.categories.data);

  return (
    <React.Fragment>
      <section className="section footer-landing pb-0">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer-info">
                <Image
                  src={shopcekLogo}
                  alt=""
                  height="28"
                  className="logo-light"
                />
                <Image
                  src={shopcekLogo}
                  alt=""
                  height="28"
                  className="logo-dark"
                />

                <div className="footer-social mt-4">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <Link
                        to="https://twitter.com/shopcek"
                        target="_blank"
                        className="text-reset"
                      >
                        <Image
                          src={telegramIcon}
                          alt=""
                          height={24}
                          width={24}
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="https://twitter.com/shopcek"
                        target="_blank"
                        className="text-reset"
                      >
                        <Image
                          src={twitterIcon}
                          alt=""
                          height={24}
                          width={24}
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="https://medium.com/shopcek"
                        target="_blank"
                        className="text-reset"
                      >
                        <Image
                          src={mediumIcon}
                          alt=""
                          height={24}
                          width={24}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <Row className="pl-0 pl-lg-3">
                <Col md={3}>
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
                    </ul>
                  </div>
                </Col>

                <Col md={3}>
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
