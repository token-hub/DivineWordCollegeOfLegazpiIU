import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles({
    mediaLinks: {
        color: 'white',
        minWidth: '0',
        paddingLeft: '1rem',

        "&:hover" : {
            color: '#ffd877'
        }
    }
});

const ListIcon = ({link = '#', children }) => {
        
    const {mediaLinks} = useStyles();
  
    return (
        <ListItem component='a' href={link} disableGutters={true}>
            <ListItemIcon className={mediaLinks}>
                {children}
            </ListItemIcon>
        </ListItem>  
    )
}

export default ListIcon
