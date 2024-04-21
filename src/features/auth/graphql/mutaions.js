import { gql } from '@apollo/client'

export const connectWallet = gql`
    mutation ($address: String!, $cartId: ID!) {
        connectWallet(address: $address, cartId: $cartId)
    }
`
