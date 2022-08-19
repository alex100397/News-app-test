import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../API/weather';
import {
  addCity,
  addIcon,
  addTemperature,
  addWeather,
  getAllWeather,
} from '../../Store/News/weatherSlice';
import './Weather.css';

const Weather = () => {
  const dispatch = useDispatch();
  const weatherAll = useSelector(getAllWeather);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const savePosition = (position) => {
    //Setting the Longitude and Latitude
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const weatherApi = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(savePosition); //This will help to geolocate your location
      const weather = await axios.get(
        `/weather?lat=${latitude}&lon=${longitude}&appid=cfac9f68c28bef7c10615e818424ae20&units=metric`
      );
      dispatch(addCity(weather.data.name));
      dispatch(addWeather(weather.data.weather[0].main));
      dispatch(addTemperature(weather.data.main.temp));
      dispatch(addIcon(weather.data.weather[0].icon));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherApi(); // eslint-disable-next-line
  }, [latitude, longitude]);

  const wIcon = `http://openweathermap.org/img/wn/${weatherAll.icon}.png`;

  return (
    <div className='weather-app'>
      <div className='weather-container'>
        <img src={wIcon} alt='icon' />
        <h4>{weatherAll.cityName}</h4>
        <h4>{weatherAll.weather}</h4>
        <h4>{weatherAll.temperature}°C</h4>
      </div>
    </div>
  );
};

export default Weather;
