import { gql } from '@apollo/client'

export const products = gql`
    query {
        products(pagination: { limit: 100 }) {
            data {
                attributes {
                    name
                    slug
                    image
                    price
                }
            }
        }
    }
`
