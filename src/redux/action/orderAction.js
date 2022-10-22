import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios';

import { API_HOST } from '../../config';
import { addLoading } from "../reducer/globalSlice";
export const getOrders = createAsyncThunk(
    "order/getOrders",
    async (token, { dispatch }) => {
        try {
            dispatch(addLoading(true))
            const response = await Axios.get(`${API_HOST.url}/transaction`, {
                headers: {
                    Authorization: token
                }
            });
            dispatch(addLoading(false))
            return response.data.data.data;
        } catch (error) {
            dispatch(addLoading(false))
            console.log(error);
        }
    }
);


export const getInProgress = createAsyncThunk(
    "order/getInProgress",
    async (token) => {
        try {
            //Axios all untuk memanggil beberapa API, kenapa dilakukan? karna api BE hanya menyediakan data transaksi per status
            const response = await Axios.all([
                Axios.get(`${API_HOST.url}/transaction?status=PENDING`, {
                    headers: {
                        Authorization: token
                    }
                }),
                Axios.get(`${API_HOST.url}/transaction?status=SUCCESS`, {
                    headers: {
                        Authorization: token
                    }
                }),
                Axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY`, {
                    headers: {
                        Authorization: token
                    }
                })
            ]).then(Axios.spread((res1, res2, res3) => {
                const pending = res1.data.data.data;
                const success = res2.data.data.data;
                const on_delivery = res3.data.data.data;
                const data = [...pending, ...success, ...on_delivery];
                return data;
            }));
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getInPastOrder = createAsyncThunk(
    "order/getInPastOrder",
    async (token) => {
        try {
            const response = await Axios.all([
                Axios.get(`${API_HOST.url}/transaction?status=DELIVERED`, {
                    headers: {
                        Authorization: token
                    }
                }),
                Axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
                    headers: {
                        Authorization: token
                    }
                })
            ]).then(Axios.spread((res1, res2) => {
                const delivered = res1.data.data.data;
                const cancelled = res2.data.data.data;
                const data = [...delivered, ...cancelled];
                return data;
            }));
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);