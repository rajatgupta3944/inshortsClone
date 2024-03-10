import { useEffect, useState } from 'react';
import './App.css';
import NavInshorts from './components/NavInshorts';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState('general');
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const newsApi = async () => {
    try{
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}`)
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    }catch(error){
      console.log(error)
    }
  }
  console.log(newsArray);
  useEffect(() => {
    newsApi();
  },[newsResults, category])
  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResults={newsResults} />
    </div>
  );
}

export default App;
