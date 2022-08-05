import { Button } from '@mui/material';
import React from 'react';
import './NewsCard.css';

const NewsCard = ({newsItem}) => { //Destructuring props

  const fullDate = new Date(newsItem.publishedAt);
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0,2));
  const time = hour > 12 ? true : false; 

  return (
    <div className='news-card'> {/* Retreiving data from the API */}
        <img className="news-img" src={newsItem.urlToImage?newsItem.urlToImage:'https://www.waterfieldtechnologies.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png'} alt={newsItem.title}/>
        <div className='news-text'>
            <span className="title"><b>{newsItem.title}</b></span>
            <span className="publisher">
              Published by - { newsItem.author ? newsItem.author : 'Unknown '} 
               at {
                time ? `${hour-12}:${date[4].substring(3,5)} pm ` : `${hour}:${date[4].substring(3,5)} am ` 
                 } 
               on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
            <div class='center'>
              <Button variant="contained">
              <a className='read-more' href={newsItem.url} target="__blank">Read More</a>
              </Button>
            </div>
        </div>        
    </div>        
  )
}

export default NewsCard