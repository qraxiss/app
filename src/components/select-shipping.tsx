import { useEffect } from "react";
import { Row, Card, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { select } from "slices/shipping/slice";
import { fetchShippingAsync } from "slices/thunk";
import { AppDispatch } from "store";
const ShippingRates = () => {
  const { options: shipping_options, selected } = useSelector(
    (state: any) => state.shipping.data,
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShippingAsync());
  }, []);
  return (
    <Col>
      <Row className="g-4" id="address-list">
        {shipping_options.map((option: any) => (
          <Col md={6}>
            <Card
              className={`mb-md-0 ${option.isActive ? "bg-success-subtle" : ""}`}
            >
              <Card.Body>
                <div className="float-end clearfix">
                  {" "}
                  <Button
                    // to="/address"
                    onClick={() => {
                      dispatch(select(option.id));
                    }}
                    className="badge bg-primary-subtle text-primary"
                    variant="primary"
                  >
                    <i
                      className={`ri-ship${option.id === selected ? "-2" : ""}-line align-bottom me-1`}
                    ></i>{" "}
                    Select{option.id === selected ? "ed" : ""}
                  </Button>{" "}
                </div>
                <div>
                  <h3 className="fs-14 mb-2 d-block">{option.name}</h3>

                  <span className="text-muted fw-normal d-block">
                    ${option.rate}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default ShippingRates;
