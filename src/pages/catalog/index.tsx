import React from 'react';
import Clothing from './clothing';
import Deals from './deals';
import EmailClothe from './email-clothe';
import { CommonService } from 'components/common-service';

const Catalog = () => {
    document.title = "Product Sidebar with Banner | Toner - React FrontEnd";

    return (
        <React.Fragment>
            <Clothing />
            <Deals />
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    );
};

export default Catalog;
