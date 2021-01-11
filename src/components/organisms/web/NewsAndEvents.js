import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {SharedGrid, CardComp} from '../../molecules/web';
import {newsAndEventsCards} from '../../../data/web';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        height: 'auto',
        padding: '4rem 0'
    },
    title: {
        marginBottom: '3rem',
        fontWeight: 600,
        color: '#1D17CE'
    },
})

const NewsAndEvents = () => {

    const {root, title} = useStyles();

    return (
        <SharedGrid root={root}>
              <Grid item>
                <Typography gutterBottom variant="h4" align='center' classes={{root:title}}>
                    NEWS AND EVENTS
                </Typography>
            </Grid>
            <Grid container item>
                {
                    newsAndEventsCards.map((data, index) => <CardComp {...data} key={index} />)
                }
            </Grid>
        </SharedGrid>
    )
}

export default NewsAndEvents
