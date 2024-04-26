import React from "react";
import { Offcanvas } from "react-bootstrap";
import SimpleBar from "simplebar-react";

export const DetailsModal = ({ show, handleClose, content, header }: any) => {
  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="details-modal"
        backdrop={false}
      >
        <Offcanvas.Header className="header">
          <Offcanvas.Title id="ecommerceCartLabel" as="h5">
            {header}
          </Offcanvas.Title>
          <hr />
        </Offcanvas.Header>

        <Offcanvas.Body className="px-0">
          <SimpleBar className="body h-100">{content}</SimpleBar>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};
