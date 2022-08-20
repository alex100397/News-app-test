import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../API/posts';

export const fetchNews = createAsyncThunk('news/fetchNews', async (search) => {
  try {
    const news = await axios.get(
      `/top-headlines?country=in&apiKey=4117f0dff96a463d899a128eeaef2cfd&pageSize=20&q=${search}`
    );
    return news.data;
  } catch (error) {
    //To catch and display the error message
    console.log(error);
  }
});

const initialState = {
  newsList: {},
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews: (state, { payload }) => {
      state.newsList = payload;
    },
  },
  extraReducers: {
    [fetchNews.pending]: () => {
      console.log('Pending');
    },
    [fetchNews.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully');
      return { ...state, newsList: payload };
    },
    [fetchNews.rejected]: () => {
      console.log('Rejected');
    },
  },
});

export const { addNews } = newsSlice.actions;
export const getAllNews = (state) => state.news.newsList;
export default newsSlice.reducer;
