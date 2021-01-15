import React from 'react'
import {Base} from './';
import {Header} from '../../organisms/dashboard';
import {Sidebar} from '../../organisms/dashboard';

const BaseWithHeaderAndSidebar = ({ children }) => {
    return (
        <Base>
            <Header />
            <Sidebar />
            { children }
        </Base>
    )
}

export default BaseWithHeaderAndSidebar
