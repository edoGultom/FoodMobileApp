import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { signUpSlice, photoUploadSlice } from './reducer/authSlice';
import globalReducer from './reducer/globalSlice';

const reducers = combineReducers({
    [signUpSlice.name]: signUpSlice.reducer,
    [photoUploadSlice.name]: photoUploadSlice.reducer,
    global: globalReducer
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