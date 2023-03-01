import {createSlice} from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'globalReducer',
  initialState: {
    isError: false,
    message: 'Error',
    isLoading: false,
  },
  reducers: {
    addLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {addLoading} = globalSlice.actions;
