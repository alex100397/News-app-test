import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Weather from './Components/Weather/Weather';
import {React,useState,useEffect} from 'react';
import axios from 'axios';
import NewsList from './Components/NewsList/NewsList';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [newsList,setNewsList] = useState([]);
  
    const newsApi = async () => { //Fetching API details and setting the states
      try{
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4117f0dff96a463d899a128eeaef2cfd`);
        console.log(news.data);
        setNewsList(news.data.articles);
      }
      
      catch(error){ //To catch and display the error message
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
     <SearchBar newsList={newsList}/>
     <NewsList newsList={newsList}/> {/* Sending states to corresponding components */}
     <Footer />

    </div>
  );
}

export default App;
