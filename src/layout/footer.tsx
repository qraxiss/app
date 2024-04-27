import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

//img
import shopcekLogo from "assets/images/svg/Shopcek_Official.png";
import visa from "assets/images/ecommerce/payment/visa.png";
import discover from "assets/images/ecommerce/payment/discover.png";
import americanexpress from "assets/images/ecommerce/payment/american-express.png";
import paypal from "assets/images/ecommerce/payment/paypal.png";
import { useSelector } from "react-redux";

const Footer = () => {
    const categories = useSelector((state: any) => state.categories.data);
    
    return (
        <React.Fragment>
            <section className="section footer-landing pb-0">
                <Container >
                    <Row>
                        <Col lg={4}>
                            <div className="footer-info">
                                <Image src={shopcekLogo} alt="" height="28" className="logo-light" />
                                <Image src={shopcekLogo} alt="" height="28" className="logo-dark" />
                                <p className="footer-desc mt-4 mb-2 me-3">Toner provides best fashion experience for both men and women at best pricing. We follow New fashion approach to give best premium feel.</p>

                                <div className="footer-social mt-4">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset"><i className="mdi mdi-facebook"></i></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset"><i className="mdi mdi-twitter"></i></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset"><i className="mdi mdi-google"></i></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset"><i className="mdi mdi-pinterest"></i></Link>
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
                                            {categories?.map((category: any, idx: number) => <li key={`category-${idx}`}><Link to={`/${category.slug}`}>{category.name}</Link></li>)}
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Information</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            <li><Link to="#">Custom Service</Link></li>
                                            <li><Link to="#">FAQs</Link></li>
                                            <li><Link to="#">Ordering</Link></li>
                                            <li><Link to="#">Tracking</Link></li>
                                            <li><Link to="#">Contacts</Link></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">My Account</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            <li><Link to="#">Sign In</Link></li>
                                            <li><Link to="#">View Cart</Link></li>
                                            <li><Link to="#">My Wishlist</Link></li>
                                            <li><Link to="#">Track My Order</Link></li>
                                            <li><Link to="#">Help</Link></li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Customer Service</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            <li><Link to="#">Payment Methods</Link></li>
                                            <li><Link to="#">Money-back!</Link></li>
                                            <li><Link to="#">Returns</Link></li>
                                            <li><Link to="#">Shipping</Link></li>
                                            <li><Link to="#">Terms and conditions</Link></li>
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
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <Link to="#"><Image src={visa} alt="" height="30" /></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#"><Image src={discover} alt="" height="30" /></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#"><Image src={americanexpress} alt="" height="30" /></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#"><Image src={paypal} alt="" height="30" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment >
    );
};

export default Footer;
