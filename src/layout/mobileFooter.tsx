import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardModal } from "components/main-modal";
import { useNavigate } from "react-router-dom";
import { closeModal, openModal } from "slices/cart/slice";
import { setIcon } from "slices/selected-icon/slice";
import { AppDispatch } from "store";
import { logoutAsync } from "slices/thunk";
import {
  Container,
  Dropdown,
  Button,
  Image,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";

interface CollectionsSideBarProps {
  openSideBar: () => void;
  handleMood: any;
}

export const MobileFooter: FC<CollectionsSideBarProps> = ({
  openSideBar,
  handleMood,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitch = () => {
    setIsSwitchOn((prevState) => !prevState);
    handleMood(isSwitchOn ? "light" : "dark");
  };

  const ThemeSwitch = () => (
    <div className="d-flex align-items-center cursor-pointer ">
      <i className="bi bi-sun text-muted fs-16 align-middle me-1"></i>
      <Form.Label className="mb-0 px-2 text-muted">Dark</Form.Label>
      <Form.Check
        type="switch"
        id="custom-switch"
        className="custom-switch-pointer"
        checked={isSwitchOn}
        onChange={handleSwitch}
      />
    </div>
  );

  const { open } = useWeb3Modal();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const logged = useSelector((state: any) => state.user.data.logged);
  const cart = useSelector((state: any) => state.cart.data);
  const selectedIcon = useSelector((state: any) => state.selectedIcon.icon);
  const isModalOpen = useSelector((state: any) => state.cart.data.isModalOpen);

  const handleConnect = () => open({ view: "Connect" });

  const handleIconClick = (icon: string) => dispatch(setIcon(icon));

  const handleCardShow = () => dispatch(openModal());
  const handleCardClose = () => dispatch(closeModal());

  return (
    <>
      <Navbar className="d-md-none mobile-footer" sticky="bottom">
        <Container className="justify-content-between">
          <Navbar.Brand
            onClick={() => {
              openSideBar();
              handleIconClick("sidebar");
            }}
            href="#"
            className={`icon-container menu ${
              selectedIcon === "sidebar" ? "selected-icon menu-icon " : ""
            }`}
          >
            <i className="fas fa-regular fa-bars m-0 custom-icon"></i>
          </Navbar.Brand>
          <Button
            type="button"
            className={`btn btn-icon btn-topbar btn-ghost-dark icon-container ${
              selectedIcon === "cart" ? "selected-icon  " : ""
            }`}
            data-bs-toggle="offcanvas"
            data-bs-target="#ecommerceCart"
            aria-controls="ecommerceCart"
            onClick={() => {
              handleCardShow();
              handleIconClick("cart");
            }}
          >
            <i className="fas fa-regular fa-cart-shopping custom-icon"></i>
            {cart?.count > 0 && (
              <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill count-bg">
                {cart?.count}
              </span>
            )}
          </Button>
          <Navbar.Brand
            href="#"
            onClick={() => {
              handleIconClick("earn");
              navigate("/earn");
            }}
            className={`icon-container ${
              selectedIcon === "earn" ? "selected-icon  " : ""
            }`}
          >
            <i className="fas fa-regular fa-sack-dollar m-0 custom-icon"></i>
          </Navbar.Brand>
          <Navbar.Brand
            href="#"
            onClick={() => {
              handleIconClick("heart");
              navigate("/account", { state: "list" });
            }}
            className={`icon-container ${
              selectedIcon === "heart" ? "selected-icon  " : ""
            }`}
          >
            <i className="fas fa-regular fa-heart m-0 custom-icon"></i>
          </Navbar.Brand>
          {logged ? (
            <Dropdown drop="up">
              <Dropdown.Toggle
                id="page-header-user-dropdown"
                bsPrefix="btn"
                className="btn btn-icon btn-topbar btn-link rounded-circle profile-container"
                as="a"
              >
                <i className="fas fa-regular fa-user custom-icon m-0 heading"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ left: "-120px" }}>
                <Dropdown.Item
                  onClick={() =>
                    navigate("/account", { state: { profile: "profile" } })
                  }
                >
                  <i className="bi bi-person text-muted fs-16 align-middle me-1"></i>
                  <span className="align-middle">My Account</span>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    navigate("/account", { state: { profile: "order" } })
                  }
                >
                  <i className="bi bi-truck text-muted fs-16 align-middle me-1"></i>
                  <span className="align-middle">My Orders</span>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    navigate("/account", { state: { profile: "list" } })
                  }
                >
                  <i className="bi bi-bookmark-check text-muted fs-16 align-middle me-1"></i>
                  <span className="align-middle">Wishlist</span>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    navigate("/account", { state: { profile: "XP" } })
                  }
                >
                  <i className="bi bi-coin text-muted fs-16 align-middle me-1"></i>
                  <span className="align-middle">XP Points</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <ThemeSwitch />
                </Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(logoutAsync())}>
                  <i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i>
                  <span className="align-middle" data-key="t-logout">
                    Logout
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Navbar.Brand
              onClick={() => {
                handleIconClick("connect");
                handleConnect();
              }}
              href="#profile"
              className={`icon-container ${
                selectedIcon === "connect" ? "selected-icon" : ""
              }`}
            >
              <i className="fas fa-regular fa-user custom-icon m-0 heading"></i>
            </Navbar.Brand>
          )}
        </Container>
      </Navbar>
      <CardModal show={isModalOpen} handleClose={handleCardClose} />
    </>
  );
};

export default MobileFooter;
