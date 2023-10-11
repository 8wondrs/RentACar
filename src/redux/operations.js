import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6523e5beea560a22a4e8ff99.mockapi.io';

export const getCarsByPage = createAsyncThunk('cars/getCarsByPage', async (page, thunkAPI) => {
  try {
    const response = await axios.get('/adverts', {
      params: { page: page, limit: 8 },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getAllCars = createAsyncThunk('cars/getAllCars', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
