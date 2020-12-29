import React, {Fragment} from 'react'
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Header from './header';
import Navbar from './navbar';
import Appbar from './appbar';
import {images} from '../../data/images';

import {isHomePage} from '../../../../helpers';

const useStyle = makeStyles(theme =>({
    paper: {
        height: '100%',
        width: '100%',
    },
    image: {
        maxHeight: '100%',
        width: '100vw',
        background: 'cover'
    }
}));

const Top = () => {

    const { paper, image } = useStyle();

    const {others} = images;

    const {pathname} = useLocation();

    const setCoverPage = isHomePage(pathname);

    return (
       <Fragment>
            <Header />
            <Hidden mdDown><Navbar /></Hidden>
            <Hidden mdUp><Appbar /></Hidden>
            {
                setCoverPage ? 
                    (
                        <>
                            <Hidden only={['xs','md','lg','xl']}> 
                                <Grid container className={paper}>
                                    <img src={others[0].img} alt={others[0].alt} className={image} />
                                </Grid>
                            </Hidden>
                            <Hidden only={['sm','md','lg','xl']}> 
                                <Grid container className={paper}>
                                    <img src={others[1].img} alt={others[1].alt} className={image} />
                                </Grid>
                            </Hidden>
                        </>
                    ) : ''
            }
       </Fragment>
    )
}

export default Top
