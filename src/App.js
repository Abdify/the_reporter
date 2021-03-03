
import { useEffect, useState } from 'react';
import './App.css';
import Charts from './components/Charts/Charts';
import News_M_UI from './components/News_M_UI/News_M_UI';
import TopHeadLines from './components/TopHeadLines/TopHeadLines';


function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = "http://newsapi.org/v2/everything?q=google&from=2021-02-02&sortBy=publishedAt&apiKey=7b41dfd4aa76492082e8f7b5de96bb10";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
    setLoading(false);
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

      <News_M_UI articles={articles}></News_M_UI>
      
    </div>
  );
};

export default App;
