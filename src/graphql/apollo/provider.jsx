import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export const client = new ApolloClient({
    uri: process.env.REACT_APP_GQL_API_URL,
    cache: new InMemoryCache()
})

export const ShopcekApolloProvider = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
