import React, {useContext} from 'react'
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {DashboardContext} from '../../../contexts';

const useStyles = makeStyles({
    content: {
        width: '32.8%',   
        height: '15rem',
        position: 'relative',
        marginRight: '.3rem',
    },
    img: {
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
    },
    selectedSlide: {
        border: '3px solid #5F5AEF'
    }
});

const RenderSlide = ({src, alt, id}) => {

    const {content, img, selectedSlide} = useStyles();
    const {states:{slides:{selected}}, handleSelectedSlide} = useContext(DashboardContext);
    const setIsSelected = selected.length > 0 && selected.indexOf(id) != -1 ? clsx(content, selectedSlide) :  content;
    
    return (
        <Grid container item onClick={handleSelectedSlide(id)} className={setIsSelected}>
        {src && <img src={src} alt={alt} className={img}/> }   
        </Grid>
    )
}

export default RenderSlide
