import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'orderReducer',
    initialState: {
        orders: [],
        inProgress: [],
        pastOrder: [],
        isSuccess: false
    },
    extraReducers: {

        ['order/getOrders/fulfilled']: (state, { payload }) => {
            state.isSuccess = true;
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