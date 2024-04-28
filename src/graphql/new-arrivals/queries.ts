import { gql } from "@apollo/client";

export const GET_NEW_ARRIVALS = gql`
  query {
  category(slug: "new-arrivals") {
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
    }
  }
}
`;
