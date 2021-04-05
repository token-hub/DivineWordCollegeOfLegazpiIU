import React, {useContext, useEffect} from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import {DashboardContext} from '../contexts';
import {checkCookieIsExpired} from '../helpers';
import {useRouteMatch, Switch} from 'react-router-dom';
import {
	Login,
	Register,
	PasswordEdit,
	EmailVerification,
	ManagePasswordReset,
} from '../pages/dashboard/Authentication';
import {
	HomeDashboard,
	Profile,
	ManageLogs,
} from '../pages/dashboard';
import {
	Slides,
	ManageSlide
} from '../pages/dashboard/Slides';
import {
	Roles,
	ManageRoles,
} from '../pages/dashboard/UserManagement/Roles';
import {
	DashboardUpdates,
	ManageUpdates,
} from '../pages/dashboard/Updates';
import PageNotFound from './PageNotFound';
import {
	Users,
	ManageUsers,
} from '../pages/dashboard/UserManagement/Users';
import {Permissions} from '../pages/dashboard/UserManagement';

const PrivateRoute = () => {
  let { path } = useRouteMatch();
  const {
    states:{users:{authenticated}}, 
    getDataFromStorage, 
    getUser, 
    storageUserKey
  } = useContext(DashboardContext);

  const isAuthenticatedUserIsEmpty = Object.keys(authenticated).length < 1;
  const {pathname} = useLocation();
  const pagesToCheckIfThereAuthenticatedUser = ['login', 'register', 'verification', 'reset'];

  const checkUserStorageIsNotEmpty = () => {
    return getDataFromStorage(storageUserKey) === null ? false : true;
  }
 
  useEffect(() => {
    if (isAuthenticatedUserIsEmpty && checkUserStorageIsNotEmpty()) {
      getUser();
    }
  }, [authenticated]);

  const isAuthUserAccessingGuestPages = pagesToCheckIfThereAuthenticatedUser.includes(pathname.split('/').pop());

  const loginPage = () => {
    return <Redirect to='/dashboard/login'></Redirect> 
  }

  const homePage = () => {
    return <Redirect to='/dashboard/home'></Redirect> 
  }

  const redirect = location => {
    return <Redirect to={location}></Redirect> 
  }

  return (
    <>
        <Switch>
          <Route path={`${path}/login`} exact component={Login} />
          <Route path={`${path}/register`} exact component={Register} />
          <Route path={`${path}/email/verification`} exact component={EmailVerification} />
          {/* Password/reset is for unathenticated user that forgotted their password */}
          <Route path={`${path}/password/reset`} exact component={ManagePasswordReset} />

          <Route path={`${path}/home`} exact component={HomeDashboard} />
          <Route path={`${path}/users`} exact component={Users} />
          <Route path={`${path}/users/:user`} exact component={ManageUsers} />
          <Route path={`${path}/users/:user/edit`} exact component={ManageUsers} />
          <Route path={`${path}/permissions`} exact component={Permissions} />
          <Route path={`${path}/roles`} exact component={Roles} />
          <Route path={`${path}/role`} exact component={ManageRoles} />
          <Route path={`${path}/role/:role`} exact component={ManageRoles} />
          <Route path={`${path}/role/:role/edit`} exact component={ManageRoles} />
          <Route path={`${path}/profile`} exact component={Profile} />
          {/* Password/edit is for authenticated user that wants to change password */}
          <Route path={`${path}/password/edit`} exact component={PasswordEdit} />
          <Route path={`${path}/updates`} exact component={DashboardUpdates} />
          <Route path={`${path}/update`} exact component={ManageUpdates} />
          <Route path={`${path}/update/:update`} exact component={ManageUpdates} />
          <Route path={`${path}/update/:update/edit`} exact component={ManageUpdates} />
          <Route path={`${path}/logs`} exact component={ManageLogs} />
          <Route path={`${path}/logs/:log`} exact component={ManageLogs} />
          <Route path={`${path}/slides`} exact component={Slides} />
          <Route path={`${path}/slide`} exact component={ManageSlide} />
          <Route component={PageNotFound} />
      </Switch>

      {/* 
        if cookie
          if user
            if user accessing guest page
              redirect to dashboard home page
            else
              show desired page
          else no user
            then show guest pages
        else 
          show guest pages
      */}
      {
        checkCookieIsExpired('XSRF-TOKEN')
        ? loginPage()
        : checkUserStorageIsNotEmpty()
          ? isAuthUserAccessingGuestPages 
            ? homePage()
            : redirect(pathname)
          : loginPage()
      }
    </>
  )
};
export default PrivateRoute;