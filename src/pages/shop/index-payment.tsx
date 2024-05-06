import React from "react";
import EmailClothe from "pages/catalog/email-clothe";
import Payment from "./payment";
import { BrandedProduct, Shoptopbar } from "components/shop-top-bar";
import { CommonService } from "components/common-service";

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
  );
};

export default PaymentIndex;
