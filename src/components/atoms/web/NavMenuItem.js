import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    item: {
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        borderRadius: '0px',
        borderBottom: '1px solid black',
        fontSize: '.8rem',
        margin: 0,
    
        "&:hover":{
          backgroundColor: '#252c35',
        }
    },    
}))

const NavMenuItem = ({ link = '#', title, ...rest }) => {

    const {item} = useStyles();

    return (
        <>
            <MenuItem dense={true} component='a' href={link} classes={{ root:item }} {...rest}>
                {title}
            </MenuItem>
        </>
    )
}

export default NavMenuItem
