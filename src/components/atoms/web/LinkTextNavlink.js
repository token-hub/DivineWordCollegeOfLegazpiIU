import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    linkClass: {
        "&:hover": {
            textDecoration: 'none'
        }
    },
})

const LinkTextNavlink = ({ link = '#', setLinkText, children, ...rest }) => {

    const {linkClass} = useStyles();

    return (
        <Link
            href={link}
            classes={{root: linkClass}}
            {...rest}
        > 
            <Typography variant='subtitle1' classes={{ root: setLinkText }}>
                {children}
            </Typography>
    </Link>
    )
}

export default LinkTextNavlink
