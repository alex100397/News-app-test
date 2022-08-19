import { createSlice } from '@reduxjs/toolkit';

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
});

export const { addNews } = newsSlice.actions;
export const getAllNews = (state) => state.news.newsList;
export default newsSlice.reducer;
