import React from "react";
import { Shoptopbar } from "components/shop-top-bar";
import EmailClothe from "pages/catalog/email-clothe";
import Selectaddress from "pages/shop/select-address";
import { CommonService } from "components/common-service";

const Shopindex = () => {
  document.title = "Address | Toner - React FrontEnd";
  return (
    <React.Fragment>
      <Shoptopbar title="Shipping Address" page="Address" />
      <Selectaddress />
      <EmailClothe />
      <CommonService />
    </React.Fragment>
  );
};

export default Shopindex;
