import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Api} from '../services';
import {setDataToStorage, getDataFromStorage} from '../helpers/dashboard';
import {updateInitialInputState, checkCookieIsExpired} from '../helpers';
import {useSnackbarHandler} from '../hooks';
import {initialStates} from './';

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {

    const handleSnackbar = useSnackbarHandler();
    const [states, setStates] = useState({...initialStates});
    const {inputFields, storageUserKey} = states;
    const history = useHistory();
   
    const updateState = (statesToUpdate = {}, resetInputFields = false, resetErrors = false) => {
       
        let emptyInputFields = {};
        let inputFields = {};
        let errors = {}

        if (resetInputFields) {
            const keys = Object.keys(states.inputFields);
            keys.forEach(key => {
                emptyInputFields = {...emptyInputFields, [key]: ''} 
            });
            inputFields = {inputFields: emptyInputFields};
        }

        if (resetErrors) {
            errors = {errors: {}}
        }

        setStates({...states, ...inputFields, ...errors, ...statesToUpdate})
    }

    const setXsrfToken = () => {
        if (checkCookieIsExpired('XSRF-TOKEN')) {
            localStorage.clear();
            return Api.get('/sanctum/csrf-cookie');
        }
        return Promise.resolve();
    }

    const handleInputChange = e => {
		const {name, value} = e.target;

		setStates(prevState => ({
			...prevState,
            inputFields: {
                ...prevState.inputFields,
                [name]: value
            }
		}))
    }

    const getUser = () => {
        return Api.get('/api/user')
            .then(response => {
                setDataToStorage(storageUserKey, response.data)
                updateState({users: {...states.users, authenticated: getDataFromStorage(storageUserKey)}, isLoggedIn: true}, null, true);
            })
            .catch(({response : {data: {message}}}) => {
                handleSnackbar(message, 'error');
            });
    }

    const handleLogin = e => {
        e.preventDefault();
        updateState({isLoading: true});
        setXsrfToken()
        .then(()=>{
            Api.post('/login', inputFields)
            .then(({data : {message}}) => {
                if (message.includes('active')) {
                    history.push('/dashboard/email/verification');
                    handleSnackbar(message, 'info');
                } else {
                    getUser()
                    .then(()=>{
                        updateState({isLoading: false});
                        history.push('/dashboard/home');
                        handleSnackbar(message, 'success');
                    })
                }
            })
            .catch(({response : {data: {message}}}) => {
                handleSnackbar(message, 'error');
                updateState(null, null, true);
            });
        })
    }

    const handleLogout = e => {
        e.preventDefault();
        updateState({isLoading: true});

        Api.post('/logout')
            .then(()=>{
                localStorage.clear();
                updateState({users: initialStates.users, isLoading: false}, true, true);
                history.push('/dashboard/login');
                handleSnackbar('Successfully Logged out', 'success');
            })
    }

    const handleSendPasswordResetLink = e => {
        e.preventDefault();
        setXsrfToken()
        .then(()=>{
            Api.post('/password/email', inputFields)
            .then(()=>{
                history.push('/dashboard/login');
                handleSnackbar('Reset password link sent', 'success');
                updateState(null, true);
            })
            .catch(({response : {data: {message, errors}}}) => {
                handleSnackbar(message, 'error');
                updateState(null, null, true);
            });
        })
    }

    const handlePasswordReset = e => {
        e.preventDefault();
        setXsrfToken()
        .then(()=>{
            Api.post('/password/reset', inputFields)
            .then(()=>{
                history.push('/dashboard/login');
                handleSnackbar('Password successful changed', 'success');
            })

            updateState(null, true);  
        });
    }

    const handleResendVerificationLink = e => {
        e.preventDefault();

        setXsrfToken()
        .then(()=>{
            Api.post('/email/resend')
            .then(()=>{
                handleSnackbar('A fresh verification link has been sent to your email address.', 'success');
            })
            .catch(({response : {data: {message, errors}}}) => {
                handleSnackbar(message, 'error');
                updateState(null, null, true);
            });
        });
    }
    
    const handleRegister = e => {
        e.preventDefault();
        updateState({isLoading: true});
        setXsrfToken()
        .then(()=>{
            Api.post('/register', inputFields)
            .then(() => {
                updateState({isLoading: false}, true, true);
                history.push('/dashboard/login');
                handleSnackbar('Please check your email to activate your account', 'info');
            })
            .catch(({response : {data: {message, errors}}}) => {
                handleSnackbar(message, 'error');
                updateState({isLoading: false}, null, true);
            });
        });
    }
    
    const returnBackToDashboardProfile = (e, url) => { 
        e.preventDefault();
        updateState({isLoading: true});

        Api.put(`/api/${url}/${states.authenticated.user.id}`, inputFields)
        .then(({data : {message}}) => {
            let msgType = 'success';

            getUser()
            .then(() => {
                let destination = 'profile';

                if (url.includes('password')) {
                    destination = 'password/edit'  
                }
                updateState({isLoading: true}, null, true);
                history.push(`/dashboard/${destination}`);
                handleSnackbar(message, msgType); 
            })
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            updateState({errors: errors, isLoading: true}, null, true);
        });
    }
    
    const handleChangePassword = e => {
        returnBackToDashboardProfile(e, 'password/update');
    }
    
    const handleChangeProfileInfo = e => {
        returnBackToDashboardProfile(e, 'profile');
    }

    const getLogs = () => {
        updateState({isLoading: true});
        Api.get('/api/logs')
        .then(response => updateState({logs: {...states.logs, all: response.data.data }, isLoading: false}));
    }

    const handleShowSelectedLog = selectedLogId => {
        updateState({isLoading: true});
        Api.get(`/api/logs/${selectedLogId}`)
            .then(response => updateState({ logs: {...states.logs, selected: response.data.data}, isLoading: false }))
            .catch(()=>{
                handleSnackbar('There was a problem retrieving the selected log', 'error');
            })
    }

    const getPermissions = () => {
        updateState({isLoading: true});
        Api.get('/api/permissions')
        .then(response => updateState({permissions: response.data.data, isLoading: false}))
    }

    const getRoles = () => {
        updateState({isLoading: true});
        Api.get('/api/roles')
        .then(response => updateState({roles: {...states.roles, all: response.data.data }, isLoading: false}))
    }

    const getSelectedRole = selectedRoleId => {
        updateState({isLoading: true});
        Api.get(`/api/roles/${selectedRoleId}`)
            .then(response => updateState({roles: {...states.roles, selected: response.data.data}, isLoading: false }))
            .catch(()=>{
                handleSnackbar('There was a problem retrieving the selected role', 'error');
            })
    }

    const addRole = e => {
        e.preventDefault();
        updateState({isLoading: true});
        Api.post('/api/roles', inputFields)
        .then(({data : {message}}) => {
            updateState({isLoading: false}, true, true);
            history.push('/dashboard/roles');
            handleSnackbar(message, 'success');
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            updateState({errors: errors, isLoading: false});
        });
    }

    const updateRole = roleID => e => {
        e.preventDefault();
        updateState({isLoading: true});
        Api.put(`/api/roles/${roleID}`, inputFields)
        .then(({data : {message}}) => {
            updateState({isLoading: false}, null, true);
            history.push('/dashboard/roles');
            handleSnackbar(message, 'success');
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            updateState({errors: errors, isLoading: false});
        });
    }

    const deleteRole = roleIDs => e => {
        e.preventDefault();
        updateState({isLoading: true});
        Api.delete(`/api/roles/${roleIDs}`)
        .then(({data : {message}}) => {
            Api.get('/api/roles')
            .then(response => {
                updateState({roles: {...states.roles, all: response.data.data }, isLoading: false})
                history.push('/dashboard/roles');
                handleSnackbar(message, 'success');
            })
        })
        .catch(({response : {data: {message}}}) => {
            handleSnackbar(message, 'error');
            updateState({isLoading: false});
        });
    }

    const getUsers = () => {
        updateState({isLoading: true});
        Api.get(`/api/users`)
        .then(response => {
            updateState({users: {...states.users, all: response.data }, isLoading: false})
        })
        .catch(() => {
            handleSnackbar('Failed to retrieve users', 'error');
            updateState({isLoading: false});
        });
    }

    const deleteUser = userIDs => e => {
        e.preventDefault();
        updateState({isLoading: true});
        Api.delete(`/api/users/${userIDs}`)
        .then(({data : {message}}) => {
            Api.get('/api/users')
            .then(response => {
                updateState({users: {...states.users, all: response.data}, isLoading: false})
                history.push('/dashboard/users');
                handleSnackbar(message, 'success');
            })
        })
        .catch(({response : {data: {message}}}) => {
            handleSnackbar(message, 'error');
            updateState({isLoading: false});
        });
    }

    const getSelectedUser = selectedUserId => {
        updateState({isLoading: true});
        Api.get(`/api/users/${selectedUserId}`)
            .then(response => updateState({users: {...states.users, selected: response.data}, isLoading: false }))
            .catch(()=>{
                updateState({isLoading: false});
                handleSnackbar('There was a problem retrieving the selected role', 'error');
            })
    }

    const handleUserAccountActivateDeactivation = (userId, is_active) => e => {
        e.preventDefault();
        is_active = is_active ? 1 : 0;
        updateState({isLoading: true});
        Api.put(`/api/users/${userId}`, {is_active})
        .then(({data : {message}}) => {
            Api.get(`/api/users`)
            .then(response=>{
                handleSnackbar(message, 'success');
                updateState({users: {...states.users, all: response.data }, isLoading: false})
            })
        })
        .catch(({response : {data: {message}}}) => {
            handleSnackbar(message, 'error');
        });
    }

    const provider = {
        states,
        setStates,
        updateState,
        handleLogin,
        handleInputChange,
        updateInitialInputState,
        handleLogout,
        handleChangePassword,
        handleSendPasswordResetLink,
        handlePasswordReset,
        handleSnackbar,
        handleRegister,
        handleChangeProfileInfo,
        handleResendVerificationLink,
        getLogs,
        handleShowSelectedLog,
        getPermissions,
        getRoles,
        addRole,
        updateRole,
        deleteRole,
        getSelectedRole,
        getUsers,
        deleteUser,
        getSelectedUser,
        handleUserAccountActivateDeactivation,
        getDataFromStorage,
        storageUserKey
    }

    return (
        <DashboardContext.Provider value={provider} >
            {children}
        </DashboardContext.Provider>
    )
}

export {
    DashboardContext, DashboardProvider
}
