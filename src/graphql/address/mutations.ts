import { gql } from "@apollo/client";

export const UPDATE_ADDRESS = gql`
  mutation UPDATE_RECIPIENT($recipient: JSON!) {
    recipientByUser(recipient: $recipient)
  }
`;
