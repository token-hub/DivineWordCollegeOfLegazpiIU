import React, {useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {SharedGrid, CardComp} from '../../molecules/web';
import {WebContext} from '../../../contexts';

const useStyles = makeStyles(theme =>({
    root: {
        backgroundColor: 'white',
        height: 'auto',
        padding: '4rem 0',
        [theme.breakpoints.down('sm')]: {
            padding: '3rem 0'
        }
    },
    title: {
        marginBottom: '3rem',
        fontWeight: 600,
        color: '#1D17CE'
    },
}))

const NewsAndEvents = () => {

    const {root, title} = useStyles();
    const {updates:{newsAndEvents}} = useContext(WebContext);

    return (
        <SharedGrid root={root}>
              <Grid item>
                <Typography gutterBottom variant="h4" align='center' classes={{root:title}}>
                    NEWS AND EVENTS
                </Typography>
            </Grid>
            <Grid container item>
                {newsAndEvents.map((data, index) => <CardComp {...data} key={index} />)}
            </Grid>
        </SharedGrid>
    )
}

export default NewsAndEvents
