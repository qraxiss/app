import React from "react";
import { Offcanvas } from "react-bootstrap";
import SimpleBar from "simplebar-react";

interface DetailsModalProps {
  show: boolean;
  handlecardClose: () => void;
  content: any;
  header: any;
  setCard: (value: boolean) => void; // Ensure correct type for setCard function
}

export const DetailsModal: React.FC<DetailsModalProps> = ({
  show,
  handlecardClose,
  content,
  header,
  setCard, // Receive setCard function as prop
}) => {
  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handlecardClose}
        placement="start"
        onMouseEnter={() => setCard(true)}
        onMouseLeave={() => setCard(false)}
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
