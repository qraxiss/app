import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import { store } from './app/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { ApolloProvider } from './apollo/utils/provider'
import { RainbowProvider } from './wallet/rainbow'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RainbowProvider>
            <ApolloProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ApolloProvider>
        </RainbowProvider>
    </React.StrictMode>
)
