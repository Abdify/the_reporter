import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const News = (props) => {
    const {articles} = props;
    return (
        <>
            <Jumbotron>
                <h1 className="text-danger">Breaking news</h1>
                <div>
                    <h3>{articles[0].title}</h3>- By {articles[0].author} on{" "}
                    {articles[0].publishedAt}
                    <p>{articles[0].content}</p>
                    <img src={articles[0].urlToImage} alt="" />
                </div>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </>
    );
};

export default News;
