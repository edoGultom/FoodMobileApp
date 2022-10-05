import { createSlice } from "@reduxjs/toolkit";

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
    },
    reducers: {
        addRegister: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
            state.password_confirmation = action.payload.password;
        }
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
    reducers: {
        addPhoto: (state, action) => {
            state.uri = action.payload.uri
            state.type = action.payload.type
            state.name = action.payload.name
            state.isUploadPhoto = action.payload.isUploadPhoto
        }
    }
});

