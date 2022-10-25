import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_HOST } from '../../config';
import { addLoading } from "../reducer/globalSlice";

export const getFood = createAsyncThunk(
    "home/getFoodData",
    async (arg, { dispatch }) => {
        try {
            dispatch(addLoading(true))
            const response = await axios.get(`${API_HOST.url}/food`);
            dispatch(addLoading(false))
            return response.data.data.data;

        } catch (error) {
            dispatch(addLoading(false))
            console.log(error);
        }
    },
);
export const getFoodByTypes = createAsyncThunk(
    "home/getFoodDataByTypes",
    async (types, { dispatch }) => {
        try {
            dispatch(addLoading(true))
            const response = await axios.get(`${API_HOST.url}/food?types=${types}`);

            dispatch(addLoading(false))
            return response.data.data.data;
        } catch (error) {
            dispatch(addLoading(false))
            console.log(error);
        }
    },
);



