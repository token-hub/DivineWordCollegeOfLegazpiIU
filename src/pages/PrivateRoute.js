import React, {useContext, useEffect} from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import {DashboardContext} from '../contexts';
import {checkCookieIsExpired} from '../helpers';
import {HomeDashboard} from './dashboard';
import {Login} from './dashboard/Authentication';

const PrivateRoute = ({ children, ...rest }) => {
  const {states, getDataFromStorage, storageUserKey, updateState} = useContext(DashboardContext);
  const {users: {authenticated}} = states;
  const {pathname} = useLocation();
  const pagesToCheckIfThereAuthenticatedUser = ['login', 'register', 'verification', 'reset',];
  const checkUserStorageIsNotEmpty = () => {
    return getDataFromStorage(storageUserKey) === null ? false : true;
  }
 
  useEffect(() => {
    if (Object.keys(authenticated).length < 1 && checkUserStorageIsNotEmpty()) {
      updateState({users: {...states.users, authenticated: getDataFromStorage(storageUserKey)}});
    }
  }, [authenticated]);

  
  const isAuthUserAccessingGuestPages = Object.keys(authenticated).length > 0 && 
    pagesToCheckIfThereAuthenticatedUser.includes(pathname.split('/').pop());

  const loginPage = () => {
    localStorage.clear();

    return  <>
      <Redirect to='/dashboard/login'></Redirect> 
      <Route path="/dashboard/login" exact component={Login} />
    </>
  }

  const homePage = () => {
    return <>
      <Redirect to='/dashboard/home'></Redirect> 
      <Route path="/dashboard/home" exact component={HomeDashboard}></Route>
    </>
  }

  return (
    <Route {...rest}>
      {
        checkCookieIsExpired('XSRF-TOKEN')
        ? isAuthUserAccessingGuestPages
          ? children
          : loginPage()
        : Object.keys(authenticated).length > 1
          && isAuthUserAccessingGuestPages
            ? homePage()
            : children
      }
    </Route>
  );
};
export default PrivateRoute;