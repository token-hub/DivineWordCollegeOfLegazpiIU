import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Paragraph} from '../../../components/atoms/web';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
        [theme.breakpoints.only('xs')] : {
            minWidth: 300,
        }
    },
    bold: {
        fontWeight: 600
    },
    margin: {
        marginBottom: '1.5rem',
        [theme.breakpoints.only('xs')] : {
            textAlign: 'center'
        }
    },
}));

const RenderTable = ({ tableHead = [], tableBody, size = 'medium', header = '' }) => {

    const { table, margin } = useStyles();

    return (
        <div className={margin}>
            <Paragraph color='primary' bold>{header}</Paragraph>
            <TableContainer >
                <Table className={table} size={size}>
                    <TableHead>
                    <TableRow>
                        {tableHead ? 
                            tableHead.map( (head, index) =>
                                <TableCell key={index} align="left">{head}</TableCell>
                            ): ''
                        }
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tableBody.map( (body, index) => {
                        const keys = Object.keys(body);
                        const data = (keys.length > 2 && keys.pop() !== 'sublinks') ? keys.pop() : keys;
                            return (<TableRow key={index}>
                                        {data.map((key, index) => 
                                            <TableCell key={index} align="left">{body[key]}</TableCell>
                                        )}
                                    </TableRow>)
                            }
                        )
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default RenderTable
