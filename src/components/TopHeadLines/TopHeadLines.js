import React from "react";
import { Jumbotron } from "react-bootstrap";
import './TopHeadLines.css';

const TopHeadLines = (props) => {
    const {articles} = props;
    return (
        <Jumbotron>
            <h1>Top Head Lines</h1>
            <div className="topHeadLines">
                {articles.map((article) => {
                    return (
                        <div>
                            <p>{article.title}</p>
                        </div>)
                })}
            </div>
            
        </Jumbotron>
    );
};

export default TopHeadLines;
