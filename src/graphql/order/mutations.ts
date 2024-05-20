import { gql } from "@apollo/client";

export const NEW_ORDER = gql`
  mutation NEW_ORDER($transaction: String!, $recepient: JSON) {
    placeOrder(transaction: $transaction, recepient: $recepient)
  }
`;
