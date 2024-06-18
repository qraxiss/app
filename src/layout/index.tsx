import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Footer from "layout/footer";
import Header from "layout/header";
import { MainModal } from "components/main-modal";
import { createSelector } from "reselect";
import {
  changeLayoutMood,
  changeThemeMood,
  fetchCategoriesAsync,
  fetchSideBarAsync,
  fetchHotDealsAsync,
  fetchNewArrivalsAsync,
  fetchWishlistAsync,
  fetchCartAsync,
  fetchOrdersAsync,
  fetchAddressesAsync,
} from "slices/thunk";
import { AppDispatch } from "store";
import { CollectionModal } from "common/modal/collections";
import { CollectionsSideBar } from "layout/collection-side-bar";
import OnPathChange from "routes/on-path-change";
import { listenMarket, updatePrice } from "slices/crypto-market/slice";
import MobileFooter from "layout/mobileFooter";

const Layout = (props: any) => {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const sideBarData = useSelector((state: any) => state.sideBar.data);
  const logged = useSelector((state: any) => state.user.data.logged);

  const openSideBar = () => {
    setSideBarOpen(true);
  };

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchSideBarAsync());
    dispatch(fetchNewArrivalsAsync());
    dispatch(fetchHotDealsAsync());
    dispatch(
      listenMarket({
        onMessage: (data: any) => {
          dispatch(updatePrice(data));
        },
      }),
    );

    if (logged) {
      dispatch(fetchWishlistAsync());
      dispatch(fetchCartAsync());
      dispatch(fetchOrdersAsync());
      dispatch(fetchAddressesAsync());
    }
  }, [dispatch, logged]);

  const selectProperties = createSelector(
    (state: any) => state.Layout,
    (layout) => ({
      footerModeType: layout.footerModeType,
      layoutThemeMode: layout.layoutThemeMode,
    }),
  );

  const { footerModeType, layoutThemeMode } = useSelector(selectProperties);

  //change footer theme on review page
  const footerTheme = props.isLight ? "light" : "dark";

  //change them mode
  const handleThemeMood = (value: any) => {
    if (changeThemeMood) {
      dispatch(changeThemeMood(value));
    }
  };

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };
  //top arrow icone function
  const ScrollbarTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    if (footerModeType || layoutThemeMode) {
      dispatch(changeLayoutMood(footerTheme));
      dispatch(changeThemeMood(layoutThemeMode));
    }
  }, [layoutThemeMode, dispatch, footerTheme, footerModeType]);

  return (
    <React.Fragment>
      <OnPathChange />
      {location.pathname && <MainModal location={location.pathname} />}
      <CollectionsSideBar openSideBar={openSideBar} isSideBar={sideBarOpen} />
      <div>
        <Header handleMood={handleThemeMood} openSideBar={openSideBar} />
        {props.children}
        <Footer handleMood={handleThemeMood} />
      </div>
      <Button
        onClick={() => ScrollbarTop()}
        variant="info"
        className="btn-icon button-secondary"
        style={{ bottom: "50px" }}
        id="back-to-top"
      >
        <i className="ri-arrow-up-line"></i>
      </Button>
      {sideBarOpen && (
        <CollectionModal
          show={sideBarOpen}
          data={sideBarData}
          handleClose={() => {
            setSideBarOpen(false);
          }}
        />
      )}
      <MobileFooter handleMood={handleThemeMood} openSideBar={openSideBar} />
    </React.Fragment>
  );
};

export default Layout;
