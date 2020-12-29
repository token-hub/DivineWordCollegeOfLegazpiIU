import React from 'react'

import clsx from  'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
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
        paddingLeft: '2rem',
    },
    listIconIndented: {
        paddingLeft: '2rem',
        color: 'gray'
    },
    italic: {
        fontStyle: 'italic'
    },
}));

const RenderList = ({header, data}) => {

    const {paragraph, bold, noPadding, listIcon, icon} = useStyles();

    return (
        <>
            <Typography variant='subtitle1' color='primary' className={bold}>
                {header}
            </Typography>

            <List className={paragraph}>
                {
                    data.map((student, index) => (
                        <ListItem key={index} className={noPadding}>
                            <ListItemIcon className={listIcon}>
                                <FiberManualRecordIcon className={icon} />
                            </ListItemIcon>
                            <ListItemText primary={student} />
                        </ListItem> 
                    ))
                }
            </List>
        </>
    )   
}

export default RenderList
