import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SharedGrid from '../../shared/others/sharedGrid';
import { cards } from "../../data/newsAndEvents";

const useStyles = makeStyles(theme => ({
   root: {
       backgroundColor: 'white',
       height: 'auto',
       padding: '4rem 0'
   }, 
   cardContainer: {
    marginBottom: '1rem',
    [theme.breakpoints.only('xs')] : {
        width: '100%'
    }
  },
  card: {
      width: '90%',
  },
  media: {
    height: 200,
  },
  title: {
      marginBottom: '3rem',
      fontWeight: 600,
      color: '#1D17CE'
  },
}));

const NewsAndEvents = () => {

    const { root, cardContainer, card, media, title } = useStyles();

    const renderCard = (link, title, image, index) => {
        return (
            <Grid container key={index} justify='center' item sm={12} md={4} className={cardContainer} >
                <Card className={card} variant="outlined" raised={true}>
                    <CardMedia
                    className={media}
                    image={image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                        { title }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" component='a' href={link}>
                            Read More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

    return (
        <SharedGrid root={root}>
            <Grid item >
                <Typography gutterBottom variant="h4" align='center' className={title}>
                    NEWS AND EVENTS
                </Typography>
            </Grid>
            
            <Grid container item>
                {
                    cards.map(({ link, title, image }, index) => renderCard(link, title, image, index) )
                }
            </Grid>
        </SharedGrid>           
    )
}

export default NewsAndEvents
