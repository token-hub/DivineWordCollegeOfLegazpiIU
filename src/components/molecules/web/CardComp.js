import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
}))

const CardComp = ({link = '#', title, image}) => {
    
    const {cardContainer, card, media} = useStyles();

    return (
        <Grid container justify='center' item sm={12} md={4} className={cardContainer} >
            <Card classes={{root:card}} variant="outlined" raised={true}>
                <CardMedia
                classes={{root:media}}
                image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                    { title }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" variant='contained' component='a' href={link}>
                        Read More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CardComp
