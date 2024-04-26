import React from "react";
import { Container } from "react-bootstrap";
import { CommonService } from "components/common-service";
import { ProductGrid } from "components/product-silde";
import { BrandedProduct } from "components/shop-top-bar";
import EmailClothe from "pages/catalog/email-clothe";
import Index from "components";

const LeftSideBar = () => {
    return (
        <React.Fragment>
            <ProductGrid title="Product List Left Sidebar" />
            <section className="section">
                <Container>
                    <div className="ecommerce-product gap-4">
                        <Index name="sidebar small-sidebar flex-shrink-0" cxl="12" />
                    </div>
                </Container>
            </section>
            <BrandedProduct title="New Branded Products" />
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    );
};

export default LeftSideBar;
