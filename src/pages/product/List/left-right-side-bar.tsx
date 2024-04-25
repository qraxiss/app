import React, { useState } from "react";

import { product } from "common/data";
import { CommonService } from "components/common-service";
import { ProductGrid } from "components/product-silde";
import EmailClothe from "pages/catalog/email-clothe";
import { Container, Form } from "react-bootstrap";
import ProductFilter from "../grid/product-filter";
import ListProductData from "components/list-product-data";

const Leftrightsidebar = () => {
    const [select, setSelect] = useState(product);
    const handleSelect = (event: any) => {
        setSelect(product?.filter((sort: any) => sort.sortBy === event.value || sort === "all"))
    }
    return (
        <React.Fragment>
            <ProductGrid title="Product List Right Sidebar" />
            <section className='position-relative section'>
                <Container>
                    <div className='ecommerce-product gap-4'>
                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <p className="text-muted flex-grow-1 mb-0">Showing 1-12 of 84 results</p>

                                <div className="flex-shrink-0">
                                    <Form.Select className="w-md" id="sort-elem" onClick={(e) => handleSelect(e.target)}>
                                        <option value="all">All</option>
                                        <option value="lowtohigh">Low to High</option>
                                        <option value="hightolow">High to Low</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <ListProductData listnoslider={select} />
                        </div>
                        <ProductFilter name="sidebar small-sidebar flex-shrink-0" setSelect={setSelect} />
                    </div>
                </Container>
            </section>
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    );
}

export default Leftrightsidebar;