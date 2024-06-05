import React, { useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import DeleteModal, { ModalAdd } from "components/delete-modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";

import { deleteAddressAsync } from "slices/thunk";
import { selectAddressAsync } from "slices/address/thunk";

const Selectaddress = () => {
  // document.title = "Shop | Select address | Shopcek";

  const addresses = useSelector((state: any) => state.address.data);
  const [id, setId] = useState("");

  const dispatch: AppDispatch = useDispatch();

  //Home Address
  const [removeModel, setRemovemodel] = useState(false);
  const RemoveModel = () => {
    setRemovemodel(!removeModel);
  };

  //Add address
  const [addressModal, setAddressModal] = useState(false);
  const handleClose = () => setAddressModal(false);
  const handleShow = () => setAddressModal(true);

  const emptyValues = {
    name: "",
    country_name: "",
    country_code: "",
    state_name: "",
    state_code: "",
    address: "",
    phone: "",
    zip: "",
    title: "",
    city: "",
    email: "",
    id: null,
  };

  const localAddress = useSelector((state: any) => state.address.data).find(
    (item: any) => item.id === id,
  );

  const values = () => {

    if (localAddress) {
      return {
        country_name: localAddress.country_name,
        country_code: localAddress.country_code,
        state_name: localAddress.state_name,
        state_code: localAddress.state_code,
        city: localAddress.city,
        zip: localAddress.zip,
        email: localAddress.email,
        phone: localAddress.phone,
        address: localAddress.address1 + localAddress.address2,
        name: localAddress.name,
        title: localAddress.title,
        id: localAddress.id,
      };
    } else {
      return emptyValues;
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xl={12}>
            <div>
              <Row className="g-4" id="address-list">
                {addresses.map((address: any) => (
                  <Col md={6}>
                    <Card
                      className={`mb-md-0 ${address.isActive ? "bg-success-subtle" : ""}`}
                    >
                      <Card.Body>
                        <div className="float-end clearfix">
                          {" "}
                          <Button
                            // to="/address"
                            onClick={() => {
                              setId(address.id);
                              setRemovemodel(true);
                            }}
                            className="badge bg-danger-subtle text-danger"
                            variant="danger"
                          >
                            <i className="ri-delete-bin-6-line align-bottom me-1"></i>{" "}
                            Remove
                          </Button>{" "}
                          <Button
                            // to="/address"
                            onClick={() => {
                              setId(address.id);
                              handleShow();
                            }}
                            className="badge bg-primary-subtle text-primary"
                          >
                            <i className="ri-pencil-fill align-bottom me-1"></i>{" "}
                            Edit
                          </Button>{" "}
                          {address.isActive ? null : (
                            <Button
                              // to="/address"
                              onClick={async () => {
                                setId(address.id);
                                await dispatch(selectAddressAsync({ id }));
                              }}
                              className="badge bg-success-subtle text-success"
                              variant="success"
                            >
                              <i className="ri-check-fill align-bottom me-1"></i>{" "}
                              Use
                            </Button>
                          )}{" "}
                        </div>
                        <div>
                          <p className="mb-3 fw-semibold fs-12 d-block text-muted text-uppercase">
                            {address.title}
                          </p>
                          <h6 className="fs-14 mb-2 d-block">{address.name}</h6>
                          <span className="text-muted fw-normal text-wrap mb-1 d-block">
                            {address.country_name} / {address.state_name}
                            <br />
                            {`${address.address1} ${address.address2 ? address.address2 : ""}`}
                            <br />
                            {address.zip}
                          </span>
                          <span className="text-muted fw-normal d-block">
                            {address.phone}
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                <Col lg={6}>
                  <div className="text-center p-4 rounded-3 border border-2 border-dashed">
                    <div className="avatar-md mx-auto mb-4">
                      <div className="avatar-title bg-success-subtle text-success rounded-circle display-6">
                        <i className="bi bi-house-add"></i>
                      </div>
                    </div>
                    <h5 className="fs-16 mb-3">Add New Address</h5>
                    <Button
                      variant="success"
                      className="btn-sm w-xs stretched-link addAddress-modal"
                      data-bs-toggle="modal"
                      data-bs-target="#addAddressModal"
                      onClick={() => {
                        setId("");
                        handleShow();
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <DeleteModal
          removeModel={removeModel}
          hideModal={RemoveModel}
          deleteData={() => {
            dispatch(deleteAddressAsync({ id: values().id }));
          }}
        />
        <ModalAdd
          addressModal={addressModal}
          initialValues={values()}
          id={id}
          handleClose={handleClose}
        />
      </Container>
    </React.Fragment>
  );
};
export default Selectaddress;
