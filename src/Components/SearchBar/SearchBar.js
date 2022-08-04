import {React,useState} from 'react';
import './SearchBar.css';
import { Box, Button, TextField } from '@mui/material';
import '../NewsCard/NewsCard.css';

const SearchBar = ({newsList}) => { //Destructuring props

    const [query,setQuery] = useState('');
    const [foundData,setFoundData] = useState(newsList);

    const filter = (e) => {
        const keyword = e.target.value;

        if(keyword !== ''){
            const results = newsList.filter((newsItem)=>{
                return newsItem.toLoweCase().startsWith(keyword.toLowerCase());
            });
            setFoundData(results);
        }
        else {
            setFoundData(newsList);
        }
        setQuery(keyword);
    };
 
  return (
  <div className='search'>
      <Box sx = {{width:500,maxWidth:'100%', }} >
          <TextField fullWidth label="Search" value={query} onChange={filter} />
      </Box> 
      <div className='news-list'>    
        {
            foundData.map((item)=> (
            <div className='news-card'>
                <img className="news-img" src={item.urlToImage?item.urlToImage:'https://www.waterfieldtechnologies.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png'} alt={item.title}/>
                <div className='news-text'>
                    <span className="title"><b>{item.title}</b></span>
                    <span className="publisher">Published by - {item.author?item.author : 'Unknown'}</span>
                    <div class='center'>
                        <Button variant="contained">
                        <a className='read-more' href={item.url}>Read More</a>
                        </Button>
                    </div>
                </div>        
            </div>
            ))                
        }   
      </div>
  </div>
  )
}

export default SearchBar