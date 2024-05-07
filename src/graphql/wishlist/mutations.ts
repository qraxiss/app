import { gql } from "@apollo/client";

export const ADD_TO_WISHLIST = gql`
  mutation ADD_TO_WISHLIST($slug: String!) {
    addToWishlist(slug: $slug)
  }
`;

export const REMOVE_FROM_WISHLIST = gql`
  mutation REMOVE_FROM_WISHLIST($slug: String!) {
    removeFromWishlist(slug: $slug)
  }
`;
