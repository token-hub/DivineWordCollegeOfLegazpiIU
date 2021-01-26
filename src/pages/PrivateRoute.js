import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {DashboardContext} from '../contexts';

const PrivateRoute = ({ children, ...rest }) => {

  const {states: {user, isLoggedin}} = useContext(DashboardContext);
  // const isUser = loggedIn && user;

  return (
    <Route {...rest}>
        {user ? children : <Redirect to='/dashboard/login'></Redirect>}
    </Route>
  );
};
export default PrivateRoute;