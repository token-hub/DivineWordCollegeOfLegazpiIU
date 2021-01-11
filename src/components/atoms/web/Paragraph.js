import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    paragraph: {
        marginBottom: '1.5rem'
    }
})

const Paragraph = ({ children }) => {

    const {paragraph} = useStyles();

    return (
        <Typography variant='subtitle1' className={paragraph}>{children}</Typography>
    )
}

export default Paragraph
