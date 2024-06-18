import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardModal } from "components/main-modal";
import { useNavigate } from "react-router-dom";
import { closeModal, openModal } from "slices/cart/slice";
import { setIcon } from "slices/selected-icon/slice";
import { toggleTheme } from "slices/theme/slice";
import { AppDispatch } from "store";
import { logoutAsync } from "slices/thunk";
import CartIcon from "../assets/icons/cart.svg";
import EarnIcon from "../assets/icons/EarnFooter.svg";
import HeartIcon from "../assets/icons/heart.svg";
import ProfleIcon from "../assets/icons/ProfileFooter.svg";
import MenuIcon from "../assets/icons/MenuIcon.svg";
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
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  const handleSwitch = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (isDarkMode) {
      handleMood("dark");
    } else {
      handleMood("light");
    }
  }, [isDarkMode]);

  const ThemeSwitch = () => (
    <div className="d-flex align-items-center cursor-pointer">
      <i className="bi bi-sun text-muted fs-16 align-middle me-1"></i>{" "}
      <Form.Label className="mb-0 px-2 text-muted">Dark</Form.Label>
      <Form.Check
        type="switch"
        id="custom-switch"
        className="custom-switch-pointer"
        checked={isDarkMode}
        onChange={handleSwitch}
      />
    </div>
  );

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
            className={`icon-container ${
              selectedIcon === "sidebar" ? "selected-icon" : ""
            }`}
          >
            <img src={MenuIcon} alt="Menu" className="custom-icon" />
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
            <img src={HeartIcon} alt="Heart" className="custom-icon" />
          </Navbar.Brand>
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
            <img src={EarnIcon} alt="Earn" className="custom-icon" />
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
            <img src={CartIcon} alt="Cart" className="custom-icon" />
            {cart?.count > 0 && (
              <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill count-bg">
                {cart?.count}
              </span>
            )}
          </Button>
          {logged ? (
            <Dropdown drop="up">
              <Dropdown.Toggle
                id="page-header-user-dropdown"
                bsPrefix="btn"
                className="icon-container"
                as="a"
              >
                <img src={ProfleIcon} alt="Profile" className="custom-icon" />
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
              <img
                src={ProfleIcon}
                alt="Profile"
                className="custom-icon heading"
              />
            </Navbar.Brand>
          )}
        </Container>
      </Navbar>
      <CardModal show={isModalOpen} handleClose={handleCardClose} />
    </>
  );
};

export default MobileFooter;
