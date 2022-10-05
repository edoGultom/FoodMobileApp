import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { showMessage } from "../../utils";
import { addLoading } from "../reducer/globalSlice";

export const register = createAsyncThunk(
    "register",
    async (data) => {
        try {
            return data
        } catch (err) {
            console.log("error: ", err)
        }
    });

export const uploadPhoto = createAsyncThunk(
    "post/postImage",
    async (data) => {
        try {
            return data
        } catch (err) {
            console.log("error: ", err)
        }
    }
);

const API_HOST = {
    url: "http://127.0.0.1:8092/api"
}


export const signUpAction = createAsyncThunk(
    "post/postRegister",
    async (data, { dispatch }) => { //bisa pakai {getState} atau thunkAPI untuk mendapatkan global state
        try {
            return await axios.post(`${API_HOST.url}/register`, data)
                .then((res) => {

                    //file upload photo
                    if (data.photoReducer.isUploadPhoto) {
                        const dataImgae = data.photoReducer;
                        const photoForUpload = new FormData()
                        photoForUpload.append('file', dataImgae)

                        axios.post(`${API_HOST.url}/user/photo`,
                            photoForUpload,
                            {
                                headers: {
                                    Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                                    "Content-Type": "multipart/form-data",
                                }
                            })
                            .then(resUplaoad => {
                                console.log('status upload: ', resUplaoad)
                            })
                            .catch(err => {
                                showMessage("Upload Photo Tidak Berhasil")
                            });
                    }
                    //tutup upload photo

                    dispatch(addLoading(false))
                    showMessage("Register Success", 'success')
                    data.navigation.navigate('SuccessSignUp')
                });
        } catch (err) {
            console.log('b')

            dispatch(setLoading(false))
            showMessage(err?.response?.data.message)
        }
    });