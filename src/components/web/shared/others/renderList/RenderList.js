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
        paddingLeft: '1rem'
    },
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '.5rem'
    },
    listContainer : {
        marginBottom: '1.5rem'
    }
}));

const RenderList = ({header = '', data}) => {
 
    const {noPadding, listIcon, icon, bold, paragraph, listContainer} = useStyles();

    const isObject = val => {
        return val instanceof Object;
    }

    let nestedCount = 0;

    const isArray = val => {
        return Array.isArray(val) && !null;
    }

    const listItem = (title, index = '') => {
        return (
            <ListItem key={index} className={noPadding}>
                <ListItemIcon className={listIcon}>
                    <FiberManualRecordIcon className={icon} />
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItem>
        )
    }

    const renderListItem = data => {

        let list;

        if ( !isObject(data) && !isArray(data)) {
            list = listItem(data)
        }  else {
            const {item, value} = data;

           list = <>
                <Typography variant='subtitle1'>
                    {item}
                </Typography>
                {
                    value !== null
                    ?  isArray(value)
                        ?   value.map( (val, index) => listItem(val, index) )
                        : (isObject(value) && !isArray(value))
                            ?   mapObjectListItem(value)
                            :   listItem(value)
                    : ''
                }
            </>
        }

        return list   
    }
 
    const mapListItem = array => {
        let padding = {};
        nestedCount+= 2;
        return array.map( (data, index) => {
            if (isArray(data['value'])) padding = {paddingLeft: `${nestedCount++}rem`};
           return (
                <div key={index} style={{ padding }}>
                    {renderListItem(data)}
                </div>
            )
        });
    }

    const mapObjectListItem = obj => {
        return  (
            <div style={{ paddingLeft: `${nestedCount}rem` }}>
                {renderListItem(obj)}
            </div>
        )
    }

    return (
        <div className={listContainer} >
            <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                {header}
            </Typography>
            {mapListItem(data)}
        </div>
    );
}

export default RenderList
