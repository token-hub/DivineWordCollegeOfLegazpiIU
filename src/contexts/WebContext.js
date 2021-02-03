import React, {createContext, useState} from 'react'
import {Api} from '../services';
import {newsAndEvents, announcements} from '../data/web';
import {initialStates} from './';
import {useSnackbarHandler} from '../hooks';

const WebContext = createContext();

const WebProvider = ({children}) => {
    const handleSnackbar = useSnackbarHandler();
    const initialUpdateStates = {
        newsAndEvents,
        announcements,
    };

    const [updates, setUpdates] = useState(initialUpdateStates);
    const [states, setStates] = useState(initialStates);
    const {inputFields} = states;

    const handleContactUsForm = e => {
        e.preventDefault();
        Api.post('/api/contactUs', inputFields)
            .then(handleSnackbar('Your message has been sent', 'success'))
            .catch(({response : {data: {message, errors}}}) => {
                handleSnackbar(message, 'error');
                setStates({...states, errors: errors});
            });
            
    }

    const provider = {
        states,
        setStates,
        updates,
        setUpdates,
        handleContactUsForm
    }
    
    return (
        <WebContext.Provider value={provider} >
            {children}
        </WebContext.Provider>
    )
}

export {WebProvider, WebContext} 
