import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const statuses = Object.freeze({
    IDLE: 'idle',
    ERROR: 'Error',
    LAODING: 'Loading'
});


const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: statuses.IDLE
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = statuses.LAODING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = statuses.IDLE
            })

            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = statuses.ERROR
            })

    }
})

export const { setProducts, setStatuses } = ProductSlice.actions
export default ProductSlice.reducer


// Redux Thunk 

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data;
});