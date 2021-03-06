import React, {createContext, useState} from 'react';
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
                const defaultValue = Array.isArray(states.inputFields[key]) ? [] : '';
                emptyInputFields = {...emptyInputFields, [key]: defaultValue} 
            });
            
            inputFields = {inputFields: emptyInputFields};
        }

        if (resetErrors) {
            errors = {errors: {}}
        }

        setStates(prevState => ({
            ...prevState,
            ...inputFields,
            ...errors,
            ...statesToUpdate
        }))
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
                setStates(prevState => ({
                    ...prevState,
                    users: {...prevState.users, authenticated: getDataFromStorage(storageUserKey)},
                    isLoggedIn: true,
                }));
                updateState({isLoading: false}, null, true);
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
                updateState({isLoading: false}, null, true);
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
                updateState({isLoading: false}, null, true);
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
                updateState({isLoading: false}, null, true);
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

        Api.put(`/api/${url}/${states.users.authenticated.id}`, inputFields)
        .then(({data : {message}}) => {
            let msgType = message.includes('Nothing') ? 'info' : 'success';

            getUser()
            .then(() => {
                let destination = 'profile';

                if (url.includes('password')) {
                    destination = 'password/edit'  
                }
                updateState({isLoading: false}, null, true);
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
        .then(response => {
            setStates(prevState => ({
                ...prevState,
                logs: {...prevState.logs, all: response.data.data},
                isLoading: false
            }));
        });
    }

    const handleShowSelectedLog = selectedLogId => {
        updateState({isLoading: true});
        Api.get(`/api/logs/${selectedLogId}`)
            .then(response => {
                setStates(prevState => ({
                    ...prevState,
                    logs: {...prevState.logs, selected: response.data.data},
                    isLoading: false
                }))
            })
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
        return Api.get('/api/roles')
        .then(response => {
            setStates(prevState => ({
                ...prevState,
                roles: {...prevState.roles, all: response.data.data},
                isLoading: false
            }));
        })
    }
    
    const getSelectedRole = selectedRoleId => {
        updateState({isLoading: true});
        Api.get(`/api/roles/${selectedRoleId}`)
            .then(response => {
                setStates(prevState => ({
                    ...prevState,
                    roles: {...prevState.roles, selected: response.data.data},
                    isLoading: false
                }));
                updateState(null, null, true)
            })
            .catch(()=>{
                handleSnackbar('There was a problem retrieving the selected role', 'error');
            })
    }

    const addRole = e => {
        e.preventDefault(); 
        updateState({isLoading: true});
        Api.post('/api/roles', inputFields)
        .then(({data : {message}}) => {
            getRoles()
            .then(()=>{
                updateState({isLoading: false}, null, true);
                history.push('/dashboard/roles');
                handleSnackbar(message, 'success');
            })
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
            const msgType = message.includes('Nothing') ? 'info' : 'success';
            
            getSelectedRole(roleID);
            history.push('/dashboard/roles');
            handleSnackbar(message, msgType);
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
        return Api.get(`/api/users`)
        .then(response => {
            setStates(prevState => ({
                ...prevState,
                users: {...prevState.users, all: response.data},
                isLoading: false
            }))
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
            getUsers()
            .then(()=>{
                history.push('/dashboard/users');
                handleSnackbar(message, 'success');
            })
        })
        .catch(({response : {data: {message}}}) => {
            handleSnackbar(message, 'error');
            updateState({isLoading: false});
        });
    }

    const updateUser = userId => e => {
        e.preventDefault();
        Api.put(`/api/users/${userId}`, {roleIds: inputFields['roles']})
        .then(({data : {message}}) => {
            const msgType = message.includes('Nothing') ? 'info' : 'success';
            getSelectedUser(userId);
            getUsers()
            .then(()=>{
                history.push('/dashboard/users');
                handleSnackbar(message, msgType);
            })
        })
        .catch(({response : {data: {message}}}) => {
            handleSnackbar(message, 'error');
            updateState({isLoading: false});
        });
    }

    const getSelectedUser = selectedUserId => {
        Api.get(`/api/users/${selectedUserId}`)
            .then(response => {
                setStates(prevState => ({
                    ...prevState,
                    users: {...prevState.users, selected: response.data},
                    isLoading: false
                }))
            })
            .catch(()=>{
                updateState({isLoading: false});
                handleSnackbar('There was a problem retrieving the selected role', 'error');
            })
    }
 
    const handleUserAccountActivateDeactivation = (userId, is_active) => e => {
        e.preventDefault();
        is_active = is_active ? 1 : 0;
        updateState({isLoading: true});
        Api.put(`/api/users/status/${userId}`, {is_active})
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

    const getUpdates = () => {
        updateState({isLoading: true});
        return Api.get('/api/updates')
        .then(response => {
            setStates(prevState => ({
                ...prevState,
                updates: {...prevState.updates, all: response.data.data},
                isLoading: false
            }));
        })
    }

    const getSelectedUpdate = selectedUpdateId => {
        Api.get(`/api/updates/${selectedUpdateId}`)
            .then(response => {
                setStates(prevState => ({
                    ...prevState,
                    updates: {...prevState.updates, selected: response.data.data},
                    isLoading: false
                }))
            })
            .catch(()=>{
                updateState({isLoading: false});
                handleSnackbar('There was a problem retrieving the selected update', 'error');
            })
    }

    const updateUpdate = updateId => e => {
        e.preventDefault();
        
        Api.put(`/api/updates/${updateId}`, inputFields)
        .then(({data : {message}}) => {
            const msgType = message.includes('Nothing') ? 'info' : 'success';
            getSelectedUpdate(updateId);
            getUpdates()
            .then(()=>{
                history.push('/dashboard/updates');
                handleSnackbar(message, msgType);
            })
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            updateState({isLoading: false, errors});
        });
    }

    const addUpdate = e => {
        e.preventDefault(); 
        updateState({isLoading: true});
        Api.post('/api/updates', inputFields)
        .then(({data : {message}}) => {
            getUpdates()
            .then(()=>{
                updateState({isLoading: false}, null, true);
                history.push('/dashboard/updates');
                handleSnackbar(message, 'success');
            })
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            updateState({errors: errors, isLoading: false});
        });
    }

    const deleteUpdate = updateIDs => e => {
        e.preventDefault();
        updateState({isLoading: true});
        Api.delete(`/api/updates/${updateIDs}`)
        .then(({data : {message}}) => {
            getUpdates()
            .then(()=>{
                history.push('/dashboard/Updates');
                handleSnackbar(message, 'success');
            })
        })
        .catch(({response : {data: {message}}}) => {
            handleSnackbar(message, 'error');
            updateState({isLoading: false});
        });
    }

    const addSlides = e => {
        e.preventDefault(); 

        updateState({isLoading: true});
        Api.post('/api/slides', inputFields['slides'])
        .then(({data : {message}}) => {
            getSlides()
            .then(()=>{
                updateState({isLoading: false}, true, true);
                history.push('/dashboard/slides');
                handleSnackbar(message, 'success');
            })
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            updateState({errors: errors, isLoading: false});
        });
    }

    const getSlides = () => {
        updateState({isLoading: true});
        return Api.get('/api/slides')
        .then(response => {
            setStates(prevState => ({
                ...prevState,
                slides: {...prevState.slides, all: response.data.data},
                isLoading: false
            }))
        })
    }

    const handleSelectedSlide = id => e => {
        const {selected} = states.slides;
        
        if (selected.length > 0 && selected.indexOf(id) != -1){
            selected.splice(selected.indexOf(id), 1);
            setStates(prevState => ({
                ...prevState,
                slides: {...prevState.slides, selected: [...selected]},
            }))
        } else {
            setStates(prevState => ({
                ...prevState,
                slides: {...prevState.slides, selected: [...selected, id]},
            }))
        }
    }

    const deleteSlide = e => {
        e.preventDefault();
        const {selected} = states.slides;
        const isNotEmptySelectedSlide = selected.length > 0;
        
        if (isNotEmptySelectedSlide) {
            updateState({isLoading: true});
            Api.delete(`/api/slides/${selected}`)
            .then(({data : {message}}) => {
                getSlides()
                .then(()=>{
                    history.push('/dashboard/slides');
                    handleSnackbar(message, 'success');
                })
            })
            .catch(({response : {data: {message}}}) => {
                handleSnackbar(message, 'error');
                updateState({isLoading: false});
            });
        }
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
        getUser,
        getUsers,
        deleteUser,
        updateUser,
        getSelectedUser,
        handleUserAccountActivateDeactivation,
        getUpdates,
        getSelectedUpdate,
        updateUpdate,
        getDataFromStorage,
        addUpdate,
        deleteUpdate,
        addSlides,
        storageUserKey,
        getSlides,
        handleSelectedSlide,
        deleteSlide
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
