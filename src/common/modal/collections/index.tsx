import React, { FC, useEffect, useState } from "react";

import { Offcanvas } from "react-bootstrap";
import SimpleBar from "simplebar-react";

import { DetailsModal } from "./details";
import { useNavigate } from "react-router-dom";
import icon from "../../../assets/images/icon.svg";
import dropdown from "../../../assets/images/dropdown.png";

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
  const [card, setCard] = useState(false);
  const handlecardClose = () => {
    setCard(false);
    handleClose();
  };
  const handleCardShow = () => setCard(true);

  const navigate = useNavigate();

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

  function setNewContent(slug: string) {
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
      </div>
    );

    setHeader([
      <img
        src={`${process.env.REACT_APP_API_URL}${contents.icon?.url}`}
        alt=""
      />,
      contents.name,
    ]);
  }

  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className={`collections-modal`}
      >
        <Offcanvas.Header className="header">
          <Offcanvas.Title id="ecommerceCartLabel" as="h5">
            <img src={icon} alt="" /> Collections
          </Offcanvas.Title>

          <hr />
        </Offcanvas.Header>

        <Offcanvas.Body className="px-0">
          <SimpleBar className="body h-100">
            {data.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="item"
                  onClick={() => {
                    if (item.slug !== "blockchain-boutique") {
                      setNewContent(item.slug);
                      handleCardShow();
                    } else {
                      handleClose();
                      navigate("/products/collection/blockchain-boutique");
                    }
                  }}
                >
                  <img
                    src={`${process.env.REACT_APP_API_URL}${item.icon?.url}`}
                    alt=""
                  />
                  {item.name}
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
          </SimpleBar>
        </Offcanvas.Body>

        <DetailsModal
          show={card}
          handlecardClose={handlecardClose}
          content={content}
          header={header}
        ></DetailsModal>
      </Offcanvas>
    </React.Fragment>
  );
};
