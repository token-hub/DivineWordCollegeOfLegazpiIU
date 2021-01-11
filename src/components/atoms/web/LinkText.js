import React from 'react'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    anchorTag: {
        "&:hover" : {
            textDecoration: 'none',
            color: '#ffd877'
        } 
     },
})

const LinkText = ({ text, link = '#' }) => {

    const {anchorTag} = useStyles();

    return (
        <Typography variant="subtitle1">
            <Link href={link} color="inherit" classes={{ root: anchorTag }}>
               {text}
            </Link> 
        </Typography>
    )
}

export default LinkText
