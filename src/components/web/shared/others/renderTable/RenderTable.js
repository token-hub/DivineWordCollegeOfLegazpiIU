import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
        [theme.breakpoints.only('xs')] : {
            minWidth: 300,
        }
    },
}));

const RenderTable = ({ tableHead = [], tableBody, size = 'medium' }) => {

    const { table } = useStyles();

    return (
        <TableContainer >
            <Table className={table} aria-label="simple table" size={size}>
                <TableHead>
                <TableRow>
                    {
                        tableHead ? 
                            tableHead.map( (head, index) =>(
                                <TableCell key={index} align="left">{head}</TableCell>
                            ) )
                                : ''
                    }
                </TableRow>
                </TableHead>
                <TableBody>
                {
                    tableBody.map( (body, index) => {
                        const data = Object.keys(body).length > 2 ? Object.keys(body).pop() : Object.keys(body);

                        return (
                                <TableRow key={index}>
                                    {   
                                        data.map((key, index) => (
                                            <TableCell align="left">{body[key]}</TableCell>
                                        ))
                                    }
                                </TableRow>
                            )
                        }
                    )
                }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RenderTable
