import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_HOST } from '../../config';

export const getFood = createAsyncThunk(
    "home/getFoodData",
    async () => {
        try {
            const response = await axios.get(`${API_HOST.url}/food`);
            return response.data.data.data;
        } catch (error) {
            console.log(error);
        }
    },
);
export const getFoodByTypes = createAsyncThunk(
    "home/getFoodDataByTypes",
    async (types) => {
        try {
            const response = await axios.get(`${API_HOST.url}/food?types=${types}`);
            return response.data.data.data;
        } catch (error) {
            console.log(error);
        }
    },
);



