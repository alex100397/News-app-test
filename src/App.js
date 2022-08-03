import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Weather from './Components/Weather';
import {React,useState,useEffect} from 'react';
import axios from 'axios';
import NewsList from './Components/NewsList';
import SearchBar from './Components/SearchBar';

function App() {

  const [newsList,setNewsList] = useState([]);
  
    const newsApi = async () => {
      try{
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4117f0dff96a463d899a128eeaef2cfd`);
        console.log(news.data);
        setNewsList(news.data.articles);
      }
      
      catch(error){
          console.log(error)
      }
    };

  useEffect(() => {
    newsApi();
  }, [newsList])
  

  return (
    <div className="App">
     
     <Header />
     <Weather />
     <SearchBar />
     <NewsList newsList={newsList}/>
     <Footer />

    </div>
  );
}

export default App;
