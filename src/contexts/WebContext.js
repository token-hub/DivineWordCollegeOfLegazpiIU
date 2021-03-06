import React, {createContext, useState} from 'react'
import {Api} from '../services';
import {newsAndEvents, announcements} from '../data/web';
import {initialStates} from './';
import {useSnackbarHandler} from '../hooks';
import {checkCookieIsExpired} from '../helpers';

const WebContext = createContext();

const WebProvider = ({children}) => {
    const handleSnackbar = useSnackbarHandler();
    const initialUpdateStates = {
        newsAndEvents,
        announcements,
        slides: {}
    };

    const [updates, setUpdates] = useState(initialUpdateStates);
    const [states, setStates] = useState(initialStates);
    const {inputFields} = states;

    const handleContactUsForm = e => {
        e.preventDefault();

        if (checkCookieIsExpired('XSRF-TOKEN')) {
            Api.get('/sanctum/csrf-cookie');
        }

        Api.post('/api/contactUs', inputFields)
            .then(handleSnackbar('Your message has been sent', 'success'))
            .catch(({response : {data: {message, errors}}}) => {
                handleSnackbar(message, 'error');
                setStates({...states, errors: errors});
            });
            
    }

    const getSlides = () => {
        return Api.get('/api/slides')
        .then(response => {
            setStates(prevState => ({
                ...prevState,
                slides: {...prevState.slides, all: response.data.data},
            }))
        })
    }

    const provider = {
        states,
        setStates,
        updates,
        setUpdates,
        handleContactUsForm,
        getSlides
    }
    
    return (
        <WebContext.Provider value={provider} >
            {children}
        </WebContext.Provider>
    )
}

export {WebProvider, WebContext} 
