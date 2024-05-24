import { FC } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { openModal } from "slices/cart/slice";
import { AppDispatch } from "store";

interface CollectionsSideBarProps {
    openSideBar: () => void;
  }
  
  export const MobileFooter: FC<CollectionsSideBarProps> = ({
    openSideBar,
  }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleCardShow = () => dispatch(openModal());

  return (
    <Navbar className="d-md-none" sticky="bottom" bg="light" data-bs-theme="light">
      <Container className="justify-content-between">
        <Navbar.Brand onClick={openSideBar} href="#home" className=" d-flex flex-column align-items-center p-0 m-0">
          <i className="bi bi-list fs-24 m-0"></i>
          <p className="m-0 fs-14">Menu</p>
        </Navbar.Brand>
        <Navbar.Brand onClick={handleCardShow} href="#cart" className=" d-flex flex-column align-items-center p-0 m-0">
          <i className="bi bi-cart3 fs-24 m-0"></i>
          <p className="m-0 fs-14">Cart</p>
        </Navbar.Brand>
        <Navbar.Brand href="#favorites"  className=" d-flex flex-column align-items-center p-0 m-0">
          <i className="bi bi-heart fs-24 m-0"></i>
          <p className="m-0 fs-14">Wishlist</p>
        </Navbar.Brand>
        <Navbar.Brand href="#profile" className="d-flex flex-column align-items-center p-0 m-0">
          <i className="bi bi-person fs-24 m-0"></i>
          <p className="m-0 fs-14">My Account</p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MobileFooter;
