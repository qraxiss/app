import React from 'react'

import './assets/scss/themes.scss'

import Route from './routes'

import { query } from './graphql/apollo/helpers'
import { GET_NONCE } from 'graphql/wallet/queries'

function App() {
    query(GET_NONCE).then(console.log)

    return (
        <React.Fragment>
            <Route />
        </React.Fragment>
    )
}

export default App
