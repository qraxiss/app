import { gql } from "@apollo/client";

export const GET_Products = (slug: string) => gql`
  query {
    category(slug: "${slug}") {
      category {
        slug
        name
        banner {
          data {
            attributes {
              url
            }
          }
        }
      }
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
