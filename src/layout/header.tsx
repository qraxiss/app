import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Dropdown,
  Button,
  Image,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";

//img
import shopcekLogo from "assets/images/svg/Shopcek_Official.png";
import logodark from "assets/images/logo-dark.png";
import logolight from "assets/images/logo-light.png";
import { CardModal, SearchModal } from "components/main-modal";
import { withTranslation } from "react-i18next";
import withRouter from "components/with-router";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "slices/thunk";
import { AppDispatch } from "store";
import { openModal, closeModal } from "slices/cart/slice";
import { ConnectWallet } from "components/connect-wallet";

const Header = (props: any) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitch = () => {
    setIsSwitchOn((prevState) => !prevState);
    if (!isSwitchOn) {
      props.handleMood("dark");
    } else {
      props.handleMood("light");
    }
  };

  const ThemeSwitch = () => (
    <div className="d-flex align-items-center cursor-pointer ">
      <i className="bi bi-sun text-muted fs-16 align-middle me-1"></i>{" "}
      <Form.Label className="mb-0 px-2 text-muted">Dark</Form.Label>
      <Form.Check
        type="switch"
        id="custom-switch"
        className="cursor-pointer"
        checked={isSwitchOn}
        onChange={handleSwitch}
      />
    </div>
  );
  //dispatch
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  //user slice
  const { logged } = useSelector((state: any) => state.user.data);

  //search modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const categories = useSelector((state: any) => state.categories.data);
  //card modal
  const isModalOpen = useSelector((state: any) => state.cart.data.isModalOpen);
  const cart = useSelector((state: any) => state.cart.data);
  const [isMobile, setIsMobile] = useState(false);
  const handlecardClose = () => dispatch(closeModal());
  const handleCardShow = () => dispatch(openModal());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <React.Fragment>
      {isMobile ? (
        <>
          <Navbar className="navbar-expand-lg ecommerce-navbar" id="navbar">
            <div className="d-flex justify-content-between align-items-center w-100 px-3">
              <Navbar.Brand
                onClick={() => props.openSideBar()}
                href=""
                className="d-flex flex-column align-items-center"
              >
                <i className="fas fa-regular fa-bars m-0 custom-icon "></i>
              </Navbar.Brand>
              <Link to="/" className="hide-on-lg">
                <Image
                  src={shopcekLogo}
                  alt="logo"
                  height="45"
                  className="d-lg-none collapsed"
                />
              </Link>
              <div
                className="d-flex align-items-center"
                style={{ marginRight: "-10px" }}
              >
                <Button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                  onClick={handleShow}
                >
                  <i className="fas fa-regular fa-magnifying-glass fs-20"></i>
                </Button>
                <SearchModal show={show} handleClose={handleClose} />
              </div>
            </div>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar
            className="navbar-expand-lg ecommerce-navbar"
            id="navbar"
            expanded={false}
          >
            <div className="ecommerce-navbar-container">
              <Navbar.Brand
                className="d-none d-lg-block "
                style={{ marginLeft: "6px" }}
              >
                <Link to="/">
                  <div className="logo-dark">
                    <Image src={shopcekLogo} alt="" height="55" />
                  </div>
                  <div className="logo-light">
                    <Image src={shopcekLogo} alt="" height="55" />{" "}
                    <span className="logo-txt"></span>
                  </div>
                </Link>
              </Navbar.Brand>
              <Link to="/" className="hide-on-lg">
                <Image
                  src={shopcekLogo}
                  alt="logo"
                  height="45"
                  className="d-lg-none collapsed"
                />
              </Link>
              <Nav
                as="ul"
                className="mb-2 mb-lg-0 desktop-navbar"
                id="navigation-menu"
              >
                <li className="nav-item d-block d-lg-none">
                  <Link to="/#" className="d-block p-3 h-auto text-center">
                    <Image
                      src={logodark}
                      alt=""
                      height="25"
                      className="card-logo-dark mx-auto"
                    />
                  </Link>
                  <Link to="/#" className="d-block p-3 h-auto text-center">
                    <Image
                      src={logolight}
                      alt=""
                      height="25"
                      className="card-logo-light mx-auto"
                    />
                  </Link>
                </li>

                <li className="nav-item" key={`category-0`}>
                  <span
                    className="nav-link"
                    onClick={() => props.openSideBar()}
                  >
                    {/* <i className="bi bi-list fs-20"></i> */}
                    Collections
                  </span>
                </li>

                {categories?.map((item: any, index: number) => (
                  <li className="nav-item" key={`category-${index + 1}`}>
                    <Link
                      className="nav-link"
                      to={`/products/${item.slug}`}
                      data-key="t-slug"
                    >
                      <img
                        src={`${process.env.REACT_APP_API_URL}${item.icon.url}`}
                        alt={item.name}
                        width={16}
                        height={16}
                      />{" "}
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="nav-item">
                  <Link className="nav-link" to={`/earn`} data-key="t-slug">
                    <i className="fas fa-light fa-sack-dollar fs-16"></i>
                    EARN
                  </Link>
                </li>
              </Nav>
              <div className="d-flex align-items-center">
                <Button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                  onClick={handleShow}
                >
                  <i className="fas fa-regular fa-magnifying-glass fs-20"></i>
                </Button>
                <SearchModal show={show} handleClose={handleClose} />
                <div className="topbar-head-dropdown ms-1 header-item">
                  <Button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#ecommerceCart"
                    aria-controls="ecommerceCart"
                    onClick={handleCardShow}
                  >
                    <i className="fas fa-regular fa-cart-shopping fs-20"></i>
                    {cart?.count > 0 && (
                      <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill count-bg">
                        {" "}
                        {cart?.count}{" "}
                      </span>
                    )}
                  </Button>
                </div>

                {logged ? (
                  <Dropdown>
                    <Dropdown.Toggle
                      id="page-header-user-dropdown"
                      bsPrefix="btn"
                      className="btn btn-icon btn-topbar btn-link rounded-circle coin text-muted"
                      as="a"
                    >
                      <i className="fas fa-regular fa-user fs-20"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ left: "-80px" }}>
                      <Dropdown.Item
                        onClick={() =>
                          navigate("/account", { state: "profile" })
                        }
                      >
                        <i className="bi bi-person text-muted fs-16 align-middle me-1"></i>{" "}
                        <span className="align-middle">My Account</span>
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => navigate("/account", { state: "order" })}
                      >
                        <i className="bi bi-truck text-muted fs-16 align-middle me-1"></i>{" "}
                        <span className="align-middle">My Orders</span>
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => navigate("/account", { state: "list" })}
                      >
                        <i className="bi bi-bookmark-check text-muted fs-16 align-middle me-1"></i>{" "}
                        <span className="align-middle">Wishlist</span>
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => navigate("/account", { state: "XP" })}
                      >
                        <i className="bi bi-coin text-muted fs-16 align-middle me-1"></i>{" "}
                        <span className="align-middle">XP Points</span>
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => navigate("/account/settings")}
                      >
                        <i className="bi bi-gear text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle">Settings</span>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <ThemeSwitch />
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          dispatch(logoutAsync());
                        }}
                      >
                        <i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i>{" "}
                        <span className="align-middle" data-key="t-logout">
                          Logout
                        </span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <ConnectWallet />
                )}
              </div>
            </div>
          </Navbar>
          <CardModal show={isModalOpen} handleClose={handlecardClose} />
        </>
      )}
    </React.Fragment>
  );
};

export default withRouter(withTranslation()(Header));
