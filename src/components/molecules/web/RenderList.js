import React, {Fragment} from 'react'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paragraph, ListItemIconWithText } from '../../atoms/web';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
    marginBottom : {
        marginBottom: '1.5rem'
    },
    bold: {
        fontWeight: 600,
    },
    icon: {
        fontSize: '.5rem',
        marginRight: '.5rem'
    },
});

const RenderList = ({header = '', color='inherit', variant='subtitle1', data, dense = false}) => {
 
    const {marginBottom, bold, icon} = useStyles();

    let nestedCount = 0;
    let childrenCount = 0;

    const isObject = val => {
        return val instanceof Object;
    }

    const isArray = val => {
        return Array.isArray(val) && !null;
    }

    const isStringOrNumber = data => {
        return !isObject(data) && !isArray(data);
    }

    const listItem = data => {
        if (isObject(data)) {
            return renderListItem(data, true);
        }
        return <ListItemIconWithText text={data}> 
            <FiberManualRecordIcon className={icon} />
        </ListItemIconWithText>
    }

    const isDense = (dense, text) => {
        return dense 
        ?  text && <ListItemIconWithText text={text} />
        :  <Typography variant='h6' color='primary' className={bold} >{text}</Typography>
    }

    const isDotIcon = (dotIcon, dense, text, currentVal) => {
        return dotIcon 
        ? listItem(currentVal, null)
        : isDense(dense, text)
    }

    const isArrayAndNestedItem = (childrenCount, array) => {
        return childrenCount > 0 
            ? array.map( (val, index) => (<Fragment key={index}>{mapObjectListItem(val, listItem, index)}</Fragment>) ) 
            : array.map( (val, index) => (<Fragment key={index}>{listItem(val, index)}</Fragment>) )
    }

    const isValueAllStringOrNumber = array => {
        const arrLength = array.length;
        let stringNumCount = 0;
        
        for(let count in array ) {
            if (isStringOrNumber(count)) {
                stringNumCount++;
            }
        }
        return stringNumCount === arrLength;
    }

    const renderListItem = (data, dotIcon = false) => {
        let list;

        if (isStringOrNumber(data)) {
            list = listItem(data)
        }  else if (isArray(data)) {
            list = data.map( (val, index) => 
                <Fragment key={index}>{ isStringOrNumber(val) ? listItem(val) : renderListItem(val)} </Fragment> )
        } else {
            const {item, value} = data;
            const setMargin = dense ? null : marginBottom;
            childrenCount++;
            list = <div className={setMargin}>
               {isDotIcon(dotIcon, dense, item, value)}
                {value !== null
                    ?  isArray(value)
                        ?  isArrayAndNestedItem(childrenCount, value)
                        : (isObject(value) && !isArray(value))
                            ?   mapObjectListItem(value, renderListItem)
                            :   listItem(value)
                    : ''
                }
            </div>
        }

        return list   
    }

    const mapListItem = array => {
        let padding = {};
        let list = '';
        nestedCount++;
         
        if (isValueAllStringOrNumber(array)) {
            list = <List disablePadding>{renderListItem(array)}</List>
        } else {
            list = array.map( (data, index) => { 
                // if (isArray(data['value'])) padding = {paddingLeft: `${nestedCount++}rem`};
                return <List key={index} disablePadding style={{ marginBottom: '4rem' }} > {renderListItem(data)} </List> 
            });
        }

        return list;
    }

    const mapObjectListItem = (obj, callback) => {
        const applyPadding =  obj.item !== '' ? `${nestedCount}rem` : '';
        
        return <List style={{ paddingLeft: applyPadding }} disablePadding>{callback(obj)} </List>
    }

    return (
        <div className={marginBottom}>
            <Typography variant='h6' color='primary' className={bold}>{header}</Typography>
            {mapListItem(data)}
        </div>
    );
}

export default RenderList
