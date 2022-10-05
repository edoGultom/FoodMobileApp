import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { showMessage, storeData } from "../../utils";
import { addLoading } from "../reducer/globalSlice";
import { signUpSlice, photoUploadSlice } from '../reducer/authSlice'
import { API_HOST } from '../../config';


export const signUpAction = createAsyncThunk(
    "post/postRegister",
    async (data, { dispatch }) => { //bisa pakai {getState} atau thunkAPI untuk mendapatkan global state
        await axios.post(`${API_HOST.url}/register`, data)
            .then((res) => {
                //data user
                const profile = res.data.data.user;

                //data token 
                const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
                //karena storeData valuenya harus objek maka ubah ke objek terlebih dahulu
                storeData('token', { value: token });

                //file upload photo
                if (data.photoReducer.isUploadPhoto) {
                    const dataImgae = data.photoReducer;
                    const photoForUpload = new FormData();
                    photoForUpload.append('file', dataImgae);

                    axios.post(`${API_HOST.url}/user/photo`,
                        photoForUpload,
                        {
                            headers: {
                                Authorization: token,
                                "Content-Type": "multipart/form-data",
                            }
                        })
                        .then((resUpload) => {
                            //set local storage data user
                            // update profile photo
                            profile.profile_photo_url = `http://127.0.0.1:8092/storage/${resUpload.data.data}`;
                            storeData('userProfile', profile);

                            //berpindah halaman tetapi tidak dapat kembali ke halaman sebelumnya
                            data.navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] });
                        })
                        .catch((err) => {
                            showMessage("Upload Photo Tidak Berhasil")
                            data.navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] });
                        });
                } else {
                    storeData('userProfile', profile);
                    data.navigation.reset({ index: 0, routes: [{ name: 'SuccessSignUp' }] });
                }
                //tutup upload photo

                dispatch(addLoading(false));
            })
            .catch((err) => {
                dispatch(addLoading(false));
                showMessage(err?.response?.data.message);
            });
    });

export const signInAction = createAsyncThunk(
    "post/postSignIn",
    async (obj, { dispatch }) => { //bisa pakai {getState} atau thunkAPI untuk mendapatkan global state
        dispatch(addLoading(true))
        await axios.post(`${API_HOST.url}/login`, obj.form)
            .then((res) => {

                //data user
                const profile = res.data.data.user;
                // profile.profile_photo_url = `http://127.0.0.1:8092/storage/${res.data.data.user.profile_photo_path}`;
                storeData('userProfile', profile);

                //data token 
                const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
                storeData('token', { value: token });

                dispatch(addLoading(false));

                obj.navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });

            })
            .catch((err) => {
                dispatch(addLoading(false));
                showMessage(err?.response?.data?.message);
            });
    });
//memanggil action yg ada di reducer authSlice
export const { addRegister } = signUpSlice.actions;
export const { addPhoto } = photoUploadSlice.actions;