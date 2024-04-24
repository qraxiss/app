import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query {
  categories(filters: { type: { eq: "category" } }) {
    data {
      attributes {
        slug
      }
    }
  }
}
`;
