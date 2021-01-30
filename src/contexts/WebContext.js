import React, {createContext, useState} from 'react'
import {Api} from '../services';
import {newsAndEvents, announcements} from '../data/web';

const WebContext = createContext();

const WebProvider = ({children}) => {
    const initialUpdateStates = {
        newsAndEvents,
        announcements
    };
    const [updates, setUpdates] = useState(initialUpdateStates);

    const provider = {
        updates,
        setUpdates
    }
    
    return (
        <WebContext.Provider value={provider} >
            {children}
        </WebContext.Provider>
    )
}

export {WebProvider, WebContext} 
