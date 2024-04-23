import { ApolloClient, InMemoryCache, ApolloProvider as ApolloProviderApollo } from '@apollo/client'
import config from '../../config.json'

export const client = new ApolloClient({
    uri: config.gqlUrl,
    cache: new InMemoryCache(),
    connectToDevTools: true
})

export function ApolloProvider({ children }) {
    return <ApolloProviderApollo client={client}>{children}</ApolloProviderApollo>
}
