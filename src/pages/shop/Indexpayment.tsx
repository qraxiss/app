import React from "react";
import EmailClothe from "pages/catalog/EmailClothe";
import Payment from "./Payment";
import { BrandedProduct, Shoptopbar } from "components/ShopTopBar";
import { CommonService } from "components/CommonService";


const PaymentIndex = () => {
    document.title = "Shop  | Toner - React FrontEnd";

    return (
        <React.Fragment>
            <Shoptopbar title="Payment" page="Payment" />
            <Payment />
            <BrandedProduct title="Recently Viewed" />
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )

}

export default PaymentIndex;