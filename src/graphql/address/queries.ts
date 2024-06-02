import { gql } from "@apollo/client";

export const GET_ADDRESS = gql`
  query GET_ADDRESS($title: String!) {
    recipientByUser(title: $title)
  }
`;

export const GET_ADDRESSES = gql`
  query GET_ADDRESSES {
    recipientsByUser
  }
`;
