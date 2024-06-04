import { gql } from "@apollo/client";

export const UPDATE_ADDRESS = gql`
  mutation UPDATE_RECIPIENT($recipient: JSON!, $title: String!) {
    recipientByUser(recipient: $recipient, title: $title)
  }
`;

export const CREATE_ADDRESS = gql`
  mutation CREATE_ADDRESS($recipient: JSON!) {
    createRecipientByUser(recipient: $recipient)
  }
`;

export const DELETE_ADDRESS = gql`
  mutation DELETE_ADDRESS($title: String!) {
    deleteRecipientByUser(title: $title)
  }
`;
