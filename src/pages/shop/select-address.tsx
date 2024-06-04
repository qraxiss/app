import React, { useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { Shoporder } from "components/shop-top-bar";
import DeleteModal, { ModalAdd } from "components/delete-modal";
import { useSelector } from "react-redux";

const Selectaddress = () => {
  document.title = "Shop | Select address | Shopcek";

  const addresses = useSelector((state: any) => state.address.data);
  const [title, setTitle] = useState("");

  // const [addressData, setAddressData] = useState(selectAddressData);
  //delete id
  // const [id, setId] = useState("");

  //Home Address
  const [removeModel, setRemovemodel] = useState(false);
  const RemoveModel = (id: any) => {
    // setRemovemodel(!removeModel);
    // setId(id);
  };

  const deleteData = () => {
    // setAddressData(selectAddressData?.filter((delet: any) => delet.id !== id));
  };

  //Add address
  const [addressModal, setAddressModal] = useState(false);
  const handleClose = () => setAddressModal(false);
  const handleShow = () => setAddressModal(true);

  const emptyValues = {
    name: "",
    country: "",
    state: "",
    address: "",
    phone: "",
    zip: "",
    title: "",
    city: "",
    email: "",
  };

  const localAddress = useSelector((state: any) => state.address.data).find(
    (item: any) => item.title === title
  );

  const values = () => {
    console.log(localAddress);

    if (localAddress) {
      return {
        country: localAddress.country_name,
        state: localAddress.state_name,
        city: localAddress.city,
        zip: localAddress.zip,
        email: localAddress.email,
        phone: localAddress.phone,
        address: localAddress.address1 + localAddress.address2,
        name: localAddress.name,
        title: localAddress.title,
      };
    } else {
      return emptyValues;
    }
  };

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col xl={8}>
              <div>
                <h4 className="fs-18 mb-4">Select or add an address</h4>
                <Row className="g-4" id="address-list">
                  {addresses.map((address: any) => (
                    <Col md={6}>
                      <Card className="mb-md-0">
                        <Card.Body>
                          <div className="float-end clearfix">
                            {" "}
                            <Button
                              // to="/address"
                              onClick={() => {
                                setTitle(address.title);
                                handleShow();
                              }}
                              className="badge bg-primary-subtle text-primary"
                            >
                              <i className="ri-pencil-fill align-bottom me-1"></i>{" "}
                              Edit
                            </Button>{" "}
                          </div>
                          <div>
                            <p className="mb-3 fw-semibold fs-12 d-block text-muted text-uppercase">
                              {address.title}
                            </p>
                            <h6 className="fs-14 mb-2 d-block">
                              {address.name}
                            </h6>
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
                </Row>
                <Row className="mt-4">
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
                          setTitle("");
                          handleShow();
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </Col>
                </Row>
                <div className="hstack gap-2 justify-content-start mt-3">
                  <Button variant="danger" className="btn btn-hover">
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </Col>
            <Col xl={4}>
              <div className="sticky-side-div">
                <Shoporder />
              </div>
            </Col>
          </Row>
          <DeleteModal
            removeModel={removeModel}
            hideModal={RemoveModel}
            deleteData={deleteData}
          />
          <ModalAdd
            addressModal={addressModal}
            initialValues={values()}
            title={title}
            handleClose={handleClose}
          />
        </Container>
      </section>
    </React.Fragment>
  );
};
export default Selectaddress;
