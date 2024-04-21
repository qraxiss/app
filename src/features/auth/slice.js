import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { connectWallet } from './graphql'

const initialState = {
    jwt: '',
    status: 'not-logged',
    address: ''
}

export const connectWalletAsync = createAsyncThunk('auth/connectWallet', async (address) => {
    const response = await connectWallet({ address })
    return response.data
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        login(state, action) {
            state.jwt = action.payload.jwt
        },

        logout(state) {
            state.jwt = undefined
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(connectWalletAsync.pending, (state) => {
                console.log('sa')
                state.status = 'loading'
            })
            .addCase(connectWalletAsync.fulfilled, (state, action) => {
                state.status = 'logged'
                state.jwt = action.payload
                console.log('as')
            })
    }
})

export const { login, logout } = authSlice.actions

export const selectJwt = (state) => state.auth.jwt
export const selectStatus = (state) => state.auth.status

export default authSlice.reducer
