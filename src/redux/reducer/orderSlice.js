import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'orderReducer',
    initialState: {
        orders: [],
        inProgress: [],
        pastOrder: []
    },
    extraReducers: {
        ['order/getOrders/fulfilled']: (state, action) => {
            state.orders = action.payload;
        },
        ['order/getInProgress/fulfilled']: (state, action) => {
            state.inProgress = action.payload;
        },
        ['order/getInPastOrder/fulfilled']: (state, action) => {
            state.pastOrder = action.payload;
        },

    }
});