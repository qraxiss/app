import { gql } from "@apollo/client";

export const GET_Products_Details = (slug: string) => gql`
  query {
    product(slug: "${slug}") {
      variants {
        id
        variant {
          color {
            data {
              attributes {
                value
                hex
              }
            }
          }
          size {
            data {
              attributes {
                value
              }
            }
          }
          image
        }
      }
      product {
        categories {
          data {
            attributes {
              slug
              name
            }
          }
        }
        video {
          data {
            attributes {
              url
              previewUrl
            }
          }
        }
        slug
        colors {
          data {
            attributes {
              value
              hex
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
        image
        description
        price
        name
      }
    }
  }
`;
