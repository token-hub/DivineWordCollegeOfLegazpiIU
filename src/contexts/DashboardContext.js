import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Api} from '../services';
import {setDataToStorage, getDataFromStorage} from '../helpers/dashboard';
import {initialStates} from './';

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
    const {userInitialState, inputInitialState, storageUserKey} = initialStates;
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(userInitialState);
    const [inputState, setinputState] = useState(inputInitialState);

    const history = useHistory();
 
    const updateInitialInputState = (key, value = '') => {
        Object.assign(inputInitialState, {[key]: value});
    }

    const handleInputChange = e => {
		const { name, value } = e.target;

		setinputState( prevState => ({
			...prevState,
			[name]: value
		}) )
	}

    const handleLogin = e => {
		e.preventDefault();
		Api.get('/sanctum/csrf-cookie')
        .then( () => {
            Api.post('/login', inputState)
            .then( () => {
				Api.get('/api/user')
				.then(response => {
					setDataToStorage(storageUserKey, response.data)
					setUser(getDataFromStorage(storageUserKey));
					history.push('home')
				})
        })
		.catch(e => console.log(e) )

		setLoggedIn(true);
	    })
    }

    const handleLogout = e => {
        e.preventDefault();

        Api.post('/logout')
        .then(()=>{
            history.push('login')
        })
    }

    const handleSendPasswordResetLink = e => {
        e.preventDefault();
        Api.get('/sanctum/csrf-cookie')
        .then( () => {
            Api.post('/password/email', inputState)
            .then(()=>{
                history.push('/dashboard/login');
            })
        })
    }

    const handlePasswordReset = e => {
        e.preventDefault();

        // Api.post('/password/reset', inputState)
        // .then(()=>{
        //     history.push('/dashboard/login');
        // })

        Api.get('/sanctum/csrf-cookie')
        .then( () => {
            Api.post('/password/reset', inputState)
            .then(()=>{
                history.push('/dashboard/login');
            })
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
        handlePasswordReset
    }

    useEffect( () => {
        setinputState({...inputInitialState});
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
