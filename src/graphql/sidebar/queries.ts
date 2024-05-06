import { gql } from "@apollo/client";

export const GET_SideBar = gql`
  query {
    categories(filters: { type: { eq: "sidebar" } }) {
      data {
        attributes {
          slug
          name
          sub_categories {
            data {
              attributes {
                slug
                name
                icon {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          icon {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
