import { gql } from '@apollo/client'

export const product = gql`
    query ($slug: String!) {
        category(slug: $slug) {
            products {
                name
                image
                price
                slug
            }

            category {
                name
                type
            }
        }
    }
`

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
