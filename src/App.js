import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Weather from './Components/Weather/Weather';
import React, { useEffect } from 'react';
import axios from './API/posts';
import NewsList from './Components/NewsList/NewsList';
import { useDispatch } from 'react-redux';
import { addNews } from './Store/News/newsSlice';

function App() {
  const dispatch = useDispatch();
  const newsApi = async () => {
    //Fetching API details
    try {
      const news = await axios.get(
        `/top-headlines?country=in&apiKey=4117f0dff96a463d899a128eeaef2cfd&pageSize=20`
      );

      dispatch(addNews(news.data));
    } catch (error) {
      //To catch and display the error message
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  });

  return (
    <div className='App'>
      <Header />
      <Weather />
      <NewsList />
      <Footer />
    </div>
  );
}

export default App;
