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
    printfulOrderWithProducts(id: $id)
  }
`;
