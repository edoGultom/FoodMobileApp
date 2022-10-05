import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'homeReducer',
    initialState: {
        foods: [],
        newTaste: [],
        popular: [],
        recommended: []
    },
    extraReducers: {
        ['home/getFoodData/fulfilled']: (state, action) => {
            state.foods = action.payload;
        },
        ['home/getFoodDataByTypes/fulfilled']: (state, action) => {
            if (action.meta.arg === 'new_food') {//parameter 
                state.newTaste = action.payload;
            } else if (action.meta.arg === 'popular') {
                state.popular = action.payload;
            } else if (action.meta.arg === 'recommended') {
                state.recommended = action.payload;
            }
        },
    },

});


