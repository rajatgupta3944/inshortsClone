import React from 'react';
import './NewsCard.css';

const NewsCard = ({newsItem}) => {
    // console.log(newsItem)
  return (
    <div className='newsCard'>
      <img alt={newsItem.title} src={newsItem.urlToImage ? newsItem.urlToImage : newsItem.url} className='newsImage'></img>
      <div className='newsText'>
        <div>
            <span className='title'>{newsItem.title}</span>
        </div>
        <div>
            <div>
                {newsItem.description}
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
