import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import React from 'react'

console.log(process.env.GQL_API_URL)
export const client = new ApolloClient({
    uri: process.env.REACT_APP_GQL_API_URL,
    cache: new InMemoryCache()
})

export const ShopcekApolloProvider = ({ children }: { children: React.ReactNode }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
