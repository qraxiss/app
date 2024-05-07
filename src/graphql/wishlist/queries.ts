import { gql } from "@apollo/client";

export const WISHLIST = gql`
  query {
    userWishlist
  }
`;
