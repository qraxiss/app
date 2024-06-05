import { gql } from "@apollo/client";

export const UPDATE_ADDRESS = gql`
  mutation UPDATE_RECIPIENT($recipient: JSON!, $id: ID!) {
    recipientByUser(recipient: $recipient, id: $id)
  }
`;

export const CREATE_ADDRESS = gql`
  mutation CREATE_ADDRESS($recipient: JSON!) {
    createRecipientByUser(recipient: $recipient)
  }
`;

export const DELETE_ADDRESS = gql`
  mutation DELETE_ADDRESS($id: ID!) {
    deleteRecipientByUser(id: $id)
  }
`;

export const SELECT_ADDRESS = gql`
  mutation SELECT_ADDRESS($id: ID!) {
    selectRecipientByUser(id: $id)
  }
`;
