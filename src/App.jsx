import React from 'react'
import './App.scss'

import { ConnectWallet } from './features/auth'

import Layout from './layout'

function App() {
    return (
        <Layout>
            <ConnectWallet></ConnectWallet>
        </Layout>
    )
}

export default App
