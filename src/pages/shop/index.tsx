import React from "react";
import { Shoptopbar } from "components/shop-top-bar";
import EmailClothe from "pages/catalog/email-clothe";
import Selectaddress from "components/select-address";
import { CommonService } from "components/common-service";

const Shopindex = () => {
  document.title = "Address | Shopcek";
  return (
    <React.Fragment>
      <Selectaddress />
    </React.Fragment>
  );
};

export default Shopindex;
