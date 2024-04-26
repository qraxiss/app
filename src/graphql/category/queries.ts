import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories(filters: { type: { eq: "category" } }) {
      data {
        attributes {
          slug
          name
          sub_categories {
            data {
              attributes {
                slug
                name
                sub_categories {
                  data {
                    attributes {
                      slug
                      name
                      sub_categories {
                        data {
                          attributes {
                            slug
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
          icon {
            data {
              attributes {
                url
              }
            }
          }

          banner {
            data {
              attributes {
                url
              }
            }
          }

          cover {
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
