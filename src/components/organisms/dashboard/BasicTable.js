import React, {Fragment} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import {
    capitalizeAllFirstLetter,
    getStringDescriptionFromArrayObject,
    capitalizeAllFirstLetterAndTransform
} from '../../../helpers';

const useStyles = makeStyles({
    table: {
        maxWidth: '100%'
    }
});

const replaceWordAndCapitalized = word => {
    const newWord = word === 'attributes' ? 'new' : word;
    return strongWord(capitalizeAllFirstLetter(newWord)); 
}

const strongWord = word => {
    return <strong>{word}</strong>
}

const strongFirstCapitalizedTransform = word => {
    return <>{strongWord(capitalizeAllFirstLetterAndTransform(word))} :</>;
}

const filterObjectToOldAndNewAttibutesOnly = obj => {
    let onlyOldAndNewAttributes = {};

    if (Object.keys(obj).length) {
        Object.keys(obj).forEach(key => {
            if (key === 'attributes' || key === 'old') {
                onlyOldAndNewAttributes = {
                    ...onlyOldAndNewAttributes,
                    [key]: obj[key]
                }
            }
        });
    }
   
    return onlyOldAndNewAttributes;
}

const alterData = obj => {
    let alteredData = {};

    if (Object.keys(obj).length > 0) {
        Object.keys(obj['attributes']).forEach((attribute, index) => {

            if(Object.keys(obj).indexOf('old') !== -1) {
                Object.keys(obj['old']).forEach((old, index2) => {
                    if (index === index2) {
                        alteredData = {
                            ...alteredData,
                            [attribute]: [
                                obj['attributes'][attribute],
                                obj['old'][old],
                            ]
                        }
                    }
                })
            } else {
                alteredData = {
                    ...alteredData,
                    [attribute]: [
                        obj['attributes'][attribute],
                    ]
                }
            }
        });
    }

    return alteredData;
}

const renderTableRow = (left = null, right = null, index = null) => {
    return (
        <TableRow key={index}>
            <TableCell style={{ minWidth: '50px' }}>{left}</TableCell>
            <TableCell align="left">{right}</TableCell>
        </TableRow>
    )
}

const renderTablePropertiesRow = (obj, key, index) => {
    // obj = properties: {attributes:{...}, old: {...}, user: 'dwcladmin', sample: ''}
    // key = attributes, old
    
    const onlyOldAndNewAttributes = filterObjectToOldAndNewAttibutesOnly(obj);
    const alteredData = alterData(onlyOldAndNewAttributes);
    const isOnlyNewAttributes = Object.keys(onlyOldAndNewAttributes).length == 1;
    const isArrayNotNull = Array.isArray(obj) && !null;

    const renderRowsForArrayListDescription = obj => {
        const arrayValues = getStringDescriptionFromArrayObject(obj);
    return renderTableRow(<>{replaceWordAndCapitalized(key)} :</>, arrayValues);
    }

    const renderOnlyNewAttibutes = () => {
        return Object.keys(alteredData).map(data => alteredData[data].map(val => val !== null && renderTableRow(<>{data}: <u>{val}</u></>)))
    }

    const renderBothNewAndOldAttributes = () => {
            return Object.keys(alteredData).map((data, index) => 
            <TableRow key={index}>
                {alteredData[data].map((val, index2) => {
                    return <TableCell key={index2} align="left">{data}: <u>{val}</u> </TableCell>
                })}
            </TableRow>
        )
    }

    const renderPropertiesNewOrOldHeader = () => {
        return <TableRow>
            {!isOnlyNewAttributes &&
                Object.keys(onlyOldAndNewAttributes).map((key, index) => {
                    return <TableCell key={index} align="left">{replaceWordAndCapitalized(key)}</TableCell>
                })
            }
        </TableRow>
    }

    return (
        <Fragment key={index}>
            {Object.keys(alteredData).length > 0 && renderTableRow(strongFirstCapitalizedTransform(key))}
            {renderPropertiesNewOrOldHeader()}
            {isArrayNotNull 
                ? renderRowsForArrayListDescription(obj)
                : isOnlyNewAttributes 
                    ? renderOnlyNewAttibutes() 
                    : renderBothNewAndOldAttributes()
            }
        </Fragment>
    )
}

const BasicTable = ({ data }) => {
    const {table} = useStyles();

    if (Object.keys(data).length > 0){
     
       return (
        <TableContainer component={Paper}>
          <Table className={table}>
            <TableBody>
                {data.map(item => {
                    const keys = Object.keys(item);

                    return keys.map((key, index) => {
                        let tableRow =  ''

                        if (item[key] instanceof Object) {
                            tableRow = renderTablePropertiesRow(item[key], key, index)
                        } else {
                            tableRow = renderTableRow(strongFirstCapitalizedTransform(key), item[key], index)
                        }

                        return tableRow;
                    })
                })}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
}

export default BasicTable