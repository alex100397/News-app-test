import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Weather from './Components/Weather/Weather';
import React, { useEffect } from 'react';
import NewsList from './Components/NewsList/NewsList';
import { useDispatch } from 'react-redux';
import { fetchNews } from './Store/News/newsSlice';

function App() {
  const dispatch = useDispatch();
  const search = '';
  useEffect(() => {
    dispatch(fetchNews(search));
  }, [dispatch]);

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
