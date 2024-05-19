import { gql } from "@apollo/client";

export const NEW_ORDER = gql`
  mutation NEW_ORDER($transaction: String!, $recipient: JSON) {
    newPrintfulOrder(transaction: $transaction, recipient: $recipient)
  }
`;
