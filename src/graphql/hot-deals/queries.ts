import { gql } from "@apollo/client";

export const GET_HOT_DEALS = gql`
  query {
    category(slug: "hot-deals") {
      products {
        slug
        name
        price
        image
        colors {
          data {
            attributes {
              hex
              value
            }
          }
        }
        sizes {
          data {
            attributes {
              value
            }
          }
        }
      }
    }
  }
`;
