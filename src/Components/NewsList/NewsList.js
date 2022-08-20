import { Box, Container, TextField } from '@mui/material';
import { React, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsList.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, getAllNews } from '../../Store/News/newsSlice';

const NewsList = () => {
  const newsAll = useSelector(getAllNews); //Extracting data from the Redux Store
  let renderNews = '';
  renderNews =
    newsAll.status === 'ok' ? (
      newsAll.articles.map((newsItem) => (
        <NewsCard newsItem={newsItem} key={newsItem.title} />
      ))
    ) : (
      <div>
        {' '}
        <h3>{newsAll.error}</h3>{' '}
      </div>
    );

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  return (
    <Container maxWidth='md'>
      <div className='search'>
        {' '}
        {/*Search Box*/}
        <Box sx={{ width: 500, maxWidth: '100%' }}>
          <TextField
            fullWidth
            label='Search'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              dispatch(fetchNews(search));
            }}
          />
        </Box>
      </div>
      {<div className='news-list'>{renderNews}</div>}
    </Container>
  );
};

export default NewsList;
