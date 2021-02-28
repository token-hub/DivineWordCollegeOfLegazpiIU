import React, {useContext, useEffect} from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import {DashboardContext} from '../contexts';
import {checkCookieIsExpired} from '../helpers';
import {HomeDashboard} from './dashboard';
import {Login} from './dashboard/Authentication';

const PrivateRoute = ({ children, ...rest }) => {
  const {
    states, 
    getDataFromStorage, 
    getPermissions, 
    getRoles, 
    getUsers, 
    getUser, 
    getUpdates,
    getLogs, 
    storageUserKey
  } = useContext(DashboardContext);

  const {users, permissions, roles, updates, logs} = states;  
  const {authenticated} = users;
  const isPermissionsEmpty = Object.keys(permissions).length < 1;
  const isRolesEmpty = Object.keys(roles.all).length < 1;
  const isUsersEmpty = Object.keys(users.all).length < 1;
  const isUpdatesEmpty = Object.keys(updates.all).length < 1;
  const isLogsEmpty = Object.keys(logs.all).length < 1;
  const isAuthenticatedUserIsEmpty = Object.keys(authenticated).length < 1;
  const {pathname} = useLocation();
  const pagesToCheckIfThereAuthenticatedUser = ['login', 'register', 'verification', 'reset',];
  const checkUserStorageIsNotEmpty = () => {
    return getDataFromStorage(storageUserKey) === null ? false : true;
  }
 
  useEffect(() => {
    if (isAuthenticatedUserIsEmpty && checkUserStorageIsNotEmpty()) {
      getUser();
    }
  }, [authenticated]);

  const checkCookieAndRunMethodIf = (condition, method) => {
   if (!checkCookieIsExpired('XSRF-TOKEN')){
      if(condition) {
        method();
      }
    }
  }

  useEffect(()=>{
    checkCookieAndRunMethodIf(isRolesEmpty, getRoles);
  }, [roles]);
  
  useEffect(()=>{
    checkCookieAndRunMethodIf(isPermissionsEmpty, getPermissions);
  }, [permissions]);

  useEffect(()=>{
    checkCookieAndRunMethodIf(isUsersEmpty, getUsers);
  }, []);

  useEffect(()=>{
    checkCookieAndRunMethodIf(isUpdatesEmpty, getUpdates);
  }, [updates]);

  useEffect(()=>{
    checkCookieAndRunMethodIf(isLogsEmpty, getLogs);
  }, [logs]);
  
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
        : !isAuthenticatedUserIsEmpty
          && isAuthUserAccessingGuestPages
            ? homePage()
            : children
      }
    </Route>
  );
};
export default PrivateRoute;