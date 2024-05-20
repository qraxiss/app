import { gql } from "@apollo/client";

export const ORDERS = gql`
  query ORDERS {
    userOrders {
      count
      price
      error
    }
  }
`;

export const ORDER = gql`
  query ORDER($id: ID!) {
    printfulOrderWithProducts(id: $id)
  }
`;
