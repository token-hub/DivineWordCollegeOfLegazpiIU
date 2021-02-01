import React from 'react'
import clsx from  'clsx';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    noPadding: {
        padding: 0,
        color: 'white',
    },
    hovered: {
        color: 'white',
        "&:hover": {
            color: '#ffd877'
        }
    },
    listIcon: {
        minWidth: 0,
        color: 'white',
    },
    paddingLeft: {
        paddingLeft: '.5rem'
    }
})

const LinkTextIcon = ({ link = '#', title = '', children }) => {

    const {noPadding, hovered, listIcon, paddingLeft} = useStyles();

    const setStyle = link !== '#' ? clsx(noPadding, hovered) : noPadding;

    return (
        <ListItem component='a' href={link} classes={{ root: setStyle }}>
             <ListItemIcon classes={{ root:listIcon }}>
               { children }
            </ListItemIcon>
            <ListItemText className={paddingLeft} primary={title} />
        </ListItem>
    )
}

export default LinkTextIcon
