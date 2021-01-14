import React from 'react'
import clsx from  'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    paragraph: {
        marginBottom: '1.5rem',
    },
    boldText: {
        fontWeight: 600
    }
})

const Paragraph = ({ variant = 'subtitle1', bold, align='justify' ,children, ...rest }) => {

    const {paragraph, boldText} = useStyles();
    
    const setClass = bold ? clsx(paragraph, boldText) : paragraph;

    return (
        <Typography variant={variant} className={setClass} align={align} {...rest}>{children}</Typography>
    )
}

export default Paragraph
