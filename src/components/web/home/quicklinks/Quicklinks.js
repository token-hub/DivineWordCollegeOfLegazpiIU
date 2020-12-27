import React, {Fragment} from 'react'
import clsx from  'clsx';
import Grid from '@material-ui/core/Grid';
import { quickLinksData } from '../../data/quicklinks';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    quickLinksContainer: {
        width: '33.33%',
        padding: '2rem 3rem',
    },
    containerTitle: {
        color: 'white',
        fontWeight: 600
    },
    containerLeft: {
        backgroundColor: '#389e61',
        "&:hover": {
            backgroundColor: '#34905A',  
        }
    },
    containerMiddle: {
        backgroundColor: '#5b5959',
        "&:hover": {
            backgroundColor: '#4F4D4D',  
        }
    },
    containerRight: {
        backgroundColor: '#1D17CE',
        "&:hover": {
            backgroundColor: '#1411af',  
        }
    },
    intended: {
        paddingTop: '1rem',
        paddingLeft: '2rem',
        [theme.breakpoints.only('xs')]:{
            paddingLeft: '.5rem',
        }
    },
    white:{
        color: 'white',
    },
    listIcon: {
        minWidth: 0,
        color: 'white',
    },
    noPadding: {
        padding: 0
    },
    hovered: {
        "&:hover": {
            color: '#ffd877'
        }
    }
}));

const Quicklinks = () => {
    const { 
        quickLinksContainer,
        containerTitle, 
        containerLeft, 
        containerMiddle, 
        containerRight, 
        intended, 
        listIcon, 
        white, 
        noPadding,
        hovered
    } = useStyles();

    const { whyChoose, academicPrograms, admission } = quickLinksData;

    const renderContent = (title, array) => {
        return (
            <Fragment>
                <Typography variant='h5' className={containerTitle}>
                   {title}
                </Typography>
                <Grid item className={intended}>
                    <List className={clsx(noPadding, white)}>
                        {
                            array.map(({link, title}) => (
                                <ListItem key={title} component='a' href={link} className={clsx(noPadding, hovered)}>
                                    <ListItemIcon className={listIcon}>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={title} />
                                </ListItem>
                            ))
                        }
                    </List>
                </Grid>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Grid item xs={12} md={4} className={clsx(quickLinksContainer, containerLeft) }>
                {renderContent('Why Choose Divine Word', whyChoose)}
            </Grid>
            <Grid item xs={12} md={4} className={clsx(quickLinksContainer, containerMiddle)}>
                {renderContent('Academic Programs', academicPrograms)}
            </Grid>
            <Grid item xs={12} md={4} className={clsx(quickLinksContainer, containerRight)}>
                {renderContent('Admissions', admission)}
            </Grid>
        </Fragment>
    )
}

export default Quicklinks
