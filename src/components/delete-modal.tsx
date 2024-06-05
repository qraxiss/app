import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ADDRESS } from "constants/address";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "store";
import {
  updateAddressAsync,
  createAddressAsync,
  deleteAddressAsync,
} from "slices/thunk";
//delete modal
const DeleteModal = ({ removeModel, hideModal, deleteData }: any) => {
  const handleDelete = () => {
    deleteData();
    hideModal();
  };
  return (
    <Modal
      show={removeModel}
      onHide={hideModal}
      centered
      id="removeItemModal"
      className="zoomIn"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="mt-2 text-center">
          {/* <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger=" loop" colors={'primary:#f7b84b,secondary:#f06548'} style={{ width: "100px", height: "100px" }}></lord-icon> */}
          <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
            <h4>Are you sure ?</h4>
            <p className="text-muted mx-2 mb-0">
              Are you sure you want to remove this product?
            </p>
          </div>
        </div>
        <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
          <Button
            className="btn w-sm btn-light"
            data-bs-dismiss="modal"
            onClick={hideModal}
          >
            Close
          </Button>
          <Button
            className="btn w-sm"
            id="remove-product"
            style={{ background: "#FF57BA" }}
            onClick={handleDelete}
          >
            Yes, Delete It!
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;

//=================================================================

//add addres modal
export const ModalAdd = ({
  addressModal,
  handleClose,
  initialValues,
  title,
}: any) => {
  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Name"),
      country: Yup.string().required("Please Enter Your Country"),
      state: Yup.string().required("Please Enter Your State"),
      city: Yup.string().required("Please Enter Your City"),
      address: Yup.string().required("Please Enter Your Address"),
      phone: Yup.string()
        .matches(RegExp("[0-9]{7}"))
        .required("Please Enter Your Phone"),
      zip: Yup.string().required("Please Enter Your Zip"),
      title: Yup.string().required("Please Enter Address Title"),
      email: Yup.string().email().required(),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (title !== "") {
        await dispatch(updateAddressAsync({ recipient: values, id: initialValues }));
      } else {
        await dispatch(createAddressAsync({ recipient: values }));
      }

      handleClose();
    },
  });

  return (
    <React.Fragment>
      <Modal show={addressModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <h1 className="modal-title fs-5" id="addAddressModalLabel">
            Add New Address
          </h1>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="needs-validation createAddress-form"
            id="createAddress-form"
            onSubmit={formik.handleSubmit}
          >
            <Form.Control
              type="hidden"
              id="addressid-Form.Control"
              defaultValue=""
            />
            <div>
              {/*address title*/}
              <div className="mb-3">
                <Form.Label htmlFor="title">Address Title</Form.Label>
                <Form.Control
                  type="text"
                  id="title"
                  placeholder="Enter Address Title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.title && formik.touched.title ? (
                  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  <span className="text-danger">{formik.errors.title}</span>
                ) : null}
              </div>
              {/*name*/}
              <div className="mb-3">
                <Form.Label htmlFor="addaddress-Name">Name</Form.Label>
                <Form.Control
                  type="text"
                  id="addaddress-Name"
                  placeholder="Enter name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  <span className="text-danger">{formik.errors.name}</span>
                ) : null}
              </div>
              {/*country*/}
              <div className="mb-3">
                <Form.Label htmlFor="country">Country</Form.Label>
                <Form.Select
                  id="country"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {ADDRESS.filter((item) => item.states.length !== 0).map(
                    (item) => (
                      <option>{item.name}</option>
                    )
                  )}
                </Form.Select>
                {formik.errors.country && formik.touched.country ? (
                  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  <span className="text-danger">{formik.errors.country}</span>
                ) : null}
              </div>
              {/*state*/}
              <div className="mb-3">
                <Form.Label htmlFor="state">State</Form.Label>
                <Form.Select
                  id="state"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {ADDRESS.find((item) => item.name === formik.values.country)
                    ?.states?.filter((state) => state.cities.length !== 0)
                    .map((state) => <option>{state.name}</option>)}
                </Form.Select>
                {formik.errors.state && formik.touched.state ? (
                  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore

                  <span className="text-danger">{formik.errors.state}</span>
                ) : null}
              </div>
              {/*city*/}
              <div className="mb-3">
                <Form.Label htmlFor="city">City</Form.Label>
                <Form.Select
                  id="city"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {ADDRESS.find((item) => item.name === formik.values.country)
                    ?.states?.find(
                      (state) => state.name === formik.values.state
                    )
                    ?.cities.map((city) => <option>{city}</option>)}
                </Form.Select>
                {formik.errors.city && formik.touched.city ? (
                  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore

                  <span className="text-danger">{formik.errors.city}</span>
                ) : null}
              </div>
              {/*address text area*/}
              <div className="mb-3">
                <Form.Label htmlFor="addaddress-textarea">Address</Form.Label>
                <Form.Control
                  as="textarea"
                  id="addaddress-textarea"
                  placeholder="Enter address"
                  rows={2}
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Form.Control>
                {formik.errors.address && formik.touched.address ? (
                  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore

                  <span className="text-danger">{formik.errors.address}</span>
                ) : null}
              </div>
              {/*zip code*/}
              <div className="mb-3">
                <Form.Label htmlFor="zip">Zip Code</Form.Label>
                <Form.Control
                  as="textarea"
                  id="zip"
                  placeholder="Enter zip code"
                  rows={2}
                  name="zip"
                  value={formik.values.zip}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Form.Control>
                {formik.errors.zip && formik.touched.zip ? (
                  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore

                  <span className="text-danger">{formik.errors.zip}</span>
                ) : null}
              </div>
              {/*phone*/}
              <div className="mb-3">
                <Form.Label htmlFor="addaddress-phone">Phone</Form.Label>
                <Form.Control
                  type="text"
                  id="addaddress-phone"
                  placeholder="Enter phone no."
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore

                  <span className="text-danger">{formik.errors.phone}</span>
                ) : null}
              </div>
              {/*e-mail*/}
              <div className="mb-3">
                <Form.Label htmlFor="email">E-Mail</Form.Label>
                <Form.Control
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore

                  <span className="text-danger">{formik.errors.email}</span>
                ) : null}
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button
                className="btn btn-light"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                type="submit"
                id="addNewAddress"
                className="btn btn-primary"
              >
                {title !== "" ? "Update" : "Add"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

{
  /* <Form.Select
id="state"
name="addressType"
value={formik.values.addressType}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
>
<option value="Home">Home (7am to 10pm)</option>
<option value="Office">Office (11am to 7pm)</option>
</Form.Select> */
}
