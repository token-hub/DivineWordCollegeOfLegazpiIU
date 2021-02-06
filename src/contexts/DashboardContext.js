import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Api} from '../services';
import {setDataToStorage, getDataFromStorage} from '../helpers/dashboard';
import {updateInitialInputState} from '../helpers';
import {useSnackbarHandler} from '../hooks';
import {initialStates} from './';

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {

    const handleSnackbar = useSnackbarHandler();
    const [states, setStates] = useState(initialStates);
    const {inputFields, storageUserKey} = states;
    const history = useHistory();
   
    const resetInputFieldsValue = (inputFields, resetErrors = false) => {
        const keys = Object.keys(inputFields);
        let emptyInputFields = {};
        keys.forEach(key => {
            emptyInputFields = {...emptyInputFields, [key]: ''} 
        });
        
        let errors = {}
        if (resetErrors) {
            errors = {errors: {}}
        }

        setStates({...states, inputFields: emptyInputFields, ...errors})
    }

    const resetErrorFields = () => {        
        setStates({...states, errors: {}})
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
        Api.get('/api/user')
        .then(response => {
            setDataToStorage(storageUserKey, response.data)
            setStates({...states, user: getDataFromStorage(storageUserKey), sample: {}});
            resetErrorFields();
        })
        .catch(({response : {data: {message}}}) => {
            handleSnackbar(message, 'error');
        });
    }


    const handleLogin = e => {
        e.preventDefault();
        setStates({...states, isLoading: true});
        
        Api.post('/login', inputFields)
        .then(({data : {message}}) => {

            if (message.includes('active')) {
                history.push('/dashboard/email/verification');
                handleSnackbar(message, 'info');
            } else {
                getUser();
                resetInputFieldsValue(inputFields, true);

                if (Object.keys(states.user).length > 0) {
                    setStates({...states, isLoggedIn: true});
                    history.push('/dashboard/home');
                    
                    setStates({...states}); 
                    handleSnackbar(message, 'success');
                }
            }
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            setStates({...states, errors: errors});
        });
        setStates({...states, isLoading: false});
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
    }

    const handlePasswordReset = e => {
        e.preventDefault();

        Api.post('/password/reset', inputFields)
        .then(()=>{
            history.push('/dashboard/login');
            handleSnackbar('Password successful changed', 'success');
        })

        resetInputFieldsValue(inputFields);  
    }

    const handleResendVerificationLink = e => {
        e.preventDefault();

        Api.post('/email/resend')
        .then(()=>{
            handleSnackbar('A fresh verification link has been sent to your email address.', 'success');
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            setStates({...states, errors: errors});
        });
    }
    
    const handleRegister = e => {
        e.preventDefault();
        setStates({...states, isLoading: true});
     
        Api.post('/register', inputFields)
        .then(() => {
            resetInputFieldsValue(inputFields, true);
            history.push('/dashboard/login');
            handleSnackbar('Please check your email to activate your account', 'info');
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            setStates({...states, errors: errors});
        });
        setStates({...states, isLoading: false});
    }
    
    const returnBackToDashboardProfile = (e, url, reset = false) => { 
        e.preventDefault();
        setStates({...states, isLoading: true});

        Api.put(`/api/${url}/${states.user.id}`, inputFields)
        .then(({data : {message}}) => {
            let msgType = 'success';

            if (reset) resetInputFieldsValue(inputFields);

            if (url.includes('profile')) {
                getUser();
                if(message.includes('Nothing')) msgType = 'info';
            }

            history.push('/dashboard/profile');
            handleSnackbar(message, msgType);
        })
        .catch(({response : {data: {message, errors}}}) => {
            handleSnackbar(message, 'error');
            setStates({...states, errors: errors});
        });
        setStates({...states, isLoading: false});
    }

    const getLogs = () => {
        Api.get('/api/logs')
        .then(response => setStates({...states, logs: response.data.data}));
    }

    const handleChangePassword = e => {
        returnBackToDashboardProfile(e, 'password/update', true);
    }
    
    const handleChangeProfileInfo = e => {
        returnBackToDashboardProfile(e, 'password/profile');
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
        handleRegister,
        handleChangeProfileInfo,
        handleResendVerificationLink,
        getLogs
    }

    useEffect(() => {
        Api.get('/sanctum/csrf-cookie');

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
