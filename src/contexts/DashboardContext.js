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
 
    const updateInitialInputState = val => {
        Object.assign(inputInitialState, {[val]: ''});
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

    const provider = {
        handleLogin,
        user,
        loggedIn,
        handleInputChange,
        inputState,
        updateInitialInputState
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
