import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { Provider as ReduxProvider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import rootreducer from 'slices'
import { ShopcekApolloProvider } from './graphql/apollo/provider'
import { RainbowProvider } from 'wallet/rainbow'

const store = configureStore({ reducer: rootreducer, devTools: true })

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <ReduxProvider store={store}>
        <React.Fragment>
            <RainbowProvider>
                <ShopcekApolloProvider>
                    <App />
                </ShopcekApolloProvider>
            </RainbowProvider>
        </React.Fragment>
    </ReduxProvider>
)

reportWebVitals()
