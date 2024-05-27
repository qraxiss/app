import { gql } from "@apollo/client";

export const ORDERS = gql`
  query ORDERS {
    userOrders {
      count
      price
      error
      createdAt
      id
    }
  }
`;

export const ORDER = gql`
  query ORDER($id: ID!) {
    order(id: $id) {
      data {
        id
        attributes {
          createdAt
          transaction
          printful_order {
            data {
              attributes {
                error
              }
            }
          }
          cart {
            data {
              attributes {
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
                price
                count
              }
            }
          }
        }
      }
    }
  }
`;
