import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import EmailClothe from "pages/catalog/email-clothe";
import { CommonService } from "components/common-service";
import Index from "components";
import { useShopcekQuery } from "graphql/apollo/query-wrapper";
import { GET_Products } from "graphql/products/queries";
import { Product } from "interface/product";

interface ProductResponse {
    category: any;
    products: Product[];
}
const Products = () => {
    const { slug } = useParams();

    const { data, loading, error } = useShopcekQuery<ProductResponse>(GET_Products(slug || ''));

    if(loading){
        return <h1 className="pt-4">hello this page is loadingggggggg.......................</h1>;
    }

    return (
        <React.Fragment>
            <section className="section pb-0">
                <Container fluid>
                    <Row className="g-2">
                        <Col lg={12}>
                            <Link to="#" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                <Image src={`${process.env.REACT_APP_API_URL}/${data?.category?.banner?.url}`} className="w-100 object-fit-cover" rounded alt="" style={{ maxHeight: "480px" }} />
                                {/* <div className="product-content p-3 ps-5" style={{ maxWidth: "390px" }}>
                                    <p className="text-uppercase fs-15 text-secondary fw-semibold mb-2">New Arrival</p>
                                    <h1 className="display-5 lh-base text-dark ff-secondary">Trendy Fashion Clothes</h1>
                                    <div className="product-btn mt-4">
                                        Shop Now <i className="bi bi-arrow-right ms-2"></i>
                                    </div>
                                </div> */}
                            </Link>
                        </Col>
                        {/* <Col lg={7}>
                            <Link to="#" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                <Image src={Features5} className="w-100 object-fit-cover" rounded alt="" style={{ maxHeight: "480px" }} />
                                <div className="product-content p-3 ps-5" style={{ maxWidth: "390px" }}>
                                    <p className="text-uppercase fs-15 text-secondary fw-semibold mb-2">New Arrival</p>
                                    <h1 className="display-5 lh-base text-dark ff-secondary">Trendy Fashion Clothes</h1>
                                    <div className="product-btn mt-4">
                                        Shop Now <i className="bi bi-arrow-right ms-2"></i>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={5}>
                            <Row className="g-2">
                                <Col lg={12}>
                                    <Link to="#" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                        <Image src={Features4} className="w-100 object-fit-cover" alt="" style={{ maxHeight: "236px" }} rounded />
                                        <div className="product-content p-3 ps-5">
                                            <p className="text-uppercase fw-semibold fs-14 mb-2">Back Friday Sale</p>
                                            <h1 className="lh-base ff-secondary text-dark fw-medium"> Biggest Jewelry Collection</h1>
                                        </div>
                                    </Link>
                                </Col>
                                <Col lg={12}>
                                    <Link to="#" className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                                        <Image src={Features1} className="w-100 object-fit-cover" alt="" style={{ maxHeight: "236px" }} rounded />
                                        <div className="product-content p-3 ps-5">
                                            <h1 className="lh-base ff-secondary text-dark fw-medium"> Women's Sportwere Sales</h1>
                                            <div className="product-btn mt-4">
                                                Shop Now <i className="bi bi-arrow-right ms-2"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                        </Col> */}
                    </Row>
                </Container>
            </section>
            <section className="position-relative section">
                <Container>
                    <div className="ecommerce-product gap-4">
                        <Index products={data?.products} name="sidebar small-sidebar flex-shrink-0" cxxl="4" clg="4" cmd="6" cheight="200px" />
                    </div>
                </Container>
            </section>
            <EmailClothe />
            <CommonService />
        </React.Fragment >
    );
};

export default Products;
