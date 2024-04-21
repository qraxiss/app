import React from 'react'

import { ConnectWallet } from './features/auth'
import Products from './apollo/components/product'

import Layout from './layout'

function App() {
    return (
        <Layout>
            <ConnectWallet></ConnectWallet>
            <Products></Products>
        </Layout>
    )
}

export default App
