import { Box, Container, TextField } from '@mui/material';
import { React } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsList.css';
import { useSelector } from 'react-redux';
import { getAllNews } from '../../Store/News/newsSlice';

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

  return (
    <Container maxWidth='md'>
      <div className='search'>
        {' '}
        {/*Search Box*/}
        <Box sx={{ width: 500, maxWidth: '100%' }}>
          <TextField fullWidth label='Search' />
        </Box>
      </div>

      {<div className='news-list'>{renderNews}</div>}
    </Container>
  );
};

export default NewsList;
