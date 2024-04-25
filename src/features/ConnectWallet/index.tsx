import { mutate } from 'graphql/apollo/helpers'
import { VERIFY } from 'graphql/wallet/mutations'

import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { BrowserProvider } from 'ethers'
import { getNonce } from './helpers'
import { SiweMessage } from 'siwe'

import { useEffect } from 'react'

export default function ConnectButton() {
    const { address, chainId, status } = useAccount()
    const { openConnectModal } = useConnectModal()
    const provider = new BrowserProvider(window.ethereum)

    const siwe = async () => {
        const nonce = await getNonce()
        console.log(nonce)

        const message = new SiweMessage({
            domain: window.location.host,
            address,
            statement: 'Sign in with Ethereum to the app.',
            uri: window.location.origin,
            version: '1',
            chainId,
            nonce
        })

        const signer = await provider.getSigner()
        console.log(message, await signer.signMessage(message.toMessage()))
    }

    useEffect(() => {
        if (status === 'connected') {
            siwe()
        }
    }, [status])

    return (
        <button
            className="connectButtonWrapper"
            onClick={() => {
                console.log('test')
                openConnectModal!()
            }}
        >
            Test
        </button>
    )
}
