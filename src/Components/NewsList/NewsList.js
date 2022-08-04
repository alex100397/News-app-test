import { Container } from '@mui/material';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsList.css';

const NewsList = ({newsList}) => { //Destructuring props
  return (
    <Container maxWidth="md">
        <div className='news-list'>
            {
                newsList.map((newsItem) => (
                    <NewsCard newsItem={newsItem} key={newsItem.title}/> //Passing values to NewsCard component
                ))
            }
        </div>
    </Container>
  )
}

export default NewsList