import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Premium: FC = () => {
  const categories = useSelector((state: any) => state.categories.data);
  return (
    <React.Fragment>
      <section>
        <div className="container-fluid container-custom">
          <Row className=" justify-content-center">
            <Col lg={7}>
              <div className="section-content text-center mb-5">
                <p className="fs-20">Signature Selections</p>
                <h2 className="title fw-normal text-capitalize">
                  <span className="section-title d-inline-block section-title-primary">
                    Discover the icons of web3 wardrobes.{" "}
                  </span>{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={5}>
              <div className="category-widgets-main card card-height-100 border-0 shadow-none bg-light btn-6">
                <div className="effect h-100">
                  <img
                    src={`${process.env.REACT_APP_API_URL}${categories[0]?.cover?.url}`}
                    alt=""
                    className="img-fluid h-100 object-fit-cover custom-image"
                  />
                  <div className="widgets-wrapper position-absolute text-center">
                    <Link
                      to="#"
                      className="btn button-secondary w-md rounded-3 stretched-link text-white"
                    >
                      {categories[0]?.name}
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Row>
                {categories.slice(1).map((category: any, index: number) => (
                  <Col lg={6} key={index}>
                    <div className="category-widgets-main card border-0 shadow-none bg-light">
                      <div className="effect">
                        <img
                          src={`${process.env.REACT_APP_API_URL}${category.cover?.url}`}
                          alt=""
                          className="img-fluid custom-image"
                        />
                        <div className="widgets-wrapper position-absolute text-center">
                          <Link
                            to="#"
                            className="btn button-secondary w-md rounded-3 stretched-link text-white"
                          >
                            {category.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </React.Fragment>
  );
};
