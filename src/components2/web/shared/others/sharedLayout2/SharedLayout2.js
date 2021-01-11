import React from 'react'
import Grid from '@material-ui/core/Grid';
import Top from '../../Top';
import Bottom from '../../Bottom';
import Banner from '../../Top/banner';
import SharedGrid from '../sharedGrid'; 
import UpdatesListContainer from '../sharedLayout2/updatesListContainer';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    root: {
		width: '100%',
        height: 'auto',
        padding: '2rem',

        [theme.breakpoints.only('xs')]: {
            padding: '2rem 0'
        }
    },
    left: {
        heigth: 500,
        padding: '0 2rem',
    },
    right: {
        heigth: 500,
        padding: '0 2rem',

        [theme.breakpoints.only('md')] : {
            padding: '0',
        },
    }
}));

const SharedLayout2 = ({banner, children}) => {

    const {img, alt} = banner;

    const {root, left, right} = useStyles();

    return (
        <Grid container>
        <Top />
        <Banner img={img} alt={alt} />
            <SharedGrid root={root} >
                <Grid item md={8} className={left} >
                    { children }
                </Grid>
                    <Grid item md={4} className={right}> 
                        <UpdatesListContainer />
                    </Grid>
                </SharedGrid>
            <Bottom />
        </Grid>
    )
}

export default SharedLayout2
