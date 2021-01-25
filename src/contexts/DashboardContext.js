import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Api} from '../services';
import {setDataToStorage, getDataFromStorage} from '../helpers/dashboard';
import {useSnackbarHandler} from '../hooks';
import {initialStates} from './';
const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {

    const handleSnackbar = useSnackbarHandler();

    const {userInitialState, inputInitialState, storageUserKey} = initialStates;

    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const [user, setUser] = useState(userInitialState);
    const [inputState, setInputState] = useState(inputInitialState);

    const history = useHistory();
 
    const updateInitialInputState = (key, value = '') => {
        Object.assign(inputInitialState, {[key]: value});
    }

    const handleInputChange = e => {
		const {name, value} = e.target;

		setInputState( prevState => ({
			...prevState,
			[name]: value
		}) )
    }

    const handleLogin = e => {
        e.preventDefault();
        setIsLoading(true);
        
		Api.get('/sanctum/csrf-cookie')
        .then( () => {
            Api.post('/login', inputState)
            .then( () => {
				Api.get('/api/user')
				.then(response => {
					setDataToStorage(storageUserKey, response.data)
					setUser(getDataFromStorage(storageUserKey));
                    history.push('home');
                    handleSnackbar('Successfully Logged in', 'success');
                    setInputState(inputInitialState);
                })
                setLoggedIn(true);
        })
		.catch(() => handleSnackbar('Something went wrong', 'error'))
        })
        setIsLoading(false);
    }

    const handleLogout = e => {
        e.preventDefault();
        setIsLoading(true);

        Api.post('/logout')
            .then(()=>{
                history.push('login');
                handleSnackbar('Successfully Logged out', 'success');
            })
            .catch( e => handleSnackbar('Something went wrong', 'error'))
        setIsLoading(false);
    }

    const handleSendPasswordResetLink = e => {
        e.preventDefault();
        Api.get('/sanctum/csrf-cookie')
        .then( () => {
            Api.post('/password/email', inputState)
            .then(()=>{
                history.push('/dashboard/login');
                handleSnackbar('Reset password link sent', 'success');
            })
        })
        .catch(() => handleSnackbar('Something went wrong', 'error'))
    }

    const handlePasswordReset = e => {
        e.preventDefault();
        Api.get('/sanctum/csrf-cookie')
        .then( () => {
            Api.post('/password/reset', inputState)
            .then(()=>{
                history.push('/dashboard/login');
                handleSnackbar('Password successful changed', 'success');
            })
        })
    }

    const handleRegister = e => {
        e.preventDefault();
        setIsLoading(true);

        Api.get('/sanctum/csrf-cookie')
            .then(() => {
                Api.post('/register', inputState)
                .then(() => {
                    history.push('login');
                    setInputState(inputInitialState);
                    handleSnackbar('Please check your email to activate your account', 'info');
                })
                .catch(() => handleSnackbar('Something went wrong', 'error'))
                setIsLoading(false);
            })
    }

    const provider = {
        handleLogin,
        user,
        loggedIn,
        handleInputChange,
        inputState,
        updateInitialInputState,
        handleLogout,
        handleSendPasswordResetLink,
        handlePasswordReset,
        handleSnackbar,
        isLoading,
        handleRegister
    }

    useEffect( () => {
        setInputState({...inputInitialState});
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
