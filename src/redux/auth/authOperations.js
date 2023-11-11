import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);

      console.log(data);
      return data;
    } catch (error) {
      console.log('Failed register:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);

      console.log(data);
      return data;
    } catch (error) {
      console.log('Failed login:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
