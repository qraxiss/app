import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const NewArrival = () => {

    const newArrivals = useSelector((state: any) => state.newArrivals.data);

    return (
        <React.Fragment>
            <section className="section">
                <div className="container-fluid container-custom">
                    <Row className=" justify-content-center">
                        <Col lg={7}>
                            <div className="section-content text-center mb-5">
                                <p className="fs-20">Editor's Choice</p>
                                <h2 className="title fw-normal text-capitalize">Top picks from our <span className="fw-semibold">fashion front</span></h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className="row-cols-xxl-5 row-cols-lg-4 row-cols-md-2 row-cols-1" id="productList" >
                        {(newArrivals.products || [])?.map((item: any, idx: any) => (
                            <Col className=" item" key={idx}>
                                <Card className=" product-widget border-0 card-animate">
                                    <Card.Body className="p-2">
                                        <div className="position-relative p-4">
                                            <Link to={`/product-details/${item?.slug}`}>
                                            <Image src={item.image} alt="" className="img-fluid product-img-main" />
                                            <Image src={item.image} alt="" className="img-fluid product-img-2" />
                                            </Link>

                                            <ul className="product-menu list-unstyled">
                                                <li className="mb-2">
                                                    <Link to="/#" className="rounded-circle bookmark" data-bs-toggle="button"><i className="bi bi-star"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="/product-overview" className="rounded-circle"><i className="bi bi-eye"></i></Link>
                                                </li>
                                            </ul>
                                            <div className="product-btn mx-auto">
                                                <Link to={`/product-details/${item?.slug}`} className="btn button-buy-now text-white w-100"><i className="bi bi-bag align-baseline me-1"></i> Buy Now</Link>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Link to={`/product-details/${item?.slug}`}>
                                                <h6 className="text-capitalize fs-16 text-truncate">{item.name}</h6>
                                            </Link>
                                            <h6 className="fw-normal mb-3 fs-16">${item.price} <small className="text-decoration-line-through fs-14 text-muted">{item.price2}</small></h6>
                                            <div className="d-flex flex-wrap gap-1">
                                                {
                                                    item.colors?.slice(0, 3)?.map((color: any, idx: any) => (
                                                        <div key={idx} data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label={color?.value} data-bs-original-title={color?.value}>
                                                            <button type="button" className='btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20' style={{color: color?.hex}}>
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </button>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </React.Fragment>
    );
};
