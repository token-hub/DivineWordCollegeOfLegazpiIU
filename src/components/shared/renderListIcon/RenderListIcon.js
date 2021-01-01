import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    listIcon: {
        minWidth: 0,
        color: 'white',
    },
    noPadding: {
        padding: 0
    },
    bold: {
        fontWeight: 600
    }
}))

const RenderListIcon = ({ text, link = '#', textColor, children }) => {

    const { listIcon, noPadding, bold } = useStyles();

    return (
        <List>
            <ListItem component='a' href={link} className={noPadding}>
                <ListItemIcon className={listIcon}>
                    {children}
                </ListItemIcon>
                <ListItemText primary={text} className={bold} style={{ color: textColor }} />
            </ListItem> 
        </List>
    )
}

export default RenderListIcon
