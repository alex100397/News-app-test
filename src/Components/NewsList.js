import { Container } from '@mui/material';
import React from 'react';
import NewsCard from './NewsCard';
import './NewsList.css';

const NewsList = ({newsList}) => {
  return (
    <Container maxWidth="md">
        <div className='news-list'>
            {
                newsList.map((newsItem) => (
                    <NewsCard newsItem={newsItem} key={newsItem.title}/>
                ))
            }
        </div>
    </Container>
  )
}

export default NewsList