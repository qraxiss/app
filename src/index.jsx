import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import { store } from './app/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { ApolloProvider } from './apollo/provider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <ApolloProvider>
            <App />
        </ApolloProvider>
    </Provider>
)
