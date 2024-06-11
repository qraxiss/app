import { gql } from "@apollo/client";

export const NEW_ORDER = gql`
  mutation NEW_ORDER(
    $transaction: String!
    $shipping: String
    $recepient: JSON
  ) {
    placeOrder(
      transaction: $transaction
      shipping: $shipping
      recepient: $recepient
    )
  }
`;
