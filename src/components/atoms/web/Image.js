import React from 'react'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    img: {
        // maxWidth: '100%',
        // maxHeight: '100%',
        width: '100%',
        backgroundSize: 'cover',
    },
})

const Image = ({ source, alt = '', ...rest }) => {

    const {img} = useStyles();

    return <img className={img} alt={alt} src={source} {...rest} />
     
}

export default Image
