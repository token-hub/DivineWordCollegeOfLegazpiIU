import React, {createContext, useState} from 'react'
import {Api} from '../services';
import {newsAndEvents, announcements} from '../data/web';
import {initialStates} from './';
import {useSnackbarHandler} from '../hooks';
import {checkCookieIsExpired} from '../helpers';
import {EditorState} from 'draft-js';

const WebContext = createContext();

const WebProvider = ({children}) => {
    const handleSnackbar = useSnackbarHandler();
    const initialUpdateStates = {
        updates: {
            all: {},
            announcements: {},
            newsAndEvents: {},
        },
        newsAndEvents,
        slides: {}
    };

    const [states, setStates] = useState(initialUpdateStates);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
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
                slides: response.data.data,
            }))
        })
    }

    const getUpdates = () => {
        return Api.get('/api/updates')
        .then(response => {
            setStates(prevState => ({
                ...prevState,
                updates: {...prevState.updates, all: response.data.data},
            }));
        })
    }

    const getAnnouncements = () => {
        return Api.get('/api/updates/announcements')
        .then(response => {
            setStates(prevState => ({
                ...prevState,
                updates: {...prevState.updates, announcements: response.data.data},
            }));
        })
    }

    const getNewsAndEvents = () => {
        return Api.get('/api/updates/newsAndEvents')
        .then(response => {

            setStates(prevState => ({
                ...prevState,
                updates: {...prevState.updates, newsAndEvents: response.data.data},
            }));
        })
    }

    const provider = {
        states,
        setStates,
        handleContactUsForm,
        getSlides,
        getUpdates,
        getAnnouncements,
        editorState,
        setEditorState,
        getNewsAndEvents
    }
    
    return (
        <WebContext.Provider value={provider} >
            {children}
        </WebContext.Provider>
    )
}

export {WebProvider, WebContext} 
