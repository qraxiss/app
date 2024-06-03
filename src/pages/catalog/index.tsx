import React from "react";
import Clothing from "pages/catalog/clothing";
import Deals from "pages/catalog/deals";
import EmailClothe from "pages/catalog/email-clothe";
import { CommonService } from "components/common-service";

const Catalog = () => {
  document.title = "Product Sidebar with Banner | Shopcek";

  return (
    <React.Fragment>
      <Clothing />
      <Deals />
    </React.Fragment>
  );
};

export default Catalog;
