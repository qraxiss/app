import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GET_CART {
    cart {
      id
      items {
        data {
          id
          attributes {
            count
            variant {
              data {
                id
                attributes {
                  image
                  price
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
