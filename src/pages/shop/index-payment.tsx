import React from "react";
import EmailClothe from "pages/catalog/email-clothe";
import Payment from "pages/shop/payment";
import { BrandedProduct, Shoptopbar } from "components/shop-top-bar";
import { CommonService } from "components/common-service";

const PaymentIndex = () => {
  document.title = "Shop  | Shopcek";

  return (
    <React.Fragment>
      <Payment />
      <BrandedProduct title="Recently Viewed" />
      <EmailClothe />
    </React.Fragment>
  );
};

export default PaymentIndex;
