import { Box, Container, TextField } from '@mui/material';
import {React,useState} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsList.css';

const NewsList = ({newsList}) => { //Destructuring props

  const [search,setSearch] = useState('');
  const [filter,setFilter] = useState([]);

  const searchItems = (searchValue) => {
    setSearch(searchValue);
    if(search !== ''){
        const filterData = newsList.filter((items)=>{
            return Object.values(items).join('').toLowerCase().includes(search.toLowerCase())
        })
        setFilter(filterData)
    }
    else{
        setFilter(newsList)
    }
}

  return (
    <Container maxWidth="md">
      <div className='news-list'>
        <div className='search'>
          <Box sx = {{width:500,maxWidth:'100%', }} >
            <TextField fullWidth label="Search" onChange={(e)=> searchItems(e.target.value)}/>
          </Box> 
        </div>
          {search.length > 1 ? (
            filter.map((newsItem)=> ( 
              <NewsCard newsItem={newsItem} key={newsItem.title}/> //Passing values to NewsCard component
            ))
            ) : (
            newsList.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title}/> 
            )) 
            )         
          }           
      </div>
    </Container>
  )
}

export default NewsList