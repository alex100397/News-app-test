import {React,useState,useEffect} from 'react';
import axios from 'axios';
import './Weather.css'

const Weather = () => {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [weather,setWeather] = useState('');
    const [temperature, setTemperature] = useState(0);
    const [cityName,setCityName] = useState('');
    const [icon,setIcon] = useState('');
    
    const savePosition = ((position) => {  //Setting the Longitude and Latitude
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);     
      }); 

      const weatherApi = async () => {
        try{
          await window.navigator.geolocation.getCurrentPosition(savePosition);  //This will help to geolocate your location
          const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cfac9f68c28bef7c10615e818424ae20&units=metric`);
          setCityName(weather.data.name);
          setWeather(weather.data.weather[0].main);          
          setTemperature(weather.data.main.temp);
          setIcon(weather.data.weather[0].icon)  
        }
        catch(error){
          console.log(error)
        }
      };
    
      useEffect(() => {
        weatherApi() // eslint-disable-next-line
        },[latitude,longitude])  

       const wIcon = `http://openweathermap.org/img/wn/${icon}.png`; 

  return (
    <div className='weather-app'>
        <div className='weather-container'>
           <img src={wIcon} alt="icon"/>
           <h4>{cityName}</h4>
           <h4>{weather}</h4>
           <h4>{temperature}°C</h4>                
        </div>
    </div>
  )
}

export default Weather;