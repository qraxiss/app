import { gql } from "@apollo/client";

export const GET_NEW_ARRIVALS = gql`
  query {
  category(slug: "new-arrivals") {
    category {
      slug
    name
    }
    products {
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
