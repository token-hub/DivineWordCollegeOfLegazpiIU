import React, {Fragment} from 'react'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paragraph, ListItemIconWithText } from '../../atoms/web';

const useStyles = makeStyles({
    marginBottom : {
        marginBottom: '1.5rem'
    }
});

const RenderList = ({header = '', color='inherit', variant='subtitle1', data, dense = false}) => {
 
    const {marginBottom} = useStyles();

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

    const listItem = (data) => {
        if (isObject(data)) {
            return renderListItem(data, true);
        }
        return <ListItemIconWithText text={data} />
    }

    const renderListItem = (data, dotIcon = false) => {
        let list;

        if (isStringOrNumber(data)) {
            list = listItem(data)
        }  else if (isArray(data)) {
            list = data.map( (val, index) => (
                <Fragment key={index}>{ isStringOrNumber(val) ? listItem(val) : renderListItem(val)} </Fragment>
            ))
        } else {
            const {item, value} = data;
            childrenCount++;
           list = <>
               {dotIcon 
                    ? listItem(value, null)
                    : dense 
                        ?  item && <ListItemIconWithText text={item} />
                        :  <Paragraph variant='h6' color='primary' bold>{item}</Paragraph>
               }
                {value !== null
                    ?  isArray(value)
                        ?   childrenCount > 0 
                ? value.map( (val, index) => (<Fragment key={index}>{mapObjectListItem(val, listItem, index)}</Fragment>) ) 
                : value.map( (val, index) => (<Fragment key={index}>{listItem(val, index)}</Fragment>) )
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
         
        // check if the array given is all string/number type
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

    const mapObjectListItem = (obj, callback) => {
        const applyPadding =  obj.item !== '' ? `${nestedCount}rem` : '';
        
        return  (
            <List style={{ paddingLeft: applyPadding }} disablePadding>
                {callback(obj)}
            </List>
        )
    }

    return (
        <div className={marginBottom}>
            <Paragraph variant='h6' color='primary' bold>{header}</Paragraph>
            {mapListItem(data)}
        </div>
    );
}

export default RenderList
