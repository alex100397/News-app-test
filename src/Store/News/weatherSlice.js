import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: {
    cityName: '',
    weather: '',
    temperature: 0,
    icon: ',',
  },
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addCity: (state, { payload }) => {
      state.weatherData.cityName = payload;
    },
    addWeather: (state, { payload }) => {
      state.weatherData.weather = payload;
    },
    addTemperature: (state, { payload }) => {
      state.weatherData.temperature = payload;
    },
    addIcon: (state, { payload }) => {
      state.weatherData.icon = payload;
    },
  },
});

export const { addCity, addWeather, addTemperature, addIcon } =
  weatherSlice.actions;
export const getAllWeather = (state) => state.weather.weatherData;
export default weatherSlice.reducer;
