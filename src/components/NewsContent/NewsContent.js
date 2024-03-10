import React from 'react'
import {Container} from "@mui/material"
import NewsCard from '../NewsCard/NewsCard'

const NewsContent = ({newsArray, newsResults}) => {
  return (
    <Container maxWidth='md'>
      <div className="content">
        {/* <div className="downloadMessage">
            <span className="downloadText">
                For the best experience use inshorts app on your smartphone
            </span>
            <img></img>
            <img></img>
        </div> */}
        {
            newsArray.map((newsItem) => (
                
                <NewsCard newsItem={newsItem} key={newsItem.title} />
            ))
        }
      </div>
    </Container>
  )
}

export default NewsContent
