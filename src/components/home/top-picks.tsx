import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

export const TopPicks = () => {
  const hotDeals = useSelector((state: any) => state.hotDeals.data);
  const { products } = hotDeals;
  return (
    <React.Fragment>
      <section className="section">
        <Container fluid className="container-custom">
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="section-content text-center mb-5">
                <h2 className="title fw-normal">
                  <span>Top Picks On</span>{" "}
                  <span className="fw-semibold"> Shopcek </span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Swiper
                className="top-Product-slider"
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={5}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
              >
                <div
                  className="swiper-button-prev h-auto"
                  aria-controls="swiper-wrapper-2aa67f756d27c1eb"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                ></div>
                <div
                  className="swiper-button-next h-auto"
                  aria-controls="swiper-wrapper-2aa67f756d27c1eb"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                ></div>
                <div className="swiper-wrapper">
                  {(products || [])?.map((item: any, index: any) => (
                    <SwiperSlide key={index}>
                      <Card className="product-widget border-0 card-animate">
                        <Card.Body className="p-2">
                          <div className="position-relative p-4">
                            <Image
                              src={item.image}
                              alt=""
                              className="img-fluid product-img-main"
                            />
                            <Image
                              src={item.image}
                              alt=""
                              className="img-fluid product-img-2"
                            />
                            {/* <ul className="product-menu list-unstyled">
                              <li className="mb-2">
                                <Link
                                  to="/#"
                                  className="rounded-circle bookmark"
                                  data-bs-toggle="button"
                                >
                                  <i className="bi bi-star"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/product-overview"
                                  className="rounded-circle"
                                >
                                  <i className="bi bi-eye"></i>
                                </Link>
                              </li>
                            </ul>
                            <div className="product-btn mx-auto">
                              <div className="bg-body p-2">
                                <div className="d-flex flex-wrap justify-content-center gap-1">
                                  <div
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-placement="top"
                                    aria-label="Blue"
                                    data-bs-original-title="Blue"
                                  >
                                    <button
                                      type="button"
                                      className="btn avatar-xxs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-primary opacity-50"
                                    >
                                      <i className="ri-checkbox-blank-circle-fill"></i>
                                    </button>
                                  </div>
                                  {item.colors
                                    ?.slice(0, 1)
                                    ?.map((color: any, idx: any) => (
                                      <div
                                        key={idx}
                                        data-bs-toggle="tooltip"
                                        data-bs-trigger="hover"
                                        data-bs-placement="top"
                                      >
                                        <button
                                          type="button"
                                          className="btn avatar-xxs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20"
                                          style={{ color: color?.hex }}
                                        >
                                          <i className="ri-checkbox-blank-circle-fill"></i>
                                        </button>
                                      </div>
                                    ))}
                                  <div
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-placement="top"
                                    aria-label="Success"
                                    data-bs-original-title="Success"
                                  >
                                    <button
                                      type="button"
                                      className="btn avatar-xxs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-success opacity-50"
                                    >
                                      <i className="ri-checkbox-blank-circle-fill"></i>
                                    </button>
                                  </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-1 mt-2">
                                  {item.sizes?.map((size: any, idx: any) => (
                                    <div
                                      data-bs-toggle="tooltip"
                                      key={idx}
                                      data-bs-trigger="hover"
                                      data-bs-placement="top"
                                      aria-label="M"
                                      data-bs-original-title={item.size}
                                    >
                                      <button
                                        type="button"
                                        className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-14"
                                      >
                                        {size.value}
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div> */}
                          </div>
                          <div className="mt-3">
                            <Link to={`/product-details/${item?.slug}`}>
                              <h6 className="text-capitalize fs-16 text-truncate">
                                {item.name}
                              </h6>
                            </Link>
                            <h6 className="fw-normal mb-3 fs-16">
                              ${item.price}
                              {item.discount && (
                                <small className="text-decoration-line-through fs-14 text-muted">
                                  {item.discount}
                                </small>
                              )}
                            </h6>
                          </div>
                        </Card.Body>
                      </Card>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
