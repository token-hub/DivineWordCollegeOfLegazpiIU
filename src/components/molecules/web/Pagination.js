import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    marginTop: {
      marginTop: '2rem'
    }
})

export default function PaginationLink() {

    const {marginTop} = useStyles();

  return (
    <MemoryRouter initialEntries={['/updates']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 10);
          return (
            <Pagination
              classes={{ ul: marginTop }}
              page={page}
              count={10}
              shape="rounded"
              color='primary'
              size="large"
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