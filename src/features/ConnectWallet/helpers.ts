import { GET_NONCE } from 'graphql/wallet/queries'
import { query } from 'graphql/apollo/helpers'

export async function getNonce() {
    const { status, data, error } = await query<string>(GET_NONCE)

    if (status === 'success') {
        return data
    }

    throw error
}
