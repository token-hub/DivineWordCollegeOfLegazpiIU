import React from 'react';
import Grid from '@material-ui/core/Grid';
import SharedLayout2 from '../sharedLayout2';
import Pagination from '../pagination';
import { makeStyles } from '@material-ui/core/styles';
import UpdateContainer from '../UpdateContainer';

const useStyles = makeStyles(theme => ({
    updateContainer: {
        [theme.breakpoints.down('sm')]:{
            padding: '0 2rem'
        }
    },
    updates: {
        width: '100%',
        height: 'auto',
        color: 'white',
        padding: '1rem',
    }
}))

const RenderUpdatesLayout = ({data, banner}) => {

    const {updateContainer, updates} = useStyles();

    return (
        <SharedLayout2 banner={banner}>
            <Grid container item className={updateContainer} justify='center'>
                {
                    data.map( (values, index) =>
                        <Grid item container direction='row' className={updates}>
                            <UpdateContainer
                                key={index}
                                {...values}
                                color='primary'
                            />
                        </Grid>
                    )
                }
              <Pagination />
            </Grid>
        </SharedLayout2>
    )
}

export default RenderUpdatesLayout
