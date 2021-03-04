
import { useEffect, useState } from 'react';
import './App.css';
import Charts from './components/Charts/Charts';
import News_M_UI from './components/News_M_UI/News_M_UI';
import Path from './components/Path/Path';
import TopHeadLines from './components/TopHeadLines/TopHeadLines';


function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
const url =
    "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7b41dfd4aa76492082e8f7b5de96bb10";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        
        setArticles(data.articles);
        // console.log(articles);
        setLoading(false);
      });
  }, []);

  console.log(articles);
  if (loading) {
    return <h1>Loading the News</h1>;
  }
  return (
    <div>
      <h1>Welcome to the reporter!</h1>
      <Charts></Charts>
      <TopHeadLines articles={articles}></TopHeadLines>
      <Path articles={articles} />
      <News_M_UI articles={articles}></News_M_UI>
      
    </div>
  );
};

export default App;
