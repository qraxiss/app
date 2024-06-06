import React, { FC, useEffect, useState } from "react";
import { Offcanvas, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import icon from "assets/images/icon.svg";
import dropdown from "assets/images/dropdown.png";
import { useSelector } from "react-redux";

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
  const categories = useSelector((state: any) => state.categories.data);
  const [currentModule, setCurrentModule] = useState("collections");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const navigate = useNavigate();

  const toggleExpand = (slug: string) => {
    setExpandedCategory((prev) => (prev === slug ? null : slug));
  };

  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className={`collections-modal fade-in`}
      >
        <Offcanvas.Header className="header">
          <Offcanvas.Title
            onClick={() => setCurrentModule("menu")}
            id="ecommerceCartLabel"
            as="h5"
            className={currentModule === "menu" ? "active mobile" : "mobile"}
          >
            <span>Menu</span>
          </Offcanvas.Title>
          <Offcanvas.Title
            onClick={() => setCurrentModule("collections")}
            id="ecommerceCartLabel"
            as="h5"
            className={
              currentModule === "collections" ? "active mobile" : " mobile"
            }
          >
            <span>Collections</span>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="p-0">
          <div className="body hide-scrollbar">
            <div className="d-none d-lg-flex gap-2 align-items-center mt-2 p-2 cursor-pointer">
              <Image
                src={icon}
                alt="Shopcek Logo"
                style={{ marginLeft: "11px" }}
              />
              <h5 className="mb-0">Collections </h5>
            </div>

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
                        className="item"
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
                        <img
                          src={`${process.env.REACT_APP_API_URL}${item.icon?.url}`}
                          alt=""
                        />
                        {item.name}
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
                              className="d-flex gap-2 align-items-center p-2 cursor-pointer"
                              onClick={() => {
                                navigate(`/products/${subItem.slug}`);
                                handleClose();
                              }}
                            >
                              <img
                                src={`${process.env.REACT_APP_API_URL}${subItem.icon?.url}`}
                                alt=""
                                style={{ height: "auto", maxWidth: "150px" }}
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
                      className="nav-link"
                      to={`/products/${item.slug}`}
                      data-key="t-slug"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                <div className="item">
                  <Link className="nav-link" to={`/earn`} data-key="t-slug">
                    EARN
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};
