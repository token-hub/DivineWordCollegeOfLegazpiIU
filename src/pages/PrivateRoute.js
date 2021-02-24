import React, {useContext, useEffect} from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import {DashboardContext} from '../contexts';
import {checkCookieIsExpired} from '../helpers';
import {HomeDashboard} from './dashboard';
import {Login} from './dashboard/Authentication';

const PrivateRoute = ({ children, ...rest }) => {
  const {states, getDataFromStorage, getPermissions, getRoles, getUsers, getUser, storageUserKey, setStates} = useContext(DashboardContext);
  const {users, permissions, roles} = states;  
  const {authenticated} = users;
  const isPermissionEmpty = Object.keys(permissions).length < 1;
  const isRolesEmpty = Object.keys(roles.all).length < 1;
  const isUsersEmpty = Object.keys(users.all).length < 1;
  const {pathname} = useLocation();
  const pagesToCheckIfThereAuthenticatedUser = ['login', 'register', 'verification', 'reset',];
  const checkUserStorageIsNotEmpty = () => {
    return getDataFromStorage(storageUserKey) === null ? false : true;
  }
 
  useEffect(() => {
    if (Object.keys(authenticated).length < 1 && checkUserStorageIsNotEmpty()) {
      getUser();
    }
  }, [authenticated]);

  useEffect(()=>{
    if(isRolesEmpty) {
      getRoles();
    }

    if(isPermissionEmpty) {
      getPermissions();
    }

    if (isUsersEmpty) {
      getUsers();
    }
  }, []);
  
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