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
        setStates({...states, inputFields: emptyInputFields})
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
                    setStates({...states, user: getDataFromStorage(storageUserKey)});
                    resetInputFieldsValue(inputFields);
                    history.push('home');
                    handleSnackbar('Successfully Logged in', 'success');
                })
                setStates({...states, isLoggedIn: true});
            })
            .catch(() => handleSnackbar('Something went wrong', 'error'))
            setStates({...states, isLoading: false});
        })
        .catch(() => handleSnackbar('Cookie Error', 'error'))
    }

    const handleLogout = e => {
        e.preventDefault();
        setStates({...states, isLoading: true});

        Api.post('/logout')
            .then(()=>{
                setStates({...states, user: {}});
                history.push('login');
                handleSnackbar('Successfully Logged out', 'success');
                setStates({...states, isLoading: false});
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
            })
        })
        .catch(() => handleSnackbar('Something went wrong', 'error'))
           resetInputFieldsValue(inputFields);
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
                    history.push('login');
                    resetInputFieldsValue(inputFields);
                    handleSnackbar('Please check your email to activate your account', 'info');
                })
                .catch(() => handleSnackbar('Something went wrong', 'error'))
                setStates({...states, isLoading: false});
            })
    }

    const provider = {
        states,
        setStates,
        handleLogin,
        handleInputChange,
        updateInitialInputState,
        handleLogout,
        handleSendPasswordResetLink,
        handlePasswordReset,
        handleSnackbar,
        handleRegister
    }

    useEffect( () => {
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
