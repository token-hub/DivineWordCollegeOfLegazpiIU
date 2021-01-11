import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

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
    paragraph: {
        marginBottom: '1.5rem',
        [theme.breakpoints.only('xs')] : {
            textAlign: 'center'
        }
    },
}));

const RenderTable = ({ tableHead = [], tableBody, size = 'medium', header = '' }) => {

    const { table, bold, paragraph } = useStyles();

    return (
        <div className={paragraph}>
            <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                {header}
            </Typography>
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
                                                <TableCell key={index} align="left">{body[key]}</TableCell>
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
        </div>
    )
}

export default RenderTable
