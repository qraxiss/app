import { gql } from "@apollo/client";

export const GET_ADDRESS = gql`
  query {
    recipientByUser
  }
`;
