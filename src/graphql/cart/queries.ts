import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GET_CART {
    cart {
      id
      count
      price
      items {
        data {
          id
          attributes {
            count
            totalPrice
            variant {
              data {
                id
                attributes {
                  image
                  price
                  size {
                    data {
                      attributes {
                        value
                      }
                    }
                  }
                  color {
                    data {
                      attributes {
                        value
                        hex
                      }
                    }
                  }
                  product {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const SHIPPING_RATES = gql`
  query {
    shippingRates
  }
`;
