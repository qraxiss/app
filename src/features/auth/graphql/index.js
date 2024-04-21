import * as mutations from './mutaions'
import { mutate } from '../../../apollo/utils/wrapper'

export function connectWallet({ address }) {
    const promise = mutate({
        mutation: mutations.connectWallet,
        options: {
            variables: {
                address,
                cartId: 321
            }
        }
    })

    return promise
}
