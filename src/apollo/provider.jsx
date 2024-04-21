import { ApolloClient, InMemoryCache, ApolloProvider as ApolloProviderApollo } from '@apollo/client'
import config from '../config.json'

export const client = new ApolloClient({
    uri: config['server-url'] + '/graphql',
    cache: new InMemoryCache()
})

export function ApolloProvider({ children }) {
    return <ApolloProviderApollo client={client}>{children}</ApolloProviderApollo>
}

export async function query({ name, query, variables }) {
    return client.query({
        query,
        variables
    })
}

export async function mutate({ name, mutation, variables }) {
    return client.mutate({
        mutation,
        variables
    })
}
