import React from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import {LinkTextIcon} from '../../atoms/web';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    containerTitle: {
        color: 'white',
        fontWeight: 600
    },
    intended: {
        paddingTop: '1rem',
        paddingLeft: '2rem',
        [theme.breakpoints.only('xs')]:{
            paddingLeft: '.5rem',
        }
    },
    noPadding: {
        padding: 0
    },
    white:{
        color: 'white',
    },
}))

const QuickLinks = ({ title, data }) => {

    const {containerTitle, intended, noPadding, white} = useStyles();

    return (
        <>
             <Typography variant='h5' classes={{ root: containerTitle }}>
                   {title}
                </Typography>
                <Grid item className={intended}>
                    <List className={clsx(noPadding, white)}>
                        {
                            data.map(({link, title}, index) => (
                              <LinkTextIcon key={index} link={link} title={title} />
                            ))
                        }
                    </List>
                </Grid>
        </>
    )
}

export default QuickLinks
