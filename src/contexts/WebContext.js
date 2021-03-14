import React, {createContext, useState} from 'react'
import {Api} from '../services';
import {newsAndEvents, announcements} from '../data/web';
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

    const handleContactUsForm = async e => {
        e.preventDefault();

        if (checkCookieIsExpired('XSRF-TOKEN')) {
            Api.get('/sanctum/csrf-cookie');
        }

        try {
            await Api.post('/api/contactUs', inputFields)
            handleSnackbar('Your message has been sent', 'success')
        } catch (error) {
            const {response : {data: {message, errors}}} = error;
            handleSnackbar(message, 'error');
            setStates({...states, errors: errors});
        }
            // .then(handleSnackbar('Your message has been sent', 'success'))
            // .catch(({response : {data: {message, errors}}}) => {
            //     handleSnackbar(message, 'error');
            //     setStates({...states, errors: errors});
            // });
    }

    const getSlides = async () => {
        const response = await Api.get('/api/slides');
        setStates(prevState => ({
            ...prevState,
            slides: response.data.data,
        }))
    }

    const getUpdates = async (page = 1) => {
        const response = await Api.get(`/api/updates/paginated?page=${page}`);
        setStates(prevState => ({
            ...prevState,
            updates: {...prevState.updates, all: response.data},
        }));
    }

    const getAnnouncements = async (page = 1) => {
        const response = await Api.get(`/api/updates/announcements?page=${page}`);
        setStates(prevState => ({
            ...prevState,
            updates: {...prevState.updates, announcements: response.data},
        }));
    }

    const getNewsAndEvents = async (page = 1) => {
        const response = await Api.get(`/api/updates/newsAndEvents?page=${page}`)
        setStates(prevState => ({
            ...prevState,
            updates: {...prevState.updates, newsAndEvents: response.data},
        }));
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
