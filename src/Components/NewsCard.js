import React from 'react';
import './NewsCard.css'

const NewsCard = ({newsItem}) => {
  return (
    <div className='news-card'>
        <img className="news-img" src={newsItem.urlToImage?newsItem.urlToImage:'https://www.waterfieldtechnologies.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png'} alt={newsItem.title}/>

        <div className='news-text'>
            <span className="title"><b>{newsItem.title}</b></span>
            <span className="publisher">Published by - {newsItem.author}</span>
            <a className='read-more' href={newsItem.url}>Read More</a>

        </div>
        
    </div>
  )
}

export default NewsCard