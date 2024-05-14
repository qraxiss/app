import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Row, Form, Image } from "react-bootstrap";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
//scss
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import { CommonService } from "components/common-service";
import EmailClothe from "pages/catalog/email-clothe";

import { GET_Products_Details } from "graphql/product-details/queries";
import { useShopcekQuery } from "graphql/apollo/query-wrapper";

import { useSelector, useDispatch } from "react-redux";

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
  return (
    <React.Fragment>
      <section className="section pt-20">
        <Container>
          <Row className="gx-2">
            <Col lg={6}>
              <Row>
                <Col md={2}>
                  <div
                    className="swiper hide-scrollbar productSwiper mb-3 mb-lg-0 swiper-initialized swiper-vertical swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs"
                    style={{
                      maxHeight: "450px",
                      overflowY: "auto",
                      padding: "2px",
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
                      {/* {(sliderProduct || [])?.map((item, idx) => {
                        return (
                          <div
                            key={idx}
                            className="swiper-slide swiper-slide-thumb-active swiper-slide-visible swiper-slide-next"
                            role="group"
                            aria-label={`${item.id} / 5 `}
                            style={{ height: "105px", marginBottom: "10px" }}
                          >
                            <div className="product-thumb rounded cursor-pointer">
                              <Image
                                src={item.img}
                                alt=""
                                fluid
                                onClick={() => handleSetImg(item.id)}
                              />
                            </div>
                          </div>
                        );
                      })} */}
                      {(data?.variants || [])?.map((item: any, idx: number) => {
                        return (
                          <div
                            key={idx}
                            className="swiper-slide swiper-slide-thumb-active swiper-slide-visible swiper-slide-next"
                            role="group"
                            aria-label={`${item.id} / 5 `}
                            style={{ height: "105px", marginBottom: "10px" }}
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
                      })}
                    </div>
                    <span
                      className="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    />
                  </div>
                </Col>
                {/*end col*/}
                <Col md={10}>
                  <div className="bg-light rounded-2 position-relative ribbon-box overflow-hidden">
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
                      {/* <SwiperSlide>
                        <div
                          className="swiper-slide swiper-slide-duplicate"
                          data-swiper-slide-index={4}
                          role="group"
                          aria-label={`item.id / 5`}
                          style={{ width: "458px", marginRight: "10px" }}
                        >
                          <video controls autoPlay loop style={{ width: "100%" }}>
                            <source
                              src={`${process.env.REACT_APP_API_URL}/${data?.product?.video?.url}`}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                          <Image src={`${process.env.REACT_APP_API_URL}/${data?.product?.video?.url}`} alt="" fluid /> 
                        </div>
                      </SwiperSlide> */}
                      {(data?.variants || [])?.map((item: any) => {
                        return (
                          <SwiperSlide key={item.id}>
                            <div
                              className="swiper-slide swiper-slide-duplicate"
                              data-swiper-slide-index={item.id}
                              role="group"
                              aria-label={`${item.id} / 5`}
                              style={{ width: "458px", marginRight: "10px" }}
                            >
                              <Image src={item?.variant?.image} alt="" fluid />
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </Col>
                {/*end col*/}
              </Row>
              {/*end row*/}
            </Col>
            {/*end col*/}
            <Col lg={5} className="ms-auto">
              <div className="ecommerce-product-widgets mt-4 mt-lg-0">
                <div className="mb-4">
                  <div className="d-flex gap-3 mb-2"></div>
                  <h4 className="lh-base mb-1">{data?.product?.name}</h4>
                  <p className="text-muted mb-4">
                    {data?.product?.description}
                  </p>
                  <h5 className="fs-24 mb-4">${data?.product?.price}</h5>
                  <ul className="list-unstyled vstack gap-2">
                    <li>
                      <i className="bi bi-check2-circle me-2 align-middle text-success" />
                      In stock
                    </li>
                    <li>
                      <i className="bi bi-check2-circle me-2 align-middle text-success" />
                      Free delivery available
                    </li>
                    <li>
                      <i className="bi bi-check2-circle me-2 align-middle text-success" />
                      Sales 10% Off Use Code: <b>FASHION10</b>
                    </li>
                  </ul>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h5 className="fs-15 mb-0">Quantity:</h5>
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
                <Row className="gy-3">
                  <Col md={12}>
                    <div>
                      <h6 className="fs-14 fw-medium text-muted">Sizes:</h6>
                      <ul className="clothe-size list-unstyled hstack gap-2 mb-0 flex-wrap">
                        {data?.product?.sizes &&
                          data?.product?.sizes.length > 0 &&
                          data?.product?.sizes.map(
                            (size: any, index: number) => (
                              <li
                                key={index}
                                onClick={() => {
                                  setSize(size);
                                }}
                              >
                                <Form.Control
                                  type="radio"
                                  name="sizes7"
                                  id={`product-size-${index}`}
                                />
                                <Form.Label
                                  className="avatar-xs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle"
                                  htmlFor={`product-size-${index}`}
                                >
                                  {size.value}
                                </Form.Label>
                              </li>
                            ),
                          )}
                      </ul>
                    </div>
                  </Col>
                  <Col md={12}>
                    <h6 className="fs-14 fw-medium text-muted">Colors: </h6>
                    <ul className="clothe-colors list-unstyled hstack gap-1 mb-0 flex-wrap ms-2">
                      {data?.product?.colors &&
                        data?.product?.colors.length > 0 &&
                        data?.product?.colors.map(
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
                                className="avatar-xs btn p-0 d-flex align-items-center justify-content-center rounded-circle"
                                htmlFor={`product-color-${index}`}
                              />
                            </li>
                          ),
                        )}
                    </ul>
                  </Col>
                </Row>
                <div className="hstack gap-2">
                  <Button
                    className="btn button-add-cart w-100"
                    disabled={disabled}
                    onClick={handleAddToCart}
                  >
                    {" "}
                    <i className="bi bi-basket2 me-2" /> Add To Cart
                  </Button>
                  <Button
                    className="btn button-buy-now w-100"
                    onClick={async () => {
                      await handleAddToCart();
                      navigate("/shop/checkout");
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
              </div>
            </Col>
            {/*end col*/}
          </Row>
          {/*end row*/}
        </Container>
        {/*end container*/}
      </section>
      <p className="text-muted px-5 ms-2 fs-15">{data?.product?.description}</p>

      <EmailClothe />
      <CommonService />
    </React.Fragment>
  );
};

export default ProductDetails;
