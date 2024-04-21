import { createSlice } from '@reduxjs/toolkit'

import reducers from './reducers'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: {}
    },
    reducers
})

export const { products } = productsSlice.actions
export default productsSlice.reducer
