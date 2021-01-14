import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    noPadding: {
        padding: 0
    },
    icon: {
        fontSize: '.5rem',
        marginRight: '.5rem'
    },
    listIcon: {
        minWidth: 0,
        color: 'black',
        padding: '0 1rem',
        paddingTop: '.2rem'
    },
});

const ListItemIconWithText = ({ text, children}) => {

    const {listIcon, noPadding, icon} = useStyles();

    return (
        <ListItem alignItems='flex-start' className={noPadding}>
            <ListItemIcon className={listIcon}>
                {children}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    )
}

export default ListItemIconWithText
