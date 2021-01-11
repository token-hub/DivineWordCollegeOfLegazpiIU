import React from 'react'
import {Image} from '../../atoms/web/index';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        height: '100%',
        width: '100%',
    },
})

const CoverPage = ({ source, alt }) => {
    
    const {paper} = useStyles();

    return (
        <Grid container className={paper}>
            <Image style={{ width: '100vw' }} source={source} alt={alt}/>
        </Grid>
    )
}

export default CoverPage
