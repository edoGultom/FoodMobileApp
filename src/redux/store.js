import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { signUpSlice, photoUploadSlice } from './reducer/authSlice';
import { globalSlice } from './reducer/globalSlice';
import { homeSlice } from './reducer/homeSlice';
import { orderSlice } from './reducer/orderSlice';

const reducers = combineReducers({
    [signUpSlice.name]: signUpSlice.reducer,
    [photoUploadSlice.name]: photoUploadSlice.reducer,
    [globalSlice.name]: globalSlice.reducer,
    [homeSlice.name]: homeSlice.reducer,
    [orderSlice.name]: orderSlice.reducer,
})

let middlewares = [];
if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(middlewares), // <-- ADD THIS
})



export default store