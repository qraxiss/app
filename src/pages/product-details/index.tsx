import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  Image,
  Modal,
  Breadcrumb,
} from "react-bootstrap";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
//scss
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import { GET_Products_Details } from "graphql/product-details/queries";
import { useShopcekQuery } from "graphql/apollo/query-wrapper";
import { useSelector, useDispatch } from "react-redux";
import { SimilarProducts, RatingsReviews } from "components/home";
import {
  addToWishlistAsync,
  removeFromWishlistAsync,
  addItemToCartAsync,
} from "slices/thunk";
import { AppDispatch } from "store";

import { openModal } from "slices/cart/slice";
import { Option } from "types/product";

const ProductDetails = () => {
  const logged = useSelector((state: any) => state.user.data.logged);
  const navigate = useNavigate();

  const { slug } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const swiperRef = useRef<SwiperRef>(null);
  const [showModal, setShowModal] = useState(false);

  const { data } = useShopcekQuery<any>(GET_Products_Details(slug || ""));

  const handleImgSelect = (index: number) => {
    if (swiperRef.current) {
      // Check if swiperRef has initialized
      swiperRef?.current?.swiper?.slideTo(index);
    }
  };

  // add to cart
  const [count, setCount] = useState(1);
  const [size, setSize] = useState<Option | null>(null);
  const [color, setColor] = useState<Option | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cart = useSelector((state: any) => state.cart);

  useEffect(() => {
    setDisabled(!(!cart.loading && logged && count > 0 && !!size && !!color));
  }, [cart.loading, count, size, color, logged]);

  //like button
  const likeButton = useRef<any>(null);

  const wishlist = useSelector((state: any) => state.wishlist) as any;
  if (logged && wishlist) {
    const isInWishlist = !!wishlist?.data?.items.find((item: any) => {
      return item.slug === slug;
    });

    if (isInWishlist) {
      likeButton?.current?.classList?.add("active");
    }
  }

  const handleAddToCart = async () => {
    const variantId = data?.variants?.find((variant: any) => {
      return (
        variant.variant.size.value === size!.value &&
        variant.variant.color.value === color!.value
      );
    }).id;

    await dispatch(addItemToCartAsync({ variantId, count }));
    dispatch(openModal());
  };

  const handleLikeIcone = async (event: any) => {
    if (!logged) {
      return;
    }

    if (event.closest("button").classList.contains("active")) {
      await dispatch(removeFromWishlistAsync(data?.product as any));

      if (wishlist.error) {
        return;
      }
      event.closest("button").classList.remove("active");
    } else {
      if (wishlist.error) {
        return;
      }
      await dispatch(addToWishlistAsync(data?.product as any));
      event.closest("button").classList.add("active");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSize = data.product.sizes.find(
      (size: Option) => size.value === event.target.value,
    );
    setSize(selectedSize || null);
  };

  const handleScrollUp = () => {
    const swiperContainer = document.querySelector(".swiper.hide-scrollbar");
    swiperContainer?.scrollBy({ top: -100, behavior: "smooth" });
  };

  const handleScrollDown = () => {
    const swiperContainer = document.querySelector(".swiper.hide-scrollbar");
    swiperContainer?.scrollBy({ top: 100, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        id="removeItemModal"
        className="zoomIn"
      >
        <div>
          <Image
            src={
              data?.variants[swiperRef?.current?.swiper?.activeIndex || 0]
                ?.variant?.image
            }
            alt=""
            fluid
          />
        </div>
      </Modal>
      <section className="section" style={{ paddingTop: "140px" }}>
        <Container fluid className="container-custom">
          <Row className="mb-3">
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item onClick={() => navigate("/")}>
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {data?.product?.categories[0]?.name}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{data?.product?.name}</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="gx-2">
            <Col lg={6}>
              {isMobile ? (
                <Row>
                  <Col md={10} sm={10} xs={12}>
                    <div className="rounded-2 position-relative ribbon-box overflow-hidden">
                      <div className="ribbon ribbon-danger ribbon-shape trending-ribbon">
                        <span className="trending-ribbon-text">Trending</span>
                        <i className="ri-flashlight-fill text-white align-bottom float-end ms-1" />
                      </div>

                      <Swiper
                        ref={swiperRef}
                        rewind={true}
                        navigation={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swiper productSwiper2 swiper-backface-hidden"
                      >
                        {(data?.variants || [])?.map((item: any) => {
                          return (
                            <SwiperSlide key={item.id}>
                              <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={item.id}
                                role="group"
                                aria-label={`${item.id} / 5`}
                                style={{
                                  width: "100%",
                                  marginRight: "10px",
                                  cursor: "pointer",
                                }}
                                onClick={() => setShowModal(true)}
                              >
                                <Image
                                  className="product-image"
                                  src={item?.variant?.image}
                                  alt=""
                                  fluid
                                />
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </Col>
                  {/*end col*/}
                  <Col xs={12}>
                    <div className="position-relative">
                      <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        freeMode={true}
                        navigation={{
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swiper hide-scrollbar productSwiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs"
                        style={{
                          overflowX: "auto",
                          padding: "2px",
                          maxWidth: "90%",
                          margin: "0 auto", // Center the swiper container
                        }}
                      >
                        <div
                          className="swiper-wrapper"
                          id="swiper-wrapper-6100bf53c3db1675b"
                          aria-live="polite"
                          style={{
                            transform: "translate3d(0px, 0px, 0px)",
                            transitionDuration: "0ms",
                            display: "flex",
                            justifyContent: "center", // Center the images
                          }}
                        >
                          {(data?.variants || [])?.map(
                            (item: any, idx: number) => {
                              return (
                                <SwiperSlide
                                  key={idx}
                                  className="swiper-slide swiper-slide-thumb-active swiper-slide-visible swiper-slide-next"
                                  role="group"
                                  aria-label={`${item.id} / 5 `}
                                  style={{
                                    height: "105px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <div className="product-thumb rounded cursor-pointer">
                                    <Image
                                      src={item?.variant?.image}
                                      alt=""
                                      fluid
                                      onClick={() => handleImgSelect(idx)}
                                    />
                                  </div>
                                </SwiperSlide>
                              );
                            },
                          )}
                        </div>
                      </Swiper>
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      />
                      <div
                        className="swiper-button-prev"
                        onClick={handleScrollUp}
                        style={{
                          top: "50%", // Center vertically
                          transform: "translateY(-50%)",
                        }}
                      ></div>
                      <div
                        className="swiper-button-next"
                        onClick={handleScrollDown}
                        style={{
                          top: "50%", // Center vertically
                          transform: "translateY(-50%)",
                        }}
                      ></div>
                    </div>
                  </Col>
                  {/*end col*/}
                </Row>
              ) : (
                <Row>
                  <Col md={2} sm={2} xs={3}>
                    <div
                      className="swiper hide-scrollbar productSwiper mb-3 mb-lg-0 swiper-initialized swiper-vertical swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs"
                      style={{
                        maxHeight: "350px",
                        overflow: "auto",
                        padding: "2px",
                        width: "100%",
                      }}
                    >
                      <div
                        className="swiper-wrapper"
                        id="swiper-wrapper-6100bf53c3db1675b"
                        aria-live="polite"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transitionDuration: "0ms",
                        }}
                      >
                        {(data?.variants || [])?.map(
                          (item: any, idx: number) => {
                            return (
                              <div
                                key={idx}
                                className="swiper-slide swiper-slide-thumb-active swiper-slide-visible swiper-slide-next"
                                role="group"
                                aria-label={`${item.id} / 5 `}
                                style={{
                                  height: "105px",
                                  marginBottom: "10px",
                                }}
                              >
                                <div className="product-thumb rounded cursor-pointer">
                                  <Image
                                    src={item?.variant?.image}
                                    alt=""
                                    fluid
                                    onClick={() => handleImgSelect(idx)}
                                  />
                                </div>
                              </div>
                            );
                          },
                        )}
                      </div>
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 cursor-pointer">
                      <span
                        className="swiper-button-up d-flex justify-content-center"
                        onClick={handleScrollUp}
                      >
                        <i className="bi bi-chevron-compact-up fs-24 p-0 m-0"></i>
                      </span>
                      <span
                        className="swiper-button-down d-flex justify-content-center"
                        onClick={handleScrollDown}
                      >
                        <i className="bi bi-chevron-compact-down fs-24 p-0 m-0"></i>
                      </span>
                    </div>
                  </Col>
                  {/*end col*/}
                  <Col md={10} sm={10} xs={12}>
                    <div className="rounded-2 position-relative ribbon-box overflow-hidden">
                      <div className="ribbon ribbon-danger ribbon-shape trending-ribbon">
                        <span className="trending-ribbon-text">Trending</span>
                        <i className="ri-flashlight-fill text-white align-bottom float-end ms-1" />
                      </div>

                      <Swiper
                        ref={swiperRef}
                        rewind={true}
                        navigation={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swiper productSwiper2 swiper-backface-hidden"
                      >
                        {(data?.variants || [])?.map((item: any) => {
                          return (
                            <SwiperSlide key={item.id}>
                              <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={item.id}
                                role="group"
                                aria-label={`${item.id} / 5`}
                                style={{
                                  width: "100%",
                                  marginRight: "10px",
                                  cursor: "pointer",
                                }}
                                onClick={() => setShowModal(true)}
                              >
                                <Image
                                  className="product-image"
                                  src={item?.variant?.image}
                                  alt=""
                                  fluid
                                  style={{ height: "390px" }}
                                />
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </Col>
                  {/*end col*/}
                </Row>
              )}
            </Col>
            {/*end col*/}
            <Col lg={5} className="ms-auto">
              <div className="ecommerce-product-widgets mt-4 mt-lg-0">
                <div className="mb-2">
                  <div className="d-flex gap-3 mb-2"></div>
                  <h4 className="lh-base mb-1">{data?.product?.name}</h4>
                  <h5 className="fs-24 mb-2 text-primary">
                    ${data?.product?.price}
                  </h5>
                </div>
                <Col md={12}>
                  <div className="d-flex align-items-center py-2">
                    <h6 className="fs-16 mb-0 fw-medium text-muted">Sizes: </h6>
                    <div className="px-2 w-50 custom-select-wrapper cursor-pointer">
                      {data?.product?.sizes &&
                        data?.product?.sizes.length > 0 && (
                          <Form.Select
                            aria-label="Select Size"
                            value={size?.value || ""}
                            onChange={handleSizeChange}
                            className="custom-select"
                          >
                            <option value="">Select a size</option>
                            {data.product.sizes.map(
                              (size: any, index: number) => (
                                <option key={index} value={size.value}>
                                  {size.value}
                                </option>
                              ),
                            )}
                          </Form.Select>
                        )}
                      <span className="custom-select-icon swiper-button-down d-flex justify-content-center">
                        <i className="bi bi-chevron-compact-down fs-24 p-0 m-0"></i>
                      </span>
                    </div>
                  </div>
                </Col>
                <Row className="gy-3 py-2">
                  <Col md={12}>
                    {data?.product?.colors &&
                      data?.product?.colors.length > 0 && (
                        <div className="d-flex align-items-center">
                          <h6 className="fs-16 fw-medium text-muted">
                            Colors :
                          </h6>
                          <ul className="clothe-colors list-unstyled hstack gap-1 mb-0 flex-wrap ms-2">
                            {data?.product?.colors.map(
                              (color: any, index: number) => (
                                <li
                                  key={index}
                                  onClick={() => {
                                    setColor(color);
                                  }}
                                >
                                  <Form.Control
                                    type="radio"
                                    name="colors"
                                    id={`product-color-${index}`}
                                  />
                                  <Form.Label
                                    style={{ background: color.hex }}
                                    className="btn p-2 d-flex align-items-center justify-content-center rounded-circle"
                                    htmlFor={`product-color-${index}`}
                                  />
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                  </Col>
                </Row>
                <div className="d-flex align-items-center py-2">
                  <h6 className="fs-16 mb-0 fw-medium text-muted">Quantity:</h6>
                  <div className="input-step ms-2">
                    <Button
                      className="minus"
                      onClick={() => setCount(count - 1)}
                    >
                      –
                    </Button>
                    <Form.Control
                      type="number"
                      className="product-quantity1"
                      value={count > 0 ? count : 0}
                      min={0}
                      max={100}
                      readOnly
                    />
                    <Button
                      className="plus"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="hstack gap-1 py-3 border-bottom">
                  <Button
                    className="btn button-add-cart w-100 px-2"
                    disabled={disabled}
                    onClick={handleAddToCart}
                  >
                    {" "}
                    <i className="bi bi-basket2 me-2" /> Add To Cart
                  </Button>
                  <Button
                    className="btn button-buy-now w-100 px-2"
                    onClick={async () => {
                      await handleAddToCart();
                      navigate("/checkout");
                    }}
                    disabled={disabled}
                  >
                    {" "}
                    <i className="bi bi-cart2 me-2" /> Buy Now
                  </Button>
                  <Button
                    className="btn btn-soft-danger custom-toggle btn-hover"
                    data-bs-toggle="button"
                    aria-pressed="false"
                    ref={likeButton}
                    onClick={(ele: any) => handleLikeIcone(ele.target)}
                  >
                    <span className="icon-on">
                      <i className="ri-heart-line" />
                    </span>
                    <span className="icon-off">
                      <i className="ri-heart-fill" />
                    </span>
                  </Button>
                </div>
                <ul className="list-unstyled vstack gap-2 mt-2">
                  <li className="d-flex align-items-center">
                    <h6 className="fs-16 mb-0 fw-medium text-muted">
                      Category :{" "}
                    </h6>
                    <span className="px-2">Hoodies & Bitcoin</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <h6 className="fs-16 mb-0 fw-medium text-muted">
                      Share :{" "}
                    </h6>
                    <span className="d-flex align-items-center px-2 text-muted gap-2 cursor-pointer">
                      <i className="bi bi-facebook"></i>{" "}
                      <i className="bi bi-twitter"></i>{" "}
                      <i className="bi bi-linkedin"></i>{" "}
                      <i className="bi bi-pinterest"></i>{" "}
                      <i className="bi bi-telegram"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            {/*end col*/}
          </Row>
          {/*end row*/}
        </Container>
        {/*end container*/}
      </section>
      <RatingsReviews />
      <SimilarProducts />
    </React.Fragment>
  );
};

export default ProductDetails;
