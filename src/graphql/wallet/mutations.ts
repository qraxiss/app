import { gql } from "@apollo/client";

export const VERIFY = gql`
  mutation VERIFY($message: String!, $signature: String!) {
    verify(message: $message, signature: $signature)
  }
`;
