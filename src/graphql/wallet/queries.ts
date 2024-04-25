import { gql } from '@apollo/client'

export const GET_NONCE = gql`
    query GET_NONCE {
        nonce
    }
`
