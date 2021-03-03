import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const News_M_UI = ({articles}) => {
    const classes = useStyles();
    return (
        <div style={{display: 'flex', flexWrap: "wrap"}}>
            {
                articles.map(article => {
                    const {title, content, author, urlToImage} = article;
                    return (
                        <Card className={classes.root} style={{width: "15%", margin: "10px"}}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={urlToImage}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {content}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })
            }
        </div>
    );
};

export default News_M_UI;