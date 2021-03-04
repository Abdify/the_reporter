import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import News from '../News/News';
import './Path.css';

const Path = ({articles}) => {

    return (
        <Router>
            <div className="container">
                <nav>
                    {
                        articles.map((article, i) => {
                            return (
                            <Link to={ `/n/${ i + "/" + article.author }` }>
                                <p>{article.title}</p>
                                </Link>
                            )
                        })
                    }
                </nav>
                <main>
                    <Route path="/" exact={true} render={() => (
                        <h1>Welcome to Tech Crunch News!</h1>
                    )} />
                    { articles &&
                    <Route path="/n/:i/:newsAuthor" render={({ match }) => (
                        <News article={ articles.find(article => article.author === match.params.newsAuthor) } />
                    )} />
                    }
                </main>
            </div>
        </Router>
    );
};


export default Path;