import { useWeb3Modal } from "@web3modal/wagmi/react";
import { FC } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { ConnectWallet } from "components/connect-wallet";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModal } from "slices/cart/slice";
import { AppDispatch } from "store";
import { logoutAsync } from "slices/thunk"; // Adjust the path according to your project structure
import avtar1 from "assets/images/users/avatar-1.jpg";

interface CollectionsSideBarProps {
  openSideBar: () => void;
}

export const MobileFooter: FC<CollectionsSideBarProps> = ({ openSideBar }) => {
  const { open } = useWeb3Modal();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const logged = useSelector((state: any) => state.user.data.logged);

  const handleConnect = () => {
    open({ view: "Connect" });
  };

  const handleCardShow = () => dispatch(openModal());

  return (
    <Navbar
      className="d-md-none"
      sticky="bottom"
      bg="light"
      data-bs-theme="light"
    >
      <Container className="justify-content-between">
        <Navbar.Brand
          onClick={openSideBar}
          href=""
          className="d-flex flex-column align-items-center p-0 m-0"
        >
          <i className="bi bi-list fs-24 m-0"></i>
        </Navbar.Brand>
        <Navbar.Brand
          onClick={handleCardShow}
          href=""
          className="d-flex flex-column align-items-center p-0 m-0"
        >
          <i className="bi bi-cart3 fs-24 m-0"></i>
        </Navbar.Brand>
        <Navbar.Brand
          href=""
          onClick={() => navigate("/account", { state: "list"})}
          className="d-flex flex-column align-items-center p-0 m-0"
        >
          <i className="bi bi-heart fs-24 m-0"></i>
        </Navbar.Brand>
        <Navbar.Brand
          href=""
          onClick={() => navigate("/earn")}
          className="d-flex flex-column align-items-center p-0 m-0"
        >
           <i className="bi bi-coin fs-24 m-0"></i>
        </Navbar.Brand>
        {logged ? (
          <Dropdown drop="up">
            <Dropdown.Toggle
              id="page-header-user-dropdown"
              bsPrefix="btn"
              className="btn btn-icon btn-topbar btn-link rounded-circle profile-container"
              as="a"
            >
              <i
                className="bi bi-person m-0 heading"
                style={{ fontSize: "28px" }}
              ></i>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ left: "-80px" }}>
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
              <Dropdown.Item onClick={() => navigate("/account/settings")}>
                <i className="bi bi-gear text-muted fs-16 align-middle me-1"></i>
                <span className="align-middle">Settings</span>
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
            onClick={handleConnect}
            href="#profile"
            className="d-flex flex-column align-items-center p-0 m-0"
          >
            <i
                className="bi bi-person m-0 p-0 heading"
                style={{ fontSize: "28px" }}
              ></i>
          </Navbar.Brand>
        )}
      </Container>
    </Navbar>
  );
};

export default MobileFooter;
