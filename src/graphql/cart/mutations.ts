import { gql } from "@apollo/client";

export const ADD_ITEM_TO_CART = gql`
    mutation ADD_ITEM_TO_CART($variantId: ID!, count:Int = 1){
        addItemToCart(variantId: $variantId, count: $count) {
            status
        }
    }
`;

export const UPDATE_CART_ITEM = gql`
    mutation UPDATE_CART_ITEM($itemId: ID!, count: Int!){
        updateCartItem(itemId: $itemId, count: $count) {
            status
        }
    }
`;

export const REMOVE_CART_ITEM = gql`
  mutation REMOVE_CART_ITEM($itemId: ID!) {
    removeCartItem(itemId: $itemId) {
      status
    }
  }
`;

export const EMPTY_CART = gql`
  mutation EMPTY_CART {
    emptyCart {
      status
    }
  }
`;
