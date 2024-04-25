import React from "react";
import { Shoptopbar } from "components/ShopTopBar";
import EmailClothe from "pages/catalog/EmailClothe";
import Selectaddress from "./Selectaddress";
import { CommonService } from "components/CommonService";

const Shopindex = () => {
    document.title = "Address | Toner - React FrontEnd";
    return (
        <React.Fragment>
            <Shoptopbar title="Shipping Address" page="Address" />
            <Selectaddress />
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )

}

export default Shopindex;