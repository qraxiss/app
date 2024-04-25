import { GET_NONCE } from 'graphql/wallet/queries'
import { VERIFY } from 'graphql/wallet/mutations'
import { query, mutate } from 'graphql/apollo/helpers'

export async function getNonce(): Promise<string> {
    const { data, error } = await query<string>(GET_NONCE)

    if (error) {
        throw error
    }

    return data!
}

export async function verify(message: string, signature: string): Promise<string> {
    const { data, error } = await mutate<string>(VERIFY, {
        variables: {
            message,
            signature
        }
    })

    if (error) {
        throw error
    }

    return data!
}
