import React, {Fragment} from 'react'
import ListContainer from '../listContainer';
import Main from './main';
import SharedGrid from '../sharedGrid';
import Top from '../../Top';
import Bottom from '../../Bottom';
import Banner from '../../Top/banner';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
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

const SharedLayout = ({title, banner, data, children}) => {

    const {root, overview, main} = useStyles();

    const {img, alt} = banner;

    return (
        <>
            <Top />
            <Banner img={img} alt={alt} />
            <SharedGrid root={root} >
                <Grid item className={overview} >
                    <ListContainer data={data} header='OVERVIEW' type='overview' />
                </Grid>

                <Grid item className={main}>
                    <Main title={title}>
                        {children}
                    </Main>
                </Grid>
            </SharedGrid>
            <Bottom />
        </>
    )
}

export default SharedLayout
