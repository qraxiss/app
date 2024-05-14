import { Form, Button, Image } from "react-bootstrap";
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import length3 from "../../assets/images/earn/domain/3.png";
import length4 from "../../assets/images/earn/domain/4.png";
import length5 from "../../assets/images/earn/domain/5.png";
import length6 from "../../assets/images/earn/domain/6.png";
import length7 from "../../assets/images/earn/domain/7.png";
import length8 from "../../assets/images/earn/domain/8.png";
import length9 from "../../assets/images/earn/domain/9.png";

// import { BinanceProvider, useBinance } from 'context/binance'
// import { buyWithWallet } from 'lib/rainbow'

// import { useEarn, EarnProvider } from '../../context/earn'

import { useNavigate } from "react-router-dom";
import { ConnectWallet } from "components/connect-wallet";
// import { useRefetch } from 'context/refetch'

const images = {
  1: length3,
  2: length3,
  3: length3,
  4: length4,
  5: length5,
  6: length6,
  7: length7,
  8: length8,
  9: length9,
  10: length9,
  11: length9,
  12: length9,
  13: length9,
  14: length9,
  15: length9,
};

export const prices = [
  { min: 3, max: 4, price: 69.99, xp: 6000 },
  { min: 5, max: 7, price: 39.99, xp: 4500 },
  { min: 8, max: 15, price: 6.99, xp: 3000 },
];

export function DomainModal({
  domain,
  setClose,
}: {
  domain: string;
  setClose: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  // const { buyDomainGQL, checkDomainGQL } = useEarn()
  const [checkDomain, setCheckDomain] = useState(false);
  const [bnbPrice, setBnbPrice] = useState(0);
  const [price, setPrice] = useState({ min: 0, max: 0, price: 0, xp: 0 });
  // const { bnb } = useBinance()
  // const { domains, xp } = useRefetch()

  const [process, setProcess] = useState(false);

  // useEffect(() => {
  //     setPrice(
  //         prices.find((price) => {
  //             return price.min <= domain.length && price.max >= domain.length
  //         }) || { min: 0, max: 0, price: 0, xp: 0 }
  //     )

  //     setBnbPrice(price.price / bnb)

  //     checkDomainGQL.fn({
  //         variables: {
  //             username: domain
  //         }
  //     })
  // }, [domain, bnb])

  // useEffect(() => {
  //     if (checkDomainGQL.status) {
  //         switch (checkDomainGQL.status) {
  //             case 'success': {
  //                 setCheckDomain(checkDomainGQL.data)
  //             }
  //         }
  //     }
  // }, [checkDomainGQL.status])

  const [buyButton, setBuyButton] = useState<any>();
  // useEffect(() => {
  //     if (bnbPrice == 0) {
  //         setBuyButton(
  //             <Button className="btn btn-primary" disabled>
  //                 <div className="text">Price Calculating</div>
  //             </Button>
  //         )
  //     } else if (process) {
  //         setBuyButton(
  //             <Button className="btn btn-primary" disabled>
  //                 <div className="text">Payment process in progress</div>
  //             </Button>
  //         )
  //     } else {
  //         setBuyButton(
  //             <Button
  //                 className="btn btn-primary"
  //                 onClick={() => {
  //                     buyWithWallet(
  //                         () => {
  //                             setProcess(true)
  //                         },
  //                         ({ transaction }) => {
  //                             buyDomainGQL
  //                                 .fn({
  //                                     variables: {
  //                                         transaction,
  //                                         username: domain
  //                                     }
  //                                 })
  //                                 .then(() => {
  //                                     setProcess(false)
  //                                     domains.refetch()
  //                                     xp.refetch()
  //                                     navigate('/account/domains')
  //                                 })
  //                         },
  //                         bnbPrice
  //                     )
  //                 }}
  //             >
  //                 <div className="text">Pay {bnbPrice.toFixed(5)} BNB</div>
  //             </Button>
  //         )
  //     }

  //     console.log(process, bnb, bnbPrice)
  // }, [process, bnb, bnbPrice])

  useEffect(() => {
    if (domain.length < 3) {
      setBuyButton(undefined);
    }
  }, [domain]);

  return (
    <div className="domain-modal">
      <div className="payment">
        <div className="prices">
          <div className="top">
            {/* <Image className="length" src={(images as any)[domain.length]} /> */}
            <div className="text">
              <div className="domain">
                {domain}
                <div
                  className={`info ${checkDomain ? (domain.length < 3 ? "registered" : "available") : "registered"}`}
                >
                  {checkDomain
                    ? domain.length < 3
                      ? "Minimum lenght is 3!"
                      : "Available"
                    : "Registered"}
                </div>
              </div>
              <div className="info">
                {domain.length < 3
                  ? undefined
                  : "Username is " +
                    (checkDomain
                      ? "reserved. Please complete payment."
                      : "already registered.")}
              </div>
            </div>
          </div>

          <div className="price">
            <p>
              {price!.min} - {price!.max} digits:
            </p>
            <p className="lined-text">00000000000</p>
            <p>{price!.price} USD</p>
          </div>
        </div>

        <div className="vl" />

        <div className="method">
          <p>Payment Method</p>
          {/* <ConnectButton /> */}
          <div className="actions">
            <Button
              className="btn btn-secondary"
              onClick={() => {
                setClose(true);
              }}
            >
              <div className="text">Cancel</div>
            </Button>
            {buyButton}
          </div>
        </div>
      </div>
    </div>
  );
}

export const NameService = () => {
  const [close, setClose] = useState(true);
  const [domain, setDomain] = useState("");

  return (
    <section className="section pb-0">
      <div className="name-services">
        <div className="top-container">
          <div className="claim">
            <h1>USERNAME SERVICES</h1>
            <p>Increase XP Gain multiplier</p>
          </div>
        </div>

        <div className="input">
          <div className="input-group">
            <Form.Control
              id="domain-handle-input"
              size="lg"
              type="text"
              placeholder="Enter a Handle"
              value={domain}
              onChange={(e) => {
                setDomain(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") setClose(false);
              }}
              maxLength={15}
              minLength={3}
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
                style={{ fontSize: "48px" }}
              ></i>
            </span>
          </div>
          <Button
            className="btn btn btn-secondary"
            onClick={() => {
              setClose(false);
            }}
            disabled={!(domain.length >= 3 && domain.length <= 15)}
          >
            SEARCH
          </Button>
        </div>

        {!close ? (
          <DomainModal domain={domain} setClose={setClose} />
        ) : (
          <div className="payment">
            <div className="prices">
              {prices.map((price) => {
                return (
                  <div className="price">
                    <p>
                      {price.min} - {price.max} digits:
                    </p>
                    <p className="lined-text">00000000000</p>
                    <p>{price.price} USD</p>
                  </div>
                );
              })}
            </div>

            <div className="vl" />

            <div className="method">
              <p>Payment Method</p>
              <ConnectWallet buttonText="Connect Wallet" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
