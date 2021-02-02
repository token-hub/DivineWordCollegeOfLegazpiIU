import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import clsx from 'clsx';

const useStyles = makeStyles({
    mediaLinks: {
        color: 'white',
        minWidth: '0',
        paddingLeft: '1rem',

        "&:hover" : {
            color: '#ffd877'
        }
    },
    paddingRight: {
        paddingLeft: '0!important',
        paddingRight: '1rem'
    }
});

const ListIcon = ({link = '#', noPaddingLeft = false, children }) => {
        
    const {mediaLinks, paddingRight} = useStyles(noPaddingLeft);
    
    const setMediaLinks =  noPaddingLeft ? clsx(mediaLinks, paddingRight) : mediaLinks;

    return (
        <ListItem component='a' href={link} disableGutters={true}>
            <ListItemIcon className={setMediaLinks}>
                {children}
            </ListItemIcon>
        </ListItem>  
    )
}

export default ListIcon
