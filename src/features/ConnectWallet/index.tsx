import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { BrowserProvider } from 'ethers'
import { getNonce, verify } from './helpers'
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
        }).toMessage()

        const signer = await provider.getSigner()
        const signature = await signer.signMessage(message)

        verify(message, signature).then(console.log)
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
