import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./News.css";

const News = (props) => {
    const {article} = props;
    return (
        <>
            <Card>
                <div>
                    <h3>{article.title}</h3>
                    <i className="fas fa-user"></i> {article.author} <br />
                    <i className="fas fa-clock"></i> {article.publishedAt}
                    <img src={article.urlToImage} alt="" />
                    <p>{article.description}</p>
                </div>
                <p>
                    <Button variant="dark" size="sm">
                        <a href={article.url}>Learn more</a>
                    </Button>
                </p>
            </Card>
        </>
    );
};

export default News;
