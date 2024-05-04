import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Dropdown,
  Button,
  Image,
  Navbar,
  Nav,
} from "react-bootstrap";

//img
import shopcekLogo from "assets/images/svg/Shopcek_Official.png";
import logodark from "assets/images/logo-dark.png";
import logolight from "assets/images/logo-light.png";
import avtar1 from "assets/images/users/avatar-1.jpg";

import { CardModal, SearchModal } from "components/main-modal";
import { withTranslation } from "react-i18next";
import withRouter from "components/with-router";
import { useSelector } from "react-redux";

const Header = (props: any) => {
  //search modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const categories = useSelector((state: any) => state.categories.data);

  //card modal
  const [card, setCard] = useState(false);

  const handlecardClose = () => setCard(false);
  const handleCardShow = () => setCard(true);

  const [showMenu, setShowMenu] = useState<any>("");
  const [showSubMenu, setShowSubMenu] = useState<any>("");
  const [showPageSubMenu, setShowPageSubMenu] = useState<any>("");

  const path = props.router.location.pathname;

  useEffect(() => {
    const removeActivation = (items: HTMLAnchorElement[]) => {
      items.forEach((item: HTMLAnchorElement) => {
        item.classList.remove("active");
      });
    };

    const activateParentDropdown = (item: HTMLAnchorElement) => {
      item.classList.add("active");
      const parentDrop: any = item.closest(".dropdown");
      if (parentDrop) {
        parentDrop.classList.add("active");
        parentDrop.querySelector(".dropdown-toggle").classList.add("active");
        const parentDropdown = parentDrop.parentElement.closest(".dropdown");

        if (parentDropdown) {
          parentDropdown
            .querySelector(".dropdown-toggle")
            .classList.add("active");
          const parentEleDropdown =
            parentDropdown.parentElement.closest(".dropdown");
          if (parentEleDropdown) {
            parentEleDropdown
              .querySelector(".dropdown-toggle")
              .classList.add("active");
          }
        }
      }
    };

    const initMenu = () => {
      const pathName = process.env.PUBLIC_URL + path;
      const ul = document.getElementById("navigation-menu") as HTMLElement;
      const items: any = ul.getElementsByTagName("a");
      const itemsArray: any = Array.from(items);
      removeActivation(itemsArray);
      const matchingMenuItem = itemsArray.find(
        (x: HTMLAnchorElement) => x.pathname === pathName,
      );
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };

    initMenu();
    const collapse = document.getElementById(
      "navbarSupportedContent",
    ) as HTMLElement;
    if (collapse && collapse.classList.contains("show")) {
      collapse.classList.remove("show");
    }
  }, [path]);

  const windowScroll = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("is-sticky");
      } else {
        navbar.classList.remove("is-sticky");
      }
    }
  };

  window.addEventListener("scroll", function (ev) {
    ev.preventDefault();
    windowScroll();
  });

  const handleShowColl = () => {
    const navbar = document.getElementById("navbar");
    const collapse = document.getElementById(
      "navbarSupportedContent",
    ) as HTMLElement;
    navbar && navbar.classList.remove("navbar-expand");
    if (collapse && collapse.classList.contains("show")) {
      collapse.addEventListener("shown.bs.collapse", (event) => {
        collapse.classList.remove("show");
      });
    } else {
      collapse.classList.add("show");
    }
  };

  // Resize Nav Collapse
  const windowResizeHover = () => {
    const windowSize = document.documentElement.clientWidth;
    if (windowSize > 992) {
      const collapse = document.getElementById(
        "navbarSupportedContent",
      ) as HTMLElement;
      if (collapse && collapse.classList.contains("show")) {
        collapse.classList.remove("show");
      }
      setShowMenu("");
      setShowSubMenu("");
      setShowPageSubMenu("");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowResizeHover);
    return () => {
      window.removeEventListener("resize", windowResizeHover);
    };
  }, []);

  return (
    <React.Fragment>
      <Navbar
        className="navbar-expand-lg ecommerce-navbar"
        id="navbar"
        expanded={false}
      >
        <Container>
          <Navbar.Brand className="d-none d-lg-block">
            <Link to="/">
              <div className="logo-dark">
                <Image src={shopcekLogo} alt="" height="35" />
              </div>
              <div className="logo-light">
                <Image src={shopcekLogo} alt="" height="35" />{" "}
                <span className="logo-txt"></span>
              </div>
            </Link>
          </Navbar.Brand>
          <Button
            className="btn btn-soft-primary btn-icon d-lg-none collapsed"
            aria-controls="navbarSupportedContent"
            onClick={handleShowColl}
          >
            <i className="bi bi-list fs-20"></i>
          </Button>

          <Navbar.Collapse id="navbarSupportedContent">
            <Nav
              as="ul"
              className="mx-lg-auto mb-2 mb-lg-0"
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
                <span className="nav-link" onClick={() => props.openSideBar()}>
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
                    {/* <img src={`${process.env.REACT_APP_API_URL}/${item.icon.url}`} alt={item.name} width={20} height={20} />{' '} */}
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link className="nav-link" to={`/earn`} data-key="t-slug">
                  {/* <img src={`${process.env.REACT_APP_API_URL}/${item.icon.url}`} alt={item.name} width={20} height={20} />{' '} */}
                  Earn
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>

          <div
            className="bg-overlay navbar-overlay"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent.show"
          ></div>
          <div className="d-flex align-items-center">
            <Button
              type="button"
              className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
              onClick={handleShow}
            >
              <i className="bx bx-search fs-22"></i>
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
                <i className="ph-shopping-cart fs-18"></i>
                {/* <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-danger">
                                    4
                                </span> */}
              </Button>
            </div>

            <Dropdown
              className="topbar-head-dropdown ms-2 header-item dropdown-hover-end"
              align="start"
            >
              <Dropdown.Toggle
                className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                bsPrefix="btn"
              >
                <i className="bi bi-sun align-middle fs-20"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu p-2 dropdown-menu-end"
                id="light-dark-mode"
              >
                <Dropdown.Item
                  eventKey="light"
                  onClick={() => props.handleMood("light")}
                >
                  <i className="bi bi-sun align-middle me-2"></i> Default (light
                  mode)
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="dark"
                  onClick={() => props.handleMood("dark")}
                >
                  <i className="bi bi-moon align-middle me-2"></i> Dark
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="light"
                  onClick={() => props.handleMood("light")}
                >
                  <i className="bi bi-moon-stars align-middle me-2"></i> Auto
                  (system default)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="dropdown header-item dropdown-hover-end">
              <Dropdown>
                <Dropdown.Toggle
                  id="page-header-user-dropdown"
                  bsPrefix="btn"
                  className="btn btn-icon btn-topbar btn-link rounded-circle"
                  as="a"
                >
                  <Image
                    className="rounded-circle header-profile-user"
                    src={avtar1}
                    alt="Header Avatar"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/shop/orderhistory">
                    <i className="bi bi-cart4 text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle">Order History</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/shop/order">
                    <i className="bi bi-truck text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle">Track Orders</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <i className="bi bi-speedometer2 text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle">Dashboard</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/ecommerce-faq">
                    <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle">Help</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/account">
                    <i className="bi bi-coin text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle">
                      Balance : <b>$8451.36</b>
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/account">
                    <span className="badge bg-success-subtle text-success mt-1 float-end">
                      New
                    </span>
                    <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle">Settings</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/auth-logout-basic">
                    <i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle" data-key="t-logout">
                      Logout
                    </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Container>
      </Navbar>
      <CardModal show={card} handleClose={handlecardClose} />
    </React.Fragment>
  );
};

export default withRouter(withTranslation()(Header));
