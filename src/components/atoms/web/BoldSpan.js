import React from 'react'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    }
})

const BoldSpan = ({ children }) => {

    const {bold} = useStyles();

    return (
        <span className={bold}>{children}</span>
    )
}

export default BoldSpan
