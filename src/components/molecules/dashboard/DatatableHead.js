import React from 'react'
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  header: {
    borderBottom: '2px solid #E3E3FE',
    padding: '0 1rem'
  }
});
const DatatableHead = ({ order, orderBy, onRequestSort, headCells, numSelected, rowCount, onSelectAllClick }) => {

  const {visuallyHidden, header} = useStyles();

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

      return (
        <TableHead>
          <TableRow>
            <TableCell  variant='head' padding="checkbox" style={{ borderBottom: '2px solid #E3E3FE' }}>
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{ 'aria-label': 'select all items' }}
              />
            </TableCell>
            {headCells.map(headCell => (
              <TableCell
              variant='head'
                className={header}
                key={headCell.id}
                align={headCell.numeric ? 'center' : 'left'}
                padding='default'
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {<p style={{ fontWeight: 600 }}>{headCell.label}</p>}
                  {orderBy === headCell.id ? (
                    <span className={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      );
}

DatatableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};

export default DatatableHead

  
