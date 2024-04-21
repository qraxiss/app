import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.scss'

import Layout from './layout'

function App() {
    return (
        <Layout>
            <Counter />
        </Layout>
    )
}

export default App
