import React from 'react'

import clsx from  'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { render } from 'react-dom';

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
        paddingLeft: '1rem',
        paddingTop: '.2rem'
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
    let childrenCount = 0;

    const isArray = val => {
        return Array.isArray(val) && !null;
    }

    const isStringOrNumber = data => {
        return !isObject(data) && !isArray(data);
    }

    const listItem = (data, index = null) => {
        if (isObject(data)) {
            return renderListItem(data, true);
        }
        return (
            <ListItem alignItems='flex-start' key={index} className={noPadding}>
                <ListItemIcon className={listIcon}>
                    <FiberManualRecordIcon className={icon} />
                </ListItemIcon>
                <ListItemText primary={data} />
            </ListItem>
        )
    }

    const renderListItem = (data, dotIcon = false) => {
        let list;

        if (isStringOrNumber(data)) {
            list = listItem(data)
        }  else if (isArray(data)) {
            list = data.map( (val, index) => {
                return isStringOrNumber(val)
                    ? listItem(val, index)
                    : renderListItem(val)
            })
        } else {
            const {item, value} = data;
            childrenCount++;
           list = <>
               {
                   dotIcon 
                    ? listItem(value, null)
                    :  <Typography variant='subtitle1' color='primary'>
                        {item}
                    </Typography>
               }
                {
                    value !== null
                    ?  isArray(value)
                        ?   childrenCount > 0 
                            ? value.map( (val, index) => mapObjectListItem(val, listItem, index) ) 
                            : value.map( (val, index) => listItem(val, index) )
                        : (isObject(value) && !isArray(value))
                            ?   mapObjectListItem(value, renderListItem)
                            :   listItem(value)
                    : ''
                }
            </>
        }

        return list   
    }

    const mapListItem = array => {
        let padding = {};
        let list = '';
        nestedCount++;

        const arrLength = array.length;
        let stringNumCount = 0;
        
        for(let count in array ) {
            if (isStringOrNumber(count)) {
                stringNumCount++;
            }
        }

        if (stringNumCount === arrLength) {
            list = (
                <List disablePadding>
                    {renderListItem(array)}
                </List>
            )
        } else {
            list = array.map( (data, index) => { 
                if (isArray(data['value'])) padding = {paddingLeft: `${nestedCount++}rem`};
                return (
                    <List key={index} disablePadding>
                        {renderListItem(data)}
                    </List>
                )
            });
        }

        return list;
    }

    const mapObjectListItem = (obj, callback, index = null) => {
        const applyPadding =  obj.item !== '' ? `${nestedCount}rem` : '';
        
        return  (
            <List style={{ paddingLeft: applyPadding }} disablePadding>
                {callback(obj, index)}
            </List>
        )
    }

    return (
        <div className={listContainer}>
            <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                {header}
            </Typography>
            {mapListItem(data)}
        </div>
    );
}

export default RenderList
