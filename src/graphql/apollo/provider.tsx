import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { FC, ReactNode } from 'react'

export const client = new ApolloClient({
    uri: process.env.REACT_APP_GQL_API_URL,
    cache: new InMemoryCache()
})

export const ShopcekApolloProvider: FC<{children: ReactNode}> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
