import React, {useContext, useState, useEffect} from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { makeStyles } from '@material-ui/core/styles';
import { WebContext } from '../../../contexts';

const useStyles = makeStyles({
    marginTop: {
      marginTop: '2rem'
    }
})
const PaginationLink = ({ data, apiRequestCallback }) => {

  const {getUpdates} = useContext(WebContext);

  const {data:updates , links, meta} = data;
  const {path, last_page} = meta;
  const {marginTop} = useStyles();

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    apiRequestCallback(value);
    setPage(value)
  }

  return (
    <MemoryRouter initialEntries={['/updates']} initialIndex={0}>
      <Route>
        {({ location }) => {
          return (
            <Pagination
              classes={{ ul: marginTop }}
              page={page}
              count={last_page}
              shape="rounded"
              color='primary'
              size="large"
              onChange={handleChange}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/updates${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}

export default PaginationLink