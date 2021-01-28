import React from 'react'
import {Image} from '../../atoms/web/index';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {EnrollmentPortal} from '../../molecules/web';

const useStyles = makeStyles({
    paper: {
        height: '100%',
        width: '100%',
        position: 'relative'
    },
})

const CoverPage = ({ source, alt }) => {
    
    const {paper} = useStyles();

    return (
        <Grid container className={paper}>
            <EnrollmentPortal />
            <Image style={{ width: '100vw' }} source={source} alt={alt}/>
        </Grid>
    )
}

export default CoverPage
