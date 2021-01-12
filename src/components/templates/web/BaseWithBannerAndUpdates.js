import React from 'react'
import {Base} from '../../templates/web';
import Grid from '@material-ui/core/Grid';
import {Banner, SharedGrid} from '../../../components/molecules/web';
import {makeStyles} from '@material-ui/core/styles';
import {UpdatesListContainer} from '../../../components/organisms/web';

const useStyles = makeStyles(theme => ({
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

const BaseWithBannerAndUpdates = ({banner, children}) => {

    const {root, left, right} = useStyles();

    const {img, alt} = banner;

    return (
        <Base>
            <Banner img={img} alt={alt} />
            <SharedGrid root={root}>
                <Grid item md={8} className={left} >
                    { children }
                </Grid>
                <Grid item md={4} className={right}> 
                    <UpdatesListContainer />
                </Grid>
            </SharedGrid>
        </Base>
    )
}

export default BaseWithBannerAndUpdates
