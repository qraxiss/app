import { Form, Button, Image } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import border from "../../assets/images/earn/Profile.png";

export const NameService = () => {
  const [close, setClose] = useState(true);
  const [domain, setDomain] = useState("");
  const userData = useSelector((state: any) => state.user.data);

  return (
    <section className="section pb-0">
      <div className="name-services">
        <div className="d-flex justify-content-between align-items-center mx-3">
          <h2 className="cursor-pointer claim-text m-0 p-0">{`${userData?.address?.substring(
            0,
            6,
          )}...${userData?.address?.substring(
            userData?.address?.length - 6,
          )}`}</h2>
          <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex align-items-center">
              <i className="bi bi-file-earmark-text fs-24"></i>
              <h5 className="docs ">How to earn</h5>
            </div>
          </div>
        </div>

        <div className="tier-header  image-container ">
          <img src={border} alt="" />

          <div className=" tier d-flex justify-content-between">
            <div className="d-flex flex-column align-items-start px-3">
              <h5 className="claim-text">Tier 2</h5>
              <ul className="text-muted px-3 text-start tierul">
                <li>1.3x xp multiplier</li>
                <li>Extra 10% Discount on purchases</li>
              </ul>
            </div>
            <div className="d-flex">
              <div className=" px-3 d-flex flex-column justify-content-center">
                <h4 className="text-light claim-text">Converted XP</h4>
                <h4 className="claim-text">1550</h4>
              </div>
              <span className="line"></span>
              <div className="px-3 d-flex flex-column justify-content-center">
                <h4 className="text-light claim-text">XP to SHPC</h4>
                <h4 className="claim-text">850</h4>
              </div>
            </div>
          </div>
          <span className="tier-border" />
        </div>
        <div className="claim-section mt-3">
          <p className="quests-heading">Claim Your Name,Start The Adventure</p>
          <h4>INCREASE XP GAIN MULTIPLIER</h4>
          <div className="input input-claim mt-3">
            <div className="input-group input-group-claim">
              <Form.Control
                id="domain-handle-input"
                size="lg"
                type="text"
                placeholder="FIND WHAT SUITS YOU"
                value={domain}
              />
              <span
                className="input-group-append"
                style={{
                  paddingRight: "6px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i
                  className="bi bi-search search-icon"
                  style={{ fontSize: "28px" }}
                ></i>
              </span>
            </div>
          </div>
          <button className="claim-button">Claim for 39.99 usd</button>
        </div>
      </div>
    </section>
  );
};
