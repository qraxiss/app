import React from 'react'

import { ConnectWallet } from './features/auth'
import Products from './apollo/components/product'

import Layout from './layout'

function App() {
    return (
        <Layout>
            <Products></Products>
            <ConnectWallet></ConnectWallet>
        </Layout>
    )
}

export default App
