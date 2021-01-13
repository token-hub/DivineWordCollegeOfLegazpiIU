import React from 'react'
import Grid from '@material-ui/core/Grid';
import {ListContainer} from '../../molecules/web';
import {makeStyles} from '@material-ui/core/styles';
import {BannerWithOverviewMain, BaseWithBanner} from './';

const useStyles = makeStyles(theme => ({
    root: {
		width: '100%',
        height: 'auto',
        padding: '2rem'
    },
    overview: {
        width: '30%',
        [theme.breakpoints.down('sm')] : {
            order: 2,
            width: '100%',
            marginTop: '2rem'
        }
    },
    main : {
        width: '70%',
        [theme.breakpoints.down('sm')] : {
            order: 1,
            width: '100%'
        }
    }
}));

const BaseWithBannerAndOverview = ({title, banner, data, children}) => {

    const {root, overview, main} = useStyles();

    return (
        <BaseWithBanner banner={banner} root={root}>
            <Grid item className={overview} >
                <ListContainer data={data} header='OVERVIEW' type='overview' />
            </Grid>

            <Grid item className={main}>
                <BannerWithOverviewMain title={title}>
                    {children}
                </BannerWithOverviewMain>
            </Grid>
        </BaseWithBanner>
    )
}

export default BaseWithBannerAndOverview
