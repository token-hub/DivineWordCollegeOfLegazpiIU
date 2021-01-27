import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Api} from '../services';
import {setDataToStorage, getDataFromStorage} from '../helpers/dashboard';
import {useSnackbarHandler} from '../hooks';
import {initialStates} from './';
const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {

    const handleSnackbar = useSnackbarHandler();
    const [states, setStates] = useState(initialStates);
    const {inputFields, storageUserKey} = states;
    const history = useHistory();
 
    const updateInitialInputState = (key, value = '') => {
        Object.assign(initialStates.inputFields, {[key]: value});
    }
   
    const resetInputFieldsValue = inputFields => {
        const keys = Object.keys(inputFields);
        let emptyInputFields = {};
        keys.map(key => {
            return  emptyInputFields = {...emptyInputFields, [key]: ''} 
        });
        
        setStates({...states, inputFields: emptyInputFields, errors: {}})
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

    const handleLogin = e => {
        e.preventDefault();
        setStates({...states, isLoading: true});
        
		Api.get('/sanctum/csrf-cookie')
        .then( () => {
            Api.post('/login', inputFields)
            .then( () => {
                Api.get('/api/user')
                .then(response => {
                    setDataToStorage(storageUserKey, response.data)
                    setStates({...states, user: getDataFromStorage(storageUserKey), sample: {}});
                    resetInputFieldsValue(inputFields);
                    history.push('/dashboard/home');

                    // I have to reset the state so I dont have to use reload()
                    // just to make the username appear on the page
                    setStates({...states}); 
                    handleSnackbar('Successfully Logged in', 'success');
                })
                setStates({...states, isLoggedIn: true});
            })
            .catch(({response : {data: {message, errors}}}) => {
                handleSnackbar(message, 'error');
            });
            setStates({...states, isLoading: false});
        })
        .catch(() => handleSnackbar('Cookie Error', 'error'))
    }

    const handleLogout = e => {
        e.preventDefault();
        setStates({...states, isLoading: true});

        Api.post('/logout')
            .then(()=>{
                setStates({...states, user: {}, isLoading: false});
                resetInputFieldsValue(inputFields);
                localStorage.clear();
                history.push('/dashboard/login');
                handleSnackbar('Successfully Logged out', 'success');
            })
    }

    const handleSendPasswordResetLink = e => {
        e.preventDefault();

        Api.get('/sanctum/csrf-cookie')
        .then( () => {
            Api.post('/password/email', inputFields)
            .then(()=>{
                history.push('/dashboard/login');
                handleSnackbar('Reset password link sent', 'success');
                resetInputFieldsValue(inputFields);
            })
            .catch(({response : {data: {message, errors}}}) => {
                handleSnackbar(message, 'error');
                setStates({...states, errors: errors});
            });
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            setStates({...states, errors: errors});
        });
    }

    const handlePasswordReset = e => {
        e.preventDefault();

        Api.get('/sanctum/csrf-cookie')
        .then( () => {
            Api.post('/password/reset', inputFields)
            .then(()=>{
                history.push('/dashboard/login');
                handleSnackbar('Password successful changed', 'success');
            })
        })
        resetInputFieldsValue(inputFields);
        
    }
    
    const handleRegister = e => {
        e.preventDefault();
        setStates({...states, isLoading: true});
     
        Api.get('/sanctum/csrf-cookie')
            .then(() => {
                Api.post('/register', inputFields)
                .then(() => {
                    resetInputFieldsValue(inputFields);
                    history.push('/dashboard/login');
                    handleSnackbar('Please check your email to activate your account', 'info');
                })
                .catch(({response : {data: {message, errors}}}) => {
                    handleSnackbar(message, 'error');
                    setStates({...states, errors: errors});
                });
                setStates({...states, isLoading: false});
            })
    }

    const handleChangePassword = e => {
        e.preventDefault();
        
        Api.put(`/api/password/update/${states.user.id}`, inputFields)
        .then(({data: {messages}}) => {
            resetInputFieldsValue(inputFields);
            history.push('/dashboard/profile');
            handleSnackbar(messages, 'success');
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            setStates({...states, errors: errors});
        });
    }

    const provider = {
        states,
        setStates,
        handleLogin,
        handleInputChange,
        updateInitialInputState,
        handleLogout,
        handleChangePassword,
        handleSendPasswordResetLink,
        handlePasswordReset,
        handleSnackbar,
        handleRegister
    }

    useEffect(() => {
        setStates({
            ...initialStates,
            inputFields: {...initialStates.inputFields}
        });
    }, []);

    return (
        <DashboardContext.Provider value={provider} >
            {children}
        </DashboardContext.Provider>
    )
}

export {
    DashboardContext, DashboardProvider
}
