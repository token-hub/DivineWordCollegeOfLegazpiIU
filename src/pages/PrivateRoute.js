import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {DashboardContext} from '../contexts';

const PrivateRoute = ({ children, ...rest }) => {

  const {user, loggedIn} = useContext(DashboardContext);
  // const isUser = loggedIn && user;
  const isUser = user;

  return (
    <Route {...rest}>
        {isUser ? children : <Redirect to='/dashboard/login'></Redirect>}
    </Route>
  );
};
export default PrivateRoute;