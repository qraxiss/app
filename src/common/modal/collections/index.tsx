import React, { FC, useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { DetailsModal } from "./details";
import { Link, useNavigate } from "react-router-dom";
import dropdown from "../../../assets/images/dropdown.png";
import { useSelector } from "react-redux";

const useMediaQuery = (width: number) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < width);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < width);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isMobile;
};

interface ICategory {
  slug: string;
  name: string;
  icon: {
    url: string;
  };
}

interface ICollection {
  slug: string;
  name: string;
  icon: {
    url: string;
  };
  sub_categories: ICategory[];
}

interface CollectionModalProps {
  show: boolean;
  handleClose: () => void;
  data: ICollection[];
}

export const CollectionModal: FC<CollectionModalProps> = ({
  show,
  handleClose,
  data,
}) => {
  const isMobile = useMediaQuery(768); // Example mobile breakpoint at 768px
  const categories = useSelector((state: any) => state.categories.data);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [card, setCard] = useState(false);
  const [currentModule, setCurrentModule] = useState("collections");
  const handlecardClose = () => {
    setCard(false);
    handleClose();
  };
  const handleCardShow = () => setCard(true);

  const navigate = useNavigate();

  const toggleExpand = (slug: string) => {
    setExpandedCategory((prev) => (prev === slug ? null : slug));
  };

  const [extended, setExtended] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (card) {
      setExtended("extended");
    } else {
      setExtended(undefined);
    }
  }, [card]);

  const [content, setContent] = useState<any>();
  const [header, setHeader] = useState<any>();

  const setNewContent = (slug: string) => {
    const contents = data.find((item) => {
      return item.slug === slug;
    })!;

    setContent(
      <div className={slug}>
        <div className="items">
          {contents.sub_categories.map((item) => {
            return (
              <div
                className="item"
                onClick={() => {
                  navigate(`/products/${item.slug}`);
                  handleClose();
                }}
              >
                <img
                  src={`${process.env.REACT_APP_API_URL}${item.icon?.url}`}
                  alt=""
                  style={{ height: "auto", maxWidth: "150px" }}
                />
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>,
    );

    setHeader([
      <img
        src={`${process.env.REACT_APP_API_URL}${contents.icon?.url}`}
        alt=""
      />,
      contents.name,
    ]);
  };

  const handleAction = (item: ICollection, isClickEvent: boolean) => {
    if (item.slug !== "blockchain-boutique") {
      setNewContent(item.slug);
      handleCardShow();
    } else {
      if (isClickEvent) {
        handleClose();
        navigate("/products/collection/blockchain-boutique");
      }
    }
  };

  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className={`collections-modal`}
      >
        {isMobile ? (
          // Mobile View Content
          <>
            <Offcanvas.Header className="header menu-border">
              <Offcanvas.Title
                onClick={() => setCurrentModule("menu")}
                id="ecommerceCartLabel"
                as="h5"
                className={
                  currentModule === "menu" ? "active mobile" : "mobile"
                }
              >
                <span>Menu</span>
              </Offcanvas.Title>
              <Offcanvas.Title
                onClick={() => setCurrentModule("collections")}
                id="ecommerceCartLabel"
                as="h5"
                className={currentModule === "collections" ? "active" : ""}
              >
                <span>Collections</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <div className="body">
                <div className="mobile">
                  {currentModule === "collections" && (
                    <>
                      {[...data]
                        .sort((a, b) => {
                          if (a.name < b.name) return 1;
                          if (a.name > b.name) return -1;
                          return 0;
                        })
                        .map((item, idx) => (
                          <div key={idx}>
                            <div
                              className="d-flex justify-content-between align-items-center p-2 my-3 cursor-pointer"
                              onClick={() => {
                                if (item.slug !== "blockchain-boutique") {
                                  toggleExpand(item.slug);
                                } else {
                                  handleClose();
                                  navigate(
                                    "/products/collection/blockchain-boutique",
                                  );
                                }
                              }}
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src={`${process.env.REACT_APP_API_URL}${item.icon?.url}`}
                                  alt=""
                                  className="mx-2"
                                />
                                {item.name}
                              </div>
                              {item.slug !== "blockchain-boutique" && (
                                <img
                                  src={dropdown}
                                  alt=""
                                  className="dropdown ${animation}"
                                />
                              )}
                            </div>
                            {expandedCategory === item.slug && (
                              <div className="sub-items">
                                {item.sub_categories.map((subItem) => (
                                  <div
                                    key={subItem.slug}
                                    style={{ marginLeft: "15px" }}
                                    className="d-flex gap-2 align-items-center p-2 my-2 cursor-pointer"
                                    onClick={() => {
                                      navigate(`/products/${subItem.slug}`);
                                      handleClose();
                                    }}
                                  >
                                    <img
                                      src={`${process.env.REACT_APP_API_URL}${subItem.icon?.url}`}
                                      alt=""
                                      style={{
                                        height: "auto",
                                        maxWidth: "150px",
                                      }}
                                    />
                                    <div>{subItem.name}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                    </>
                  )}
                  {currentModule === "menu" && (
                    <div className="mobile">
                      {categories?.map((item: any, index: number) => (
                        <div className="item" key={`category-${index + 1}`}>
                          <Link
                            className="nav-link d-flex align-items-center"
                            to={`/products/${item.slug}`}
                            data-key="t-slug"
                          >
                            <img
                              src={`${process.env.REACT_APP_API_URL}${item?.icon?.url}`}
                              alt={item.name}
                              width={18}
                              height={20}
                              className="m-0"
                            />{" "}
                            <span className="px-2">{item.name}</span>
                          </Link>
                        </div>
                      ))}
                      <div className="item d-flex">
                        <Link
                          className="nav-link d-flex align-items-center"
                          to={`/earn`}
                          data-key="t-slug"
                        >
                          <i className="fas fa-regular fa-sack-dollar fs-20 m-0 text-muted"></i>
                          <p className="px-2 py-0 m-0">EARN</p>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Offcanvas.Body>
          </>
        ) : (
          // Desktop View Content (Original Code)
          <>
            <Offcanvas.Body className="p-0">
              <h5 className="my-2 mt-4" style={{ marginLeft: "70px" }}>
                Collections
              </h5>
              <div className="body">
                <>
                  {[...data]
                    .sort((a, b) => {
                      if (a.name < b.name) return 1;
                      if (a.name > b.name) return -1;
                      return 0;
                    })
                    .map((item, idx) => {
                      return (
                        <div
                          key={idx}
                          className="item"
                          onMouseEnter={() => handleAction(item, false)}
                          onMouseLeave={() => setCard(false)}
                        >
                          <div onMouseEnter={() => handleAction(item, false)}>
                            {item.name}
                          </div>
                          {item.slug !== "blockchain-boutique" ? (
                            <img
                              src={dropdown}
                              alt=""
                              className="dropdown ${animation}"
                            />
                          ) : undefined}
                        </div>
                      );
                    })}
                </>
              </div>
            </Offcanvas.Body>

            <DetailsModal
              show={card}
              handlecardClose={handlecardClose}
              content={content}
              setCard={setCard}
              header={header}
            ></DetailsModal>
          </>
        )}
      </Offcanvas>
    </React.Fragment>
  );
};
