import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './News/newsSlice';
import weatherReducer from './News/weatherSlice'

export const store = configureStore({
  reducer: {
    news: newsReducer,
    weather: weatherReducer,
  },
});
