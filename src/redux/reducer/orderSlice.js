import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'orderReducer',
    initialState: {
        orders: [],
        inProgress: [],
        pastOrder: [],
        isFinish: false
    },
    extraReducers: {
        ['order/getOrders/pending']: (state) => {
            state.isFinish = false;
        },
        ['order/getOrders/fulfilled']: (state, { payload }) => {
            state.isFinish = true;
            state.orders = payload;
        },

        ['order/getInProgress/fulfilled']: (state, action) => {
            state.inProgress = action.payload;
        },
        ['order/getInPastOrder/fulfilled']: (state, action) => {
            state.pastOrder = action.payload;
        },

    }
});