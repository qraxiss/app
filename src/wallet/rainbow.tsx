import '@rainbow-me/rainbowkit/styles.css'

import { getDefaultConfig, RainbowKitProvider, Chain } from '@rainbow-me/rainbowkit'
import { sendTransaction } from '@wagmi/core'
import { WagmiProvider } from 'wagmi'
import { parseEther } from 'viem'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import React from 'react'

import chains from './chains'

export const wagmiConfig = getDefaultConfig({
    appName: 'ShopcekApp',
    projectId: 'e2d0ce35fa2c99ac5578cba14294027b',
    chains
})

const queryClient = new QueryClient()

export function RainbowProvider({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider showRecentTransactions={true}>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export async function buyWithWallet({ onSuccess, ether }: { onSuccess: ({ transaction }: { transaction: string }) => void; ether: number }) {
    let result = await sendTransaction(wagmiConfig, {
        to: '0x670c92C292b69eBf8F1899375f67Eb5C6515BBA2',
        value: parseEther(String(ether))
    })

    if (result) {
        onSuccess({ transaction: result })
    }
}
