import { gql } from "@apollo/client";

export const SEARCH_QUERY = (name: string) => gql`
  query {
    search(name: "${name}") {
      name
      slug
      image
      price
    }
  }
`;
