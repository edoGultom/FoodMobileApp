import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export * from '../action';

export const signUpSlice = createSlice({
    name: 'signUpReducer',
    initialState: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        address: '',
        city: '',
        houseNumber: '',
        phoneNumber: '',
        user: {}
    },
    extraReducers: {
        ['user/register/fulfilled']: (state, action) => {//jika tidak terjadi fetchapi (menambah value state) gunakan seperti ini
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
            state.password_confirmation = action.payload.password;
        },
    }
});

export const photoUploadSlice = createSlice({
    name: 'photoReducer',
    initialState: {
        uri: '',
        type: '',
        name: '',
        isUploadPhoto: false,
    },
    extraReducers: {
        ['post/postImage/fulfilled']: (state, action) => {
            state.uri = action.payload.uri
            state.type = action.payload.type
            state.name = action.payload.name
            state.isUploadPhoto = true
        },
    }
});
