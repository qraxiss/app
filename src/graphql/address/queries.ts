import { gql } from "@apollo/client";

export const GET_ADDRESS = gql`
  query GET_ADDRESS($id: ID!) {
    recipientByUser(id: $id)
  }
`;

export const GET_ADDRESSES = gql`
  query GET_ADDRESSES {
    recipientsByUser
  }
`;
