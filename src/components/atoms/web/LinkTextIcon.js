import React from 'react'
import clsx from  'clsx';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    noPadding: {
        padding: 0
    },
    hovered: {
        "&:hover": {
            color: '#ffd877'
        }
    },
    listIcon: {
        minWidth: 0,
        color: 'white',
    },
})

const LinkTextIcon = ({ link = '#', title = '', children }) => {

    const {noPadding, hovered, listIcon} = useStyles();

    const setStyle = link !== '#' ? clsx(noPadding, hovered) : noPadding;

    return (
        <ListItem component='a' href={link} classes={{ root: setStyle }}>
             <ListItemIcon classes={{ root:listIcon }}>
               { children }
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    )
}

export default LinkTextIcon
