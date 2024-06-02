import { gql } from "@apollo/client";

export const UPDATE_ADDRESS = gql`
  mutation UPDATE_RECIPIENT($recipient: JSON!, $title: String!) {
    recipientByUser(recipient: $recipient, title: $title)
  }
`;
